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
    title: "Crossbolt",
    description: "Built the official website for CrossBolt Technologies, a design and development agency, using Next.js for a fast, SEO-friendly architecture, Tailwind CSS for a responsive and maintainable design system, and GSAP for smooth, high-performance animations. Focused on creating a clean, modern user experience that reflects the company’s brand while ensuring accessibility and optimal performance across devices.",
    tags: ["NextJS", "ReactJS", "Tailwind CSS", "GSAP"],
    imageUrl: "./assets/images/projects/crossbolt.png",
    liveUrl: "https://github.com/sheharyarkhan/crossbolt",
    sourceUrl: "https://github.com/sheharyarkhan/crossbolt"
  },
  {
    title: "Crossbolt",
    description: "A cross-platform mobile application for cross-border delivery.",
    tags: ["React Native", "Flutter", "Node.js", "PostgreSQL", "MongoDB"],
    imageUrl: "./assets/images/projects/crossbolt.png",
    liveUrl: "https://github.com/sheharyarkhan/crossbolt",
    sourceUrl: "https://github.com/sheharyarkhan/crossbolt"
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
