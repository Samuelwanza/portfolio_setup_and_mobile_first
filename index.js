const projects = [
  {
    image_url: "/images/tonic.png",
    project_title: "Tonic",
    work_details: {
      company: "CANOPY",
      role: "Back End Dev",
      year: 2015,
    },
    description:
      "A daily selection of privately personalized reads; no accounts orsign-ups required",
    long_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    technologies: {
      firstTech: "HTML",
      secondTech: "CSS",
      ThirdTech: "Javascript",
    },
  },
  {
    image_url: "/images/tonica.png",
    project_title: "Multi-Post Stories",
    work_details: {
      company: "CANOPY",
      role: "Back End Dev",
      year: 2015,
    },
    description:
      "A daily selection of privately personalized reads; no accounts orsign-ups required",
    long_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    technologies: {
      firstTech: "HTML",
      secondTech: "CSS",
      ThirdTech: "Javascript",
    },
  },
  {
    image_url: "/images/tonica1.png",
    project_title: "Tonic",
    work_details: {
      company: "CANOPY",
      role: "Back End Dev",
      year: 2015,
    },
    description:
      "A daily selection of privately personalized reads; no accounts orsign-ups required",
    long_description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    technologies: {
      firstTech: "HTML",
      secondTech: "CSS",
      ThirdTech: "Javascript",
    },
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const bar = document.querySelector(".bar");
  const mobileMenu = document.querySelector("#mymobilemenu");
  const blurHerosection = document.querySelector("#show-menu");
  const xIcon = document.querySelector(".mobile-menu-toggler");
  const menuList = document.querySelectorAll(".mobile-menu-items>li>a");
  const logo = document.querySelector("header > a");
  const gridContainer = document.querySelector(".grid-container");
  const popUpContainer = document.createElement("div");
  popUpContainer.style.position = "fixed";
  popUpContainer.style.top = 0;
  popUpContainer.style.height = "100vh";
  popUpContainer.style.width = "100vw";
  popUpContainer.style.zIndex = 9999;
  popUpContainer.style.opacity = 0;
  popUpContainer.style.display = "flex";
  popUpContainer.style.justifyContent = "center";
  popUpContainer.style.alignItems = "center";

  popUpContainer.style.opacity = 0.1;
  popUpContainer.style.background = "rgba(0, 0, 0, 0.2)";
  gridContainer.appendChild(popUpContainer);
  popUpContainer.style.display = "none";

  projects.map((project, index) => {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridContainer.style.zIndex = -1;

    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("image-wrapper");
    const image = document.createElement("img");
    const cardDivider = document.createElement("div");
    cardDivider.classList.add("card-divider");
    const title = document.createElement("h2");
    const workDetails = document.createElement("div");
    workDetails.classList.add("work-details");
    const firstDetail = document.createElement("p");
    firstDetail.classList.add("first-detail");
    const spacer = document.createElement("div");
    spacer.classList.add("spacer", "margin-spacer");
    const role = document.createElement("p");
    role.classList.add("margin-spacer");
    const year = document.createElement("p");
    year.classList.add("margin-spacer");
    const description = document.createElement("p");
    const technologies = document.createElement("ul");
    const techList1 = document.createElement("li");
    const techList2 = document.createElement("li");
    techList2.classList.add("margin-spacer");
    const techList3 = document.createElement("li");
    techList3.classList.add("margin-spacer");
    const workButton = document.createElement("button");
    workButton.classList.add("margin-spacer");

    image.src = project.image_url;
    imageWrapper.appendChild(image);
    gridItem.appendChild(imageWrapper);
    title.textContent = project.project_title;
    firstDetail.textContent = project;
    cardDivider.appendChild(title);
    firstDetail.textContent = project.work_details.company;
    role.textContent = project.work_details.role;
    year.textContent = project.work_details.year;
    description.textContent = project.description;
    techList1.textContent = project.technologies.firstTech;
    techList2.textContent = project.technologies.secondTech;
    techList3.textContent = project.technologies.ThirdTech;
    technologies.appendChild(techList1);
    technologies.appendChild(techList2);
    technologies.appendChild(techList3);

    workDetails.appendChild(firstDetail);
    workDetails.appendChild(role);
    workDetails.appendChild(year);
    workButton.textContent = "See Project";
    cardDivider.appendChild(workDetails);
    cardDivider.appendChild(description);
    cardDivider.appendChild(technologies);
    cardDivider.appendChild(workButton);

    gridItem.appendChild(cardDivider);

    const popUpMenu = document.createElement("div");
    popUpMenu.classList.add("grid-item");
    popUpMenu.style.width = "90vw";
    popUpMenu.style.height = "90vh";
    popUpMenu.style.background = "white";
    popUpMenu.style.display = "flex";
    popUpMenu.style.justifyContent = "center";
    popUpMenu.style.marginLeft = "10px";
    popUpMenu.style.marginTop = "5px";

    gridContainer.style.marginLeft = 0;
    gridItem.style.marginLeft = "15px";
    gridContainer.appendChild(gridItem);

    popUpContainer.innerHTML = " ";
    popUpContainer.style.opacity = 1;
    popUpContainer.style.pointerEvents = "auto";

    const open = (index) => {
      const project = projects[index];

      const popUpMenu = document.createElement("div");
      popUpMenu.classList.add("grid-item", "pop-up-menu");

      popUpMenu.innerHTML = `
    <div class="pop-up-menu-wrapper">
      <div class="pop-up-menu-title-wrapper">
        <h2 class="poptitle">${project.project_title}</h2>
        <img src="/images/popupclose.png" alt="Close" />
      </div>
      <div class="pop-work-details">
        <p class="first-detail">${project.work_details.company}</p>
        <div class="spacer margin-spacer"></div>
        <p class="margin-spacer">${project.work_details.role}</p>
        <div class="spacer margin-spacer"></div>
        <p class="margin-spacer">${project.work_details.year}</p>
      </div>
      <div class="pop-image-wrapper">
        <img src="${project.image_url}" alt="Work Image" />
      </div>
      <div class="pop-up-divider">
        <div class="long-description">
          <p>${project.long_description}</p>
        </div>
        <div class="demacator">
          <ul>
            <li>${project.technologies.firstTech}</li>
            <li class="margin-spacer">${project.technologies.secondTech}</li>
            <li class="margin-spacer">${project.technologies.ThirdTech}</li>
          </ul>
          <div class="pop-button">
            <button class="margin-spacer">See live <span><img src="images/live.svg" alt="Live" /></span></button>
            <button class="margin-spacer">See source <span><img src="images/Icon -GitHub.png" alt="GitHub" /></span></button>
          </div>
        </div>
      </div>
    </div>`;

      popUpContainer.innerHTML = "";
      popUpContainer.style.opacity = 1;
      popUpContainer.style.pointerEvents = "auto";
      popUpContainer.style.display = "flex";
      popUpContainer.style.justifyContent = "center";
      popUpContainer.style.alignItems = "center";
      popUpContainer.appendChild(popUpMenu);
      document
        .querySelector(".pop-up-menu-title-wrapper")
        .addEventListener("click", () => {
          popUpContainer.style.display = "none";
        });
    };
    workButton.addEventListener("click", () => {
      open(index);
    });
    return gridItem;
  });

  const toggleMenu = () => {
    mobileMenu.classList.toggle("mobile-menu1");
    blurHerosection.classList.toggle("header-herosection1");
  };

  const withdrawMenuBar = () => {
    toggleMenu();
    bar.style.display = "none";
    logo.style.display = "none";
  };

  const sustainMenuBar = () => {
    toggleMenu();
    bar.style.display = "block";
    logo.style.display = "block";
  };

  bar.addEventListener("click", withdrawMenuBar);
  xIcon.addEventListener("click", sustainMenuBar);
  Array.from(menuList).forEach((item) => {
    item.addEventListener("click", sustainMenuBar);
  });

  const form = document.querySelector("form");

  const validateEmail = () => {
    const emailInput = document.querySelector("#email");
    const email = emailInput.value.trim();
    const errorContent = "Email must be in lowercase ";

    if (email !== email.toLowerCase()) {
      const errorDisplay = document.createElement("span");
      errorDisplay.classList.add("error-message");
      errorDisplay.textContent = errorContent;
      const submitButton = document.querySelector(".form-btn");
      submitButton.insertAdjacentElement("afterend", errorDisplay);
      return;
    }
    form.submit();
  };
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateEmail();
});