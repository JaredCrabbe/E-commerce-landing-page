const initApp = () => {
  const hamburgerBtn = document.querySelector("#mobile-open-button");
  const mobileMenu = document.querySelector("#mobile-menu");
  const header = document.querySelector("#header");
  const itemClassName = "carousel-card";
  let items = document.getElementsByClassName(itemClassName);
  let totalItems = items.length - 1;
  let activeSlide = 0;
  let isMoving = false;

  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");

  function getNewPosition(direction) {
    let totalWidth =
      items[0].parentElement.parentElement.parentElement.clientWidth;
    let singleAmountToMoveHorizontally = Math.floor(totalWidth / totalItems);
    let singleItemWidth = items[0].clientWidth;

    console.log(
      `singleItemWidth = totalWidth:${totalWidth} / totalItems:${totalItems} = ${singleItemWidth}`
    );

    if (direction === "right") {
      console.log("parameter -> move Right");
      positionX = Math.floor(singleItemWidth * (activeSlide + 1));
      console.log(
        `positionX = singleItemWidth:${singleItemWidth} *
        activeSlide:${activeSlide} = positionX:${positionX}`
      );
    } else if (direction === "left") {
      console.log("parameter <- move left");
      positionX = Math.floor(positionX - singleItemWidth + 1);
      console.log(
        `positionX = positionX - singleItemWidth:${singleItemWidth} *
        activeSlide:${activeSlide} = positionX:${positionX}`
      );
    }
    return positionX;
  }

  nextBtn.onclick = function() {
    if (isMoving) return;
    isMoving = true;
    if (activeSlide === totalItems - 1) {
      console.log("cant go right anymore");
      isMoving = false;
    } else {
      moveCards(-getNewPosition("right"));
      activeSlide = activeSlide + 1;
      console.log(`activeSlide + 1 = ${activeSlide}`);
      setTimeout(() => {
        isMoving = false;
      }, 200);
    }
  };
  prevBtn.onclick = function() {
    if (isMoving) return;
    isMoving = true;
    if (activeSlide === 0) {
      console.log("cant go left anymore");
      isMoving = false;
    } else {
      moveCards(-getNewPosition("left"));
      activeSlide = activeSlide - 1;
      console.log(`activeSlide - 1 = ${activeSlide}`);
      setTimeout(() => {
        isMoving = false;
      }, 200);
    }
  };

  const moveCards = amount => {
    for (let key in items) {
      if (items.hasOwnProperty(key)) {
        value = items[key];
        items[key].style.transform = `translate(${amount}px)`;
      }
    }
  };

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
    header.classList.toggle("hidden");
  };

  hamburgerBtn.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);
};

document.addEventListener("DOMContentLoaded", initApp);
