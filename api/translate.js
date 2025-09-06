const { YoutubeTranscript } = require('youtube-transcript');
const { GoogleGenerativeAI } = require('@google/generative-ai');

// This is the main function that will be executed
module.exports = async (req, res) => {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const { youtubeUrl, translationStyle, transliterationStyle, includeContext } = req.body;

        if (!youtubeUrl) {
            return res.status(400).json({ error: 'YouTube URL is required' });
        }

        // 1. Fetch the YouTube transcript
        let transcriptText;
        try {
            const transcript = await YoutubeTranscript.fetchTranscript(youtubeUrl);
            if (!transcript || transcript.length === 0) {
                throw new Error('No transcript found for this video.');
            }
            // Join all the transcript parts into a single block of text
            transcriptText = transcript.map(item => item.text).join(' ');
        } catch (error) {
            console.error('Transcript Error:', error);
            return res.status(400).json({ error: 'Could not fetch transcript. The video might not have captions enabled.' });
        }

        // 2. Prepare the AI request
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const contextInstruction = includeContext ? "Additionally, provide a detailed 'context' explaining the song's historical, cultural, and emotional significance." : "Do not provide cultural context.";

        // This is the prompt that tells the AI exactly what to do
        const prompt = `
            You are an expert in Hebrew music, culture, and linguistics. Your task is to analyze and translate Hebrew song lyrics.
            Please process the following lyrics and return a JSON object with the specified structure. Do NOT include any text or markdown formatting before or after the JSON object.

            **Input Lyrics:**
            "${transcriptText}"

            **Instructions:**
            1.  Identify the song's **title** and **artist** from the lyrics or common knowledge if possible.
            2.  Create a line-by-line translation into English. The style should be: **${translationStyle}**.
            3.  Create a line-by-line transliteration (Heblish pronunciation). The style should be: **${transliterationStyle}**.
            4.  The original Hebrew lyrics should be broken into an array of strings, one for each line.
            5.  The English translation and transliteration arrays must have the exact same number of lines as the Hebrew array.
            6.  ${contextInstruction}
            7.  Analyze the song and provide a 'theme' (e.g., Hope, Remembrance, Love), 'era' (e.g., 1990s, Modern, Biblical), 'emotion' (e.g., Melancholic, Hopeful, Joyful), and 'difficulty' for learners (e.g., Beginner, Intermediate, Advanced).

            **Output JSON Format:**
            {
              "title": "Song Title in English",
              "hebrewTitle": "כותרת השיר בעברית",
              "artist": "Artist Name",
              "hebrew": ["line 1 in Hebrew", "line 2 in Hebrew", ...],
              "english": ["line 1 in English", "line 2 in English", ...],
              "transliteration": ["line 1 transliterated", "line 2 transliterated", ...],
              "context": "Detailed cultural and historical significance of the song.",
              "theme": "Identified Theme",
              "era": "Identified Era",
              "emotion": "Identified Emotion",
              "difficulty": "Identified Difficulty"
            }
        `;

        // 3. Call the AI and get the result
        const result = await model.generateContent(prompt);
        const response = await result.response;
        let text = response.text();

        // Clean up the AI response to make sure it's valid JSON
        text = text.replace(/```json/g, '').replace(/```/g, '').trim();

        // 4. Send the structured data back to the front-end
        res.status(200).json(JSON.parse(text));

    } catch (error) {
        console.error('Server Error:', error);
        res.status(500).json({ error: 'An error occurred while processing the song.' });
    }
};