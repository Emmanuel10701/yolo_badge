import {
    mobile,
    backend,
    creator,
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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "React JS Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "UI/UX Designer",
      icon: creator,
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
    /*{
      name: "TypeScript",
      icon: typescript,
    },*/
    {
      name: "React JS",
      icon: reactjs,
    },
    /*{
      name: "Redux Toolkit",
      icon: redux,
    },*/
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    /*{
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
    },*/
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    /*{
      name: "docker",
      icon: docker,
    },*/
  ];
  
  const experiences = [
    {
      title: "Responsive Web Design",
      //company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Design for every device.",
      points: [
        "Designed and developed responsive websites using HTML, CSS, and JavaScript.",
        "Ensured optimal performance across all devices and screen sizes.",
        "Focused on creating seamless user experiences with clean, adaptive layouts.",
      ],
    },
    {
      title: "User-Centered UI/UX Prototyping",
      //company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Users first, always",
      points: [
        "Created interactive prototypes and wireframes for web applications.",
        "Focused on user experience and functionality.",
        "Utilized tools like Figma and Adobe XD to design intuitive and visually appealing interfaces.",
      ],
    },
    {
      title: "Frontend Development with React JS",
      //company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Dynamic, scalable apps.",
      points: [
        "Built dynamic and scalable frontend applications using React JS.",
        "Leveraged React's component-based architecture to create reusable UI components.",
        "Optimized performance and improved user interaction.",
      ],
    },
    {
      title: "JavaScript-Based Interactive Web Applications",
      //company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Interactive web magic.",
      points: [
        "Developed interactive web applications using JavaScript.",
        "Enhanced user engagement with features like animations, event handling, and real-time updates.",
        "Emphasized fast load times and smooth transitions.",
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
      name: "Modern Bank App",
      description:
        "Built a fully responsive website using React JS and Tailwind CSS, featuring a stunning hero section, business stats, reusable components, call-to-action buttons, and testimonials.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        /*{
          name: "mongodb",
          color: "green-text-gradient",
        },*/
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/hirushavinushka99/Modern-Bank-App",
    },
    {
      name: "Expense Tracker App",
      description:
        "A React-based Expense Tracker app using useState, useContext, useReducer, and the Context API for efficient state management, providing real-time income and expense tracking.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "contextapi",
          color: "green-text-gradient",
        },
        /*{
          name: "scss",
          color: "pink-text-gradient",
        },*/
      ],
      image: jobit,
      source_code_link: "https://github.com/hirushavinushka99/Expense-Tracker",
    },
    {
      name: "Millionaire Quiz App",
      description:
        "Developed a Who Wants to Be a Millionaire trivia quiz app using React hooks for state management, lifelines, score tracking, and responsive design, showcasing interactive web application skills.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        /*{
          name: "supabase",
          color: "green-text-gradient",
        },*/
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/hirushavinushka99/React-Millionaire-Quiz-App",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };