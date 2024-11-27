import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import Portss from "@/public/Portss.png";
import Cropss from "@/public/Cropss.png";
import Dapss from "@/public/Dapss.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name:"Internship",
    hash:"#internship",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
 
] as const;

export const educationData = [
  {
    title: "MCA (Post Graduation)",
    location: "Bengaluru,Karnataka",
    description:
      "I have completed my Master's in Computer Applications at Bangalore Institute of Technology with 9.24 CGPA. During my study got an opportunity to work as intern for the duration of three months at Globalsoft.",
    icon: React.createElement(LuGraduationCap),
    date: "2022-2024",
  },
  {
    title: "BSC (Graduation)",
    location: "Hosapete,Karnataka",
    description:
      "I have completed my Bachelor's in Science with specialisation in Computer Science and secured 8.09 CGPA and also upskilled myself by completing Java Full Stack Developer Training at Pentagon Space.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2022",
  },
  {
    title: "PUC",
    location: "Manvi,Raichur,Karnataka",
    description:
      "I have completed my Pre University at Loyola PU College with a specialization in Physics, Chemistry, Mathematics and Computer Science and secured 76.83%",
    icon: React.createElement(LuGraduationCap),
    date: "2017-2019",
  },
  {
    title: "SSLC",
    location: "Manvi,Raichur,Karnataka",
    description:
      "I have completed my Secondary Schooling at BVR High School and secured 87.36%.",
    icon: React.createElement(LuGraduationCap),
    date: "2016-2017",
  },
] as const;

export const projectsData = [
  {
    title: "Agriculture Portal",
    description:
      "I worked on a agriculture portal project which helps farmers to maximize thier profits based on crop yield prediction and crop recomondation which also includes weather forecasting.",
    tags: ["Python","PHP","MySql","HTML","CSS","XAMPP"],
    imageUrl: Cropss,
  },
  {
    title: "Port Folio",
    description:
      "Worked on port folio website using current techology trends.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: Portss,
  },
  {
    title: "Cyber Attacks Data Analysis",
    description:
      "Done an analysis on the different types of cyber attacks taking place in real world scenarios.",
    tags: ["Python"],
    imageUrl: Dapss,
  },
] as const;

export const InternshipData = [
  {
    title: "Associate Software Engineer Intern | Globalsoft",
    location: "Bengaluru,Karnataka",
    description:"I developed the front end of a web application using Next.js and TypeScript, collaborating with cross-functional teams to gather requirements and deliver features efficiently. I implemented responsive designs with Tailwind CSS to ensure a seamless user experience and integrated RESTful APIs to fetch and display dynamic data. Throughout the project, I utilized Git and GitHub for version control and collaborative development, gaining practical experience with the Software Development Life Cycle (SDLC) and Agile methodologies. Additionally, I honed task management and tracking skills using Tuleap while enhancing my communication, problem-solving, and code optimization abilities.",
    icon: React.createElement(CgWorkAlt),
    date: "04/2024-07/2024",

  },
  {
    title: "Intern | Omnicybex",
    location: "Bengaluru,Karnataka",
    description:"I gained a solid understanding of the fundamentals of cybersecurity, complemented by hands-on experience with the Kali Linux operating system. Additionally, I worked on adversary emulation using the Caldera platform, where I performed automated adversary simulations on a target machine by installing and configuring an agent, effectively applying theoretical knowledge to practical scenarios.",
    icon: React.createElement(CgWorkAlt),
    date: "11/2023-12/2023",
  }

]

export const skillsData = [
  "Java",
  "C#",
  "Python",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "SQL",
  "MongoDB",
  "Git",
  "GitHub",
  "BitBucket",
  "Tuleap",
 
] as const;

