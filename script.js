// script.js

// =================================================================================
//  SONG DATABASE
//  This is where all the pre-translated song data is stored.
// =================================================================================
const songDatabase = [
    {
        id: 'shir-hareut',
        title: 'The Song of Friendship',
        hebrewTitle: 'שיר הרעות',
        artist: 'Lahakat HaNahal (Lyrics: Haim Gouri)',
        youtubeId: 'SjgXf7pE-oM',
        description: 'The foundational anthem of Israeli civil religion, expressing the profound loss and camaraderie of the 1948 War of Independence.',
        tags: ['Yom HaZikaron', 'Loss', 'Friendship', 'War of Independence'],
        lyrics: {
            hebrew: [
                'עַל הַנֶּגֶב יוֹרֵד לֵיל הַסְּתָו', 'וּמַצִּית כּוֹכָבִים חֶרֶשׁ חֶרֶשׁ', 'עֵת הָרוּחַ עוֹבֵר עַל הַסַּף', 'עֲנָנִים מְהַלְּכִים עַל הַדֶּרֶךְ.',
                "",
                'כְּבָר שָׁנָה, לֹא הִרְגַּשְׁנוּ כִּמְעַט', 'אֵיךְ עָבְרָה הַזְּמַן בִּשְׂדוֹתֵינוּ,', 'כְּבָר שָׁנָה וְנוֹתַרְנוּ מְעַט', 'מָה רַבִּים שֶׁאֵינָם כְּבָר בֵּינֵינוּ.',
                "",
                'אַךְ נִזְכֹּר אֶת כֻּלָּם', 'אֶת יְפֵי הַבְּלוֹרִית וְהַתֹּאַר', 'כִּי רֵעוּת שֶׁכָּזֹאת לְעוֹלָם', 'לֹא תִּתֵּן אֶת לִבֵּנוּ לִשְׁכֹּחַ', 'אַהֲבָה מְקֻדֶּשֶׁת בְּדָם', 'אַתְּ תָּשׁוּבִי בֵּינֵינוּ לִפְרֹחַ.',
                "",
                'הָרֵעוּת נְשָׂאנוּךְ בְּלִי מִלִּים', 'אֲפֹרָה, עַקְשָׁנִית וְשׁוֹתֶקֶת', 'מִלֵּילוֹת הָאֵימָה הַגְּדוֹלִים', 'אַתְּ נוֹתַרְתְּ בְּהִירָה וְדוֹלֶקֶת.',
                "",
                'הָרֵעוּת, כִּנְעָרַיִךְ כֻּלָּם', 'שוב הוֹלְכִים, לֹא נִשְׁכַּח, אֶת דְּמוּתֵךְ', 'וְנוֹלִיךְ אוֹתָךְ עַד הַתְּהוֹם', 'רַק לָלֶדֶת, לָלֶדֶת אוֹתָךְ!'
            ],
            english: [
                'Upon the Negev, the autumn night descends', 'And kindles the stars, silently, softly', 'As the wind passes over the threshold', 'Clouds are walking on the road.',
                "",
                'It\'s been a year, we almost didn\'t feel', 'How the time passed in our fields,', 'It\'s been a year, and we who remain are few', 'So many are no longer among us.',
                "",
                'But we will remember them all', 'The ones handsome of forelock and form', 'Because a fellowship such as this, forever', 'Will not let our hearts forget', 'A love consecrated in blood', 'You will return to bloom amongst us.',
                "",
                'The Fellowship, we carried you without words', 'Grey, stubborn, and silent', 'From the great nights of terror', 'You remained, bright and burning.',
                "",
                'The Fellowship, for all your youths', 'Go forth once more, we will not forget your image', 'And we will carry you to the abyss', 'Just to give birth, to give birth to you!'
            ],
            transliteration: [
                'Al ha-Negev yored leil ha-stav', 'U-matzit kochavim cheresh cheresh', 'Et ha-ruach over al ha-saf', 'Ananim mehalechim al ha-derech.',
                "",
                'Kvar shana, lo hirgashnu kim\'at', 'Eich avra ha-zman bi-sdoteinu,', 'Kvar shana ve-notarnu me\'at', 'Ma rabim she-einam kvar beineinu.',
                "",
                'Ach nizkor et kulam', 'Et yefei ha-blorit ve-ha-to\'ar', 'Ki re\'ut she-kazot le-olam', 'Lo titen et libenu lishko\'ach', 'Ahavah mekudeshet be-dam', 'At tashuvi beineinu lifro\'ach.',
                "",
                'Ha-re\'ut nesanuch beli milim', 'Aforah, akshanit ve-shoteket', 'Mi-leilot ha-eimah ha-gedolim', 'At notart behira ve-doleket.',
                "",
                'Ha-re\'ut, ki ne\'arayich kulam', 'Shuv holchim, lo nishkach, et demutech', 'Ve-nolich otach ad ha-tehom', 'Rak laledet, laledet otach!'
            ]
        },
        context: "Written by Palmach poet Haim Gouri in 1948, 'Shir HaRe'ut' elevates the bond between soldiers ('Re'ut' - a deep comradeship) to a sacred national value. It personifies this fellowship as a burning flame born from the terror of war, sanctifying the sacrifice of the fallen generation. It is a cornerstone of every Yom HaZikaron ceremony.",
        linguisticNotes: "The title word, 'Re'ut' (רֵעוּת), is far deeper than 'friendship.' It signifies a profound 'comradeship' or 'brotherhood-in-arms,' a bond forged under fire. The iconic phrase 'yefei ha'blorit ve'ha'to'ar' (יְפֵי הַבְּלוֹרִית וְהַתֹּאַר) literally means 'the handsome of forelock and form,' but it is a poetic epitaph for the idealized image of the Palmach generation: youthful, vital, and beautiful, tragically cut down in their prime.",
        analysis: { theme: 'Friendship & Remembrance', era: '1940s', emotion: 'Solemn, Nostalgic', difficulty: 'Advanced' }
    },
    {
        id: 'bab-el-wad',
        title: 'The Gate of the Valley',
        hebrewTitle: 'באב אל וואד',
        artist: 'Yafa Yarkoni (Lyrics: Haim Gouri)',
        youtubeId: '3LwT2JgVjeo',
        description: 'Immortalizes the bloody 1948 battles to break the siege of Jerusalem, embedding the memory of the fallen into the landscape itself.',
        tags: ['Yom HaZikaron', 'War of Independence', 'Jerusalem', 'Memory'],
        lyrics: {
            hebrew: [
                'פֹּה אֲנִי עוֹבֵר, נִצָּב לְיַד הָאֶבֶן.', 'כְּבִישׁ חָרֵב, שָׁקוּעַ בַּשְּׁקִיעָה.', 'עֶרֶב רַד, יוֹרֵד, קָרֵב, נוֹשֵׁב בָּעֵצֶב,', 'רוּחַ-יָם מַלְחִית וְקַרְקִיעָה.',
                "",
                'דּוּם שָׁרוּעַ שֶׁלֶד הַבַּרְזֶל, כְּמוֹ רֵעִי,', 'שֶׁנִּשְׁאַר בִּקְצֵה הַדֶּרֶךְ וְנָדַם.', 'בָּאב אֶל-וָאד, לָנֶצַח זְכֹר נָא אֶת שְׁמוֹתֵינוּ,', 'כְּשֶׁהַשַּׁיָּרוֹת פָּרְצוּ בַּדֶּרֶךְ אֶל הָעִיר.',
                "",
                'פֹּה רָתְחוּ בַּשֶּׁמֶשׁ זֶפֶת וְעוֹפֶרֶת,', 'פֹּה עָבְרוּ לֵילוֹת בְּאֵשׁ וְסַכִּינִים.', 'פֹּה שׁוֹכְנִים בְּיַחַד עֶצֶב וְתִפְאֶרֶת,', 'מְשֻׁרְיָן חָרוּךְ וְשֵׁם שֶׁל אַלְמוֹנִי.',
                "",
                'וַאֲנִי הוֹלֵךְ, עוֹבֵר כָּאן חֶרֶשׁ-חֶרֶשׁ,', 'וַאֲנִי זוֹכֵר אוֹתָם, אֶחָד אֶחָד.', 'כָּאן לָחַמְנוּ יַחַד עַל צוּקִים וָטֶרֶשׁ,', 'כָּאן הָיִינוּ יַחַד מִשְׁפָּחָה אַחַת.',
                "",
                'יוֹם אָבִיב יָבוֹא וְרַקְפוֹת תִּפְרַחְנָה,', 'אֹדֶם כָּל הָהָר וְדֶמַע הָעֵינַיִם.', 'וְזֶה אֲשֶׁר יֵלֵךְ בַּדֶּרֶךְ שֶׁהָלַכְנוּ,', 'לֹא יִשְׁכַּח אוֹתָנוּ, אֶת בָּאב אֶל-וָאד.'
            ],
            english: [
                'Here I pass, standing beside the stone.', 'A ruined road, sunken in the sunset\'s glow.', 'Evening has fallen, descends, draws near, blowing in sorrow,', 'A salty sea-breeze and the ground below.',
                "",
                'The iron skeleton lies silent, like my friend,', 'Who was left at the road\'s end and fell silent.', 'Bab el-Wad, forever, please, remember our names,', 'As the convoys broke through on the road to the city.',
                "",
                'Here tar and lead boiled beneath the sun,', 'Here nights passed in fire and with knives.', 'Here dwell together sorrow and glory,', 'A scorched armored car and the name of an unknown one.',
                "",
                'And I walk on, passing here in deep silence,', 'And I remember them, one by one.', 'Here we fought together on cliffs and stony ground,', 'Here we were together, one family.',
                "",
                'A spring day will come and cyclamens will bloom,', 'Redness on all the mountain and a tear in the eye.', 'And he who will walk on the road we walked,', 'Will not forget us, the men of Bab el-Wad.'
            ],
            transliteration: [
                'Po ani over, nitzav le-yad ha-even.', 'Kvish charev, shaku\'a ba-shki\'ah.', 'Erev rad, yored, karev, noshev ba-etzev,', 'Ruach-yam malchit ve-karki\'ah.',
                "",
                'Dum saru\'a sheled ha-barzel, kmo re\'i,', 'She-nish\'ar bi-ktzeh ha-derech ve-nadam.', 'Bab el-Wad, la-netzach zechor na et shmoteinu,', 'Ke-she-ha-shayarot partzu ba-derech el ha-ir.',
                "",
                'Po ratchu ba-shemesh zefet ve-oferet,', 'Po avru leilot be-esh ve-sakinim.', 'Po shochnim be-yachad etzev ve-tif\'eret,', 'Meshuryan charuch ve-shem shel almoni.',
                "",
                'Va-ani holech, over kan cheresh-cheresh,', 'Va-ani zocher otam, echad echad.', 'Kan lachamnu yachad al tzukim va-teresh,', 'Kan hayinu yachad mishpacha achat.',
                "",
                'Yom aviv yavo ve-rakfot tifrachna,', 'Odem kol ha-har ve-dema ha-einayim.', 'Ve-zeh asher yelech ba-derech she-halachnu,', 'Lo yishkach otanu, et Bab el-Wad.'
            ]
        },
        context: "Penned by Haim Gouri, this song transforms a specific location—the gorge leading to Jerusalem—into a national memorial. It personifies the valley, asking it to remember the names of those who fell breaking the siege. The 'iron skeletons' of the destroyed armored cars lined the road for decades, making this song a living testament to the price paid for the city.",
        linguisticNotes: "The title 'Bab el-Wad' is the Arabic name for the location, meaning 'Gate of the Valley'. Gouri's choice to use the Arabic name, rather than the Hebrew 'Sha'ar HaGai', preserves the authentic name used by the soldiers of 1948. The phrase 'sheled ha-barzel' (שֶׁלֶד הַבַּרְזֶל), 'the iron skeleton,' is a powerful image referring to the rusted, destroyed armored vehicles left by the roadside as a memorial.",
        analysis: { theme: 'Sacrifice & Memory', era: '1940s', emotion: 'Commemorative, Solemn', difficulty: 'Advanced' }
    },
    {
        id: 'magash-hakesef',
        title: 'The Silver Platter',
        hebrewTitle: 'מגש הכסף',
        artist: 'Yehoram Gaon (Poem: Natan Alterman)',
        youtubeId: 'h8s6A4h-0-s',
        description: 'A prophetic poem-turned-song defining the sacrifice of the 1948 generation as the "platter" on which the state was delivered.',
        tags: ['Yom HaZikaron', 'Sacrifice', 'Statehood', 'War of Independence'],
        lyrics: {
            hebrew: [
                'וְהָאָרֶץ תִּשְׁקֹט, עֵין שָׁמַיִם קוֹדֶרֶת', 'תַּעֲטֶה עֲרָפֶל, עֲשַׁן אֲדָמָה,', 'כִּי אֻמָּה קְרוּעַת לֵב, אַךְ נוֹשֶׁמֶת, תִּקְרַב', 'לְקַבֵּל אֶת הַנֵּס הָאֶחָד, הֶעָתִיד.',
                "",
                'אָז תֵּצֵא, נְכוֹנָה לַמִּפְגָּשׁ, וְחוֹגֶרֶת', 'כָּל חוֹלְיָה בַּגּוּף, כָּל שָׁרִיר, כָּל עַצְמָה,', 'וְתַעֲמֹד נִפְעֶמֶת, נוֹטֶפֶת טַל-חֹפֶשׁ,', 'לִקְרַאת הַפְּלִיאָה, חֲמוּשָׁה, עֲצוּבָה.',
                "",
                'אָז מִנֶּגֶד יֵצְאוּ נַעַר וְנַעֲרָה', 'וְיִצְעֲדוּ הָלְאָה לְאַט.', 'וּבְגָדִים שֶׁל חֹל הֵם יִלְבְּשׁוּ, וְחָגוֹר, וְכֹבַד נַעֲלַיִם,', 'וְיַעַמְדוּ עַד בְּלִי נוֹעַ.',
                "",
                'וְאָמְרוּ: אֲנַחְנוּ מַגַּשׁ הַכֶּסֶף', 'שֶׁעָלָיו לָךְ נִתְּנָה מְדִינַת הַיְּהוּדִים.', 'אָז יִפְּלוּ לְרַגְלָהּ, עֲטוּפֵי צֵל.', 'וְהַשְּׁאָר יְסֻפַּר בְּתוֹלְדוֹת יִשְׂרָאֵל.'
            ],
            english: [
                'And the land will grow still, the eye of the sky turns grim', 'Cloaked in mist, the smoke of the earth', 'For a nation, heart-torn but breathing, will approach', 'To receive the one, the future miracle.',
                "",
                'Then she will emerge, ready for the meeting, girded', 'Every vertebra in body, every muscle, every bone,', 'And will stand enthralled, dripping with the dew of freedom,', 'Toward the wonder, armed and sad.',
                "",
                'Then from across, a boy and a girl will step forth', 'And they will walk forward slowly.', 'And they will wear workday clothes, a belt, and heavy shoes,', 'And they will stand utterly still.',
                "",
                'And they will say: We are the silver platter', 'Upon which the state of the Jews was given to you.', 'Then they will fall at her feet, shrouded in shadow.', 'And the rest will be told in the chronicles of Israel.'
            ],
            transliteration: [
                'Ve-ha\'aretz tishkot, ein shamayim koderet', 'Ta\'ateh arafel, ashan adamah,', 'Ki umah kru\'at lev, ach noshemet, tikrav', 'Le-kabel et ha-nes ha-echad, he-atid.',
                "",
                'Az tetze, nechona la-mifgash, ve-chogeret', 'Kol chulyah ba-guf, kol sharir, kol atzmah,', 'Ve-ta\'amod nif\'emet, notefet tal-chofesh,', 'Likrat ha-pli\'ah, chamushah, atzuvah.',
                "",
                'Az mi-neged yetz\'u na\'ar ve-na\'arah', 'Ve-yitz\'adu hal\'ah le\'at.', 'U-vgadim shel chol hem yilbeshu, ve-chagor, ve-choved na\'alayim,', 'Ve-ya\'amdu ad bli no\'a.',
                "",
                'Ve-amru: Anachnu magash ha-kesef', 'She-alav lach nitnah medinat ha-yehudim.', 'Az yiplu le-raglah, atufei tzel.', 'Ve-ha-she\'ar yesupar be-toldot Yisrael.'
            ]
        },
        context: "Written by Natan Alterman in 1947 as a direct response to Chaim Weizmann's remark that a state is not given on a 'silver platter.' Alterman's poem posits that the state *was* delivered on such a platter: the young men and women who gave their lives. It is a canonical text recited at nearly every official Yom HaZikaron ceremony, defining the day as an acknowledgment of a sacred debt.",
        linguisticNotes: "The poem is written in a high, almost biblical register of Hebrew. The personification of the 'Umah' (אֻמָּה - Nation) as a 'heart-torn but breathing' mother figure is a central device. The final, iconic line frames this sacrificial moment as the genesis of the new 'Chronicles of Israel,' akin to the closing of a biblical book.",
        analysis: { theme: 'National Sacrifice', era: '1940s', emotion: 'Mythic, Solemn', difficulty: 'Advanced' }
    },
    {
        id: 'halikha-lekesariya',
        title: 'A Walk to Caesarea (My God, My God)',
        hebrewTitle: 'הליכה לקיסריה (אלי, אלי)',
        artist: 'Ofra Haza (Poem: Hannah Szenes)',
        youtubeId: 'QTQdu1j_y5g',
        description: 'A life-affirming poem by Hannah Szenes, made tragic and powerful by her ultimate sacrifice as a paratrooper in WWII.',
        tags: ['Yom HaShoah', 'Faith', 'Hope', 'Sacrifice', 'Poetry'],
        lyrics: {
            hebrew: [ 'אֵלִי, אֵלִי,', 'שֶׁלֹּא יִגָּמֵר לְעוֹלָם', 'הַחוֹל וְהַיָּם,', 'רִשְׁרוּשׁ שֶׁל הַמַּיִם,', 'בְּרַק הַשָּׁמַיִם,', 'תְּפִלַּת הָאָדָם.' ],
            english: [ 'My God, my God,', 'May it never end –', 'The sand and the sea,', 'The rush of the waters,', 'The crash of the heavens,', 'The prayer of man.' ],
            transliteration: [ 'Eli, Eli,', 'She-lo yigamer le-olam', 'Ha-chol ve-ha-yam,', 'Rishrush shel ha-mayim,', 'Berak ha-shamayim,', 'Tefilat ha-adam.' ]
        },
        context: "This poem by Hannah Szenes has become a sacred text of Yom HaShoah. Written in the beauty of Caesarea in 1942, its simple prayer for the permanence of nature is transformed by Szenes's biography. She volunteered to parachute into occupied Europe, was captured, tortured, and executed. The song represents the life she willingly sacrificed and the Zionist ideal of rebirth in the face of destruction.",
        linguisticNotes: "The poem's canonical text uses 'Tefilat Ha'Adam' (תְּפִלַּת הָאָדָם), 'The Prayer of Man'. However, an earlier manuscript version concludes with 'Ha'Emun Ba'Adam' (הָאֱמוּן בָּאָדָם), 'Faith in Man'. The opening, 'Eli, Eli' ('My God, My God'), echoes the opening of Psalm 22, a cry of anguish that ultimately resolves into faith.",
        analysis: { theme: 'Endurance & Hope', era: '1940s', emotion: 'Wistful, Hopeful', difficulty: 'Beginner' }
    },
    {
        id: 'katuv-beiparon-bakaron-hechatum',
        title: 'Written in Pencil in the Sealed Railway Car',
        hebrewTitle: 'כתוב בעיפרון בקרון החתום',
        artist: 'HaMadregot (Poem: Dan Pagis)',
        youtubeId: 'jm-J95p_6-I',
        description: 'A short, devastating poem by Holocaust survivor Dan Pagis that reframes the Shoah as a primordial, biblical tragedy.',
        tags: ['Yom HaShoah', 'Holocaust', 'Poetry', 'Theology'],
        lyrics: {
            hebrew: [ 'כָּאן בַּמִּשְׁלוֹחַ הַזֶּה', 'אֲנִי חַוָּה', 'עִם הֶבֶל בְּנִי', 'אִם תִּרְאוּ אֶת בְּנִי הַגָּדוֹל', 'קַיִן בֶּן אָדָם', 'תַּגִּידוּ לוֹ שֶׁאֲנִי' ],
            english: [ 'here in this transport', 'i am eve', 'with abel my son', 'if you see my other son', 'cain son of man', 'tell him that i' ],
            transliteration: [ 'Kan ba-mishlo\'ach ha-zeh', 'ani Chavah', 'im Hevel b\'ni', 'im tir\'u et b\'ni ha-gadol', 'Kayin ben adam', 'tagidu lo she-ani' ]
        },
        context: "Dan Pagis's poem recasts the Holocaust through biblical archetypes. The speaker is Eve, trapped in a cattle car with her murdered son Abel, sending a message to her other son, the murderer Cain ('son of man' or 'human being'). It transforms a specific historical event into a timeless act of fratricide at the heart of the human story. The poem is inscribed at Yad Vashem.",
        linguisticNotes: "The title contrasts the ephemeral 'iparon' (pencil) with the finality of the 'karon chatum' (sealed railway car). The phrase 'Kayin ben adam' (קַיִן בֶּן אָדָם) is a profound double entendre. It means 'Cain, son of Adam,' but 'ben adam' is also the common Hebrew term for 'a human being,' thus implicating all of humanity in the crime.",
        analysis: { theme: 'Testimony & Trauma', era: '1970s', emotion: 'Haunting, Fragile', difficulty: 'Advanced' }
    },
    {
        id: 'givat-hatachmoshet',
        title: 'Ammunition Hill',
        hebrewTitle: 'גבעת התחמושת',
        artist: 'The Central Command Trio (Lyrics: Yoram Taharlev)',
        youtubeId: 'R4p441s8_80',
        description: 'A raw, documentary-style account of one of the fiercest battles of the 1967 Six-Day War for the reunification of Jerusalem.',
        tags: ['Yom HaZikaron', 'Six-Day War', 'Jerusalem', 'Heroism', 'Battle'],
        lyrics: {
            hebrew: [
                'בִּשְׁתַּיִם, שְׁתַּיִם וּשְׁלוֹשִׁים הִתְחַלְנוּ לִזְחֹל,', 'מִבֵּית הַסֵּפֶר לִשּׁוֹטְרִים, לְעֵבֶר הַגְּדֵרוֹת,', 'וְאִיצִיק מִמּוּל עָנָה לִי בְּקוֹל:', '״עֲבֹר דּוּמִיָּה, עוֹד מְעַט זֶה מַתְחִיל.״',
                "",
                'בְּשָׁלוֹשׁ וָעֶשֶׂר דָּקוֹת כְּבָר הָיִינוּ בִּפְנִים,', 'עִם כַּמָּה פְּצוּעִים שֶׁצָּרְחוּ בַּחֲשֵׁכָה:', '״פְּלֻגָּה א\', קָדִימָה!״ וְרַצְנוּ אֲבוּדֵי-חוּשִׁים,', 'אֶל תוֹךְ הַתְּעָלָה הָרִאשׁוֹנָה.',
                "",
                'אֲנִי לֹא זוֹכֵר בְּדִיּוּק אֵיךְ הִגַּעְנוּ לַיַּעַד,', 'שֶׁנִּקְרָא בְּשֵׁם הַקּוֹד ״הַבּוּנְקֶר הַגָּדוֹל״,', 'שָׁם עָבַד הָעוּזִי בְּקֶצֶב אֶחָד,', 'וְעָלֵינוּ לְמַעְלָה.',
                "",
                'זֶה הָיָה קְצָת קָשֶׁה, זֶה הָיָה קְצָת אָרֹךְ,', 'כִּי שָׁם חָטַפְנוּ אֶת הָאֵשׁ הֲכִי גְּדוֹלָה,', 'אֲבָל בְּשֵׁשׁ וּרְבִיעַ כְּבָר הָיָה שָׁם שָׁקֵט,', 'וְהַגִּבְעָה כֻּלָּהּ הָיְתָה שֶׁלָּנוּ.'
            ],
            english: [
                'At two, two thirty, we started to crawl,', 'From the Police Academy, towards the fences tall,', 'And Itzik across from me answered my call:', '\'Go silent, it\'s about to begin.\'',
                "",
                'At ten past three, we were already inside,', 'With a few wounded who screamed in the darkness\'s tide:', '\'Company A, forward!\' and we ran bereft of senses,', 'Into the first trench.',
                "",
                'I don\'t remember exactly how we reached the target,', 'The one codenamed \'The Great Bunker\',', 'There the Uzi worked at a steady pace,', 'And we ascended upwards.',
                "",
                'It was a bit hard, it was a bit long,', 'Because there we took the heaviest fire,', 'But by a quarter past six, all was quiet there,', 'And the whole hill was ours.'
            ],
            transliteration: [
                'Bi-shtayim, shtayim u-shloshim hitchalnu lizchol,', 'Mi-beit ha-sefer le-shotrim, le-ever ha-gederot,', 'Ve-Itzik mi-mul anah li be-kol:', '\'Avor dumiyah, od me\'at zeh matchil.\'',
                "",
                'Be-shalosh va-eser dakot kvar hayinu bifnim,', 'Im kamah p\'tzuim she-tzarchu ba-chashechah:', '\'Pluga aleph, kadima!\' ve-ratznu avudei-chushim,', 'El toch ha-te\'alah ha-rishonah.',
                "",
                'Ani lo zocher be-diyuk eich higanu la-ya\'ad,', 'She-nikra be-shem ha-kod \'ha-bunker ha-gadol\',', 'Sham avad ha-Uzi be-ketzev echad,', 'Ve-alinu le-ma\'alah.',
                "",
                'Zeh hayah ktzat kasheh, zeh hayah ktzat aroch,', 'Ki sham chatafnu et ha-esh hachi gedolah,', 'Aval be-shesh u-revi\'a kvar hayah sham shaket,', 'Ve-ha-giv\'ah kulah haytah shelanu.'
            ]
        },
        context: "Based on actual testimonies of the soldiers who fought there, this song marked a shift in Israeli war songs. It moves away from poetic allegory to a gritty, journalistic style, capturing the chaos and grim reality of close-quarters combat. It honors the heroism of 1967 while acknowledging its brutal, human cost.",
        linguisticNotes: "The song's language is direct, almost reportage, using simple phrasing like 'Bi-shtayim, shtayim u-shloshim' ('At two, two thirty') to create immediacy. The phrase 'ratznu avudei-chushim' (רַצְנוּ אֲבוּדֵי חוּשִׁים - 'we ran bereft of senses') powerfully conveys the adrenaline and terror of the charge.",
        analysis: { theme: 'Battle & Heroism', era: '1960s', emotion: 'Gritty, Intense', difficulty: 'Intermediate' }
    },
    {
        id: 'choref-shivim-ve-shalosh',
        title: 'Winter of \'73',
        hebrewTitle: 'חורף 73\'',
        artist: 'Lahakat Chinuch Meyuchad',
        youtubeId: '-T43kG2-2vI',
        description: 'A powerful dialogue between the children born after the Yom Kippur War and their parents\' generation, questioning the unfulfilled promise of peace.',
        tags: ['Yom Kippur War', 'Peace', 'Generations', 'Yom HaZikaron', 'Promise'],
        lyrics: {
            hebrew: [
                'אֲנַחְנוּ הַיְּלָדִים שֶׁל חֹרֶף שִׁבְעִים וְשָׁלוֹשׁ', 'שֶׁנּוֹלַדְנוּ לְתוֹךְ מְדִינָה פְּצוּעָה וַעֲצוּבָה.', 'גָּדַלְנוּ, וְהִנֵּה אֲנַחְנוּ חַיָּלִים,', 'מַבִּיטִים בָּכֶם, אָבוֹת עֲיֵפִים מִקְּרָבוֹת.',
                "",
                'הִבְטַחְתֶּם יוֹנָה, עֲלֵה זַיִת,', 'הִבְטַחְתֶּם שָׁלוֹם בַּבַּיִת.', 'הִבְטַחְתֶּם אָבִיב וּפְרִיחָה,', 'וְהַרְבֵּה הַבְטָחוֹת אֲחֵרוֹת שֶׁכְּבָר אֵין לָהֶן עֵרֶךְ.',
                "",
                'אֲנַחְנוּ הַיְּלָדִים שֶׁל חֹרֶף שִׁבְעִים וְשָׁלוֹשׁ', 'כְּבָר כִּמְעַט בְּנֵי עֶשְׂרִים, וְיֵשׁ לָנוּ כְּבָר חֲלוֹמוֹת,', 'וְאוּלַי גַּם נַצְלִיחַ לְהַגְשִׁים,', 'אִם רַק תַּפְסִיקוּ לְהִלָּחֵם בְּמִלְחָמוֹת שֶׁל אֶתְמוֹל.'
            ],
            english: [
                'We are the children of the winter of seventy-three', 'Who were born into a wounded and sad country.', 'We have grown, and here we are, soldiers,', 'Looking at you, fathers weary from battles.',
                "",
                'You promised a dove, an olive branch,', 'You promised peace at home.', 'You promised spring and blossoming,', 'And many other promises that no longer have value.',
                "",
                'We, the children of the winter of seventy-three,', 'Are now almost twenty, and we already have dreams,', 'And maybe we will even succeed in fulfilling them,', 'If only you stop fighting yesterday\'s wars.'
            ],
            transliteration: [
                'Anachnu ha-yeladim shel choref shiv\'im ve-shalosh', 'She-noladnu le-toch medinah p\'tzuah va-atzuvah.', 'Gadalnu, ve-hineh anachnu chayalim,', 'Mabitim bachem, avot ayefim mi-kravot.',
                "",
                'Hivtachtem yonah, aleh zayit,', 'Hivtachtem shalom ba-bayit.', 'Hivtachtem aviv u-frichah,', 'Ve-harbeh havtachot acherot she-kvar ein lahen erech.',
                "",
                'Anachnu ha-yeladim shel choref shiv\'im ve-shalosh', 'Kvar kim\'at bnei esrim, ve-yesh lanu kvar chalomot,', 'Ve-ulai gam natzliach le-hagshim,', 'Im rak tafsiku le-hilachem be-milchamot shel etmol.'
            ]
        },
        context: "Released in 1994, this song captures the lingering trauma of the 1973 war through a generational lens. The children, now soldiers themselves, hold their parents accountable for the promise that theirs would be the last generation to fight. It marks a shift from collective mourning to a more complex, questioning dialogue about the cost of war and the responsibility for peace.",
        linguisticNotes: "The central motif is the repeated phrase 'Hivtachtem yonah' (הִבְטַחְתֶּם יוֹנָה), meaning 'You promised a dove.' The dove, a universal symbol of peace with deep biblical roots, becomes a powerful indictment of a promise unfulfilled. The song's structure creates a stark contrast between the past ('you promised') and the present ('we are soldiers').",
        analysis: { theme: 'Generational Dialogue', era: '1990s', emotion: 'Poignant, Questioning', difficulty: 'Intermediate' }
    },
    {
        id: 'ma-avarech',
        title: 'With What Shall I Bless Him?',
        hebrewTitle: 'מה אברך',
        artist: 'Rivka Zohar (Lyrics: Rachel Shapira)',
        youtubeId: 'a265GIyYy-Y',
        description: 'A haunting ballad that personalizes collective grief by telling the story of an angel blessing a boy at each stage of life, only to fall silent when he becomes a man destined for war.',
        tags: ['Yom HaZikaron', 'Personal Grief', 'Six-Day War', 'Loss', 'Youth'],
        lyrics: {
            hebrew: [
                'מַה אֲבָרֵךְ לוֹ, בַּמֶּה יְבֹרַךְ?', 'זֶה הַיֶּלֶד? – שָׁאַל הַמַּלְאָךְ.', 'וְהֵשִׁיב בִּדְמָעָה: אֲבָרְכֶנּוּ בְּחֹסֶן,', 'שֶׁיִּהְיֶה כְּמוֹ אֶרֶז רַךְ.',
                "",
                'מַה אֲבָרֵךְ לוֹ, בַּמֶּה יְבֹרַךְ?', 'זֶה הַנַּעַר? – שָׁאַל הַמַּלְאָךְ.', 'וְעָנָה בִּשְׂחוֹק גָּדוֹל: שֶׁיֵּדַע אֶת הָאֹשֶׁר,', 'שֶׁיִּשְׁאַף אֶל עָב וָאֹפֶק.',
                "",
                'מַה אֲבָרֵךְ לוֹ, בַּמֶּה יְבֹרַךְ?', 'זֶה הָעֶלֶם? – שָׁאַל הַמַּלְאָךְ.', 'וְעָנָה: שֶׁיִּלְמַד אֶת כֹּחָהּ שֶׁל הַפְּלָדָה,', 'וְאֶת מַסַּע הַדְּרָכִים, וְלֹא יִירָא דָּבָר.',
                "",
                'וְהַנַּעַר, הַיֶּלֶד, הָעֶלֶם הָיָה לְאִישׁ,', 'וְהַמַּלְאָךְ הִבִּיט בּוֹ וְשָׁתַק.', 'וְאָז בָּכָה הַמַּלְאָךְ בְּסֵתֶר,', 'וְלֹא בֵּרֵךְ עוֹד.'
            ],
            english: [
                'With what shall I bless him, with what shall he be blessed?', 'This child? – asked the angel.', 'And answered with a tear: I will bless him with strength,', 'That he may be like a tender cedar.',
                "",
                'With what shall I bless him, with what shall he be blessed?', 'This lad? – asked the angel.', 'And answered with a great laugh: That he may know happiness,', 'That he may aspire to the clouds and the horizon.',
                "",
                'With what shall I bless him, with what shall he be blessed?', 'This young man? – asked the angel.', 'And answered: That he may learn the power of steel,', 'And the march of the roads, and that he fear nothing.',
                "",
                'And the lad, the child, the young man became a man,', 'And the angel looked upon him and was silent.', 'And then the angel wept in secret,', 'And blessed no more.'
            ],
            transliteration: [
                'Ma avarech lo, ba-meh yevorach?', 'Zeh ha-yeled? – sha\'al ha-mal\'ach.', 'Ve-heshiv bi-dma\'ah: Avrachenu be-chosen,', 'She-yihiyeh kmo erez rach.',
                "",
                'Ma avarech lo, ba-meh yevorach?', 'Zeh ha-na\'ar? – sha\'al ha-mal\'ach.', 'Ve-anah bi-schok gadol: She-yeda et ha-osher,', 'She-yish\'af el av va-ofek.',
                "",
                'Ma avarech lo, ba-meh yevorach?', 'Zeh ha-elem? – sha\'al ha-mal\'ach.', 'Ve-anah: She-yilmad et kochah shel ha-pladah,', 'Ve-et masa ha-drachim, ve-lo yira davar.',
                "",
                'Ve-ha-na\'ar, ha-yeled, ha-elem hayah le-ish,', 'Ve-ha-mal\'ach hibit bo ve-shatak.', 'Ve-az bacha ha-mal\'ach be-seter,', 'Ve-lo berech od.'
            ]
        },
        context: "Poet Rachel Shapira wrote the lyrics in memory of her classmate Eldad Kruk, who was killed in the Six-Day War. The song powerfully captures the tragedy of unrealized potential by following the blessings given to a boy throughout his life, which cease when he becomes a man and a soldier. It makes the abstract cost of war deeply personal.",
        linguisticNotes: "The song's structure is a litany of blessings, with the angel's question 'Ma avarech lo?' ('With what shall I bless him?') repeated for each stage of life. There is a deeply tragic irony as the angel's blessings pivot from idyllic wishes to the harsh necessities of a soldier, marking the moment a vibrant life is rerouted towards war.",
        analysis: { theme: 'Personal Grief', era: '1960s', emotion: 'Mournful, Tender', difficulty: 'Intermediate' }
    },
    {
        id: 'lu-yehi',
        title: 'May It Be',
        hebrewTitle: 'לו יהי',
        artist: 'Chava Alberstein (Lyrics: Naomi Shemer)',
        youtubeId: 'PhO8a_j-22E',
        description: 'The defining anthem of the Yom Kippur War, written by Naomi Shemer as an urgent, collective prayer for hope and the safe return of soldiers.',
        tags: ['Yom Kippur War', 'Prayer', 'Hope', 'Peace'],
        lyrics: {
            hebrew: [
                'עוֹד יֵשׁ מִפְרָשׂ לָבָן בָּאֹפֶק', 'מוּל עָנָן שָׁחֹר כָּבֵד,', 'כָּל שֶׁנְּבַקֵּשׁ – לוּ יְהִי.',
                "",
                'וְאִם בַּחַלּוֹנוֹת הָעֶרֶב', 'אוֹר נֵרוֹת הַחַג רוֹעֵד –', 'כָּל שֶׁנְּבַקֵּשׁ לוּ יְהִי.',
                "",
                'לוּ יְהִי, לוּ יְהִי, אָנָּא לוּ יְהִי –', 'כָּל שֶׁנְּבַקֵּשׁ לוּ יְהִי.',
                "",
                'מָה קוֹל עֲנוֹת אֲנִי שׁוֹמֵעַ,', 'קוֹל שׁוֹפָר וְקוֹל תֻּפִּים?', 'כָּל שֶׁנְּבַקֵּשׁ לוּ יְהִי.',
                "",
                'לוּ תִּשָּׁמַע בְּתוֹךְ כָּל אֵלֶּה', 'גַּם תְּפִלָּה אַחַת מִפִּי,', 'כָּל שֶׁנְּבַקֵּשׁ לוּ יְהִי.',
                "",
                'בְּסוֹף הַקַּיִץ שֶׁלָּנוּ', 'תְּנוּ לָנוּ לַחֲזֹר הַבַּיְתָה.', 'כָּל שֶׁנְּבַקֵּשׁ לוּ יְהִי.',
                "",
                'וְאִם פִּתְאוֹם יִזְרַח מֵאֹפֶל', 'עַל רֹאשֵׁנוּ אוֹר כּוֹכָב,', 'כָּל שֶׁנְּבַקֵּשׁ לוּ יְהִי.'
            ],
            english: [
                'There is still a white sail on the horizon', 'Against a heavy black cloud,', 'All that we ask for – may it be.',
                "",
                'And if in the evening windows', 'The light of holiday candles flickers –', 'All that we ask for, may it be.',
                "",
                'May it be, may it be, please, may it be –', 'All that we ask for, may it be.',
                "",
                'What is this sound of affliction I hear,', 'The sound of a shofar and the sound of drums?', 'All that we ask for, may it be.',
                "",
                'If only, amidst all of these sounds,', 'One prayer from my lips could also be heard,', 'All that we ask for, may it be.',
                "",
                'At the end of our summer', 'Let us return home.', 'All that we ask for, may it be.',
                "",
                'And if suddenly from the darkness a light will shine', 'Upon our heads, the light of a star,', 'All that we ask for, may it be.'
            ],
            transliteration: [
                'Od yesh mifras lavan ba-ofek', 'Mul anan shachor kaved,', 'Kol she-nevakesh – lu yehi.',
                "",
                'Ve-im ba-chalonot ha-erev', 'Or nerot ha-chag ro\'ed –', 'Kol she-nevakesh lu yehi.',
                "",
                'Lu yehi, lu yehi, ana lu yehi –', 'Kol she-nevakesh lu yehi.',
                "",
                'Ma kol anot ani shome\'a,', 'Kol shofar ve-kol tupim?', 'Kol she-nevakesh lu yehi.',
                "",
                'Lu tishama be-toch kol eleh', 'Gam tefilah achat mi-pi,', 'Kol she-nevakesh lu yehi.',
                "",
                'Be-sof ha-kayitz shelanu', 'Tnu lanu lachazor ha-baytah.', 'Kol she-nevakesh lu yehi.',
                "",
                'Ve-im pit\'om yizrach me-ofel', 'Al rosheinu or kochav,', 'Kol she-nevakesh lu yehi.'
            ]
        },
        context: "Written and composed by Naomi Shemer during the first desperate days of the 1973 Yom Kippur War, 'Lu Yehi' became the unofficial national prayer. It perfectly captured the nation's mood of shock and fear, and its title is an active plea ('May it be') rather than a passive acceptance. The song marks the moment the Israeli psyche turned from the certainty of victory to the fragility of prayer.",
        linguisticNotes: "The title 'Lu Yehi' (לוּ יְהִי) is an active, hopeful plea: 'If only it would be' or 'May it be.' The recurring refrain, 'Kol she-nevakesh lu yehi' ('All that we ask for, may it be'), frames the song as a petition. The line 'Ma kol anot ani shome'a' ('What is this sound of affliction I hear?') is a direct quote from Exodus 32:18, adding a layer of biblical gravity.",
        analysis: { theme: 'Hope & Prayer', era: '1970s', emotion: 'Prayerful, Hopeful', difficulty: 'Beginner' }
    },
    {
        id: 'ein-li-eretz-acheret',
        title: 'I Have No Other Country',
        hebrewTitle: 'אין לי ארץ אחרת',
        artist: 'Gali Atari (Lyrics: Ehud Manor)',
        youtubeId: '1zPhm-aEGJg',
        description: 'A quintessential Israeli anthem that balances unconditional love for the country with a fierce, critical vow to fight for its soul.',
        tags: ['Peace', 'Protest', 'Belonging', 'Lebanon War', 'Hope'],
        lyrics: {
            hebrew: [
                'אֵין לִי אֶרֶץ אַחֶרֶת', 'גַּם אִם אַדְמָתִי בּוֹעֶרֶת.', 'רַק מִלָּה בְּעִבְרִית חוֹדֶרֶת', 'אֶל עָרְקַי, אֶל נִשְׁמָתִי,', 'בְּגוּף כּוֹאֵב, בְּלֵב רָעֵב,', 'כָּאן הוּא בֵּיתִי.',
                "",
                'לֹא אֶשְׁתֹּק, כִּי אַרְצִי', 'שִׁנְּתָה אֶת פָּנֶיהָ.', 'לֹא אַוַתֵּר לָהּ, לְהַזְכִּיר לָהּ,', 'וְאָשִׁיר בְּאָזְנֶיהָ,', 'עַד שֶׁתִּפְקַח אֶת עֵינֶיהָ.',
                "",
                'אֵין לִי אֶרֶץ אַחֶרֶת', 'עַד שֶׁתְּחַדֵּשׁ יָמֶיהָ,', 'עַד שֶׁתִּפְקַח אֶת עֵינֶיהָ.'
            ],
            english: [
                'I have no other country', 'Even if my land is burning.', 'Only a word in Hebrew penetrates', 'Into my veins, into my soul,', 'With an aching body, with a hungry heart,', 'Here is my home.',
                "",
                'I will not be silent, for my country', 'Has changed its face.', 'I will not give up on her, I will remind her,', 'And sing into her ears,', 'Until she opens her eyes.',
                "",
                'I have no other country', 'Until she renews her days,', 'Until she opens her eyes.'
            ],
            transliteration: [
                'Ein li eretz acheret', 'Gam im admati bo\'eret.', 'Rak milah be-Ivrit choderet', 'El orkai, el nishmati,', 'Be-guf ko\'ev, be-lev ra\'ev,', 'Kan hu beiti.',
                "",
                'Lo eshtok, ki artzi', 'Shinta et paneha.', 'Lo avater lah, le-hazkir lah,', 'Ve-ashir be-ozneha,', 'Ad she-tifkach et eineha.',
                "",
                'Ein li eretz acheret', 'Ad she-techadesh yameha,', 'Ad she-tifkach et eineha.'
            ]
        },
        context: "Written by Ehud Manor in 1982, this song captures the paradox of Israeli identity: deep love combined with sharp criticism. Embraced as an anthem by the peace movement during the Lebanon War, its duality has allowed it to be adopted by all sides of the political spectrum. It defines a uniquely Israeli patriotism rooted in the painful responsibility to fight for the nation's character.",
        linguisticNotes: "The song's power comes from the tension between 'Ein li eretz acheret' ('I have no other country'), an absolute declaration of belonging, and 'Lo eshtok' ('I will not be silent'), a declaration of opposition. The phrase 'to sing in her ears until she opens her eyes' casts the protest not as rebellion, but as a loving attempt to awaken the nation from a moral slumber.",
        analysis: { theme: 'Patriotism & Protest', era: '1980s', emotion: 'Defiant, Passionate', difficulty: 'Intermediate' }
    },
    {
        id: 'shir-lashalom',
        title: 'A Song for Peace',
        hebrewTitle: 'שיר לשלום',
        artist: 'Miri Aloni & Lahakat HaNahal',
        youtubeId: '-Y94qG-T25M',
        description: 'Israel\'s most iconic and controversial peace anthem, forever linked to the memory of Prime Minister Yitzhak Rabin, who sang it moments before his assassination.',
        tags: ['Peace', 'Protest', 'Hope', 'Yitzhak Rabin'],
        lyrics: {
            hebrew: [
                'תְּנוּ לַשֶּׁמֶשׁ לַעֲלוֹת,', 'לַבֹּקֶר לְהָאִיר,', 'הַזַּכָּה שֶׁבַּתְּפִלּוֹת', 'אוֹתָנוּ לֹא תַּחֲזִיר.',
                "",
                'זֶה שֶׁכָּבָה נֵרוֹ', 'וּבֶעָפָר נִטְמַן,', 'בְּכִי מַר לֹא יְעִירוֹ,', 'לֹא יַחֲזִירֵהוּ כָּאן.',
                "",
                'לָכֵן, רַק שִׁירוּ שִׁיר לַשָּׁלוֹם,', 'אַל תִּלְחֲשׁוּ תְּפִלָּה.', 'מוּטָב תָּשִׁירוּ שִׁיר לַשָּׁלוֹם', 'בִּצְעָקָה גְּדוֹלָה.',
                "",
                'תְּנוּ לַשֶּׁמֶשׁ לַחְדֹּר', 'מִבַּעַד לַפְּרָחִים,', 'אַל תַּבִּיטוּ לְאָחוֹר,', 'הָנִיחוּ לַהוֹלְכִים.',
                "",
                'שְׂאוּ עֵינַיִם בְּתִקְוָה,', 'לֹא דֶּרֶךְ כַּוָּנוֹת.', 'שִׁירוּ שִׁיר לָאַהֲבָה,', 'וְלֹא לַמִּלְחָמוֹת.',
                "",
                'אַל תַּגִּידוּ יוֹם יָבוֹא,', 'הָבִיאוּ אֶת הַיּוֹם!', 'כִּי לֹא חֲלוֹם הוּא,', 'וּבְכָל הַכִּכָּרוֹת', 'הָרִיעוּ רַק שָׁלוֹם.'
            ],
            english: [
                'Let the sun rise,', 'Let the morning shine,', 'The purest of prayers', 'Will not bring us back.',
                "",
                'He whose candle was extinguished', 'And was buried in the dust,', 'A bitter cry will not awaken him,', 'Will not return him here.',
                "",
                'Therefore, just sing a song for peace,', 'Do not whisper a prayer.', 'Better that you sing a song for peace', 'With a great shout.',
                "",
                'Let the sun penetrate', 'Through the flowers,', 'Do not look backward,', 'Leave be those who have gone.',
                "",
                'Lift your eyes with hope,', 'Not through rifle sights.', 'Sing a song for love,', 'And not for wars.',
                "",
                'Do not say a day will come,', 'Bring the day!', 'For it is not a dream,', 'And in all the city squares,', 'Cheer only for peace.'
            ],
            transliteration: [
                'Tnu la-shemesh la-alot,', 'La-boker le-ha\'ir,', 'Ha-zakah she-ba-tefilot', 'Otanu lo tachazir.',
                "",
                'Zeh she-kavah nero', 'U-ve-afar nitman,', 'Bechi mar lo ye\'iro,', 'Lo yachazirehu kan.',
                "",
                'Lachen, rak shiru shir la-shalom,', 'Al tilchashu tefilah.', 'Mutav tashiru shir la-shalom', 'Bi-tze\'akah gedolah.',
                "",
                'Tnu la-shemesh lachdor', 'Mi-ba\'ad la-prachim,', 'Al tabitu le-achor,', 'Hanichu la-holchim.',
                "",
                'S\'u einayim be-tikvah,', 'Lo derech kavanot.', 'Shiru shir la-ahavah,', 'Ve-lo la-milchamot.',
                "",
                'Al tagidu yom yavo,', 'Havi\'u et ha-yom!', 'Ki lo chalom hu,', 'U-ve-chol ha-kikarot', 'Hari\'u rak shalom.'
            ]
        },
        context: "Written by a wounded soldier in 1969, this song was a radical departure from the ethos of its time. It explicitly rejects rituals of mourning in favor of an active, urgent demand for peace. Its status was tragically cemented on Nov 4, 1995, when it was the last song sung by Yitzhak Rabin before his assassination. The blood-stained lyric sheet found in his pocket transformed the song into a sacred relic of the peace movement.",
        linguisticNotes: "The lyrics are a direct polemic against the culture of memorialization. 'Al tilchashu tefilah' ('Do not whisper a prayer') challenges religious ritual. 'S'u einayim... lo derech kavanot' ('Lift your eyes... not through rifle sights') is a powerful subversion of military imagery. The final call, 'Havi'u et ha-yom!' ('Bring the day!'), is a demand for agency.",
        analysis: { theme: 'Peace & Activism', era: '1960s', emotion: 'Urgent, Hopeful', difficulty: 'Intermediate' }
    },
    {
        id: 'ballada-lachovesh',
        title: 'Ballad for a Medic',
        hebrewTitle: 'בלדה לחובש',
        artist: 'Yehoram Gaon',
        youtubeId: 'W9lGTt8mX2c',
        description: 'A narrative ballad about a medic who makes the ultimate sacrifice to stay with a wounded soldier, embodying the IDF ethos of "leaving no man behind."',
        tags: ['Yom HaZikaron', 'Heroism', 'Sacrifice', 'War of Attrition'],
        lyrics: {
            hebrew: [
                'בְּעֵמֶק שָׁם, בֵּין הֶהָרִים,', 'שָׁכַב פָּצוּעַ וְגָנַח.', '״הַשְׁאִירוּ אוֹתִי כָּאן, חֲבֵרִים,', 'אֲנִי כְּבָר לֹא אוּכַל לָנוּעַ.״',
                "",
                '״עֲזֹב שְׁטוּיוֹת,״ עָנָה אָז הַחוֹבֵשׁ,', '״אֲנִי אוֹתְךָ מִכָּאן לֹא עוֹזֵב.״', 'וְהוּא חָבַשׁ פְּצָעָיו בְּתַחְבֹּשֶׁת אִישִׁית,', 'בַּתַּחְבֹּשֶׁת הָאַחֲרוֹנָה.',
                "",
                'וְהֵם נוֹתְרוּ שְׁנֵיהֶם, וְהֵם גְּלוּיִים לָאֵשׁ.', 'וְהַחוֹבֵשׁ לוֹחֵשׁ: ״אַל תִּדְאַג, יַלְדִּי,', 'עוֹד מְעַט יַגִּיעַ הַחִלּוּץ.״',
                "",
                'בַּבֹּקֶר, כְּשֶׁעָלָה הַשַּׁחַר,', 'מָצְאוּ אוֹתָם שְׁנֵיהֶם,', 'הַפָּצוּעַ, וְלִצִדּוֹ הַחוֹבֵשׁ,', 'שֶׁנָּפַל גַּם הוּא.'
            ],
            english: [
                'In the valley there, between the mountains,', 'A wounded soldier lay and groaned.', '\'Leave me here, friends,', 'I can no longer move.\'',
                "",
                '\'Leave that nonsense,\' the medic then said,', '\'I am not leaving you here.\'', 'And he dressed his wounds with a personal field dressing,', 'With the very last one he had.',
                "",
                'And the two of them remained, exposed to the fire.', 'And the medic whispers: \'Don\'t worry, my boy,', 'The rescue team will be here soon.\'',
                "",
                'In the morning, when the dawn arose,', 'They found the two of them,', 'The wounded one, and beside him the medic,', 'Who had fallen too.'
            ],
            transliteration: [
                'Be-emek sham, bein he-harim,', 'Shachav patzu\'a ve-ganach.', '\'Hash\'iru oti kan, chaverim,', 'Ani kvar lo uchal lanu\'a.\'',
                "",
                '\'Azov shtuyot,\' anah az ha-chovesh,', '\'Ani otcha mi-kan lo ozev.\'', 'Ve-hu chavash p\'tzavav be-tachboshet ishit,', 'Ba-tachboshet ha-achronah.',
                "",
                'Ve-hem notru shneihem, ve-hem gluyim la-esh.', 'Ve-ha-chovesh lochesh: \'Al tid\'ag, yaldi,', 'Od me\'at yagi\'a ha-chilutz.\'',
                "",
                'Ba-boker, ke-she-alah ha-shachar,', 'Matz\'u otam shneihem,', 'Ha-patzu\'a, ve-letzido ha-chovesh,', 'She-nafal gam hu.'
            ]
        },
        context: "Based on a story by S.Y. Agnon, this song tells the tragic tale of a medic who refuses to abandon a mortally wounded soldier. It powerfully captures the themes of self-sacrifice, medical ethics on the battlefield, and the profound humanism that can exist even in the midst of war. It is a staple of ceremonies honoring fallen medics.",
        linguisticNotes: "The phrase 'azov shtuyot' is a common, almost dismissive idiom for 'stop talking nonsense.' In this context, it is transformed into an expression of profound commitment and refusal to abandon a friend, highlighting the medic's unwavering resolve in a stark, un-poetic way.",
        analysis: { theme: 'Self-Sacrifice', era: '1960s', emotion: 'Tragic, Heroic', difficulty: 'Intermediate' }
    },
    {
        id: 'yerushalayim-shel-zahav',
        title: 'Jerusalem of Gold',
        hebrewTitle: 'ירושלים של זהב',
        artist: 'Shuli Natan (Lyrics: Naomi Shemer)',
        youtubeId: 'l0d-P7Y_pLM',
        description: 'Israel\'s unofficial national anthem, written three weeks before the Six-Day War, expressing a 2000-year-old longing for a divided Jerusalem.',
        tags: ['Jerusalem', 'Six-Day War', 'Hope', 'Longing', 'Reunification'],
        lyrics: {
            hebrew: [
                'אֲוִיר הָרִים צָלוּל כַּיַּיִן', 'וְרֵיחַ אֳרָנִים', 'נִשָּׂא בְּרוּחַ הָעַרְבַּיִם', 'עִם קוֹל פַּעֲמוֹנִים.',
                "",
                'וּבְתַרְדֵּמַת אִילָן וָאֶבֶן', 'שְׁבוּיָה בַּחֲלוֹמָהּ', 'הָעִיר אֲשֶׁר בָדָד יוֹשֶׁבֶת', 'וּבְלִבָּהּ חוֹמָה.',
                "",
                'יְרוּשָׁלַיִם שֶׁל זָהָב', 'וְשֶׁל נְחֹשֶׁת וְשֶׁל אוֹר', 'הֲלֹא לְכָל שִׁירַיִךְ אֲנִי כִּנּוֹר.',
                "",
                'אֵיכָה יָבְשׁוּ בּוֹרוֹת הַמַּיִם,', 'כִּכָּר הַשּׁוּק רֵיקָה,', 'וְאֵין פּוֹקֵד אֶת הַר הַבַּיִת', 'בָּעִיר הָעַתִּיקָה.',
                "",
                'וּבַמְּעָרוֹת אֲשֶׁר בַּסֶּלַע', 'מְיַלְּלוֹת רוּחוֹת,', 'וְאֵין יוֹרֵד אֶל יָם הַמֶּלַח', 'בְּדֶרֶךְ יְרִיחוֹ.',
                "",
                'חָזַרְנוּ אֶל בּוֹרוֹת הַמַּיִם,', 'לַשּׁוּק וְלַכִּכָּר,', 'שׁוֹפָר קוֹרֵא בְּהַר הַבַּיִת', 'בָּעִיר הָעַתִּיקָה.',
                "",
                'וּבַמְּעָרוֹת אֲשֶׁר בַּסֶּלַע', 'אַלְפֵי שְׁמָשׁוֹת זוֹרְחוֹת,', 'נָשׁוּב נֵרֵד אֶל יָם הַמֶּלַח', 'בְּדֶרֶךְ יְרִיחוֹ.'
            ],
            english: [
                'Mountain air as clear as wine', 'And the scent of pines', 'Is carried on the evening wind', 'With the sound of bells.',
                "",
                'And in the slumber of tree and stone', 'Captive in her dream', 'The city that sits solitary', 'And in her heart a wall.',
                "",
                'Jerusalem of gold', 'And of bronze, and of light', 'Behold, I am a violin for all your songs.',
                "",
                'How the water cisterns have dried up,', 'The market square is empty,', 'And no one visits the Temple Mount', 'In the Old City.',
                "",
                'And in the caves in the rock', 'Winds are wailing,', 'And no one goes down to the Dead Sea', 'By way of Jericho.',
                "",
                'We have returned to the water cisterns,', 'To the market and to the square,', 'A shofar sounds on the Temple Mount', 'In the Old City.',
                "",
                'And in the caves in the rock', 'Thousands of suns now shine,', 'We will again go down to the Dead Sea', 'By way of Jericho.'
            ],
            transliteration: [
                'Avir harim tzalul ka-yayin', 'Ve-rei\'ach oranim', 'Nisa be-ruach ha-arbayim', 'Im kol pa\'amonim.',
                "",
                'U-ve-tardemat ilan va-even', 'Shvuyah ba-chalomah', 'Ha-ir asher badad yoshevet', 'U-ve-libah chomah.',
                "",
                'Yerushalayim shel zahav', 'Ve-shel nechoshet ve-shel or', 'Ha-lo le-chol shirayich ani kinor.',
                "",
                'Eichah yavshu borot ha-mayim,', 'Kikar ha-shuk reikah,', 'Ve-ein poked et Har ha-Bayit', 'Ba-ir ha-atikah.',
                "",
                'U-va-me\'arot asher ba-sela', 'Meyalelot ruchot,', 'Ve-ein yored el Yam ha-Melach', 'Be-derech Yericho.',
                "",
                'Chazarnu el borot ha-mayim,', 'La-shuk ve-la-kikar,', 'Shofar kore be-Har ha-Bayit', 'Ba-ir ha-atikah.',
                "",
                'U-va-me\'arot asher ba-sela', 'Alfei shmashot zorchot,', 'Nashuv nered el Yam ha-Melach', 'Be-derech Yericho.'
            ]
        },
        context: "Written by Naomi Shemer just before the 1967 war, the song's original lyrics lamented a divided Jerusalem inaccessible to Jews. When the city was reunified, Shemer added a triumphant final verse celebrating the return. The song's history encapsulates a pivotal moment of national trauma and euphoria. Its original mournful verses ensure its place in the canon of remembrance for the city that once was.",
        linguisticNotes: "The title is a reference to a Talmudic legend. The line 'Ha-ir asher badad yoshevet' ('The city that sits solitary') is a direct quote from the Book of Lamentations 1:1, connecting the song to ancient destruction. The post-war verse is a mirror image of the earlier verses, with each image of emptiness replaced by one of fulfillment.",
        analysis: { theme: 'Longing & Homecoming', era: '1960s', emotion: 'Yearning, Reverent', difficulty: 'Intermediate' }
    },
    {
        id: 'hanisich-hakatan',
        title: 'The Little Prince',
        hebrewTitle: 'הנסיך הקטן',
        artist: 'Gidi Gov (Lyrics: Yehonatan Geffen)',
        youtubeId: 'lQ67Bv4g9hA',
        description: 'A poignant elegy for a fallen soldier, using the allegory of Saint-Exupéry\'s famous story to describe a journey from which there is no return.',
        tags: ['Personal Grief', 'Yom HaZikaron', 'Loss of Innocence', 'Allegory'],
        lyrics: {
            hebrew: [
                'בְּפָרִיז, בְּאֶמְצַע הַכְּבִישׁ,', 'עָמַד לוֹ טַיָּס עִם כְּנָפַיִם שְׁבוּרוֹת,', 'הַנָּסִיךְ הַקָּטָן שֶׁלִּי,', 'הוּא אָמַר שֶׁהוּא חַיָּב לַחְזֹר.',
                "",
                'וְהַשּׁוֹשַׁנָּה שֶׁלוֹ, הוּא אָמַר,', 'מְחַכָּה לוֹ בְּכוכָב אַחֵר,', 'וְאִם הוּא לֹא יַחְזֹר מַהֵר,', 'הִיא תִּבְכֶּה וְתִקְמֹל, וְתָמוּת.',
                "",
                'אָז הוּא עָצַם אֶת עֵינָיו, וְעָף', 'לְמַעְלָה, לְמַעְלָה, אֶל הַכּוֹכָבִים,', 'וְהִשְׁאִיר אוֹתִי כָּאן לְבַד,', 'עִם הַסֵּפֶר הַפָּתוּחַ וְהַדְּמָעוֹת.',
                "",
                'וְכָל מִי שֶׁשּׁוֹאֵל אוֹתִי', 'מָה אֲנִי עוֹשֶׂה כָּאן,', 'אֲנִי אוֹמֵר לוֹ: "אֲנִי מְחַכֶּה', 'לַנָּסִיךְ הַקָּטָן שֶׁיַּחְזֹר."'
            ],
            english: [
                'In Paris, in the middle of the street,', 'Stood a pilot with broken wings,', 'My little prince,', 'He said he had to go back.',
                "",
                'And his rose, he said,', 'Is waiting for him on another star,', 'And if he doesn\'t return soon,', 'She will cry and wither, and die.',
                "",
                'So he closed his eyes, and flew', 'Up, up, to the stars,', 'And left me here alone,', 'With the open book and the tears.',
                "",
                'And everyone who asks me', 'What I am doing here,', 'I tell them: "I am waiting', 'For the little prince to return."'
            ],
            transliteration: [
                'Be-Pariz, be-emtza ha-kvish,', 'Amad lo tayas im knafayim shvurot,', 'Ha-nasich ha-katan sheli,', 'Hu amar she-hu chayav lachzor.',
                "",
                'Ve-ha-shoshanah shelo, hu amar,', 'Mechakah lo be-kochav acher,', 'Ve-im hu lo yachzor maher,', 'Hi tivkeh ve-tikmol, ve-tamut.',
                "",
                'Az hu atzam et einav, ve-af', 'Le-ma\'alah, le-ma\'alah, el ha-kochavim,', 'Ve-hish\'ir oti kan levad,', 'Im ha-sefer ha-patuach ve-ha-dma\'ot.',
                "",
                'Ve-chol mi she-sho\'el oti', 'Ma ani oseh kan,', 'Ani omer lo: "Ani mechakeh', 'La-nasich ha-katan she-yachzor."'
            ]
        },
        context: "Yehonatan Geffen wrote this song in memory of his nephew, a soldier killed in 1973. Using the simple, childlike language of 'The Little Prince,' it tells the heartbreaking story of leaving home (his star) and love (his rose) for a journey (the army) from which he can never return. It strips away heroic narratives to focus on the intimate, irreversible tragedy of a single lost life.",
        linguisticNotes: "The song's power lies in its deliberate simplicity and its direct mapping of the original story's elements onto the Israeli experience. The 'kochav' (star) becomes a metaphor for the home and innocence left behind. The final, devastating realization that he can 'return to his star forever' is a gentle but absolute statement of death's finality.",
        analysis: { theme: 'Allegorical Loss', era: '1970s', emotion: 'Melancholic, Gentle', difficulty: 'Beginner' }
    },
    {
        id: 'kmo-tzemach-bar',
        title: 'Like a Wildflower',
        hebrewTitle: 'כמו צמח בר',
        artist: 'Chava Alberstein (Lyrics: Rachel Shapira)',
        youtubeId: 'Zf9zVf4I0-c',
        description: 'An anthem of resilience and survival, using the metaphor of a lone wildflower that endures a harsh winter to bloom again.',
        tags: ['Resilience', 'Hope', 'Survival', 'Yom HaZikaron'],
        lyrics: {
            hebrew: [
                'כְּמוֹ צֶמַח בַּר, בַּחֹרֶף, עַל גִּבְעוֹל יָחִיד', 'הוּא נִשְׁאַר לְבַד, וְלֹא הָיָה מִי שֶׁיַּגִּיד', 'שֶׁהוּא עוֹד יִפְרַח, וְיַעֲלֶה, וְיַצְמִיחַ עָלִים', 'בְּיוֹם שֶׁהַשֶּׁמֶשׁ תָּאִיר אֶת הֶעָנָן הַשָּׁחוֹר.',
                "",
                'רַק אִמָּא דָּאֲגָה וְאָמְרָה:', '"אֵיךְ תִּגְדַּל, יַלְדִּי?"', 'וְהוּא חִיֵּךְ לָהּ וְשָׁתַק.', 'כְּמוֹ צֶמַח בַּר.',
                "",
                'שֶׁמְּחַפֵּשׂ אֶת הַשֶּׁמֶשׁ', 'מִתַּחַת לַסְּלָעִים.', 'כָּךְ הוּא חָלַם לִפְרֹחַ,', 'יוֹם אֶחָד, בֵּין הַשְּׁבִילִים.'
            ],
            english: [
                'Like a wildflower, in winter, on a single stem', 'He was left alone, and there was no one who would say', 'That he would yet bloom, and rise, and grow leaves', 'On the day the sun would light up the black cloud.',
                "",
                'Only mother worried and said:', '"How will you grow, my child?"', 'And he smiled at her and was silent.', 'Like a wildflower.',
                "",
                'That searches for the sun', 'Underneath the rocks.', 'So he dreamed of blooming,', 'One day, among the paths.'
            ],
            transliteration: [
                'Kmo tzemach bar, ba-choref, al giv\'ol yachid', 'Hu nish\'ar levad, ve-lo hayah mi she-yagid', 'She-hu od yifrach, ve-ya\'aleh, ve-yatzmiach alim', 'Be-yom she-ha-shemesh ta\'ir et he-anan ha-shachor.',
                "",
                'Rak ima da\'agah ve-amrah:', '"Eich tigdal, yaldi?"', 'Ve-hu chiyech lah ve-shatak.', 'Kmo tzemach bar.',
                "",
                'She-mechapes et ha-shemesh', 'Mi-tachat la-sla\'im.', 'Kach hu chalam lifroach,', 'Yom echad, bein ha-shvilim.'
            ]
        },
        context: "This song by Rachel Shapira is a powerful message of hope for the bereaved. Its theme of perseverance through darkness and the promise of eventual renewal resonates deeply with the Israeli experience. It suggests that even from the depths of grief, life can emerge, fragile but determined, like a wildflower breaking through hard ground.",
        linguisticNotes: "The central image, 'tzemach bar' (צֶמַח בַּר), means 'wild plant,' one that is resilient, uncultivated, and survives against the odds. This emphasizes the theme of innate, stubborn strength. The phrase 'adamah kashah' (אֲדָמָה קָשָׁה - 'hard earth') serves as a metaphor for the difficult circumstances of grief and loss.",
        analysis: { theme: 'Resilience & Survival', era: '1970s', emotion: 'Hopeful, Enduring', difficulty: 'Intermediate' }
    },
    {
        id: 'lelechet-shevi-acharayich',
        title: 'To Walk Captivated By You',
        hebrewTitle: 'ללכת שבי אחרייך',
        artist: 'Ilanit (Lyrics: Ehud Manor)',
        youtubeId: 'qO3z4T9xYbo',
        description: 'A declaration of love and commitment to the Land of Israel, personified as a beloved partner whose burdens must be shared.',
        tags: ['Love of Land', 'Yom Kippur War', 'Hope', 'Belonging'],
        lyrics: {
            hebrew: [
                'לָלֶכֶת שְׁבִי אַחֲרַיִךְ,', 'לִנְשֹׁם אֶת עֲפַר דְּרָכַיִךְ,', 'לִכְאֹב וְלָשֵׂאת בִּשְׁנַיִם', 'וְלֶאֱהֹב אוֹתָךְ.',
                "",
                'לָלֶכֶת שְׁבִי אַחֲרַיִךְ,', 'בְּשֶׁמֶשׁ וּבַעֲנָנַיִךְ,', 'לִרְעֹב וְלִצְמֹא לְמַיִם', 'וְלֶאֱהֹב אוֹתָךְ.',
                "",
                'לָתֵת אֶת יָדִי לְיָדֵךְ,', 'לִצְעֹד לְעֻמַּת פָּנַיִךְ,', 'לָשִׂים אֶת כְּתֵפִי אֶל שֶׁכֶם', 'וְלִבְנוֹת אוֹתָךְ.'
            ],
            english: [
                'To walk captivated by you,', 'To breathe the dust of your paths,', 'To ache and to bear together', 'And to love you.',
                "",
                'To walk captivated by you,', 'In your sun and in your clouds,', 'To hunger and to thirst for water', 'And to love you.',
                "",
                'To give my hand to yours,', 'To march towards your face,', 'To place my shoulder to the burden', 'And to build you.'
            ],
            transliteration: [
                'Lalechet shevi acharayich,', 'Linshom et afar drachayich,', 'Lich\'ov ve-laset bi-shnayim', 'Ve-le\'ehov otach.',
                "",
                'Lalechet shevi acharayich,', 'Be-shemesh u-va-ananayich,', 'Lir\'ov ve-litzmo le-mayim', 'Ve-le\'ehov otach.',
                "",
                'Latet et yadi le-yadech,', 'Litz\'od le\'umat panayich,', 'Lasim et k\'tefi el shechem', 'Ve-livnot otach.'
            ]
        },
        context: "Ehud Manor wrote these lyrics during the Yom Kippur War while he was abroad, feeling helpless. The song is an expression of his deep, physical connection to the land and his yearning to return and share in its struggles. It describes a love that is not easy or idyllic but embraces pain and responsibility. In memorial contexts, it reaffirms the bond to the land for which soldiers fell.",
        linguisticNotes: "The key phrase is 'lalechet shevi acharayich' (לָלֶכֶת שְׁבִי אַחֲרַיִךְ). 'Shevi' means captivity, but here it is used poetically to mean being utterly enchanted or captivated. It implies a willing surrender to an all-encompassing love for the personified land.",
        analysis: { theme: 'Love of Land', era: '1970s', emotion: 'Devotional, Earnest', difficulty: 'Beginner' }
    },
    {
        id: 'zemer-nogah',
        title: 'A Sad Song',
        hebrewTitle: 'זמר נוגה',
        artist: 'Ofra Haza (Poem: Rachel the Poetess)',
        youtubeId: 'T_3FAPlJk4g',
        description: 'A haunting poem by the pre-state poet Rachel, giving voice to the silent, private grief of those left behind by war.',
        tags: ['Poetry', 'Sacrifice', 'Longing', 'Pre-State Era'],
        lyrics: {
            hebrew: [
                'הֲתִשְׁמַע קוֹלִי, רְחוֹקִי?', 'הֲתִשְׁמַע קוֹלִי, בַּאֲשֶׁר הִנְּךָ,', 'קוֹל קוֹרֵא בְּעֹז, קוֹל בּוֹכֶה בִּדְמִי,', 'וְעַל פְּנֵי תְהוֹמוֹת מְרַחֵף?',
                "",
                'וּבַלַּיְלָה – לַיְלָה חָרִישִׁי, לַיְלָה לָבָן,', 'כִּי נִגְלוּ הַמֶּרְחַקִים לְעֵינַי.', 'עַל הַכֹּל אַתָּה מְרַחֵף, עַל הַכֹּל,', 'וְאֶת הַכֹּל אַתָּה נוֹצֵר בְּלִבְּךָ.',
                "",
                'וְאִם יִקְרֶה (הַאִם יִקְרֶה?)', 'שֶׁתִּהְיֶה לְאַחֵר,', 'וְתִשְׁכַּח אוֹתִי עַד עוֹלָם –', 'הַאֻמְנָם תִּשְׁכַּח?'
            ],
            english: [
                'Will you hear my voice, my distant one?', 'Will you hear my voice, wherever you are,', 'A voice calling out in strength, a voice weeping in the silence,', 'And hovering over the abysses?',
                "",
                'And at night – a silent night, a white night,', 'For the distances were revealed to my eyes.', 'You hover over everything, over everything,', 'And you hold everything in your heart.',
                "",
                'And if it happens (will it happen?)', 'That you will belong to another,', 'And you will forget me forever –', 'Will you truly forget?'
            ],
            transliteration: [
                'Ha-tishma koli, rechoki?', 'Ha-tishma koli, ba-asher hincha,', 'Kol kore be-oz, kol boche bi-dmi,', 'Ve-al pnei tehomot merachef?',
                "",
                'U-va-lailah – lailah charishi, lailah lavan,', 'Ki niglu ha-merchakim le-einai.', 'Al ha-kol ata merachef, al ha-kol,', 'Ve-et ha-kol ata notzer be-libcha.',
                "",
                'Ve-im yikreh (ha-im yikreh?)', 'She-tihiyeh le-acher,', 'Ve-tishkach oti ad olam –', 'Ha-umnam tishkach?'
            ]
        },
        context: "This poem by Rachel Bluwstein (1890-1931), one of modern Hebrew's foundational poets, speaks from the perspective of one left behind by a beloved who has gone to a war from which he may not return. Its power lies in its quiet intimacy and focus on the personal sacrifice of those who wait and remember. Set to music, it was adopted into the canon of memorial songs.",
        linguisticNotes: "The poem's power is amplified by its structure, which consists entirely of a series of haunting rhetorical questions beginning with 'Ha-' (הֲ-), the Hebrew interrogative particle. 'Ha-tishma?' ('Will you hear?'). This creates a tone of desperate, uncertain pleading.",
        analysis: { theme: 'Poetic Longing', era: '1920s (Poem)', emotion: 'Wistful, Haunting', difficulty: 'Advanced' }
    },
    {
        id: 'avshalom',
        title: 'Avshalom',
        hebrewTitle: 'אבשלום',
        artist: 'Arik Einstein & Shalom Hanoch',
        youtubeId: 'O9dYp_oXGqc',
        description: 'A classic rock ballad that merges the biblical tragedy of King David\'s son with the contemporary grief of losing a friend.',
        tags: ['Personal Grief', 'Biblical Allusion', 'Loss', 'Friendship'],
        lyrics: {
            hebrew: [
                'פָּנָיו הָיוּ כְּמוֹ הַשֶּׁמֶשׁ,', 'עֵינָיו אוֹר כּוֹכָבִים.', 'וּשְׂעָרוֹ הַזָּהֹב', 'הָיָה תָּלוּי עַל הָעֵץ.',
                "",
                'אַבְשָׁלוֹם, אַבְשָׁלוֹם,', 'לָמָּה לֹא חָזַרְתָּ הַבַּיְתָה?', 'הַמֶּלֶךְ דָּוִד קוֹרֵא לְךָ,', 'הוּא מְחַכֶּה לְךָ.',
                "",
                'הוּא הָיָה חָבֵר טוֹב,', 'הוּא הָיָה אָח.', 'וְעַכְשָׁו הוּא אֵינֶנּוּ,', 'הָלַךְ וְלֹא יָשׁוּב עוֹד.'
            ],
            english: [
                'His face was like the sun,', 'His eyes the light of stars.', 'And his golden hair', 'Was hanging on the tree.',
                "",
                'Avshalom, Avshalom,', 'Why did you not come home?', 'King David calls for you,', 'He is waiting for you.',
                "",
                'He was a good friend,', 'He was a brother.', 'And now he is gone,', 'He went and will not return again.'
            ],
            transliteration: [
                'Panav hayu kmo ha-shemesh,', 'Einav or kochavim.', 'U-se\'aro ha-zahov', 'Hayah talui al ha-etz.',
                "",
                'Avshalom, Avshalom,', 'Lamah lo chazarta ha-baytah?', 'Ha-melech David kore lecha,', 'Hu mechakeh lecha.',
                "",
                'Hu hayah chaver tov,', 'Hu hayah ach.', 'Ve-achshav hu einenu,', 'Halach ve-lo yashuv od.'
            ]
        },
        context: "Written in memory of a close friend's young son, this song draws a direct parallel between modern grief and King David's famous lament for his son, Avshalom, in the Bible. By invoking this ancient story of a father's inconsolable grief, the song elevates a personal loss into a timeless, archetypal tragedy, becoming an anthem for a generation grappling with the loss of friends in Israel's wars.",
        linguisticNotes: "The song's power comes from its direct use of the biblical narrative as a metaphor. The central lines, 'Avshalom, Avshalom / lamah lo chazarta ha-baytah?' ('Avshalom, Avshalom, / why did you not come home?'), echo the pain of King David's cry but translate it into a simple, modern question. The reference to 'golden hair' is a direct allusion to the biblical text.",
        analysis: { theme: 'Biblical Grief', era: '1970s', emotion: 'Grieving, Rock', difficulty: 'Intermediate' }
    },
    {
        id: 'shtei-etzbaot-mitzidon',
        title: 'Two Fingers from Sidon',
        hebrewTitle: 'שתי אצבעות מצידון',
        artist: 'Boaz Ofri',
        youtubeId: 'nFp25LwJ1p0',
        description: 'From a seminal anti-war film, this song captures the tragic irony of the First Lebanon War, where being close to home meant nothing.',
        tags: ['Lebanon War', 'Anti-War', 'Loss of Innocence', 'Trauma'],
        lyrics: {
            hebrew: [
                'אֲנִי יוֹשֵׁב כָּאן עִם ג\בְּעַת הַתַּחְמֹשֶׁת שֶׁלִּי', 'וְחוֹשֵׁב עַל הַבַּיִת.', 'שְׁתֵּי אֶצְבָּעוֹת מִצִּידוֹן, אָמְרוּ לִי.', 'קָרוֹב, אֲבָל כָּל כָּךְ רָחוֹק.',
                "",
                'וְהַכֹּל כָּאן יָרֹק, וְהַשֶּׁמֶשׁ זוֹרַחַת,', 'אֲבָל בַּלֵּב יֵשׁ עָנָן.', 'אֲנִי זוֹכֵר אֶת פָּנֶיךָ, אִמָּא,', 'וְתוֹהֶה אִם אֶרְאֶה אוֹתָךְ שׁוּב.',
                "",
                'כָּתַבְתִּי לְךָ מִכְתָּב, וְשָׂמְתִּי בַּכִּיס,', 'אוּלַי הוּא יַגִּיעַ אֵלֶיךָ.', 'שֶׁתֵּדְעִי שֶׁאֲנִי אוֹהֵב, וְחוֹשֵׁב,', 'וְכָל כָּךְ מִתְגַּעְגֵּעַ.'
            ],
            english: [
                'I am sitting here with my Ammunition Hill', 'And thinking about home.', 'Two fingers from Sidon, they told me.', 'Close, but so very far.',
                "",
                'And everything here is green, and the sun is shining,', 'But in my heart there is a cloud.', 'I remember your face, mother,', 'And wonder if I will see you again.',
                "",
                'I wrote you a letter, and put it in my pocket,', 'Maybe it will reach you.', 'So that you will know that I love, and think,', 'And miss you so much.'
            ],
            transliteration: [
                'Ani yoshev kan im Giv\'at ha-Tachmoshet sheli', 'Ve-choshev al ha-bayit.', 'Shtei etzba\'ot mi-Tzidon, amru li.', 'Karov, aval kol kach rachok.',
                "",
                'Ve-ha-kol kan yarok, ve-ha-shemesh zorachat,', 'Aval ba-lev yesh anan.', 'Ani zocher et panayich, ima,', 'Ve-toheh im er\'eh otach shuv.',
                "",
                'Katavti lach michtav, ve-samti ba-kis,', 'Ulai hu yagi\'a elaich.', 'She-ted\'i she-ani ohev, ve-choshev,', 'Ve-chol kach mitga\'age\'a.'
            ]
        },
        context: "The title track from a 1986 film that shattered heroic molds, offering a critical look at the First Lebanon War. The title is soldier's slang for being very close to the Israeli border, measured by two fingers on a map. The song's tragic irony is that this proximity means nothing in the face of sudden death. It became an anthem for a disillusioned generation, questioning the purpose of war.",
        linguisticNotes: "The title phrase, 'Shtei Etzba'ot mi-Tzidon,' is the song's core. It's a piece of military slang that grounds the song in the authentic, colloquial experience of the common soldier. The contrast between this casual, hopeful phrase and the soldier's fate encapsulates the song's anti-war message.",
        analysis: { theme: 'Anti-War Trauma', era: '1980s', emotion: 'Somber, Critical', difficulty: 'Intermediate' }
    },
    {
        id: 'livkot-lecha',
        title: 'To Cry for You',
        hebrewTitle: 'לבכות לך',
        artist: 'Aviv Geffen & Arik Einstein',
        youtubeId: 'S1Y_0agII4g',
        description: 'A personal song of grief that became a national anthem of mourning for an entire generation after the assassination of Yitzhak Rabin.',
        tags: ['Personal Grief', 'Yitzhak Rabin', 'Loss', 'Youth'],
        lyrics: {
            hebrew: [
                'לִבְכּוֹת לְךָ, אֲנִי מַבְטִיחַ לִבְכּוֹת לְךָ,', 'עַל שֶׁהָלַכְתָּ בְּלִי לְהַגִּיד לִי שָׁלוֹם.', 'כְּמוֹ שֶׁאַתָּה, לֹא יִהְיֶה לִי חָבֵר אַחֵר,', 'כָּזֶה שֶׁיָּבוֹא וְיֵלֵךְ כְּמוֹ חֲלוֹם.',
                "",
                'לִכְתֹּב לְךָ, אֲנִי אַמְשִׁיךְ לִכְתֹּב לְךָ,', 'שִׁירִים עֲצוּבִים שֶׁיַּזְכִּירוּ לִי אוֹתְךָ.', 'וְכָל הַדְּמָעוֹת שֶׁאֲנִי לֹא אֶבְכֶּה עוֹד,', 'יִהְיוּ לְךָ, כִּי בִּלְעָדֶיךָ אֲנִי אָבוּד.',
                "",
                'וְזֶה כּוֹאֵב, לְהִתְגַּעְגֵּעַ וְלִזְכֹּר,', 'אֶת כָּל הַדְּבָרִים שֶׁלֹּא נַסְפִּיק לַעֲשׂוֹת.', 'לְדַבֵּר אִתְּךָ, וְלֹא לְקַבֵּל תְּשׁוּבָה,', 'זוֹ הַשְּׁתִיקָה שֶׁאוֹתִי מְשַׁגַּעַת.'
            ],
            english: [
                'To cry for you, I promise to cry for you,', 'For you left without saying goodbye to me.', 'Like you, I will have no other friend,', 'One who comes and goes like a dream.',
                "",
                'To write to you, I will continue to write to you,', 'Sad songs that will remind me of you.', 'And all the tears that I will no longer cry,', 'Will be for you, because without you I am lost.',
                "",
                'And it hurts, to miss and to remember,', 'All the things we won\'t get to do.', 'To talk to you, and not get an answer,', 'It\'s the silence that drives me mad.'
            ],
            transliteration: [
                'Livkot lecha, ani mavti\'ach livkot lecha,', 'Al she-halachta bli le-hagid li shalom.', 'Kmo she-ata, lo yihiyeh li chaver acher,', 'Kazeh she-yavo ve-yelech kmo chalom.',
                "",
                'Lichtov lecha, ani amshich lichtov lecha,', 'Shirim atzuvim she-yazkiru li otcha.', 'Ve-chol ha-dma\'ot she-ani lo evkeh od,', 'Yihiyu lecha, ki bil\'adecha ani avud.',
                "",
                'Ve-zeh ko\'ev, le-hitga\'age\'a ve-lizkor,', 'Et kol ha-devarim she-lo naspik la\'asot.', 'Le-daber itcha, ve-lo le-kabel teshuvah,', 'Zo ha-shtikah she-oti meshaga\'at.'
            ]
        },
        context: "Initially written by Aviv Geffen for a deceased friend, this raw, personal song became the anthem for the 'Candle Youth' after the 1995 assassination of Yitzhak Rabin. Geffen performed it at the rally moments before the murder. Its direct, simple language of loss articulated the shock and grief of a generation in a way formal mourning could not, forever linking personal pain with national trauma.",
        linguisticNotes: "The song's language is strikingly simple and personal. The opening line, 'Livkot lecha, ani mavti'ach' ('To cry for you, I promise'), frames mourning not just as an emotion, but as a conscious act of loyalty. The phrase 'yavo ve-yelech kmo chalom' ('comes and goes like a dream') captures the surreal nature of the lost friendship.",
        analysis: { theme: 'Personal & National Grief', era: '1990s', emotion: 'Heartbroken, Raw', difficulty: 'Beginner' }
    }
];

// =================================================================================
//  WEBSITE FUNCTIONALITY
//  The code below powers the library, search, and player.
// =================================================================================

document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    
    populateFilters();
    renderLibrary();

    const searchBar = document.getElementById('search-bar');
    searchBar.addEventListener('input', () => renderLibrary());
    
    // Theme Switcher Logic
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.classList.add(currentTheme);
        if (currentTheme === 'dark-mode') {
            themeToggle.checked = true;
        }
    }
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light-mode');
        }
    });

    // Hide loader when content is ready
    window.onload = () => {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 500);
    };
});

function populateFilters() {
    const allTags = [...new Set(songDatabase.flatMap(song => song.tags))].sort();
    const filtersContainer = document.getElementById('tag-filters');
    filtersContainer.innerHTML = '';
    
    const allButton = document.createElement('button');
    allButton.textContent = 'All';
    allButton.classList.add('active');
    allButton.onclick = () => {
        document.querySelectorAll('#tag-filters button').forEach(b => b.classList.remove('active'));
        allButton.classList.add('active');
        renderLibrary();
    };
    filtersContainer.appendChild(allButton);

    allTags.forEach(tag => {
        const button = document.createElement('button');
        button.textContent = tag;
        button.dataset.tag = tag;
        button.onclick = (e) => {
            e.currentTarget.classList.toggle('active');
            if (document.querySelectorAll('#tag-filters button.active').length > 1) {
                allButton.classList.remove('active');
            }
            if (document.querySelectorAll('#tag-filters button.active[data-tag]').length === 0) {
                 allButton.classList.add('active');
            }
            renderLibrary();
        };
        filtersContainer.appendChild(button);
    });
}

function renderLibrary() {
    const libraryContainer = document.getElementById('song-library');
    const noResultsDiv = document.getElementById('no-results');
    libraryContainer.innerHTML = '';

    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const activeTagElements = document.querySelectorAll('#tag-filters button.active[data-tag]');
    const activeTags = Array.from(activeTagElements).map(b => b.dataset.tag);
    
    const filteredSongs = songDatabase.filter(song => {
        const matchesSearch = 
            song.title.toLowerCase().includes(searchTerm) ||
            song.artist.toLowerCase().includes(searchTerm) ||
            song.hebrewTitle.includes(searchTerm);
        
        const matchesTags = activeTags.length === 0 || activeTags.every(tag => song.tags.includes(tag));

        return matchesSearch && matchesTags;
    });
    
    noResultsDiv.style.display = filteredSongs.length === 0 ? 'block' : 'none';

    filteredSongs.forEach((song, index) => {
        const card = document.createElement('div');
        card.className = 'song-card';
        card.style.animationDelay = `${index * 50}ms`;
        card.onclick = () => loadSong(song.id);
        
        const tagsHtml = song.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

        card.innerHTML = `
            <h3>${song.title}</h3>
            <div class="hebrew-title">${song.hebrewTitle}</div>
            <div class="artist">${song.artist}</div>
            <p class="description">${song.description}</p>
            <div class="tags">${tagsHtml}</div>
        `;
        libraryContainer.appendChild(card);
    });
}

function loadSong(songId) {
    const song = songDatabase.find(s => s.id === songId);
    if (!song) return;

    document.getElementById('song-title').textContent = song.title;
    document.getElementById('hebrew-title').textContent = song.hebrewTitle;
    document.getElementById('song-artist').textContent = song.artist;
    document.getElementById('youtube-embed-container').innerHTML = 
        `<iframe src="https://www.youtube.com/embed/${song.youtubeId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    
    document.getElementById('song-theme').textContent = song.analysis.theme;
    document.getElementById('song-era').textContent = song.analysis.era;
    document.getElementById('song-emotion').textContent = song.analysis.emotion;
    document.getElementById('song-difficulty').textContent = song.analysis.difficulty;
    
    const hebrewContainer = document.getElementById('hebrew-lyrics');
    const englishContainer = document.getElementById('english-lyrics');
    const transliterationContainer = document.getElementById('transliteration-lyrics');
    
    const createLyricHTML = (lines) => lines.map(line => 
        `<div class="lyric-line ${line === '' ? 'stanza-break' : ''}">${line || ''}</div>`
    ).join('');

    hebrewContainer.innerHTML = createLyricHTML(song.lyrics.hebrew);
    englishContainer.innerHTML = createLyricHTML(song.lyrics.english);
    transliterationContainer.innerHTML = createLyricHTML(song.lyrics.transliteration);

    document.getElementById('song-context').innerHTML = `<p>${song.context.replace(/\n/g, '</p><p>')}</p>`;
    document.getElementById('linguistic-notes').innerHTML = `<p>${song.linguisticNotes.replace(/\n/g, '</p><p>')}</p>`;

    showView('player-section');
}

function showView(viewId) {
    document.getElementById('library-section').style.display = 'none';
    document.getElementById('player-section').style.display = 'none';
    document.getElementById('about-section').style.display = 'none';
    
    document.getElementById(viewId).style.display = 'block';

    document.querySelectorAll('.nav-button').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.nav-button[onclick="showView('${viewId}')"]`).classList.add('active');
    
    window.scrollTo(0, 0);
}
