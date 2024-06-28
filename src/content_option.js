
const meta = {
    title: "Ashwini Vairale",
};

const introdata = {
    title: "Ashwini Vairale",
    description: `I'm Ashwini, a dedicated Pharma graduate driven by a passion for innovation and excellence, poised to make a significant impact in the pharmaceutical industry`,
    resume: require('./assets/resume/Ashwini_vairale_resume.pdf'),

};

const outrodata = {
    description: `Join me on my journey to redefine possibilities in the pharmaceutical world. Let's innovate, collaborate, and pave the way for a healthier tomorrow together!`,
}

const dataabout = [
    {
        id: "card1",
        heading: "About me ",
        content: "As a driven and adaptable Bachelor of Pharmacy graduate from CMR College of Pharmacy, I am passionate about making a significant impact in the pharmaceutical industry. My journey is marked by notable research contributions, including publications on virtual reality in cardiac disease management and advancements in floating matrix tablets. I possess strong communication, leadership, and organizational skills, and am certified as a Medical Scribe with expertise in medical terminology and HIPPA guidelines. Fluent in English, Hindi, Marathi, and Telugu, I excel in diverse environments. My active participation in conferences and workshops, along with achievements in debates, elocution, and scientific poster presentations, showcases my commitment to excellence and continuous learning. Outside of academics, I am passionate about Bharatanatyam, true crime podcasts, and horror novels, which enhance my creativity and critical thinking. Eager to contribute to the pharmaceutical industry, I aim to leverage my skills and knowledge to make a meaningful impact while continually growing in the field.",
        imageUrl: "https://picsum.photos/400/300/",
    },
    {
        id: "card2",
        heading: "My Skills",
        content: "In my professional journey, I bring a blend of skills crucial for fostering collaboration and driving success. I thrive in leadership roles, guiding teams with empathy and a strong sense of awareness, which helps me navigate complexities with clarity. I approach challenges with logical thinking, crafting thoughtful solutions that make a real difference. My passion for helping others shines through in my supportive approach, complemented by well-honed organizational skills that keep projects on track. I'm technically savvy and love innovating, constantly seeking new ways to improve processes. Self-management is key to my adaptability, allowing me to stay agile in dynamic environments. Creativity fuels my work, inspiring fresh ideas and continuous growth. With strong interpersonal skills, I build meaningful connections and foster open communication, ensuring everyone's voice is heard in pursuit of shared goals.",
        imageUrl: "https://picsum.photos/400/700/",
    },
    {
        id: "card3",
        heading: "My Hobbies",
        content: "In addition to my professional skills, I am passionate about Bharatanatyam, finding joy in the grace and storytelling of this traditional dance form. I also indulge in my love for podcasts, especially those that delve into true crime, which fascinate me with their intricate narratives. When I'm not dancing or listening, I find solace in the pages of horror novels, where I explore thrilling worlds and unravel mysteries. These hobbies enrich my life, offering a balance of artistic expression, intellectual stimulation, and immersive storytelling that inspire my creativity and broaden my perspectives.",
        imageUrl: "https://picsum.photos/400/600/",
    }
];
const worktimeline = {
    education: [{
        date: "2020 - 2024",
        institute: "CMR College of Pharmacy - Hyderabad",
        description: "Bachelor of Pharmacy",

    },
    {
        date: "2018 - 2020",
        institute: "Pallavi Model School - Hyderabad",
        description: "Intermediate (Biology,Physics & Chemistry)"
    },
    {
        date: "2018",
        institute: "St. Michaels School - Hyderabad",
        description: "CBSE Board"
    },

    ],
    experience: [
        //Add more Experience Here
        // {
        //     date: "2018 - 2022",
        //     company: "Company1",
        //     position: "UI/UX Designer",
        //     description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        // },
    ]
}


const dataportfolio = {
    papers: [
        {

            description: "Satya Sireesha Devu et al. (2024). Advancements In Floating Matrix Tablets: A Comprehensive Review. International Journal in Pharmaceutical Sciences, 2(4), 638–647.",
            link: "https://www.ijpsjournal.com/article/Advancements-In-Floating-Matrix-Tablets-A-Comprehensive-Review",
        },
        {

            description: "Bathula Akanksha et al. (Volume. 9 Issue.2, February 2024) “Addison's Disease: A Brief Review.” International Journal of Innovative Science and Research Technology.",
            link: "https://www.ijisrt.com/addisons-disease-a-brief-review",
        },
        {
            description: "Ashwini Vairale et al. (Volume. 9 Issue. 2, February 2024) “Exploring the Potential of Virtual Reality in the Management of Cardiac Diseases: A Systematic Review.” International Journal of Innovative Science and Research Technology ISSN - 2456-2165, PP: 161- 165.",
            link: "https://ijisrt.com/exploring-the-potential-of-virtual-reality-in-the-management-of-cardiac-diseases-a-systematic-review",
        },
        {
            description: "A prospective view on nanotechnology in Alzheimer treatment published in Bulletin of Environment, Pharmacology and Life Sciences, 2024.",
            link: "#",
        },
    ],
    projects: [
        {
            img: require('./assets/projects/pro1.jpg'),
            description: "Preparation and evaluation of famotidine floating tablets using natuaral and synthetic polymers.",
            link: "#",
        },
    ],
    achievements: [{
        img: require('./assets/achievements/a-1.jpg'),
        description: "Participated in JAM, DEBATE, GROUP DISCUSSION at AVAZYA-2023 organized by CMR Engineering College - Hyderabad ",
        link: "#",
    }, {
        img: require('./assets/achievements/a0.jpg'),
        description: "For completing training program in Pharmacovigilance, Clinical Research, Clinical Data Management & Regulatory Affairs",
        link: "#",
    },
    {
        img: require('./assets/achievements/a1.jpg'),
        description: "Won 2nd Prize, Scientific Poster, NCDTS-2024, CMR College Topic: “Using VR for CVD Treatment: A Review”.",
        link: "#",
    }, {
        img: require('./assets/achievements/a2.jpg'),
        description: "Stood Third in Inter School Elocution, Sadhu Vaswani .",
        link: "#",
    }, {
        img: require('./assets/achievements/a3.jpg'),
        description: "Awarded First Place in Debate, Pallavi Model School.",
        link: "#",
    }, {
        img: require('./assets/achievements/a4.jpg'),
        description: "Awarded First Place in Solo Dance, Pallavi Model School.",
        link: "#",

    },

    ],
    certification: [
        {
            img: require('./assets/certificates/p1.png'),
            description: "Oral Presenter, Innopharmrx: Presented Paper on Calcium Pectinate Hydrogel.",
            link: "#",
        },
        {
            img: require('./assets/certificates/p2.jpg'),
            description: "Oral Presentation: Periodontal Gel Using Natural Polymers, Pharma NEST 4.0.",
            link: "#",
        },
        {
            img: require('./assets/certificates/p3.jpg'),
            description: "Poster	Presentation:	Polypills	in	Cardiovascular Disease Prevention, WIP INTER CONS.",
            link: "#",
        },
        {
            img: require('./assets/certificates/p4.jpg'),
            description: "Poster:	Ophthalmic	Drug	Delivery	System, NCPPS2022, CMR College.",
            link: "#",
        },
        {
            img: require('./assets/certificates/p5.jpg'),
            description: "Delegate, National Workshop:  Advanced  Techniques in Experimental Pharmacology.",
            link: "#",
        },
        {
            img: require('./assets/certificates/p6.jpg'),
            description: "Student	Delegate,	AICTE	National	Conference: Mutation of Microbes.",
            link: "#",
        },
        // More certification objects...
    ]

};


const contactConfig = {
    YOUR_EMAIL: "ashwinivairale8@gmail.com",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_wqn2qcc",
    YOUR_TEMPLATE_ID: "template_fy3ldsf",
    YOUR_USER_ID: "9o7SsjwWZJiWo5TdM",
};

const socialprofils = {
    github: '',
    linkedin: "https://www.linkedin.com/in/ashwini-vairale-b5a643242/",
    twitter: "https://x.com/VairaleAshwini",
    youtube: '',
    mail: 'ashwinivairale8@gmail.com',
    instagram: 'https://www.instagram.com/eat.slayrepeat?utm_source=qr&igsh=dzgyeTB0bjJncDhq',

};


const icons = {
    logo1: require('./assets/logo/drug.png'),
    logo2: require('./assets/logo/chemicals.png'),
    logo3: require('./assets/logo/medicine.png'),
    logo4: require('./assets/logo/syringe.png'),
    logo5: require('./assets/logo/pharmacist-lady.png'),
    logo6: require('./assets/logo/pill.png'),
    logo7: require('./assets/logo/pharma.png'),
    logo8: require('./assets/logo/flask.png'),
    logo9: require('./assets/logo/magnifier.png'),
}
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    introdata,
    contactConfig,
    socialprofils,
    icons,
    outrodata,
};