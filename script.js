/* =========================
   Language Translations
========================= */

const translations = {
  en: {
    navHome: "HOME",
    navEstella: "ESTELLA",
    navContact: "CONTACT",

    heroEyebrow: "Like an apple, simple but not want to be usual.",
    heroTitle: "Hi, I’m Estella Zheng.",
    heroDescription:
      "A communication student exploring digital marketing, brand strategy, and interactive media.",
    enterEstella: "Enter ESTELLA",
    downloadResume: "Download Resume",
    appleHint: "Click the apple to open my photo album.",

    albumEyebrow: "Photo Album",
    albumTitle: "A few pieces of my life",

    estellaEyebrow: "Portfolio Map",
    estellaTitle: "ESTELLA",
    estellaIntro:"On this page, you can see my resume presented under my name through these sections: Education, Skills, Tactics, Experience, Lab, Links, and Achievements",

    educationCard: "Academic background, GPA, GRE, and scores of main courses",
    skillsCard: "Hobbies, use of tools, and language competence.",
    tacticsCard: "Collection of my Planning Proposals, including IBP, Cross-cultural Communication Proposal and so on.",
    experienceCard: "Internships, campus activities, and volunteer experiences.",
    labCard: "Selected works to show my skills, including using of python, tableau, nvivo, wix, and github.",
    linksCard: "Links of videos, Tweets and publications created by me.",
    achievementsCard: "Honors, awards, and certificates.",


    educationTitle: "Education",
    educationIntro:
      "My academic background in communication, media, and marketing-related studies.",
    schoolName: "Communication University of China",
    faculty: "Faculty of International Media",
    degree: "B.A. in Communication",
    educationDate: "2023/09 – 2027/06",
    gpa: "GPA: 3.87 / 4.0",
    averageScore: "Average Score: 93",
    courseTitle: "Major Courses",
    courseStrategicCommunication: "Strategic Communication Fundamentals",
    courseDigitalMarketing: "Digital Media Marketing Strategy",
    courseMediaPsychology: "Media Psychology",
    courseMacroeconomics: "Macroeconomics",
    courseAICommunication: "Artificial Intelligence and Journalism & Communication",
    courseAudiovisualLanguage: "Audiovisual Language",
    courseDataJournalism: "Data Journalism and Data Visualization",
    greTitle: "GRE",
    greQ: "Q: 170",
    greV: "V: 156",

    skillsTitle: "Skills",
    skillsIntro:
      "This section presents my hobbies, use of tools, and language competence.",

    hobbiesTitle: "Hobbies",
    hobbyPhotographyTitle: "Photography",
    hobbyPhotographyCaption: "Taken during a study trip in Italy.",
    hobbyVolleyballTitle: "Volleyball",
    hobbyVolleyballCaption: "The group photo taken after winning the second place in the volleyball competition",
    hobbyMusicTitle: "Art",
    hobbyMusicCaption: "The sketches drawn by me in class.",

    toolsTitle: "Use of Tools",
    toolOne: "Proficient in WPS, Word, and other text-processing tools.",
    toolTwo: "Proficient in Canva, Photoshop, and other image-processing tools.",
    toolThree: "Proficient in Jianying, Premiere Pro, and other video-editing tools.",
    toolFour: "Skilled in using various AI tools.",
    toolFive: "Familiar with programming languages such as Python and able to use Cursor to write relevant code efficiently.",

    languageCompetenceTitle: "Language Competence",
    toeflTitle: "TOEFL",
    toeflScore: "TOEFL: 105",

    tacticsTitle: "Tactics",
    tacticsIntro:
      "This section collects my planning proposals. You can click a cover to open a book-style reader and flip through the project pages.",
    prevSkills: "← Skills",
    readerHint: "Click the page to enlarge it. Click again to return. Use arrows to turn pages.",

    tacticProject1Title: "Murders on the Yangtze River Cross-cultural Communication Proposal",
    tacticProject1Caption:
      "A cross-cultural communication plan for a Chinese detective game, and one of my personal course assignments.",
    tacticProject2Title: "ANTA Kids IBP Plans Book",
    tacticProject2Caption:
      "A group project. I was mainly responsible for the communication plan part.",
    tacticProject3Title: "MONDO Business Plan",
    tacticProject3Caption:
      "A group project. I served as the project leader, and we created a virtual game plan.",
    tacticProject4Title: "China Unicom Animation Contest Proposal",
    tacticProject4Caption:
      "A group project. I wrote the marketing analysis part.",
    tacticProject5Title: "Beer Hop Adoption Marketing Proposal",
    tacticProject5Caption:
      "A group project. I was mainly responsible for the marketing strategy.",
    tacticProject6Title: "Enlight Media Integration Analysis",
    tacticProject6Caption:
      "An analysis of the strategic planning of Enlight Media.",

    experienceTitle: "Experience",
    experienceIntro:
      "This section includes my work, campus, and volunteer experiences. Click each section to expand the details.",
    experienceWorkTitle: "Work Experience",
    experienceWorkMeta: "4 roles in marketing, media, and content.",
    experienceCampusTitle: "Campus Experience",
    experienceCampusMeta: "4 roles in student organizations, liaison, promotion, and content operations",
    experienceVolunteerTitle: "Volunteer Experience",
    experienceVolunteerMeta: "Media support for an international expo",

    expForbesTitle: "Market Intern · Forbes China",
    expForbesMeta: "Shanghai, China · 2026/06 – Present",
    expForbesOne:
      "Assisted in planning and executing online and offline marketing events, including summits, forums, and roadshows; supported pre-event promotion, on-site coordination, and post-event review.",
    expForbesTwo:
      "Maintained guest and client databases, tracked invitation processes and event-data updates, and supported guest communication, information organization, and process follow-up.",
    expForbesThree:
      "Participated in business and finance content planning, helped organize industry materials, compiled English content, and supported in-depth commercial content preparation.",
    expForbesFour:
      "Operated social media accounts and communities, supporting content publishing, user interaction, event promotion, and business-partnership copywriting.",
    expForbesFive:
      "Collected industry updates, competitor information, and market trends, producing reference materials for marketing promotion and content planning.",

    expDataTitle: "Account Executive Intern · Beijing Data Intelligence Technology Co., Ltd.",
    expDataMeta: "Beijing, China · 2025/09 – 2026/01",
    expDataOne:
      "Coordinated promotion requirements with brand clients and creator/media resources, following up on creator content direction, publishing requirements, and review processes.",
    expDataTwo:
      "Reviewed and revised 160+ KOC/KOL drafts during key e-commerce campaigns, including 100+ drafts for Double 11 and 60+ drafts for Double 12.",
    expDataThree:
      "Produced graphic distribution demos to support clients in confirming content formats, visual presentation, and communication paths.",
    expDataFour:
      "Used Pugongying and Taobao Xinghe to organize creator-placement data, prepare settlement sheets, and support closing reports for 618, September Tmall Big Brand Day, Double 11, and Double 12 campaigns.",
    expDataFive:
      "Supported campaign-closing data organization and material summarization to assist in reviewing execution results and improving future creator-placement strategies.",

    expMisifuTitle: "Content Marketing Intern · Suzhou Misifu Cosmetics Co., Ltd.",
    expMisifuMeta: "Jiangsu, China · 2025/07 – 2025/08",
    expMisifuOne:
      "Supported market research and proposal work for new beauty product key visuals and skincare series, analyzing competitor selling points, consumer needs, and visual communication directions.",
    expMisifuTwo:
      "Completed the July Xiaohongshu influencer placement review by summarizing creator content performance, platform feedback, communication effects, and optimization suggestions.",
    expMisifuThree:
      "Edited 2 event flash videos and 2 member interview videos, supporting brand-event communication and user-story presentation.",
    expMisifuFour:
      "Wrote 3 product promotion scripts, refining content expression around product selling points, use scenarios, and target-user needs.",

    expOpeTitle: "Media Intern · OPE, Organization of People Empowerment",
    expOpeMeta: "Online · 2025/05 – 2025/07",
    expOpeOne:
      "Drafted multiple social media posts, one news outreach content piece, and one newsletter to support organizational communication.",
    campusInnovationTitle: "Head of General Operations Department · Innovation & Entrepreneurship Association, CUC",
    campusInnovationMeta: "2024/09 – 2025/09",
    campusInnovationOne:
      "Coordinated internal communication and general operations, supported fall recruitment, and handled duty arrangements between the Youth League Committee and the association.",
    campusInnovationTwo:
      "Served as Material Coordination Team Leader for the CUC Anniversary Carnival.",
    campusInnovationThree:
      "Managed duty scheduling for Future Fantasy Day and Spring Magic Park events.",

    campusSocialTitle: "Exchange and Liaison Officer · CUC Social Service Student Work Committee",
    campusSocialMeta: "2024/03 – 2024/07",
    campusSocialOne:
      "Handled daily liaison work with alumni, alumni enterprises, and social organizations, and followed up on specific coordination tasks during events.",
    campusSocialTwo:
      "Participated in enterprise liaison work for the 2024 Spring Career Fair and connected with 10+ companies.",

    campusImageTitle: "Promotion Department Officer · Chuanshen Imaging Workshop",
    campusImageMeta: "2023/12 – 2024/07",
    campusImageOne:
      "Created daily WeChat official-account posts for the workshop and participated in editing the article for Haishiwan.",
    campusImageTwo:
      "Served as editor for Blank Festival and Chocolate and Tsampa.",

    campusStartupTitle: "Brand Promotion Officer · National Startup Association Leadership Community",
    campusStartupMeta: "2023/12 – 2024/07",
    campusStartupOne:
      "Supported image building, promotion, event planning, and media cooperation for the student entrepreneurship community.",
    campusStartupTwo:
      "Edited promotional copy for the Shandong University Startup Association.",
    volunteerSupplyTitle: "Media Center Volunteer · 1st China International Supply Chain Expo",
    volunteerSupplyMeta: "2023/11 – 2023/12",
    volunteerSupplyOne:
      "Handled media liaison work and supported on-site media services for the opening ceremony of the South Africa Pavilion.",
    volunteerSupplyTwo:
      "Recognized as an Outstanding Volunteer.",

    labTitle: "Lab",
    labIntro:
      "This page shows my experiences in data stories, research pages, and visual experiments. Each piece shows one tool or method I have actually used.",
    labProject1Title: "IMDb Sentiment Lab",
    labProject1Text:
      "A data science course project that uses language models and NLP methods to analyze movie review sentiment.",
    labProject1Tag: "Python · NLP ",
    labProject2Title: "Are China's 'strong female protagonist' Dramas Really Feminist?",
    labProject2Text:
      "An advanced data journalism project looking at whether popular ‘strong heroine’ dramas truly give women narrative power.",
    labProject2Tag: "Data journalism · Web story",
    labProject3Title: "Riding the Boom: Food Delivery Services Drive China's Counties Economy",
    labProject3Text:
      "A Tableau-based final project that turns a data story into an interactive visual narrative.",
    labProject3Tag: "Tableau · Visual storytelling",
    labProject4Title: "Study Plog Qualitative Lab",
    labProject4Text:
      "A qualitative methods paper rebuilt as a research page, showing interview design, NVivo coding, and theory building.",
    labProject4Tag: "NVivo · Qualitative research",
    labProject5Title: "The Cucers",
    labProject5Text:
      "A convergent media reporting project built as a Wix site, combining topic planning, web editing, and visual presentation.",
    labProject5Tag: "Wix · Convergent reporting",
    labProject6Title: "Digital Media Marketing Website Design",
    labProject6Text:
      "A long-form website layout made with Photoshop, focused on visual rhythm, page structure, and brand feeling.",
    labProject6Tag: "Photoshop · Web design",
    webViewerLabel: "Photoshop website design",
    webViewerTitle: "Full layout preview",
    webViewerHint: "Drag to move. Use + / − to zoom. Press Esc to close.",

    linksTitle: "Links",
    linksIntro:
      "A collection of resume files, writing samples, project documents, and future portfolio materials.",
    resumeEnLink: "Download English Resume",
    resumeCnLink: "Download Chinese Resume",
    portfolioLink: "Portfolio PDF / Project Documents",
    githubLink: "GitHub",
    writingLink: "Writing Samples",
    emailLink: "Email Me",

    achievementsTitle: "Achievements",
    achievementsIntro:
      "Academic, project, competition, and certification highlights.",
    achievementGpa: "GPA",
    achievementToefl: "TOEFL Score",
    achievementScholarship: "Third-Class Undergraduate Scholarship",
    achievementMerit: "Merit Student, Communication University of China",
    achievementDesign: "Excellence Award, National New Youth Design Competition",
    achievementVideo:
      'Excellent Work, "100 Reasons to Love Beijing" Short Video Competition',
    achievementCertificate:
      "National Certificate of Professional Skills in Market Research and Analysis",
    achievementPublication:
      "Publication: The Power of Loss Aversion: Enhancing Customer Engagement and Retention in Business",

    contactTitle: "Let’s connect.",
    contactIntro:
      "Feel free to contact me for academic, internship, or project opportunities.",
    contactEmail: "Email",
    contactPhone: "Phone",
    contactLocation: "Location",
    contactLocationText: "Beijing / Suzhou, China",

    backLabel: "Back",
    backEstella: "← ESTELLA",
    backTactics: "← Tactics",
    backExperience: "← Experience",
    prevLabel: "Previous",
    prevEducation: "← Education",
    nextLabel: "Next",
    nextSkills: "Skills →",
    nextTactics: "Tactics →",
    nextExperience: "Experience →",
    nextLab: "Lab →",
    nextLinks: "Links →",
    nextAchievements: "Achievements →",
    nextEstella: "ESTELLA →",
linksTitle: "Links",
  linksIntro: "A curated set of videos, WeChat posts, and academic writing that record the work I have made outside the classroom.",
  linksVideoSection: "Videos",
  linksVideoMeta: "Vlogs, edits, interviews, and short films",
  linksIndependentTitle: "Independent production",
  linksEditTitle: "Video edits",
  linksInterviewTitle: "News interview videos",
  linksShortFilmTitle: "Short films",
  videoTravelRole: "Travel vlog",
  videoTravelOneTitle: "Variable, Part One | A boring but funny video",
  videoTravelOneText: "Shot and edited independently.",
  videoTravelTwoTitle: "Notes from a Rural Trip | Pingnan, Fujian",
  videoTravelTwoText: "A travel record from Pingnan, Fujian.",
  videoEditRole: "Fan edit",
  videoEditOneTitle: "Hu Xianxu Fan Edit | Young, good-looking, and full of chemistry",
  videoEditOneText: "A rhythm-based montage edited around character charm and CP moments.",
  videoDirectorRole: "Director",
  videoEditorRole: "Editor",
  videoInterviewOneTitle: "Beijing Kids | News Interview Assignment",
  videoInterviewOneText: "A news interview project directed by me.",
  videoInterviewTwoTitle: "Years Later, I Finally Interviewed My Choir Teacher",
  videoInterviewTwoText: "A warm interview video edited by me.",
  videoDirectorEditorRole: "Director · Editor",
  videoProducerEditorRole: "Producer · Editor",
  videoFilmOneTitle: "Letter | A two-way journey through history",
  videoFilmOneText: "A short film imagining Li Dazhao travelling into the present.",
  videoFilmTwoTitle: "When Cards Meet The Book of Answers",
  videoFilmTwoText: "A short film where I worked on production and editing.",
  linksPostSection: "WeChat Posts",
  linksPostMeta: "Edited articles and posts I was responsible for",
  linksEditedPostsTitle: "Edited by me",
  linksResponsiblePostsTitle: "Responsible editor",
  postEditorRole: "Editor",
  postEditOneTitle: "Edited WeChat Post 01 | Visual storytelling and campus culture",
  postEditOneText: "A WeChat article edited and polished by me.",
  postEditTwoTitle: "Edited WeChat Post 02 | Feature article editing",
  postEditTwoText: "A second article where I supported editing and content presentation.",
  postResponsibleRole: "Responsible editor",
  postResponsibleOneTitle: "Responsible Editor Work 01 | Article planning and final review",
  postResponsibleOneText: "A post where I took responsibility for editorial coordination.",
  postResponsibleTwoTitle: "Responsible Editor Work 02 | Feature post coordination",
  postResponsibleTwoText: "A feature post where I handled final editing and presentation.",
  linksPaperSection: "Paper",
  linksPaperMeta: "Academic writing on business and consumer psychology",
  paperRole: "Published paper",
  paperOneTitle: "The Power of Loss Aversion: Enhancing Customer Engagement and Retention in Business",
  paperOneText: "A paper on behavioral economics, advertising strategy, and brand loyalty.",
  backLab: "← Lab",
    achievementsTitle: "Achievements",
    achievementsIntro: "A gallery of awards, certificates, and recognitions from competitions, campus work, research, and public-service projects.",
    achievementPortraitSection: "Awards & Certificates",
    achievementLandscapeSection: "Selected Certificates",
    achievementImageHint: "Click an image to view it larger.",
    award1Title: "National Advertising Art Design Competition for College Students, Beijing Division — Second Prize",
    award2Title: "United Nations Leadership Program Certificate",
    award3Title: "Ping An Caimeng Cup College Students' Financial Literacy Competition — First Prize in Preliminary Round",
    award4Title: "100 Reasons to Love Beijing Short Video Competition — Excellent Work",
    award5Title: "Outstanding Volunteer Service Certificate of China International Supply Chain Expo",
    award6Title: "Communication University of China Third-Class Undergraduate Scholarship",
    award7Title: "Merit Student, Communication University of China",
    award8Title: "National Market Research and Analysis Specialized Skills Certificate",
    award9Title: "National College Students Market Research and Analysis Competition — Third Prize at University Level",
    award10Title: "Communication University of China Summer Social Practice — Third Prize",
    award11Title: "Guochao New Youth Design Competition — Excellent Work",
    achievementViewerLabel: "Certificate preview",
    achievementViewerHint: "Click outside or press Esc to close.",
    backLinks: "← Links"

  },

  zh: {
    navHome: "首页",
    navEstella: "ESTELLA",
    navContact: "联系",

    heroEyebrow: "保持纯粹，保持野心",
    heroTitle: "你好，我是郑珞洁",
    heroDescription:
      "目前就读于中国传媒大学传播学专业，渴望探索更多有关数字营销、品牌策略与媒体互动的一切",
    enterEstella: "进入 ESTELLA页面",
    downloadResume: "下载我的简历",
    appleHint: "点击苹果，查看我的生活碎片",


    albumEyebrow: "相册",
    albumTitle: "一些关于我的记录",

    estellaEyebrow: "导航",
    estellaTitle: "ESTELLA",
    estellaIntro:"这一页，我用我的英文名将我的简历分成了以下几个部分：教育背景、核心技能、策划合集、实践经历、作品实验室、链接合集和获奖情况。",

    educationCard: "我的大学、绩点、GRE以及主要课程的成绩",
    skillsCard: "爱好、工具掌握与语言能力",
    tacticsCard: "我的策划案合集，包含整合营销策划案、跨文化传播策划案等",
    experienceCard: "我的实习经历、在校经历以及志愿经历",
    labCard: "一些创造性作品，展现我对python、tableau、wix、github等工具的使用能力",
    linksCard: "我的视频、推文以及论文链接",
    achievementsCard: "所获奖项、表彰以及证书",


    educationTitle: "教育背景",
    educationIntro:
      "我的本科专业背景集中在传播、媒体与营销相关方向。",
    schoolName: "中国传媒大学",
    faculty: "国际传媒教育学院",
    degree: "传播学本科",
    educationDate: "2023/09 – 2027/06",
    gpa: "绩点：3.87 / 4.0",
    averageScore: "均分：93",
    courseTitle: "主要课程",
    courseStrategicCommunication: "战略性传播基础",
    courseDigitalMarketing: "数字媒体营销策略",
    courseMediaPsychology: "媒介心理学",
    courseMacroeconomics: "宏观经济学",
    courseAICommunication: "人工智能与新闻传播",
    courseAudiovisualLanguage: "视听语言",
    courseDataJournalism: "数据新闻与数据可视化",
    greTitle: "GRE",
    greQ: "数学：170（满分）",
    greV: "语言：156",

    skillsTitle: "核心技能",
    skillsIntro:
      "这一部分展示我的爱好、工具掌握与语言能力。",

    hobbiesTitle: "爱好",
    hobbyPhotographyTitle: "摄影",
    hobbyPhotographyCaption: "意大利研学时拍摄",
    hobbyVolleyballTitle: "排球",
    hobbyVolleyballCaption: "和校女排队一同出征区级比赛并获得第二名时的合照",
    hobbyMusicTitle: "美术",
    hobbyMusicCaption: "在课上画的素描画",

    toolsTitle: "工具掌握",
    toolOne: "熟练掌握 WPS、Word 等文字处理工具。",
    toolTwo: "熟练掌握可画、PS 等图像处理工具。",
    toolThree: "熟练掌握剪映、PR 等视频处理工具。",
    toolFour: "熟练运用各类 AI 工具。",
    toolFive: "掌握编程语言如 Python，能够熟练运用 Cursor 撰写相关代码。",

    languageCompetenceTitle: "语言能力",
    toeflTitle: "托福",
    toeflScore: "托福：105",

    tacticsTitle: "策划案合集",
    tacticsIntro:
      "这一部分汇总了我的各类策划案。点击封面即可打开阅读窗口",
    prevSkills: "← 核心技能",
    readerHint: "点击页面可以放大阅读，再点一次恢复；也可以使用左右箭头翻页。",

    tacticProject1Title: "《山河旅探》跨文化传播策划案",
    tacticProject1Caption:
      "关于国风推理游戏的跨文化传播策划案，也是我的个人课程作业之一。",
    tacticProject2Title: "ANTA Kids IBP Plans Book",
    tacticProject2Caption:
      "小组合作完成的全英整合品牌推广策划案，我主要负责其中的传播方案部分。",
    tacticProject3Title: "MONDO 大学生创业计划书",
    tacticProject3Caption:
      "小组合作完成的创业计划书，我担任项目负责人，与团队共同构想了一个虚拟游戏方案。",
    tacticProject4Title: "中国联通动画创作大赛策划案",
    tacticProject4Caption:
      "小组合作完成的活动策划案，我负责撰写其中的市场分析部分。",
    tacticProject5Title: "双合盛「领养一株啤酒花」营销创意报告",
    tacticProject5Caption:
      "小组合作完成的营销创意报告，我主要负责其中的营销策略部分。",
    tacticProject6Title: "光线传媒整合分析报告",
    tacticProject6Caption:
      "关于光线传媒战略规划与整合布局的分析报告。",

    experienceTitle: "实践经历",
    experienceIntro:
      "包含工作经历、在校经历和志愿经历，点击右侧小箭头可展开查看详细内容。",
    experienceWorkTitle: "工作经历",
    experienceWorkMeta: "4 段市场、媒介与内容策划相关实习经历",
    experienceCampusTitle: "在校经历",
    experienceCampusMeta: "4 段学生组织、联络统筹、宣推相关经历",
    experienceVolunteerTitle: "志愿经历",
    experienceVolunteerMeta: "国际展会媒体中心志愿服务",
   backTactics: "← 策划案合集",

    expForbesTitle: "市场部实习生 · 福布斯中国",
    expForbesMeta: "上海，中国 · 2026/06 – 至今",
    expForbesOne:
      "协助策划并执行线上线下市场活动，包括峰会、论坛、路演等项目，参与前期宣传协调、现场支持及后期效果复盘。",
    expForbesTwo:
      "维护嘉宾及客户资料库，跟进邀约流程与活动数据更新，支持活动嘉宾沟通、信息整理和流程推进。",
    expForbesThree:
      "参与商业财经类内容选题策划，协助整理行业资料、编译英文稿件及商业领域深度内容。",
    expForbesFour:
      "运营社交媒体账号及社群，协助完成内容发布、用户互动、活动传播及商务合作文案撰写。",
    expForbesFive:
      "收集行业动态、竞品信息与市场趋势，整理并输出相关分析材料，为市场推广和内容策划提供支持。",

    expDataTitle: "AE 实习生 · 北京数聚智联科技股份有限公司",
    expDataMeta: "北京，中国 · 2025/09 – 2026/01",
    expDataOne:
      "对接品牌方推广需求与媒介资源，协助推进达人营销项目执行，负责沟通达人内容方向、发布要求及审稿流程。",
    expDataTwo:
      "在双十一、双十二等重点电商营销节点中，累计完成 160+ 篇 KOC/KOL 内容审稿与修改反馈，其中双十一期间完成 100+ 篇，双十二期间完成 60+ 篇。",
    expDataThree:
      "协助制作宣传期图文分发 Demo，参与内容视觉呈现、传播路径和发布形式的整理，为客户确认推广方案提供支持。",
    expDataFour:
      "熟练使用蒲公英平台与淘宝星河平台，协助整理达人投放数据、制作结算单，并参与完成 618、9 月天猫大牌日、双十一、双十二等多场电商营销活动结案工作。",
    expDataFive:
      "支持活动结案报告的数据整理与资料汇总，协助复盘项目执行效果，为后续品牌推广和达人投放优化提供参考。",

    expMisifuTitle: "内容策划实习生 · 苏州蜜思肤化妆品股份有限公司",
    expMisifuMeta: "江苏，中国 · 2025/07 – 2025/08",
    expMisifuOne:
      "参与新品美妆 KV 及护肤系列产品的市场调研与提案支持，协助梳理竞品卖点、消费者需求及视觉传播方向。",
    expMisifuTwo:
      "完成 7 月小红书达人投放复盘，整理达人内容表现、平台反馈与传播效果，协助评估投放质量并总结后续优化方向。",
    expMisifuThree:
      "独立剪辑 2 条活动宣传快闪视频及 2 条会员访谈视频，支持品牌活动传播与用户故事内容呈现。",
    expMisifuFour:
      "撰写 3 篇产品推广脚本，围绕产品卖点、使用场景及目标用户需求进行内容表达。",

    expOpeTitle: "媒介实习生 · OPE（Organization of People Empowerment）",
    expOpeMeta: "线上 · 2025/05 – 2025/07",
    expOpeOne:
      "撰写多条社媒稿件、1 条 news outreach content 和 1 条 newsletter。",
    campusInnovationTitle: "综合运营部负责人 · 中国传媒大学创新创业协会",
    campusInnovationMeta: "2024/09 – 2025/09",
    campusInnovationOne:
      "作为综合运营部部长，负责协会内上传下达与统筹工作，参与秋季招新，负责团委与协会内值班工作。",
    campusInnovationTwo:
      "在“白杨创汇·校庆狂欢节”担任物资统筹组组长。",
    campusInnovationThree:
      "在“白杨创汇·未来幻想日”与“白杨创汇·春日魔法乐园”负责值班排班工作。",

    campusSocialTitle: "交流联络部干事 · 中国传媒大学社会服务学生工作委员会",
    campusSocialMeta: "2024/03 – 2024/07",
    campusSocialOne:
      "负责日常联络工作，包括联络各级校友、校友企业与社会组织，并在各项活动中跟进具体对接工作。",
    campusSocialTwo:
      "参与 2024 春季双选会企业联络工作，与 10 余家公司建联。",

    campusImageTitle: "宣推部干事 · 传神影像工作坊",
    campusImageMeta: "2023/12 – 2024/07",
    campusImageOne:
      "负责工作坊公众号日常推文制作，参与《海石湾》推文编辑工作。",
    campusImageTwo:
      "参与《空白祭》《巧克力与酥油花》责编工作。",

    campusStartupTitle: "品牌推广部干事 · 全国创协领袖共同体",
    campusStartupMeta: "2023/12 – 2024/07",
    campusStartupOne:
      "主要负责全国创联的形象塑造、宣传推广、活动策划、媒体合作等工作。",
    campusStartupTwo:
      "参与制作“山东大学创协”宣传推文文字编辑工作。",
    volunteerSupplyTitle: "媒体中心志愿者 · 首届中国国际供应链促进博览会",
    volunteerSupplyMeta: "2023/11 – 2023/12",
    volunteerSupplyOne:
      "负责媒体联络工作，参与南非馆开馆仪式现场媒体维护工作。",
    volunteerSupplyTwo:
      "获优秀志愿者表彰。",

    labTitle: "作品实验室",
    labIntro:
      "此处包含制作过的一些网站及设计，展现我对python、tableau、wix、github及ps等工具的使用能力",
    labProject1Title: "IMDb 电影评论情感分析",
    labProject1Text:
      "Data Science课程项目，用大语言模型和 NLP 方法分析电影评论的情感倾向。",
    labProject1Tag: "Python · 大语言模型",
    labProject2Title: "爆火的大女主剧，真的大女主吗？",
    labProject2Text:
      "从数据和叙事角度看“大女主剧”是否真正将女性放在故事中心。",
    labProject2Tag: "数据新闻 · 网页叙事",
    labProject3Title: "县域经济与外卖零售经济",
    labProject3Text:
      "用 Tableau 做成的交互式数据故事。",
    labProject3Tag: "Tableau · 可视化叙事",
    labProject4Title: "学习 plog 定性研究可视化",
    labProject4Text:
      "运用定性研究方法，展示访谈设计、NVivo 编码和理论模型搭建。",
    labProject4Tag: "NVivo · 定性研究",
    labProject5Title: "The Cucers",
    labProject5Text:
      "用 Wix 搭建专题网站，呈现选题策划、内容编辑和页面表达。",
    labProject5Tag: "Wix · 融合报道",
    labProject6Title: "数字媒体营销策略网站设计",
    labProject6Text:
      "用 Photoshop 完成的长页面网站设计，重点展示页面节奏、视觉审美和品牌呈现能力。",
    labProject6Tag: "Photoshop · 网站设计",
    webViewerLabel: "Photoshop 网站设计",
    webViewerTitle: "完整图片预览",
    webViewerHint: "拖动图片可移动，点击 + / − 可缩放，按 Esc 关闭。",

    linksTitle: "链接合集",
    linksIntro:
      "这里包含了我的视频、推文、论文等作品链接",
    resumeEnLink: "下载英文简历",
    resumeCnLink: "下载中文简历",
    portfolioLink: "作品集 PDF / 项目文档",
    githubLink: "GitHub",
    writingLink: "写作样本",
    emailLink: "给我发邮件",

    achievementsTitle: "阶段成果",
    achievementsIntro:
      "我的学术、项目、竞赛和证书亮点。",
    achievementGpa: "本科 GPA",
    achievementToefl: "托福成绩",
    achievementScholarship: "优秀本科生三等奖学金",
    achievementMerit: "中国传媒大学校三好学生",
    achievementDesign: "国潮新青年设计大赛优秀奖",
    achievementVideo: "“爱上北京的100个理由”短视频征集大赛优秀作品",
    achievementCertificate: "全国市场调查与分析专业技能证书",
    achievementPublication:
      "发表论文：The Power of Loss Aversion: Enhancing Customer Engagement and Retention in Business",

    contactTitle: "欢迎联系我。",
    contactIntro:
      "如果有学术、实习或项目合作机会，欢迎与我联系。",
    contactEmail: "邮箱",
    contactPhone: "电话",
    contactLocation: "所在地",
    contactLocationText: "北京 / 苏州，中国",

    backLabel: "返回",
    backEstella: "← ESTELLA",
    backExperience: "← 实践经历",
    prevLabel: "上一页",
    prevEducation: "← 教育背景",
    nextLabel: "下一页",
    nextSkills: "核心技能 →",
    nextTactics: "策略方法 →",
    nextExperience: "实践经历 →",
    nextLab: "作品实验室 →",
    nextLinks: "相关链接 →",
    nextAchievements: "阶段成果 →",
    nextEstella: "ESTELLA →",
linksTitle: "链接合集",
  linksIntro: "这里整理了我做过的视频、推文和论文。",
  linksVideoSection: "视频",
  linksVideoMeta: "旅行记录、混剪、新闻采访和微电影",
  linksIndependentTitle: "独立制作",
  linksEditTitle: "混剪",
  linksInterviewTitle: "新闻采访视频",
  linksShortFilmTitle: "微电影",
  videoTravelRole: "旅行 vlog",
  videoTravelOneTitle: "《变数（上）》｜一个无聊又好笑的视频",
  videoTravelOneText: "独立完成拍摄与剪辑。",
  videoTravelTwoTitle: "《乡行散记》｜福建屏南《上春山》",
  videoTravelTwoText: "关于福建屏南的一段旅行影像记录。",
  videoEditRole: "混剪",
  videoEditOneTitle: "我胡先煦，“年轻又貌美”，CP 多点怎么啦？",
  videoEditOneText: "围绕人物魅力和 CP 片段完成的节奏向混剪。",
  videoDirectorRole: "担任导演",
  videoEditorRole: "担任剪辑",
  videoInterviewOneTitle: "《北京孩子》｜新闻采访作业",
  videoInterviewOneText: "由我担任导演的新闻采访视频。",
  videoInterviewTwoTitle: "时隔多年，我终于采访到了我的合唱老师……",
  videoInterviewTwoText: "由我担任剪辑的温情采访视频。",
  videoDirectorEditorRole: "担任导演、剪辑",
  videoProducerEditorRole: "担任制片、剪辑",
  videoFilmOneTitle: "《来信》｜与历史的一次双向穿越",
  videoFilmOneText: "关于李大钊现代之旅的微电影。",
  videoFilmTwoTitle: "当牌遇上答案之书",
  videoFilmTwoText: "一支由我参与制片和剪辑的微电影作品。",
  linksPostSection: "推文",
  linksPostMeta: "参与编辑与责编的微信公众号作品",
  linksEditedPostsTitle: "编辑",
  linksResponsiblePostsTitle: "责编",
  postEditorRole: "编辑",
  postEditOneTitle: "《海石湾》：时代的遗迹与遗民",
  postEditOneText: "由我参与编辑和文字打磨的微信公众号推文。",
  postEditTwoTitle: "全国优秀高校创协展示（二）：山东大学学生创新创业协会",
  postEditTwoText: "由我参与内容编辑和呈现优化的推文。",
  postResponsibleRole: "责编",
  postResponsibleOneTitle: "对话《空白祭》导演：失落在历史中的人与音符",
  postResponsibleOneText: "一篇由我负责编辑统筹的推文。",
  postResponsibleTwoTitle: "影约超前点映 | 《巧克力和酥油花》：追逐心愿的旅程",
  postResponsibleTwoText: "由我负责内容整理、编辑和呈现的专题推文。",
  linksPaperSection: "论文",
  linksPaperMeta: "关于商业传播与消费者心理的英文论文",
  paperRole: "已发表论文",
  paperOneTitle: "The Power of Loss Aversion: Enhancing Customer Engagement and Retention in Business",
  paperOneText: "一篇关于损失厌恶、广告策略与品牌忠诚的英文论文。",
  backLab: "← 作品实验室",
    achievementsTitle: "阶段成果",
    achievementsIntro: "这里陈列我的奖项、证书与项目表彰，包含竞赛、校园荣誉、专业技能和志愿服务经历。",
    achievementPortraitSection: "奖项与证书",
    achievementLandscapeSection: "横版证书",
    achievementImageHint: "点击图片可以放大查看。",
    award1Title: "全国大学生广告艺术大赛北京赛区二等奖",
    award2Title: "联合国领导力项目证书",
    award3Title: "平安财萌杯大学生财经素养大赛初赛一等奖",
    award4Title: "爱上北京的100个理由短视频大赛优秀作品",
    award5Title: "中国国际供应链促进博览会优秀志愿者证书",
    award6Title: "中国传媒大学本科生三等奖学金",
    award7Title: "中国传媒大学三好学生",
    award8Title: "全国市场调查与分析专业技能证书",
    award9Title: "全国大学生市场调查与分析大赛校三等奖",
    award10Title: "中国传媒大学暑期社会实践三等奖",
    award11Title: "国潮新青年设计大赛优秀作品",
    achievementViewerLabel: "证书预览",
    achievementViewerHint: "点击空白处或按 Esc 关闭。",
    backLinks: "← 链接合集"
  }
};

/* =========================
   Language Switch
========================= */

const languageToggle = document.getElementById("languageToggle");

let currentLanguage = localStorage.getItem("language") || "en";

function applyLanguage(language) {
  currentLanguage = language;
  localStorage.setItem("language", currentLanguage);

  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach((element) => {
    const key = element.getAttribute("data-i18n");

    if (translations[currentLanguage] && translations[currentLanguage][key]) {
      element.textContent = translations[currentLanguage][key];
    }
  });

  if (languageToggle) {
    languageToggle.textContent = currentLanguage === "en" ? "中文" : "EN";
  }

  document.documentElement.lang = currentLanguage === "en" ? "en" : "zh";
}

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    const nextLanguage = currentLanguage === "en" ? "zh" : "en";
    applyLanguage(nextLanguage);
  });
}

applyLanguage(currentLanguage);


/* =========================
   Photo Album Modal
========================= */

const appleButton = document.getElementById("appleButton");
const albumModal = document.getElementById("albumModal");
const albumBackdrop = document.getElementById("albumBackdrop");
const albumClose = document.getElementById("albumClose");
const albumImage = document.getElementById("albumImage");
const prevPhoto = document.getElementById("prevPhoto");
const nextPhoto = document.getElementById("nextPhoto");
const albumCounter = document.getElementById("albumCounter");
const albumDots = document.querySelectorAll(".album-dot");

const photos = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg"
];

let currentPhotoIndex = 0;

function updateAlbum() {
  if (!albumImage || !albumCounter) return;

  albumImage.src = photos[currentPhotoIndex];
  albumCounter.textContent = `${currentPhotoIndex + 1} / ${photos.length}`;

  albumDots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentPhotoIndex);
  });
}

function openAlbum() {
  if (!albumModal) return;

  albumModal.classList.remove("hidden");
  document.body.classList.add("no-scroll");
  updateAlbum();
}

function closeAlbum() {
  if (!albumModal) return;

  albumModal.classList.add("hidden");
  document.body.classList.remove("no-scroll");
}

function showPrevPhoto() {
  currentPhotoIndex =
    currentPhotoIndex === 0 ? photos.length - 1 : currentPhotoIndex - 1;

  updateAlbum();
}

function showNextPhoto() {
  currentPhotoIndex =
    currentPhotoIndex === photos.length - 1 ? 0 : currentPhotoIndex + 1;

  updateAlbum();
}

if (appleButton) {
  appleButton.addEventListener("click", openAlbum);
}

if (albumClose) {
  albumClose.addEventListener("click", closeAlbum);
}

if (albumBackdrop) {
  albumBackdrop.addEventListener("click", closeAlbum);
}

if (prevPhoto) {
  prevPhoto.addEventListener("click", showPrevPhoto);
}

if (nextPhoto) {
  nextPhoto.addEventListener("click", showNextPhoto);
}

albumDots.forEach((dot) => {
  dot.addEventListener("click", () => {
    currentPhotoIndex = Number(dot.dataset.index);
    updateAlbum();
  });
});

document.addEventListener("keydown", (event) => {
  if (!albumModal || albumModal.classList.contains("hidden")) return;

  if (event.key === "Escape") {
    closeAlbum();
  }

  if (event.key === "ArrowLeft") {
    showPrevPhoto();
  }

  if (event.key === "ArrowRight") {
    showNextPhoto();
  }
});

/* =========================
   Tactics Book Reader
========================= */

const tacticsProjects = [
  {
    "slug": "shanhe",
    "orientation": "portrait",
    "titleKey": "tacticProject1Title",
    "captionKey": "tacticProject1Caption",
    "pages": [
      "tactics-pages/shanhe/page-001.jpg",
      "tactics-pages/shanhe/page-002.jpg",
      "tactics-pages/shanhe/page-003.jpg",
      "tactics-pages/shanhe/page-004.jpg",
      "tactics-pages/shanhe/page-005.jpg",
      "tactics-pages/shanhe/page-006.jpg",
      "tactics-pages/shanhe/page-007.jpg",
      "tactics-pages/shanhe/page-008.jpg",
      "tactics-pages/shanhe/page-009.jpg",
      "tactics-pages/shanhe/page-010.jpg",
      "tactics-pages/shanhe/page-011.jpg",
      "tactics-pages/shanhe/page-012.jpg",
      "tactics-pages/shanhe/page-013.jpg",
      "tactics-pages/shanhe/page-014.jpg",
      "tactics-pages/shanhe/page-015.jpg",
      "tactics-pages/shanhe/page-016.jpg"
    ]
  },
  {
    "slug": "anta",
    "orientation": "portrait",
    "titleKey": "tacticProject2Title",
    "captionKey": "tacticProject2Caption",
    "pages": [
      "tactics-pages/anta/page-001.jpg",
      "tactics-pages/anta/page-002.jpg",
      "tactics-pages/anta/page-003.jpg",
      "tactics-pages/anta/page-004.jpg",
      "tactics-pages/anta/page-005.jpg",
      "tactics-pages/anta/page-006.jpg",
      "tactics-pages/anta/page-007.jpg",
      "tactics-pages/anta/page-008.jpg",
      "tactics-pages/anta/page-009.jpg",
      "tactics-pages/anta/page-010.jpg",
      "tactics-pages/anta/page-011.jpg",
      "tactics-pages/anta/page-012.jpg",
      "tactics-pages/anta/page-013.jpg",
      "tactics-pages/anta/page-014.jpg",
      "tactics-pages/anta/page-015.jpg",
      "tactics-pages/anta/page-016.jpg",
      "tactics-pages/anta/page-017.jpg",
      "tactics-pages/anta/page-018.jpg",
      "tactics-pages/anta/page-019.jpg",
      "tactics-pages/anta/page-020.jpg",
      "tactics-pages/anta/page-021.jpg",
      "tactics-pages/anta/page-022.jpg",
      "tactics-pages/anta/page-023.jpg",
      "tactics-pages/anta/page-024.jpg",
      "tactics-pages/anta/page-025.jpg",
      "tactics-pages/anta/page-026.jpg"
    ]
  },
  {
    "slug": "mondo",
    "orientation": "portrait",
    "titleKey": "tacticProject3Title",
    "captionKey": "tacticProject3Caption",
    "pages": [
      "tactics-pages/mondo/page-001.jpg",
      "tactics-pages/mondo/page-002.jpg",
      "tactics-pages/mondo/page-003.jpg",
      "tactics-pages/mondo/page-004.jpg",
      "tactics-pages/mondo/page-005.jpg",
      "tactics-pages/mondo/page-006.jpg",
      "tactics-pages/mondo/page-007.jpg",
      "tactics-pages/mondo/page-008.jpg",
      "tactics-pages/mondo/page-009.jpg",
      "tactics-pages/mondo/page-010.jpg",
      "tactics-pages/mondo/page-011.jpg",
      "tactics-pages/mondo/page-012.jpg",
      "tactics-pages/mondo/page-013.jpg",
      "tactics-pages/mondo/page-014.jpg",
      "tactics-pages/mondo/page-015.jpg",
      "tactics-pages/mondo/page-016.jpg",
      "tactics-pages/mondo/page-017.jpg",
      "tactics-pages/mondo/page-018.jpg",
      "tactics-pages/mondo/page-019.jpg",
      "tactics-pages/mondo/page-020.jpg",
      "tactics-pages/mondo/page-021.jpg",
      "tactics-pages/mondo/page-022.jpg"
    ]
  },
  {
    "slug": "unicom",
    "orientation": "portrait",
    "titleKey": "tacticProject4Title",
    "captionKey": "tacticProject4Caption",
    "pages": [
      "tactics-pages/unicom/page-001.jpg",
      "tactics-pages/unicom/page-002.jpg",
      "tactics-pages/unicom/page-003.jpg",
      "tactics-pages/unicom/page-004.jpg",
      "tactics-pages/unicom/page-005.jpg",
      "tactics-pages/unicom/page-006.jpg",
      "tactics-pages/unicom/page-007.jpg",
      "tactics-pages/unicom/page-008.jpg",
      "tactics-pages/unicom/page-009.jpg",
      "tactics-pages/unicom/page-010.jpg",
      "tactics-pages/unicom/page-011.jpg",
      "tactics-pages/unicom/page-012.jpg",
      "tactics-pages/unicom/page-013.jpg",
      "tactics-pages/unicom/page-014.jpg",
      "tactics-pages/unicom/page-015.jpg",
      "tactics-pages/unicom/page-016.jpg",
      "tactics-pages/unicom/page-017.jpg",
      "tactics-pages/unicom/page-018.jpg",
      "tactics-pages/unicom/page-019.jpg",
      "tactics-pages/unicom/page-020.jpg",
      "tactics-pages/unicom/page-021.jpg",
      "tactics-pages/unicom/page-022.jpg",
      "tactics-pages/unicom/page-023.jpg",
      "tactics-pages/unicom/page-024.jpg",
      "tactics-pages/unicom/page-025.jpg",
      "tactics-pages/unicom/page-026.jpg",
      "tactics-pages/unicom/page-027.jpg",
      "tactics-pages/unicom/page-028.jpg",
      "tactics-pages/unicom/page-029.jpg",
      "tactics-pages/unicom/page-030.jpg",
      "tactics-pages/unicom/page-031.jpg",
      "tactics-pages/unicom/page-032.jpg"
    ]
  },
  {
    "slug": "beer",
    "orientation": "landscape",
    "titleKey": "tacticProject5Title",
    "captionKey": "tacticProject5Caption",
    "pages": [
      "tactics-pages/beer/page-001.jpg",
      "tactics-pages/beer/page-002.jpg",
      "tactics-pages/beer/page-003.jpg",
      "tactics-pages/beer/page-004.jpg",
      "tactics-pages/beer/page-005.jpg",
      "tactics-pages/beer/page-006.jpg",
      "tactics-pages/beer/page-007.jpg",
      "tactics-pages/beer/page-008.jpg",
      "tactics-pages/beer/page-009.jpg",
      "tactics-pages/beer/page-010.jpg",
      "tactics-pages/beer/page-011.jpg",
      "tactics-pages/beer/page-012.jpg",
      "tactics-pages/beer/page-013.jpg",
      "tactics-pages/beer/page-014.jpg",
      "tactics-pages/beer/page-015.jpg",
      "tactics-pages/beer/page-016.jpg",
      "tactics-pages/beer/page-017.jpg",
      "tactics-pages/beer/page-018.jpg",
      "tactics-pages/beer/page-019.jpg",
      "tactics-pages/beer/page-020.jpg",
      "tactics-pages/beer/page-021.jpg",
      "tactics-pages/beer/page-022.jpg",
      "tactics-pages/beer/page-023.jpg",
      "tactics-pages/beer/page-024.jpg",
      "tactics-pages/beer/page-025.jpg",
      "tactics-pages/beer/page-026.jpg",
      "tactics-pages/beer/page-027.jpg",
      "tactics-pages/beer/page-028.jpg",
      "tactics-pages/beer/page-029.jpg",
      "tactics-pages/beer/page-030.jpg",
      "tactics-pages/beer/page-031.jpg",
      "tactics-pages/beer/page-032.jpg",
      "tactics-pages/beer/page-033.jpg",
      "tactics-pages/beer/page-034.jpg",
      "tactics-pages/beer/page-035.jpg",
      "tactics-pages/beer/page-036.jpg",
      "tactics-pages/beer/page-037.jpg",
      "tactics-pages/beer/page-038.jpg",
      "tactics-pages/beer/page-039.jpg",
      "tactics-pages/beer/page-040.jpg",
      "tactics-pages/beer/page-041.jpg",
      "tactics-pages/beer/page-042.jpg",
      "tactics-pages/beer/page-043.jpg",
      "tactics-pages/beer/page-044.jpg",
      "tactics-pages/beer/page-045.jpg",
      "tactics-pages/beer/page-046.jpg",
      "tactics-pages/beer/page-047.jpg",
      "tactics-pages/beer/page-048.jpg"
    ]
  },
  {
    "slug": "guangxian",
    "orientation": "landscape",
    "titleKey": "tacticProject6Title",
    "captionKey": "tacticProject6Caption",
    "pages": [
      "tactics-pages/guangxian/page-001.jpg",
      "tactics-pages/guangxian/page-002.jpg",
      "tactics-pages/guangxian/page-003.jpg",
      "tactics-pages/guangxian/page-004.jpg",
      "tactics-pages/guangxian/page-005.jpg",
      "tactics-pages/guangxian/page-006.jpg",
      "tactics-pages/guangxian/page-007.jpg",
      "tactics-pages/guangxian/page-008.jpg",
      "tactics-pages/guangxian/page-009.jpg",
      "tactics-pages/guangxian/page-010.jpg",
      "tactics-pages/guangxian/page-011.jpg",
      "tactics-pages/guangxian/page-012.jpg",
      "tactics-pages/guangxian/page-013.jpg",
      "tactics-pages/guangxian/page-014.jpg",
      "tactics-pages/guangxian/page-015.jpg",
      "tactics-pages/guangxian/page-016.jpg",
      "tactics-pages/guangxian/page-017.jpg",
      "tactics-pages/guangxian/page-018.jpg"
    ]
  }
];

const tacticsReader = document.getElementById("tacticsReader");
const tacticsReaderBackdrop = document.getElementById("tacticsReaderBackdrop");
const readerTitle = document.getElementById("readerTitle");
const readerMeta = document.getElementById("readerMeta");
const readerPage = document.getElementById("readerPage");
const readerPageFrame = document.getElementById("readerPageFrame");
const readerCaption = document.getElementById("readerCaption");
const readerProgressBar = document.getElementById("readerProgressBar");
const readerClose = document.getElementById("readerClose");
const readerZoom = document.getElementById("readerZoom");
const readerPrev = document.getElementById("readerPrev");
const readerNext = document.getElementById("readerNext");

let activeTacticsProject = null;
let activeTacticsPage = 0;

function getTranslation(key) {
  if (translations[currentLanguage] && translations[currentLanguage][key]) {
    return translations[currentLanguage][key];
  }
  if (translations.en && translations.en[key]) {
    return translations.en[key];
  }
  return key;
}

function openTacticsReader(slug) {
  const project = tacticsProjects.find((item) => item.slug === slug);
  if (!project || !tacticsReader) return;

  activeTacticsProject = project;
  activeTacticsPage = 0;
  tacticsReader.classList.remove("hidden");
  tacticsReader.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  renderTacticsPage();
}

function closeTacticsReader() {
  if (!tacticsReader) return;

  tacticsReader.classList.add("hidden");
  tacticsReader.classList.remove("is-fullscreen");
  tacticsReader.classList.remove("is-page-zoomed");
  tacticsReader.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}

function renderTacticsPage() {
  if (!activeTacticsProject || !readerPage) return;

  const total = activeTacticsProject.pages.length;
  const pageSrc = activeTacticsProject.pages[activeTacticsPage];

  if (readerPageFrame) {
    readerPageFrame.classList.add("turning");
  }

  window.setTimeout(() => {
    readerPage.src = pageSrc;
    readerPage.alt = `${getTranslation(activeTacticsProject.titleKey)} page ${activeTacticsPage + 1}`;

    if (readerTitle) {
      readerTitle.textContent = getTranslation(activeTacticsProject.titleKey);
    }

    if (readerMeta) {
      readerMeta.textContent = `${String(activeTacticsPage + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
    }

    if (readerCaption) {
      readerCaption.textContent = getTranslation("readerHint");
    }

    if (readerProgressBar) {
      readerProgressBar.style.width = `${((activeTacticsPage + 1) / total) * 100}%`;
    }

    if (readerPageFrame) {
      readerPageFrame.scrollTop = 0;
      readerPageFrame.scrollLeft = 0;
      readerPageFrame.classList.remove("turning");
    }
  }, 80);
}

function showPreviousTacticsPage() {
  if (!activeTacticsProject) return;
  activeTacticsPage =
    activeTacticsPage === 0
      ? activeTacticsProject.pages.length - 1
      : activeTacticsPage - 1;
  renderTacticsPage();
}

function showNextTacticsPage() {
  if (!activeTacticsProject) return;
  activeTacticsPage =
    activeTacticsPage === activeTacticsProject.pages.length - 1
      ? 0
      : activeTacticsPage + 1;
  renderTacticsPage();
}

document.querySelectorAll(".tactics-card").forEach((card) => {
  card.addEventListener("click", () => {
    openTacticsReader(card.dataset.project);
  });

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openTacticsReader(card.dataset.project);
    }
  });
});

if (readerClose) {
  readerClose.addEventListener("click", closeTacticsReader);
}

if (tacticsReaderBackdrop) {
  tacticsReaderBackdrop.addEventListener("click", closeTacticsReader);
}

if (readerPrev) {
  readerPrev.addEventListener("click", showPreviousTacticsPage);
}

if (readerNext) {
  readerNext.addEventListener("click", showNextTacticsPage);
}

if (readerZoom && tacticsReader) {
  readerZoom.addEventListener("click", () => {
    tacticsReader.classList.toggle("is-fullscreen");
  });
}

if (readerPage && tacticsReader) {
  readerPage.addEventListener("click", () => {
    const isZoomed = tacticsReader.classList.toggle("is-page-zoomed");

    if (isZoomed) {
      tacticsReader.classList.add("is-fullscreen");
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (!tacticsReader || tacticsReader.classList.contains("hidden")) return;

  if (event.key === "Escape") {
    if (tacticsReader.classList.contains("is-page-zoomed")) {
      tacticsReader.classList.remove("is-page-zoomed");
      return;
    }

    closeTacticsReader();
  }

  if (event.key === "ArrowLeft") {
    showPreviousTacticsPage();
  }

  if (event.key === "ArrowRight") {
    showNextTacticsPage();
  }
});

/* =========================
   Experience Accordions
========================= */

function initializeExperienceAccordions() {
  const accordions = document.querySelectorAll(".experience-accordion");

  accordions.forEach((accordion) => {
    const toggle = accordion.querySelector(".experience-accordion-toggle");
    const content = accordion.querySelector(".experience-accordion-content");

    if (!toggle || !content) return;

    toggle.addEventListener("click", () => {
      const isOpen = accordion.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      content.hidden = !isOpen;
    });
  });
}

initializeExperienceAccordions();


/* =========================
   Lab Project Image Fallbacks
========================= */

function initializeImageFallbacks() {
  document.querySelectorAll("img[data-fallbacks]").forEach((image) => {
    const fallbacks = image.dataset.fallbacks
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    image.addEventListener("error", () => {
      if (!fallbacks.length) return;
      image.src = fallbacks.shift();
      image.dataset.fallbacks = fallbacks.join(",");
    });
  });
}

initializeImageFallbacks();

/* =========================
   Lab Long Image Viewer
========================= */

function initializeLabWebImageViewer() {
  const modal = document.getElementById("webImageModal");
  const openButton = document.querySelector("[data-open-web-image]");
  const backdrop = document.getElementById("webImageBackdrop");
  const closeButton = document.getElementById("webImageClose");
  const stage = document.getElementById("webImageStage");
  const image = document.getElementById("webImageFull");
  const zoomIn = document.getElementById("webZoomIn");
  const zoomOut = document.getElementById("webZoomOut");
  const zoomReset = document.getElementById("webZoomReset");

  if (!modal || !openButton || !stage || !image) return;

  let scale = 1;
  let translateX = 0;
  let translateY = 0;
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let originX = 0;
  let originY = 0;

  function applyTransform() {
    image.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
    if (zoomReset) zoomReset.textContent = `${Math.round(scale * 100)}%`;
  }

  function resetView() {
    scale = 1;
    translateX = 0;
    translateY = 0;
    applyTransform();
  }

  function openModal() {
    modal.classList.remove("hidden");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
    resetView();
  }

  function closeModal() {
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
    resetView();
  }

  openButton.addEventListener("click", openModal);
  if (backdrop) backdrop.addEventListener("click", closeModal);
  if (closeButton) closeButton.addEventListener("click", closeModal);

  if (zoomIn) {
    zoomIn.addEventListener("click", () => {
      scale = Math.min(3, scale + 0.2);
      applyTransform();
    });
  }

  if (zoomOut) {
    zoomOut.addEventListener("click", () => {
      scale = Math.max(0.5, scale - 0.2);
      applyTransform();
    });
  }

  if (zoomReset) {
    zoomReset.addEventListener("click", resetView);
  }

  stage.addEventListener("wheel", (event) => {
    if (modal.classList.contains("hidden")) return;
    event.preventDefault();
    scale = event.deltaY < 0 ? Math.min(3, scale + 0.12) : Math.max(0.5, scale - 0.12);
    applyTransform();
  }, { passive: false });

  stage.addEventListener("pointerdown", (event) => {
    isDragging = true;
    startX = event.clientX;
    startY = event.clientY;
    originX = translateX;
    originY = translateY;
    stage.setPointerCapture(event.pointerId);
    stage.classList.add("is-dragging");
  });

  stage.addEventListener("pointermove", (event) => {
    if (!isDragging) return;
    translateX = originX + event.clientX - startX;
    translateY = originY + event.clientY - startY;
    applyTransform();
  });

  stage.addEventListener("pointerup", (event) => {
    isDragging = false;
    stage.classList.remove("is-dragging");
    try {
      stage.releasePointerCapture(event.pointerId);
    } catch (error) {}
  });

  document.addEventListener("keydown", (event) => {
    if (modal.classList.contains("hidden")) return;
    if (event.key === "Escape") closeModal();
  });
}

initializeLabWebImageViewer();



/* =========================
   Links Accordions
========================= */

function initializeLinksAccordions() {
  const accordions = document.querySelectorAll(".links-accordion");

  accordions.forEach((accordion) => {
    const toggle = accordion.querySelector(".links-accordion-toggle");
    const content = accordion.querySelector(".links-accordion-content");

    if (!toggle || !content) return;

    toggle.addEventListener("click", () => {
      const isOpen = accordion.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      content.hidden = !isOpen;
    });
  });
}

initializeLinksAccordions();

/* =========================
   Achievements Image Viewer
========================= */

function initializeAchievementImageViewer() {
  const modal = document.getElementById("achievementImageModal");
  const modalImage = document.getElementById("achievementModalImage");
  const modalTitle = document.getElementById("achievementModalTitle");
  const backdrop = document.getElementById("achievementImageBackdrop");
  const closeButton = document.getElementById("achievementImageClose");
  const imageButtons = document.querySelectorAll("[data-achievement-image]");

  if (!modal || !modalImage || !imageButtons.length) return;

  function openModal(button) {
    const image = button.querySelector("img");
    const titleElement = button.closest(".achievement-certificate-card")?.querySelector(".achievement-certificate-title");

    if (!image) return;

    modalImage.src = image.currentSrc || image.src;
    modalImage.alt = image.alt || "Achievement certificate";

    if (modalTitle && titleElement) {
      modalTitle.textContent = titleElement.textContent;
    }

    modal.classList.remove("hidden");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
  }

  function closeModal() {
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
  }

  imageButtons.forEach((button) => {
    button.addEventListener("click", () => openModal(button));
  });

  if (backdrop) backdrop.addEventListener("click", closeModal);
  if (closeButton) closeButton.addEventListener("click", closeModal);

  document.addEventListener("keydown", (event) => {
    if (!modal.classList.contains("hidden") && event.key === "Escape") {
      closeModal();
    }
  });
}

initializeAchievementImageViewer();
