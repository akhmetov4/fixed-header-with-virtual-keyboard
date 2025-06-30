const textarea = document.querySelector("textarea");

const header = document.querySelector(".header");

const thresholdRatio = 0.75;

function handleScroll() {
  if (isKeyboardOpen) {
    console.log("keyboard open on scroll");
    header.style.top = `${window.scrollY}px`;
  } else {
    console.log("keyboard closed on scroll");
    header.style.top = "0";
  }
}

function handleResize() {
  console.log("resize");
  const viewport = event.target;
  const viewportHeight = viewport.height * viewport.scale;
  isKeyboardOpen = viewportHeight / window.screen.height < thresholdRatio;
  if (isKeyboardOpen) {
    console.log("keyboard open");
    header.style.position = "absolute";
    header.style.top = `${window.scrollY}px`;
  } else {
    console.log("keyboard closed");
    header.style.position = "fixed";
    header.style.top = "0";
  }
}

window.addEventListener("scroll", handleScroll);

window.visualViewport.addEventListener("resize", handleResize);
