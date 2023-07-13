import {
    react,
    unity,
    vr,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    artetmetiers,
    dataklub,
    institutdelavision,
    psa,
    voodoo,
    threejs,
    database,
    dataviz,
    facebook,
    github,
    helixjump,
    ballblast,
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
        title: "React Native Developer",
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
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
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
            "Specialized in the field of virtual prototyping - mechanical analysis, visualization of forces on a part.",
        ],
    },
    {
        title: "END-OF-STUDY INTERNSHIP",
        company_name: "GROUPE PSA - PARIS, FRANCE",
        icon: psa,
        iconBg: "#1f2436",
        date: "02/2018 – 08/2018",
        points: [
            "Designed and developed an interactive automotive tutorial using augmented reality (AR) technology for the Microsoft HoloLens headset.",
            "Programmed the tutorial for the autonomous driving feature using the Unity3D engine and the C# programming language.",
        ],
    },
    {
        title: "UNITY3D DEVELOPER",
        company_name: "dataklub - ILE-DE-FRANCE, FRANCE",
        icon: dataklub,
        iconBg: "#96c11d",
        date: "02/2019 - 02/2020",
        points: [
            "Designed and developed interactive 3D visualizations for the Splunk Big Data platform using the Unity3D engine.",
            "Adapted the application for use on various devices, such as Microsoft's MagicLeap and HoloLens augmented reality headsets, as well as PC and Mac desktops.",
            "Actively participated in the company's exhibits at professional events such as Big Data Paris and Laval Virtual, helping to promote the company's products and solutions.",
        ],
    },
    {
        title: "APPLICATION DEVELOPER",
        company_name: "STREETLAB, INSTITUT DE LA VISION - PARIS, FRANCE",
        icon: institutdelavision,
        iconBg: "#ffffff",
        date: "02/2020 – 04/2023",
        points: [
            "Design and development of a virtual reality (VR) platform to provide solutions for patients with visual impairments.",
            "Development of a mobile application allowing the monitoring and estimation of visual diseases to facilitate the management of patients.",
            "Analysis and visualization of data collected from various participant response acquisition systems, such as body movement, eye movement, electrocardiography (ECG) and skin conductance (EDA).",
            "Collaboration with a multidisciplinary team to improve ophthalmic diagnostic tools and methods.",
        ],
    },
    {
        title: "PLAYABLE ADS DEVELOPPER - FREELANCE",
        company_name: "VOODOO- ILE-DE-FRANCE, FRANCE",
        icon: voodoo,
        iconBg: "#000000",
        date: "08/2022 - NOW",
        points: [
            "Porting video games developed in C# on the Unity3D game engine to web platforms using JavaScript and HTML.",
            "Optimized game performance on browsers to ensure a smooth and enjoyable user experience.",
            "Implemented social networking features, such as the ability to play with friends online and manage microtransactions.",
            "Collaborate with the development team to improve the game experience and facilitate player engagement.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
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
        source_code_link: "",
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
        source_code_link: "https://fb.gg/play/ballblastinstant",
    },
];

export { services, technologies, experiences, testimonials, projects };
