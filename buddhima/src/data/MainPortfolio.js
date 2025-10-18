export const educations = [
  {
    course: "BSc (Hons) in Information Technology",
    institute: "Horizon Campus",
    period: "October 2021 – October 2025",
    logo: "https://horizoncampus.edu.lk/horizon_stu_reg/images/Campus%20Logo.png",
    description: "current GPA-3.48",
    courseworks: [
      "Web Development",
      "Computer Animations",
      "Artificial Intelligence",
      "Machine Learning",
      "Mobile App development",
      "Information Assurance and Network Security",
      "Cloud Computing",
      "Computer Networks",
    ],
  },
  {
    course: "Dip. in Information Technology",
    institute: "Esoft Metro Campus",
    period: "2020 – 2021",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/83/ESOFT_Logo_1000_x_450_RGB.jpg",
    description: "Successfully completed with highest grades",
    courseworks: ["C# Programmming", "Graphic Designing", "Python"],
  },
  {
    course: "Dip. in General English",
    institute: "Esoft Metro Campus",
    period: "2020 – 2021",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/83/ESOFT_Logo_1000_x_450_RGB.jpg",
    description: "Successfully completed with highest grades",
    courseworks: ["Speaking", "Wrtiting", "Reading"],
  },
];
export const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "Sri Lanka Telecom PLC",
    period: "April 2025 – October 2025",
    description:
      "During my internship at Sri Lanka Telecom PLC, Skilled in developing responsive, scalable web applications using React.js, Django, Python, and JavaScript. Served as the Frontend Lead for the Sales Incentive Automation project, demonstrating strong teamwork, leadership, and communication skills while collaborating with cross-functional teams under the Agile Scrum methodology. Highly adaptable and self-motivated, with a strong passion for learning emerging technologies and contributing to innovative software solutions. Seeking a Trainee or Junior Full Stack Developer role to apply technical expertise and grow within a dynamic development team.",
    skills: [
      "React.js",
      "Python & Django REST APIs",
      "Node.js / Express.js",
      "PostgreSQL",
      "UI/UX Designing",
      "FastAPI",
      "Git & GitHub",
      "Agile & Scrum Practices",
    ],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4VWKDDuPhmYyi1H7En1HTYjvI5hb6IUJi1A&s",
  },
  {
    title: "Freelancing — Web Developer",
    company: "Vision M Tech Solutions",
    period: "2022 - present",
    description:
      "At Vision M Tech Solutions, I have been working as a Freelance Web Developer since 2022, helping clients transform their real-world business ideas into digital reality through full-stack web development. My role involves collaborating closely with clients to gather requirements, design user-centered interfaces, and deliver scalable web applications using technologies such as React.js, Node.js, Express.js, and MongoDB. I focus on creating responsive, high-performance frontends with HTML5, CSS3, and Tailwind CSS, while ensuring secure backend integration through RESTful APIs and authentication systems like JWT and OAuth. I also handle deployment and hosting using AWS, Vercel, and Netlify, maintaining seamless performance and uptime. Over time, I’ve successfully delivered projects across multiple domains — including educational platforms, business dashboards, and service management systems — while maintaining long-term client relationships through reliable technical support, continuous updates, and performance optimization.",
    skills: [
      "C#",
      "MySQL",
      "React.js",
      "Node.js",
      "MongoDB",
      "Bootstrap",
      "Tailwind Css",
      "CMS Web Development",
    ],
    logo: "https://cdn.dribbble.com/userupload/22274999/file/original-c750dd14abc45c68ff30aaaa960f859e.jpg?resize=752x&vertical=center",
  },
  {
    title: "ETIQLO MARKETPLACE ",
    company: "Online",
    period: "2019 - 2020",
    description:
      "Assisted in Managing and Coordinating Vendors in ETIQLO Marketplace. Gained experience in dealing with different vendors and their products. Worked with different vendors to create a platform where vendors can sell their products to consumers.Assisted vendors in registration and onboarding to the e-commerce platform.Provided customer support and consultation to ensure a smooth user experience.",
    skills: ["Coordination", "Excellent Communication", "Team Leadership"],
    logo: "https://www.workitdaily.com/media-library/image.jpg?id=33676767&width=1200&height=600&coordinates=0%2C84%2C0%2C66",
  },
];

import SIA_signin from "../assets/Project_images/SIA-signin.png";
import NeuroDoc from "../assets/Project_images/NeuroDoc.png";
import ModernFitness from "../assets/Project_images/Modern fitness web.png";
import Kodalink from "../assets/Project_images/kodalink.se.png";
import SkillPos from "../assets/Project_images/Skill Enrollment System.png";
import Nexus from "../assets/Project_images/Nexus.png";
import NextGenCreator from "../assets/Project_images/NextGen Creator UI.png";
import OctopusUI from "../assets/Project_images/Octopus UI.png";
import CleaningService from "../assets/Project_images/cleaning Service.png";
import PostalService from "../assets/Project_images/PostalService.jpeg";
import PostalServiceApp from "../assets/Project_images/PostalApp.jpg";
import FoodApp from "../assets/Project_images/FoodApp.png";
import HotelSystem from "../assets/Project_images/Hotel System.png";
import {
  BotIcon,
  CloudIcon,
  Code2Icon,
  DatabaseIcon,
  GitBranchIcon,
  LayoutIcon,
  ServerIcon,
  ShieldIcon,
} from "lucide-react";
export const projects = [
  {
    title: "Sales Incentive Automation System - web application",
    type: "Group Project",
    description:
      "The SIA Project SLT is a comprehensive software solution designed to streamline and automate business processes within the organization. It provides a user-friendly interface for managing data, generating reports, and facilitating collaboration among team members.System Features include Secure authentication and role-based access control, Efficient forms for capturing and validating business data, Dynamic generation of reports and analytics, Automated alerts and reminders for key events, Seamless connectivity with external systems and databases.Audit Trail: Detailed logging of user actions for compliance and review.",
    image: SIA_signin,
    technologies: [
      "Javascript (ES6+)",
      "React Js",
      "Python",
      "Django",
      "Fast API",
      "Context API",
      "Axios",
      "Tailwind css",
      "Git",
      "GitHub",
      "Postman",
      "Figma",
      "Chart Js",
    ],
    demoLink: "https://dptestserver1.slt.lk:9077/",
    githubLink: "#",
  },
  {
    title: "NeuroDoc Encryption Service - Web Application (Ongoing)",
    type: "Individual Project",
    description:
      "Design and develop a secure document platform inspired by AI-enhanced postal service systems. Develop an AI-powered secure document processing platform, handling encrypted transactions daily.Build a fully responsive UI using Tailwind CSS, ensuring optimal performance across all device types. Integrate PDF encryption & OCR technology, enhancing document handling efficiency.",
    image: NeuroDoc,
    technologies: [
      "MongoDB",
      "Express js",
      "React Js",
      "Node Js",
      "Tailwind css",
      "Tessaract Js",
      "Cryptography",
      "JWT",
    ],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Kodalink Consultant - CMS Web Design",
    type: "Freelance Project",
    description:
      "Integrated RapidAPI to fetch real-time exercise data, enhancing user engagement with dynamic content.Gained hands-on experience in API handling and data fetching using modern JavaScript practices. Utilized Material UI and Bootstrap for a clean, user-friendly interface optimized for mobile and desktop views.",
    image: Kodalink,
    technologies: ["Strato CMS", "Photoshop"],
    demoLink: "https://kodalink.se/",
    githubLink: "#",
  },
  {
    title: "Student Enrollment System - C# POS System",
    type: "Freelance Project",
    description:
      "POS system that allows users to manage students enrollment in the academy.this is utilized visual studio and c# as the programming language for seamless operations. ",
    image: SkillPos,
    technologies: ["Visual Studio", "C#", "MySQL"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Modern Fitness React web Application",
    type: "Individual Project",
    description:
      "Integrated RapidAPI to fetch real-time exercise data, enhancing user engagement with dynamic content.Gained hands-on experience in API handling and data fetching using modern JavaScript practices. Utilized Material UI and Bootstrap for a clean, user-friendly interface optimized for mobile and desktop views.",
    image: ModernFitness,
    technologies: ["Material UI", "Rapid API", "Postman", "Bootstrap"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "TechTrick Nexus - CMS Website",
    type: "WordPress Blog",
    description:
      "Tech Trick Nexus is a modern WordPress-powered technology blog that delivers insightful articles, guides, and trends on software, gadgets, digital marketing, and tech innovations. With a sleek dark-themed UI, engaging blog layouts, and intuitive navigation, this platform provides a seamless reading.",
    image: Nexus,
    technologies: ["Figma", "Photoshop"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "NextGen Creator - Web Application",
    type: "UI/UX Design",
    description:
      "NextGen Creator is an innovative e-commerce platform tailored for creative entrepreneurs to showcase and sell their unique, handcrafted products through engaging video shorts. Designed with a modern, interactive user experience, this platform not only enables users to purchase directly but also fosters a community where creativity thrives.",
    image: NextGenCreator,
    technologies: ["Figma", "Photoshop"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Octopus - React Frontend Dashboard",
    type: "Individual Project",
    description:
      "A dynamic Analytics Dashboard built with React.js, Chakra UI, lucide-react, and Recharts to visualize user activity and key metrics. It features interactive charts, responsive design, and accessible UI components. The dashboard provides insights into daily and monthly active users, user distribution, and activity trends, making it a powerful tool for data-driven decision-making.",
    image: OctopusUI,
    technologies: ["React.js", "Chart js", "Chakra UI", "Git", "GitHub"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Cleaning Service Management System - Simple CRUD Application",
    type: "Individual Project",
    description:
      "Developed a MERN-stack application with optimized data loading scripts. Implemented automated RESTful API calls to streamline data retrieval and updates. Designed a scalable architecture ensuring long-term maintainability.",
    image: CleaningService,
    technologies: [
      "MongoDB",
      "Express js",
      "React Js",
      "Node Js",
      "Tailwind css",
    ],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Secure Postal Mobile App- React Native App (Ongoing)",
    type: "UI/UX Design",
    description:
      "Engineered a secure, encrypted messaging platform using RSA and AES-256. Developed API-driven data flow mechanisms ensuring secure data transmission.Optimized low-code automation for managing message encryption workflows.",
    image: PostalServiceApp,
    technologies: ["React Native", "Node Js", "Express"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Secure Postal service System - Web Application",
    type: "Individual Project",
    description:
      "Engineered a secure, encrypted messaging platform using RSA and AES-256. Developed API-driven data flow mechanisms ensuring secure data transmission.Optimized low-code automation for managing message encryption workflows.",
    image: PostalService,
    technologies: ["MongoDB", "Express js", "React Js", "Node Js", "Bootstrap"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Food Delivery - Mobile App",
    type: "Group Project",
    description:
      "Built a data-driven Android application with Firebase for real-time order tracking. Designed efficient database structures to minimize latency and enhance performance. Implemented data preloading mechanisms for a seamless user experience.",
    image: FoodApp,
    technologies: [
      "Android SDK",
      "Java",
      "Firebase",
      "Android Studio",
      "Material UI Design",
    ],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Hotel Management System - Java POS System",
    type: "Group Project",
    description:
      "Created inventory management module with MySQL database connectivity. Implemented booking system with JDBC transactions and error handling.Developed Swing-based GUI with form validation and data visualization",
    image: HotelSystem,
    technologies: ["Netbeans", "Java SE 11", "MySQL", "JDBC", "Java Swing UI"],
    demoLink: "#",
    githubLink: "#",
  },
];

import computerVision from "../assets/certificates/Computer_Vision.png";
import FeatureEngineering from "../assets/certificates/BUDDHIMA CHATHURANGA - Feature Engineering.png";
import DeepLearing from "../assets/certificates/BUDDHIMA CHATHURANGA - Intro to Deep Learning.png";
import SQL from "../assets/certificates/BUDDHIMA CHATHURANGA - Intro to SQL.png";

export const certifications = [
  {
    title: "Computer Vision",
    organization: "Kaggle",
    date: "Issued: August 2024",
    image: computerVision,
    credentialUrl:
      "https://www.kaggle.com/learn/certification/buddhimachathuranga/computer-vision",
  },
  {
    title: "Feature Engineering",
    organization: "Kaggle",
    date: "Issued: June 2024",
    image: FeatureEngineering,
    credentialUrl:
      "https://www.kaggle.com/learn/certification/buddhimachathuranga/feature-engineering",
  },
  {
    title: "Intro to Deep Learning",
    organization: "Kaggle",
    date: "Issued: July 2024",
    image: DeepLearing,
    credentialUrl:
      "https://www.kaggle.com/learn/certification/buddhimachathuranga/intro-to-deep-learning",
  },
  // {
  //   title: "Intro to SQL",
  //   organization: "Kaggle",
  //   date: "Issued: June 2024",
  //   image: SQL,
  //   credentialUrl: "https://coursera.org/verify/google-ux-cert",
  // },
];
import debaters from "../assets/award ceremony.jpg";
import sessions from "../assets/sessions.png";
export const achievements = [
  {
    title: "Sub-Editor and Technical Coordinator",
    organization: "Debaters club-Horizon Campus",
    date: " August 2024",
    image: debaters,
    credentialUrl: "https://example.com/award-details",
  },
  {
    title: "Tech Mentor and Code reviewer",
    organization: "Vision Tech Solutions",
    date: " present",
    image: sessions,
    credentialUrl: "https://example.com/hackx-certificate",
  },
];

export const sports = [
  {
    title: "Football Team Captain",
    organization: "Horizon Campus Sports Club",
    date: "From: 2022 – Present",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer%29.png",
    credentialUrl: "https://example.com/football-achievements",
  },
  {
    title: "Inter-University Cricket Champion",
    organization: "University Sports Council",
    date: "Issued: July 2023",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/fd/Cricket_ball.svg",
    credentialUrl: "https://example.com/cricket-tournament",
  },
  {
    title: "Marathon Finisher (10K)",
    organization: "Colombo City Run",
    date: "Issued: January 2024",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3d/Running_icon_-_Noun_Project_18328.svg",
    credentialUrl: "https://example.com/marathon",
  },
];
