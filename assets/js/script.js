'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });


// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}


// skills variables
const skillsContainer = document.querySelector(".skills-list");
const skills = [
  // Frontend
  { name: "HTML", icon: "./assets/images/skills/html.svg" },
  { name: "CSS", icon: "./assets/images/skills/css.svg" },
  { name: "JavaScript", icon: "./assets/images/skills/javascript.svg" },
  { name: "TypeScript", icon: "./assets/images/skills/typescript.svg" },
  { name: "React", icon: "./assets/images/skills/react.svg" },
  { name: "Next.js", icon: "./assets/images/skills/next.svg" },
  { name: "Tailwind CSS", icon: "./assets/images/skills/tailwind.svg" },

  // Mobile
  { name: "React Native", icon: "./assets/images/skills/react.svg" },
  { name: "Flutter", icon: "./assets/images/skills/flutter.svg" },

  // Backend
  { name: "Node.js", icon: "./assets/images/skills/node.svg" },
  { name: "Nest.js", icon: "./assets/images/skills/nest-js.svg" },
  { name: "Express", icon: "./assets/images/skills/express.svg" },
  { name: "PostgreSQL", icon: "./assets/images/skills/postgres.svg" },
  { name: "MongoDB", icon: "./assets/images/skills/mongodb.svg" },
  { name: "Redis", icon: "./assets/images/skills/redis.svg" },
  { name: "RabbitMQ", icon: "./assets/images/skills/rabbitmq.svg" },
  
  // DevOps & Cloud
  { name: "AWS", icon: "./assets/images/skills/aws.svg" },
  { name: "Docker", icon: "./assets/images/skills/docker.svg" },
  { name: "CI/CD", icon: "./assets/images/skills/ci-cd.svg" },
  { name: "Git", icon: "./assets/images/skills/git.svg" },

  // Tools & Testing
  { name: "Prisma", icon: "./assets/images/skills/prisma.svg" },
  { name: "Jest", icon: "./assets/images/skills/jest.svg" }
];


for (let i = 0; i < skills.length; i++) {
  skillsContainer.innerHTML += `
  <li class="skills-item">
    <img src="${skills[i].icon}" alt="${skills[i].name}" >
    <span>${skills[i].name}</span>
  </li>
  `;
}


// Projects variables
// Projects variables
const projectsContainer = document.querySelector(".projects-list");
const projects = [
  {
    title: "Crossbolt Technologies",
    description: "Built a fast, animation-rich website for a logistics brand — designed to inspire trust and load in seconds. The client wanted a clean, modern design that highlighted their cross-border delivery services while feeling dynamic and professional. Using Next.js, Tailwind CSS, and GSAP, I developed smooth transitions, optimized performance, and ensured full mobile responsiveness, giving them a platform that works flawlessly across devices.",
    tags: ["NextJS", "ReactJS", "Tailwind CSS", "GSAP"],
    imageUrl: "./assets/images/projects/crossbolt.png",
    liveUrl: "https://crossbolttechnologies.com/",
  },
  {
    title: "City Perks",
    description: "Led the backend development for a multi-platform rewards system that connects businesses with customers through personalized perks. I mentored junior developers, reviewed code, and guided architectural decisions to ensure the platform could scale and perform reliably. Using NestJS, PostgreSQL, and AWS, I implemented secure APIs, optimized database queries, and integrated third-party services — delivering a robust core that powers both the web and mobile apps.",
    tags: ["Nest.JS", "PostgreSQL", "AWS"],
    imageUrl: "./assets/images/projects/cityperks.png",
    liveUrl: "https://cityperks.ai/",
  },
  {
    title: "Thyreality",
    description: "Helped build a fast, visually polished website for a London-based PaaS provider specializing in AI, blockchain, and quantum-powered solutions. The goal was to present complex, cutting-edge technology in a clear, engaging way that resonates with multiple industries. Using Next.js and Tailwind CSS, I implemented responsive layouts, smooth animations, and performance optimizations — delivering a modern site that’s as advanced as the company’s services.",
    tags: ["NextJS", "Tailwind CSS"],
    imageUrl: "./assets/images/projects/thyreality.png",
    liveUrl: "https://thyreality.com/",
  },
  {
    title: "Influindex",
    description: "Built a high-performance backend for an influencer analytics platform — engineered to process real-time data and handle heavy traffic without breaking a sweat. Working alongside a frontend developer, I focused on scalable architecture and efficient data pipelines. Using NestJS, PostgreSQL, Prisma, RabbitMQ, and AWS, I delivered a resilient backend that empowers influencers and brands to make data-driven decisions instantly.",
    tags: ["NextJS", "NestJS", "PostgreSQL", "Prisma", "RabbitMQ", "AWS", "Tailwind CSS"],
    imageUrl: "./assets/images/projects/influindex.png",
    liveUrl: "https://influindex.com/",
  }
];

for (let i = 0; i < projects.length; i++) {
  const project = projects[i];

  projectsContainer.innerHTML += `
    <li class="project-item">
      <a href="${project.liveUrl}" target="_blank">

        <figure class="project-image">
          <img src="${project.imageUrl}" alt="${project.title}" loading="lazy">
        </figure>

        <div class="project-content">
          <h3 class="h3 project-title">${project.title}</h3>

          <p class="project-description">${project.description}</p>

          <ul class="project-tags">
            ${project.tags.map(tag => `<li class="project-tag">${tag}</li>`).join('')}
          </ul>
        </div>
      </a>
    </li>
  `;
}
