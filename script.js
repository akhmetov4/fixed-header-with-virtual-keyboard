const thresholdRatio = 0.75;
let isKeyboardOpen = false;

let scrollAnimationFrame = null;

function handleScroll() {
  const header = document.querySelector(".header");

  if (isKeyboardOpen) {
    header.style.transform = `translateY(${window.scrollY}px)`;
  } else {
    header.style.transform = "translateY(0)";
  }
}

function handleResize(event) {
  const header = document.querySelector(".header");

  console.log("resize");
  const viewport = event.target;
  const viewportHeight = viewport.height * viewport.scale;
  isKeyboardOpen = viewportHeight / window.screen.height < thresholdRatio;
  console.log("viewportHeight", viewportHeight);
  console.log("window.screen.height", window.screen.height);
  console.log("thresholdRatio", thresholdRatio);
  console.log("isKeyboardOpen", isKeyboardOpen);
  if (isKeyboardOpen) {
    console.log("keyboard open");
    header.style.position = "absolute";
    header.style.transform = `translateY(${window.scrollY}px)`;
  } else {
    console.log("keyboard closed");
    header.style.position = "fixed";
    header.style.transform = "translateY(0)";
  }
}

window.addEventListener("scroll", handleScroll, { passive: true });

window.visualViewport.addEventListener("resize", handleResize);
