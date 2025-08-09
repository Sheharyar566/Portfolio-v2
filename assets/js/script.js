'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}


// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



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