import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I'm a Software Developer and ML enthusiast with a strong background in building AI-driven applications, scalable backend systems, and real-time computer vision solutions. I combine creativity with technical expertise to build impactful and user-friendly tech products.`;

export const ABOUT_TEXT = `Hi, I’m Ashzad Kamal, a Software Developer and Machine Learning enthusiast based in Kolkata, India. I recently completed my B.Tech in Computer Science and have experience building AI-powered applications, scalable backends, and real-time computer vision tools.

I’ve worked with companies like .Monks and currently working at Myrix Labs, where I developed full-stack web apps, intelligent chatbots, and edge computing systems using technologies like FastAPI, Flask, Vue.js, TensorFlow, and MediaPipe.

I’m passionate about generative AI, automation, and creating user-friendly tech that solves real-world problems. When I’m not coding, I’m usually experimenting with side projects that blend creativity and AI.`;

export const EXPERIENCES = [
  {
    year: "Dec 2024 - Present",
    role: "Software Developer",
    company: "Myrix Labs",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: [
      "Node.js",
      "React.js",
      "Express",
      "mongoDB",
      "FastAPI",
      "Machine Learning",
    ],
  },
  {
    year: "June 2024 - Dec 2024",
    role: "Machine Learning Engineer",
    company: ".Monks",
    description: `Worked on machine learning projects, including data preprocessing, model training, and deployment. Developed and optimized algorithms for image recognition and natural language processing tasks. Collaborated with data scientists to improve model performance.`,
    technologies: [
      "TensorFlow",
      "Flask",
      "OpenCV",
      "ComfyUI",
      "Stable Diffusion",
      "Postgres",
    ],
  },
  {
    year: "Jan 2024 - April 2024",
    role: "Data Science Intern",
    company: "Meritshot",
    description: `Assisted in data analysis and visualization projects using Python and Pandas. Developed machine learning models for predictive analytics. Collaborated with the data science team to improve data collection and processing methods.`,
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: " ",
  phoneNo: "+91 7044217987",
  email: "ashzadkamalwork@gmail.com",
};
