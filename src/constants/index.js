import {
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
  arvato,
  capgemini,
  qsg,
  payu,
  allegro,
  wokiss,
  domdata,
  empty,
  tripguide,
  threejs,
  firebase,
  cucumber,
  selenium,
  rest,
  miro,
  jira,
  dev,
  analysis,
  qa,
  agile,
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
    title: "Frontend & Backend Developer",
    icon: dev,
  },
  {
    title: "Business & System Analyst",
    icon: analysis,
  },
  {
    title: "Quality Assurance Engineer",
    icon: qa,
  },
  {
    title: "Scum Master & Agile Coach",
    icon: agile,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  /*
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "REST API",
    icon: rest,
  },*/
];

const experiences = [
  {
    title: "Scrum Master, Agile Coach",
    company_name: "Arvato",
    icon: arvato,
    iconBg: "#383E56",
    date: "November 2021 - April 2025",
    points: [
      "Supporting the organization in implementing Agile transformation.",
      "Conducting workshops and training sessions on Agile methodologies for Scrum Masters, Product Owners, development teams, and organizational departments.",
      "Providing ongoing support to Scrum Masters, development teams, and Product Owners in their daily work.",
      "Promoting Agile practices and mindset across the organization including leading webinars, enhancing internal project management methodology with Agile elements, and preparing change strategies for leadership.",
    ],
  },
  {
    title: "Scrum Master, Agile Coach",
    company_name: "Capgemini",
    icon: capgemini,
    iconBg: "#E6DEDD",
    date: "June 2018 - October 2021",
    points: [
      "Coordinator and Scrum Master in a large-scale program (40 scrum teams located in the US, UK, India and Poland) for a major U.S. financial organization <a target='_blank' style='text-decoration: underline;' href='https://www.discover.com/'>Discover Financial Services</a>, delivered using the Scaled Agile Framework (SAFe).",
      "Agile Transformation Consultant, Agile Coach, and Scrum Master in several projects run by the logistics company <a target='_blank' style='text-decoration: underline;' href='https://www.dbschenker.com/tscwarsaw-pl/'>DB Schenker</a>.",
      "Co-organizer and active participant in tech conferences held by the company and the city of Poznań (Pozitive Technologies).",
      "Responsible for developing the QA department at Capgemini Poznań, including talent acquisition and conducting job interviews. Line manager.",
      "Guest lecturer in collaboration with Poznań University of Technology and Adam Mickiewicz University",
    ],
  },
  {
    title: "Product Manager",
    company_name: "QSG",
    icon: qsg,
    iconBg: "#383E56",
    date: "February 2017 - May 2018",
    points: [
      "Maintaining strong customer relationships and collaborating closely on the product roadmap.",
      "Overseeing the entire Software Development Life Cycle of a lean manufacturing system designed to plan, execute, visualize, control, and report on industrial production.",
      "Planning, supervising, and managing the development and release process of the system at the Faurecia Frames plant in Wałbrzych.",
      "Conducting gap analyses, impact assessments, and risk evaluations.",
      "Collaborating with the business analysis team.",
      "Working closely with development teams to ensure timely delivery of the valuable features with the expected quality.",
      "Partnering with the QA team throughout testing phases and contributing to release decisions,",
    ],
  },
  {
    title: "Systems Analyst, QA Engineer, Software Developer",
    company_name: "PayU",
    icon: payu,
    iconBg: "#383E56",
    date: "December 2011 - January 2017",
    points: [
      "Analyzing, designing, developing, testing and maintaining efficient and scalable IT solutions:",
      "Backend development using Java 7/8, Spring, Spring Boot, and PHP.",
      "Frontend development using Java (JSP, GWT) and JavaScript (ReactJS).",
      "Writing complex SQL queries for Oracle databases.",
      "Creating automated E2E tests with Java, Selenium, and Cucumber (BDD), integration and unit tests with JUnit.",
      "Monitoring and analyzing system performance using Dynatrace, JMeter, Splunk.",
      "Automating the process of building, testing, and deploying application using Jenkins, Docker, Liquibase.",
      "Gathering, analyzing, and documenting business and technical requirements.",
    ],
  },
  {
    title: "Software Developer, Business Analyst",
    company_name: "Allegro",
    icon: allegro,
    iconBg: "#E6DEDD",
    date: "June 2008 - November 2011",
    points: [
      "Designing and developing strategic components of e-commerce platforms using PHP and Oracle for individual and institutional clients across international marketplaces, including allegro.pl, aukro.bg, aukro.cz, aukro.sk, aukro.ro, aukro.ua, molotok.ru, and teszvesz.hu.",
      "Eliciting, documenting, and analyzing business requirements according to BABOK guidelines.",
      "Conducting requirements gathering workshops and preparing detailed solution specifications and use cases.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name:
      "Wielkopolski Ośrodek Kształcenia i Studiów Samorządowych (WOKISS)",
    icon: wokiss,
    iconBg: "#E6DEDD",
    date: "contract work in 2006",
    points: [
      "Designing and developing websites for cities and municipalities in the Greater Poland region using Photoshop, PHP (MODX Revolution), HTML, CSS, and JavaScript.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Domdata",
    icon: domdata,
    iconBg: "#E6DEDD",
    date: "August 2002 - May 2008",
    points: [
      "Building and maintaining applications with technologies such as Sybase PowerBuilder, Borland C++ Builder, Visual Basic, ASP, PHP, and JavaScript.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Projekty Bankowe POLSOFT",
    icon: empty,
    iconBg: "#E6DEDD",
    date: "August 2000 - May 2002",
    points: [
      "Contributing to the development of a banking system using Sybase PowerBuilder and Microsoft SQL Server.",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
