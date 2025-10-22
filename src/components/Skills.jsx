import React from "react";
import Title from "./Title";
import {
  FaPhp,
  FaReact,
  FaVuejs,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaNetworkWired,
  FaPython,
} from "react-icons/fa";
import {
  SiLaravel,
  SiMysql,
  SiTailwindcss,
  SiHostinger,
  SiJavascript,
  SiBitbucket,
  SiFilezilla,
  SiGit,
  SiPostman,
} from "react-icons/si";

const skills = [
  { name: "PHP", icon: <FaPhp className="text-indigo-500" /> },
  { name: "Laravel", icon: <SiLaravel className="text-red-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
  { name: "React", icon: <FaReact className="text-sky-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  {
    name: "Python",
    icon: <FaPython className="text-emerald-500" />,
  },
  { name: "Vue.js", icon: <FaVuejs className="text-green-500" /> },
  {
    name: "GitHub Actions",
    icon: <FaGithub className="text-gray-700 dark:text-gray-200" />,
  },
  {
    name: "Hostinger",
    icon: <SiHostinger className="text-purple-600" />,
  },
  {
    name: "APIs",
    icon: <FaNetworkWired className="text-emerald-500" />,
  },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },

  {
    name: "HTML & CSS",
    icon: (
      <div className="flex gap-1">
        <FaHtml5 className="text-orange-500" />
        <FaCss3Alt className="text-blue-500" />
      </div>
    ),
  },
  { name: "FileZilla", icon: <SiFilezilla className="text-red-600" /> },
  { name: "Git", icon: <SiGit className="text-orange-500" /> },
  { name: "Bitbucket", icon: <SiBitbucket className="text-blue-600" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
];

function Skills() {
  return (
    <div className="w-full md:w-8/12 mx-auto mt-10">
      <Title>Skills</Title>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-20">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center gap-2 p-4 
                       text-sm font-medium bg-stone-100 dark:bg-stone-800 
                       text-stone-800 dark:text-stone-200 rounded-xl shadow-sm 
                       transition-all duration-200 hover:scale-105 hover:shadow-md 
                       hover:bg-stone-200 dark:hover:bg-stone-700"
          >
            <div className="text-3xl">{skill.icon}</div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
