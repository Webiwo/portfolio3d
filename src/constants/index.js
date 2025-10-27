import {
  javascript,
  html,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  dev,
  analysis,
  qa,
  agile,
  arvato,
  capgemini,
  qsg,
  payu,
  allegro,
  wokiss,
  domdata,
  empty,
  linkedin,
  github,
  tripguide,
} from "../assets";

export const navLinks = [
  { id: "about", title: "about" },
  { id: "work", title: "work" },
  { id: "contact", title: "contact" },
];

export const services = [
  { title: "frontend_backend", icon: dev },
  { title: "analyst", icon: analysis },
  { title: "qa", icon: qa },
  { title: "agile", icon: agile },
];

export const technologies = [
  { name: "html", icon: html },
  { name: "tailwind", icon: tailwind },
  { name: "javascript", icon: javascript },
  { name: "react", icon: reactjs },
  { name: "node", icon: nodejs },
  { name: "mongodb", icon: mongodb },
];

export const profiles = [
  { name: "linkedin", icon: linkedin, url: "https://www.linkedin.com/in/slawomirpiwowarski/" },
  { name: "github", icon: github, url: "https://github.com/Webiwo" },
];

export const experiences = [
  { id: "nauka", icon: empty, iconBg: "#E6DEDD" },
  { id: "arvato", icon: arvato, iconBg: "#383E56" },
  { id: "capgemini", icon: capgemini, iconBg: "#E6DEDD" },
  { id: "qsg", icon: qsg, iconBg: "#383E56" },
  { id: "payu", icon: payu, iconBg: "#383E56" },
  { id: "allegro", icon: allegro, iconBg: "#E6DEDD" },
  { id: "wokiss", icon: wokiss, iconBg: "#E6DEDD" },
  { id: "domdata", icon: domdata, iconBg: "#E6DEDD" },
  { id: "polsoft", icon: empty, iconBg: "#E6DEDD" },
];

export const projects = [
  {
    name: "car_rent",
    description: "car_rent",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "job_it",
    description: "job_it",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "restapi", color: "green-text-gradient" },
      { name: "scss", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "trip_guide",
    description: "trip_guide",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "supabase", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];
