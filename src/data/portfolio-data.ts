export const portfolioData = {
  personal: {
    name: "Abhishek TM",
    role: "Full Stack Web Developer",
    bio: "I am an enthusiastic full-stack developer passionate about building dynamic and accessible digital experiences. Currently focusing on expanding my knowledge in modern web technologies and building real-world projects.",
    about: "My journey in software development started with a strong curiosity for problem-solving and creating things from scratch. Over time, I've taught myself various web technologies and enjoy tackling complex challenges. As an early-career developer, I am constantly learning, building, and exploring new concepts to improve my craft.",
    email: "abhishektm444@gmail.com",
    github: "https://github.com/abhishek-tm-123",
    linkedin: "https://linkedin.com/in/abhishek-t-m",
    resume: "/Abhishek_tm_resume.pdf",
  },
  skills: {
    known: [
      { name: "React", icon: "react" },
      { name: "Python", icon: "python" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "JavaScript", icon: "js" },
      { name: "HTML5", icon: "html" },
      { name: "CSS3", icon: "css" }
    ],
    learning: [
      { name: "Next.js", icon: "nextjs" },
      { name: "Tailwind CSS", icon: "tailwind" }
    ]
  },
  learningJourney: [
    {
      title: "Full Stack Web Development",
      organization: "Self-Taught Journey",
      date: "Present",
      description: "Continuously building full-stack applications. Currently mastering Next.js and Tailwind CSS while solidifying backend knowledge with FastAPI and Python."
    },
    {
      title: "Building Real-World Projects",
      organization: "Personal Learning",
      date: "Recent",
      description: "Developed 'SmartExp', an AI-powered expense tracker, implementing complex features like JWT authentication and data visualization."
    },
    {
      title: "Foundations of Web Technologies",
      organization: "Learning Phase",
      date: "Past",
      description: "Gained strong foundational knowledge in HTML, CSS, JavaScript, and React, alongside backend programming using Python."
    }
  ],
  projects: [
    {
      title: "SmartExp – AI Powered Expense Tracker",
      description: "A modern expense tracking web application that helps users manage daily expenses, visualize spending patterns, and track financial activity efficiently. Includes analytics dashboards, categorized transactions, and JWT authentication.",
      image: "/smartexp.jfif",
      tech: ["React.js", "FastAPI", "Python", "PostgreSQL", "Chart.js"],
      github: "https://github.com/abhishek-tm-123/expense-tracker-frontend",
      live: "https://expense-tracker-frontend-nine-ruddy.vercel.app/"
    },

  ]
};
