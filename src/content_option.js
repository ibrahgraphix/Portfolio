import Challenge1 from "./assets/images/Challenge1.png";
import Challenge2 from "./assets/images/Challenge2.png";
import Challenge3 from "./assets/images/Challenge3.png";
import Counsel1 from "./assets/images/Counsel1.png";
import Counsel2 from "./assets/images/Counsel2.png";
import Counsel3 from "./assets/images/Counsel3.png";
import Counsel4 from "./assets/images/Counsel4.png";
import Cyber1 from "./assets/images/Cyber1.png";
import Cyber2 from "./assets/images/Cyber2.png";
import Cyber3 from "./assets/images/Cyber3.png";
import Glow1 from "./assets/images/Glow1.png";
import Glow2 from "./assets/images/Glow2.png";
import Glow3 from "./assets/images/Glow3.png";
import Map1 from "./assets/images/Map1.png";
import Map2 from "./assets/images/Map2.png";
import Numerology1 from "./assets/images/Numerology1.png";
import Numerology2 from "./assets/images/Numerology2.png";
import Tour1 from "./assets/images/Tour1.png";
import Tour2 from "./assets/images/Tour2.png";
import Tour3 from "./assets/images/Tour3.png";
import Uni1 from "./assets/images/Uni1.png";
import Uni2 from "./assets/images/Uni2.png";
import Uni3 from "./assets/images/Uni3.png";
import Mtaa1 from "./assets/images/Mtaa1.png";
import Mtaa2 from "./assets/images/Mtaa2.png";
import Mtaa3 from "./assets/images/Mtaa3.png";
import Tas1 from "./assets/images/Tas1.png";
import Tas2 from "./assets/images/Tas2.png";
import Tas3 from "./assets/images/Tas3.png";

const logotext = "IBRAHIM";
const meta = {
  title: "Ibrahim Shelukindo",
  description: "I’m Ibrahim Shelukindo _ Full stack developer",
};

const introdata = {
  title: "I’m Ibrahim Shelukindo",
  animated: {
    first: "I love coding",
    second: "I make wonderful websites",
    third: "I develop mobile apps",
  },
  description:
    "Driven by curiosity and a love for creating impactful digital experiences.Enjoys solving problems through clean design and smart functionality.Always growing.",
  your_img_url: "/ibrah.JPG",
};

const dataabout = {
  title: "A bit about my self",
  aboutme:
    "I am a creative and motivated professional with strong skills in Full stack web development, graphic design, software development, and entrepreneurship. I enjoy turning ideas into user-friendly digital solutions that help people and businesses. I have a passion for both design and technology, and I love working on projects that are useful, meaningful, and make a real difference. I’m always eager to learn new things, solve problems, and grow through every experience.",
};

const skills = [
  { name: "Leadership, Teamwork & Communication", value: 98 },
  { name: "Python & C++", value: 96 },
  { name: "HTML, CSS & Bootstrap", value: 97 },
  { name: "Javascript", value: 97 },
  { name: "React & Node", value: 97 },
  { name: "Golang", value: 97 },
  { name: "GIT, Github & Gitlab", value: 97 },
  { name: "SQL & PostgreSQL", value: 96 },
  { name: "Selenium", value: 95 },
  { name: "API Building", value: 97 },
];

const services = [
  {
    title: "Mobile App Development",
    description:
      "Custom iOS and Android applications designed to engage users and solve real-world problems.",
  },
  {
    title: "Web Applications and Systems",
    description:
      "Responsive and scalable web solutions that deliver exceptional user experiences across all devices.",
  },
  {
    title: "Digital Transformation",
    description:
      "Comprehensive strategies to modernize your business processes and embrace digital innovation.",
  },
  {
    title: "Tech Solutions",
    description:
      "Expert guidance and support to help you make informed technology decisions for your business.",
  },
];

const dataportfolio = [
  // {
  //   id: "project-6",
  //   title: "TAS StartUp Business",
  //   img: Tas1,
  //   screenshots: [Tas1, Tas2, Tas3],
  //   shortDescription:
  //     "A startup focused on building innovative digital solutions tailored for Tanzania’s needs.",
  //   description:
  //     "This is my startup, Tanzania Apps Solutions (TAS), where we focus on developing digital solutions for businesses and individuals. We create websites, web applications, and tools that solve real-world problems in Tanzania. Our company emphasizes innovation, usability, and delivering solutions that make life and work easier. TAS combines technology and creativity to build products that are both practical and user-friendly.",
  //   link: "/projects/project-6",
  //   live: "https://tanzaniaappssolutions.vercel.app/",
  // },
  {
    id: "project-7",
    title: "ToursConnect Booking System",
    img: Tour1,
    screenshots: [Tour1, Tour2, Tour3],
    shortDescription:
      "A platform that connects travelers with tours, bookings, and experiences in one place",
    description:
      "This is a tour booking web app where the admin of a specific tour company can add tours, and customers of that company can view and book those tours online. Customers can select tours, enter their personal details, and submit bookings directly through the system. Admins can manage all bookings, view customer information, and track payments easily. The system simplifies tour management for both users and admins, automating processes that were previously manual. It also improves the customer experience by making tour selection, booking, and payment smooth and efficient.",
    link: "/projects/project-7",
    live: "https://tourconnect-sepia.vercel.app/",
  },
  {
    id: "project-10",
    title: "MtaaMarket App- Ecommerce for Tanzania",
    img: Tour1,
    screenshots: [Mtaa1, Mtaa2, Mtaa3],
    shortDescription:
      "A platform that connects sellers and buyers in Tanzania.",
    description:
      "MtaaMarket is a simple local marketplace that helps small sellers and nearby buyers connect using WhatsApp. Sellers can sign up, add products, and manage their shop from an easy dashboard, while buyers browse products, visit seller shops, and contact sellers easily. An admin manages sellers, products, and categories, making MtaaMarket easy to use and friendly for small businesses.",
    link: "/projects/project-10",
  },
  {
    id: "project-2",
    title: "University Counseling System",
    img: Counsel1,
    screenshots: [Counsel1, Counsel2, Counsel3, Counsel4],
    shortDescription:
      "A digital platform to manage student counseling, guidance, and support services efficiently.",
    description:
      "Students can book counseling sessions and see them organized under upcoming or past sessions. They can edit or reschedule sessions if needed. Counselors can view all booked sessions through a dedicated dashboard, take session notes, and access analytics about their bookings. All sessions also appear in a calendar for easy planning. The system ensures smooth communication between students and counselors while keeping everything organized in one place.",
    link: "/projects/project-2",
  },
  {
    id: "project-5",
    title: "University Map",
    img: Map1,
    screenshots: [Map1, Map2],
    shortDescription:
      "An interactive map tool to help navigate and explore the University campus.",
    description:
      "This project provides an interactive map for members of Flame University. Users can explore the campus, locate buildings, and navigate around the university efficiently. It serves as a helpful guide for students, staff, and visitors. The map is easy to use and visually clear, making campus navigation simple. It’s designed specifically to improve the daily experience of the university community.",
    link: "/projects/project-5",
  },
  {
    id: "project-8",
    title: "University System",
    img: Uni1,
    screenshots: [Uni1, Uni2, Uni3],
    shortDescription:
      "A comprehensive platform for managing academic, administrative, and student-related activities at Flame University.",
    description:
      "This system allows students to access IT services and a help desk from one platform. They can communicate with counselors, join study groups, and share or upload study materials. The system also provides information about jobs and internships posted by the university. It’s designed to create a connected and supportive environment for students. Overall, it helps students manage academic, social, and career-related activities efficiently. This is just Frontend for now but it will be developed more later.",
    link: "/projects/project-8",
  },
  {
    id: "project-9",
    title: "Numerology Website",
    img: Numerology1,
    screenshots: [Numerology1, Numerology2],
    shortDescription:
      "An online platform that provides personalized numerology readings and predictions based on user data.",
    description:
      "This is a personalized numerology and life insights platform. Users can enter their birth date or name to get numerology reports. The site calculates life paths, predictions, and other numerology data. It presents the results in a clean and interactive way. Users can explore different numerology tools and charts.",
    link: "/projects/project-9",
  },
  {
    id: "project-3",
    title: "Cyber Website Automation",
    img: Cyber1,
    screenshots: [Cyber1, Cyber2, Cyber3],
    shortDescription: "A project that is automated using Selenium and Python.",
    description:
      "This project automates repetitive tasks on websites using Python and Selenium. It can log in, fill forms, navigate pages, and perform actions automatically, saving time and reducing errors. The automation makes processes faster and easier compared to doing everything by hand. It is useful for testing websites or performing regular tasks efficiently. The system is simple to use and improves productivity by letting the computer do the repetitive work.",
    link: "/projects/project-3",
  },
  {
    id: "project-4",
    title: "E-commerce Website",
    img: Glow1,
    screenshots: [Glow1, Glow2, Glow3],
    shortDescription:
      "TAn online store for browsing and purchasing solar energy products easily.",
    description:
      "This is a simple frontend website designed for selling solar-powered products. Users can browse products, view details, and navigate the store with ease. The project focuses on creating a clean and modern interface for online shopping. It emphasizes usability and user experience, making it easy for customers to find and purchase products. Although it’s frontend-only, it demonstrates a professional and responsive e-commerce layout.",
    link: "/projects/project-4",
  },
  {
    id: "project-1",
    title: "Trading Challenge Tracker",
    img: Challenge1,
    screenshots: [Challenge1, Challenge2, Challenge3],
    shortDescription: "Track your trading goals and progress easily.",
    description:
      "This project allows users to track their trading profits and monitor progress through different phases. When a phase is completed, the system generates a certificate that can be downloaded. Users can also manage their wallet by depositing or withdrawing funds manually after trading in MetaTrader. It functions similarly to a funded account platform, helping traders track performance and achievements in a structured way. The project is designed to make trading progress easy to follow and reward users for their milestones.",
    link: "/projects/project-1",
  },
];

const contactConfig = {
  YOUR_EMAIL: "ibrahimshelukindo32@gmail.com",
  YOUR_FONE: "+255626178632 / +919604018282",
  description: "Have a project in mind? Drop me a message!",
  YOUR_SERVICE_ID: "service_cf8f6l9",
  YOUR_TEMPLATE_ID: "template_srcnj2v",
  YOUR_TEMPLATE_ID_TO_USER: "template_w16p9fm",
  YOUR_USER_ID: "hQQtPEn6aGPYRPTn1",
};

const socialprofils = {
  github: "https://github.com/ibrahgraphix",
  instagram: "https://www.instagram.com/ibrahshelukindo/",
  linkedin: "https://www.linkedin.com/in/ibrahim-shelukindo-a8a496225",
};

export {
  meta,
  dataabout,
  dataportfolio,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
