//Cursor Effect
// const circles = document.querySelectorAll(".circle");
// const coords = { x: 0, y: 0 };

// circles.forEach((circle) => {
//   circle.x = 0;
//   circle.y = 0;
// });

// const animateCursor = () => {
//   let x = coords.x;
//   let y = coords.y;

//   circles.forEach((circle, index) => {
//     circle.style.left = x - 12 + "px";
//     circle.style.top = y - 12 + "px";
//     circle.x = x;
//     circle.y = y;

//     const nextCircle = circle[index + 1] || circle[0];
//     x += (nextCircle.x - x) * 0.3;
//     y += (nextCircle.y - y) * 0.3;
//   });
// };

// window.addEventListener("mousemove", (e) => {
//   coords.x = e.clientX;
//   coords.y = e.clientY;
//   animateCursor();
// });

//nav bg-color change dynamically as per section
const nav = document.querySelector("nav");
const main = document.querySelector("#main");
const skills = document.querySelector("#skills");
const about = document.querySelector("#about");
const exp = document.querySelector("#exp");

const getBgStyleValue = (div) => {
  return window.getComputedStyle(div).backgroundColor;
};

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const commonHeightOfSections = main.offsetHeight;

  if (scrollY <= main.offsetTop + commonHeightOfSections) {
    nav.style.backgroundColor = getBgStyleValue(main);
  }
  if (
    scrollY >= skills.offsetTop - nav.offsetHeight &&
    scrollY < skills.offsetTop + commonHeightOfSections
  ) {
    nav.style.backgroundColor = getBgStyleValue(skills);
  }
  if (
    scrollY >= exp.offsetTop - nav.offsetHeight &&
    scrollY < exp.offsetTop + commonHeightOfSections
  ) {
    nav.style.backgroundColor = getBgStyleValue(exp);
  }
  if (scrollY >= exp.offsetTop + commonHeightOfSections - nav.offsetHeight) {
    nav.style.backgroundColor = getBgStyleValue(about);
  }
});

// smooth page scroll logics
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = anchor.getAttribute("href");
    const targetEle = document.querySelector(targetId);
    if (targetEle) {
      targetEle.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

//download resume btn click dummy effect
const btnLoading = document.querySelector("#btn-loading");
btnLoading.addEventListener("click", () => {
  btnLoading.classList.add("btn-loading");
  btnLoading.addEventListener("animationend", () => {
    btnLoading.classList.remove("btn-loading");
  });
});

//translate x effect main
const parent = document.getElementById("main-con");
const children = parent.children;

Array.from(children).forEach((child, index) => {
  const delay =
    index === 0 ? 0.5 : index === 1 ? 1.5 : index === 1.5 ? 1.8 : 3.2;
  child.style.animation = `slidingX 1s both ${delay}s`;
});

//scroll watcher top logic based on nav
const scrollTopValueSet = () => {
  const navHeight = document.querySelector("nav").offsetHeight;
  const scrollWatcher = document.querySelector(".scroll-watcher");
  scrollWatcher.style.top = navHeight + "px";
};
scrollTopValueSet();
window.addEventListener("resize", scrollTopValueSet);

//about page intersectionObserver in mobile view
const cardCon = document.querySelector(".card-con");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.transform = "translateX(-20%)";
        entry.target.classList.add("bring-card-con");
      }
    });
  },
  { threshold: 0.5 }
);
observer.observe(cardCon);

//skill section js
const imgBxs = document.querySelectorAll(".skillImgBx");
imgBxs.forEach((imgBx) => {
  imgBx.addEventListener("click", () => {
    imgBxs.forEach((imgBxT) => {
      imgBxT.classList.remove("active");
    });
    imgBx.classList.add("active");
    const imgBxCon = imgBx.getAttribute("data-name");
    document.querySelector(".skill-content").textContent = imgBxCon;
  });
});

const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.isIntersecting && entry.target.classList.add("icons-circles");
    });
  },
  { threshold: 0.5 }
);

imgBxs.forEach((imgBx) => {
  skillObserver.observe(imgBx);
});
