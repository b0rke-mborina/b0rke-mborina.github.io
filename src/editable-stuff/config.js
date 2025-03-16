// NAVIGATION BAR SECTION
const navBar = {
  show: true,
};

// MAIN BODY SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff2b2b, #ffc29e",
  firstName: "Mateo",
  middleName: "",
  lastName: "Borina",
  message: " Driven to create secure and innovative tech solutions. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/b0rke-mborina",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/mateo-borina/",
    }
  ]
};

// ABOUT SECTION
const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/mateoborina.jpg"),
  imageSize: 375,
  message:
    "My name is Mateo Borina. I'm a graduate of 2024 from Faculty of informatics at Juraj Dobrila University of Pula, Croatia with a degree in Informatics (Computer Science). I'm passionate about software development and cybersecurity. In my free time, I enjoy working on personal (and open-source) projects.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "b0rke-mborina",
  reposLength: 0,
  specificRepos: [
    // software developement
    "apartment-manager-backend", "apartment-manager-frontend", "company-crm", "meal-chooser", // "notepad-planer",
    // cybersecurity
    "zta-cybersec-suite", // "password-generator",
    // machine learning
    "wildfire-detection", // "fipulab-fl",
    // microservices
    "distsys-workers", "distsys-services",
    // data
    // "sales-statistics", "lovstvo-u-hrvatskoj",
    // other
    // "praktikum", "car-watch", "optics-manipulation-tool"
  ],
};

// LEADERSHIP SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "At university, I stepped into leadership roles when my team needed direction, ensuring clear plans, motivation, and deadlines were met. This taught me that leadership is about responsibility and guiding a team toward success.\nI believe the best leaders lead by example and focus on business impact—demonstrating best practices and ensuring technical decisions create real value. However, I prefer an expert career path over a leadership track, as I enjoy deep technical problem-solving and continuous learning.\nWorking with mentors has been invaluable to my growth, helping me refine my skills and navigate challenges. I aim to keep learning from experienced professionals while also sharing my knowledge with others.",
  images: [
    {
      img: require("../editable-stuff/mateoborina.jpg"),
      label: "University project",
      paragraph: "Leading a team to complete the assignment."
    },
    {
      img: require("../editable-stuff/mateoborina.jpg"),
      label: "Career development",
      paragraph: "I prefer an expert career path."
    },
    {
      img: require("../editable-stuff/mateoborina.jpg"),
      label: "Mentors",
      paragraph: "Working with mentors has been all-important to my growth."
    },
  ],
  imageSize: {
    width:"615",
    height:"440"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    // frontend
    { name: "JavaScript", value: 95 },
    { name: "React", value: 90 },
    { name: "HTML, CSS", value: 85 },
    { name: "Vue", value: 90 },
    // mobile
    { name: "Flutter, Dart", value: 75 },
    { name: "Kotlin", value: 90 },
    // backend
    { name: "Java", value: 90 },
    { name: "Spring", value: 80 },
    { name: "Python", value: 80 },
    { name: ".NET + C#", value: 85 },
    { name: "Node.js", value: 90 },
    { name: "PHP", value: 75 },
    // other
    { name: "SQL", value: 80 },
    { name: "Jest", value: 75 },
    { name: "Tensorflow", value: 75 },
    { name: "Docker + Kubernetes", value: 75 },
  ],
  softSkills: [
    // technical related
    { name: "Problem Solving", value: 90 },
    { name: "Goal-Oriented", value: 95 },
    { name: "Analytical Thinking", value: 85 },
    { name: "Critical Thinking", value: 95 },
    { name: "Attention to Detail", value: 75 },
    { name: "User-Centered Thinking", value: 85 },
    // solo work
    { name: "Adaptability", value: 80 },
    { name: "Organization", value: 95 },
    { name: "Creativity", value: 80 },
    { name: "Resilience", value: 85 },
    // team work
    { name: "Collaboration", value: 90 },
    { name: "Communication", value: 85 },
    { name: "Empathy", value: 75 },
    { name: "Positivity", value: 75 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or Cybersecurity opportunities! If you know of any positions available, or if you have any questions, please feel free to email me at",
  email: "borinamateo@gmail.com",
};

// EXPERIENCE SECTION
const experiences = {
  show: false,
  heading: "Experience",
  data: [
    {
      role: 'Software Engineer',
      companylogo: require('../assets/img/intersofttechnologies.png'),
      date: 'November 2022 - March 2023',
    },
    {
      role: 'Software Developer',
      companylogo: require('../assets/img/penta.png'),
      date: 'July 2022 - August 2022',
    },
    {
      role: 'SEO Content Writer',
      companylogo: require('../assets/img/mijena.jpg'),
      date: 'November 2021 - June 2022',
    },
    {
      role: 'Web Developer',
      companylogo: require('../assets/img/linklab.png'),
      date: 'June 2020 - September 2020',
    },
  ]
}

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
