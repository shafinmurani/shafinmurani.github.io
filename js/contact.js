const email = document.querySelector(".email");
const phone = document.querySelector(".phone");
const insta = document.querySelector(".instagram");

const letters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890+@";

let interval = null;

function setIntervalLimited(callback, interval, x) {
  for (var i = 0; i < x; i++) {
    setTimeout(callback, i * interval);
  }
}

const e = new Event("build");

document.querySelector(".nav p").addEventListener("build", (event) => {
  let iteration = 0;
  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 62)];
      })
      .join("");

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 50);
});

setIntervalLimited(
  () => {
    document.querySelector(".nav p").dispatchEvent(e);
  },
  10000,
  10
);

// Wrap every letter in a span
var textWrapper = document.querySelector(".ml10 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: false })
  .add({
    targets: ".ml10 .letter",
    rotateY: [-90, 0],
    duration: 1300,
    delay: (el, i) => 45 * i,
  })
  .add({
    targets: ".ml10",
    easing: "easeOutExpo",
  });

// Wrap every letter in a span
var textWrapper = document.querySelector(".ml14 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: false })
  .add({
    targets: ".ml14 .line",
    scaleX: [0, 1],
    opacity: [0.5, 1],
    easing: "easeInOutExpo",
    duration: 900,
  })
  .add({
    targets: ".ml14 .letter",
    opacity: [0, 1],
    translateX: [40, 0],
    translateZ: 0,
    scaleX: [0.3, 1],
    easing: "easeOutExpo",
    duration: 800,
    offset: "-=600",
    delay: (el, i) => 150 + 25 * i,
  })
  .add({
    targets: ".ml14",
    duration: 1000,
    easing: "easeOutExpo",
  });

// Wrap every letter in a span
var textWrapper = document.querySelector(".ml7 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: false })
  .add({
    targets: ".ml7 .letter",
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i,
  })
  .add({
    targets: ".ml7",
    easing: "easeOutExpo",
  });
