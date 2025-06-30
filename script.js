const textarea = document.querySelector("textarea");

const header = document.querySelector(".header");

const thresholdRatio = 0.75;

function handleScroll() {
  console.log("scroll");
}

function handleResize() {
  console.log("resize");
  const viewport = event.target;
  const viewportHeight = viewport.height * viewport.scale;
  isKeyboardOpen = viewportHeight / window.screen.height < thresholdRatio;
  if (isKeyboardOpen) {
    console.log("keyboard open");
  } else {
    console.log("keyboard closed");
  }
}

window.addEventListener("scroll", handleScroll);

window.visualViewport.addEventListener("resize", handleResize);
