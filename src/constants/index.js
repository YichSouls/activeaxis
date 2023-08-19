import {
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
    french,
    english,
    blender,
    c_sharp,
    photoshop,
    premiere,
    python,
    unity_icon,
    visual_studio,
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
        name: "Git",
        icon: git,
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
    {
        name: "Visual Studio",
        icon: visual_studio,
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
            "Yichao always has a professional attitude towards software development. He's a great engineer who can address both hardware and software problems.",
        name: "Johan Le Brun",
        designation: "Project Engineer",
        company: "Streetlab",
        image: "https://media.licdn.com/dms/image/C4E03AQFI4zEdLrAUXA/profile-displayphoto-shrink_200_200/0/1523283892705?e=1697673600&v=beta&t=wR77pCdkm040w2B1ufZ00rZQKgLEOz7qJg_9Rr7DB-Q",
    },
    {
        testimonial:
            "Yichao has a lot of experience with video games, so his sense of developing interactive software is better than the average developer.",
        name: "Kamal Zitouni",
        designation: "Partnerships H5 instant games",
        company: "Voodoo",
        image: "https://media.licdn.com/dms/image/C4D03AQGxZ7_2HGXqWQ/profile-displayphoto-shrink_200_200/0/1585171559415?e=1697673600&v=beta&t=xgJzopx8YbDsfpfV9n-5LUHmBWaIm3PErizr_OlM7WU",
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
