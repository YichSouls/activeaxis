import {
    data,
    react,
    unity,
    vr,
    web,
    javascript,
    html,
    reactjs,
    tailwind,
    nodejs,
    git,
    figma,
    artetmetiers,
    dataklub,
    institutdelavision,
    psa,
    voodoo,
    threejs,
    facebook,
    github,
    linkedin,
    dataviz,
    helixjump,
    ballblast,
    chinese,
    django,
    french,
    english,
    blender,
    c_sharp,
    photoshop,
    premiere,
    python,
    unity_icon,
    visual_studio,
    johan,
    kamal,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Developer",
        icon: react,
    },
    {
        title: "Unity3D Developper",
        icon: unity,
    },
    {
        title: "AR/VR Developper",
        icon: vr,
    },
    {
        title: "Data Analyst",
        icon: data,
    }
];

const languages = [
    {
        name: "Chinese: native speaker",
        icon: chinese,
    },
    {
        name: "English: fluent (IELTS 7.0, C1)",
        icon: english,
    },
    {
        name: "French: fluent (DALF C1)",
        icon: french,
    }
];

const codings = [
    {
        name: "C#",
        icon: c_sharp,
    },
    {
        name: "Django",
        icon: django,
    },
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "ThreeJS",
        icon: threejs,
    },
    {
        name: "Unity 3D",
        icon: unity_icon,
    },
];

const multimedias = [
    {
        name: "Blender",
        icon: blender,
    },
    {
        name: "Figma",
        icon: figma,
    },
    {
        name: "Adobe Photoshop",
        icon: photoshop,
    },
    {
        name: "Adobe Premiere",
        icon: premiere,
    }
];

const experiences = [
    {
        title: "Engineering degree",
        company_name: "ÉCOLE NATIONALE SUPÉRIEURE D'ARTS ET MÉTIERS - PARIS, FRANCE",
        icon: artetmetiers,
        iconBg: "#ffffff",
        date: "09/2016 - 11/2018",
        points: [
            "Engineering degree.",
            "Specialized in the field of computer virtual prototyping - mechanical analysis, visualization of forces on a part.",
        ],
    },
    {
        title: "Internship",
        company_name: "GROUPE PSA - PARIS, FRANCE",
        icon: psa,
        iconBg: "#1f2436",
        date: "02/2018 – 08/2018",
        points: [
            "AR Automotive Tutorial: Crafted an interactive AR tutorial for Microsoft HoloLens, focusing on autonomous driving.",
            "Technical Implementation: Utilized Unity3D and C# for robust programming and seamless user experience.",
        ],
    },
    {
        title: "UNITY3D DEVELOPER",
        company_name: "dataklub - ILE-DE-FRANCE, FRANCE",
        icon: dataklub,
        iconBg: "#96c11d",
        date: "02/2019 - 02/2020",
        points: [
            "3D Data Visualization: Designed and developed interactive 3D visualizations for the Splunk Big Data platform using the Unity3D engine.",
            "Device Adaptation: Adapted the application for use on various devices, such as Microsoft's MagicLeap and HoloLens augmented reality headsets, as well as PCVR headset.",
            "Event Engagement: Actively participated in the company's exhibits at professional events such as Big Data Paris and Laval Virtual, helping to promote the company's products and solutions.",
        ],
    },
    {
        title: "APPLICATION DEVELOPER",
        company_name: "STREETLAB, INSTITUT DE LA VISION - PARIS, FRANCE",
        icon: institutdelavision,
        iconBg: "#ffffff",
        date: "02/2020 – 04/2023",
        points: [
            "VR Platform Development: Spearheaded the design and creation of a virtual reality (VR) platform tailored to gather biological data from patients with visual impairments.",
            "Python Data Analysis & Visualization: Utilized Streamlit to analyze and visualize diverse data collected from participants, ensuring efficient monitoring of the Django Database.",
            "FDA Certification & Agile Integration: Secured FDA certification for an app while implementing an Agile workflow via Atlassian JIRA, enhancing project management and collaboration.",
            "Mobile Application development: Conceived and developed a mobile application focused on monitoring and estimating visual diseases, significantly aiding in patient management.",
        ],
    },
    {
        title: "PLAYABLE ADS DEVELOPPER - FREELANCE",
        company_name: "VOODOO- ILE-DE-FRANCE, FRANCE",
        icon: voodoo,
        iconBg: "#000000",
        date: "08/2022 - NOW",
        points: [
            "Game Porting: Porting video games from Unity3D (C#) to web platforms leveraging JavaScript and HTML.",
            "Data Analysis: Conducted A/B test data analysis utilizing Python and the Voodoo API, deriving insights for enhanced gameplay decisions.",
            "Performance Optimization: Enhanced browser-based game performance, especially for the low-end device.",
            "Social Integration: Introduced online multiplayer capabilities and managed in-game microtransactions.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Yichao always has a professional attitude towards software development. He's a great engineer who can address both hardware and software problems.",
        name: "Johan Le Brun",
        designation: "Project Engineer",
        company: "Streetlab",
        image: johan,
    },
    {
        testimonial:
            "Yichao has a lot of experience with video games, so his sense of developing interactive software is better than the average developer.",
        name: "Kamal Zitouni",
        designation: "Partnerships H5 instant games",
        company: "Voodoo",
        image: kamal,
    },
];

const projects = [
    {
        name: "DataViz Earth",
        description:
            "A visualization of the internet attack based on big data developed by the company kaspersky. Similar to the solution I developed in the VR headset when I was in Dataklub.",
        tags: [
            {
                name: "vr/ar",
                color: "blue-text-gradient",
            },
            {
                name: "videogame",
                color: "green-text-gradient",
            },
        ],
        image: dataviz,
        link_image: linkedin,
        source_code_link: "https://www.linkedin.com/in/yichaoliu1992",
    },
    {
        name: "Helix Jump",
        description:
            "Helix Jump is an HTML5-based hyper-casual game. My responsibilities include converting a Unity3D version to JavaScript using three.js, optimizing for lower-tier devices, and adding social features. The game has currently amassed over 931k active Facebook players.",
        tags: [
            {
                name: "react",
                color: "orange-text-gradient",
            },
            {
                name: "videogame",
                color: "green-text-gradient",
            },
            {
                name: "html5",
                color: "pink-text-gradient",
            },
        ],
        image: helixjump,
        link_image: facebook,
        source_code_link: "https://fb.gg/play/helixjumpinstant",
    },
    {
        name: "Ball Blast",
        description:
            "Ball Blast is an HTML5-based hyper-casual game originally developed in Unity3D. My role involves translating this version into JavaScript using three.js, optimizing gameplay, and integrating social features. The game features extensive physics simulations to enhance the player experience.",
        tags: [
            {
                name: "react",
                color: "orange-text-gradient",
            },
            {
                name: "videogame",
                color: "green-text-gradient",
            },
            {
                name: "html5",
                color: "pink-text-gradient",
            },
        ],
        image: ballblast,
        link_image: facebook,
        source_code_link: "https://fb.gg/play/ballblastinstant",
    },
];

export { services, languages, codings, multimedias, experiences, testimonials, projects };
