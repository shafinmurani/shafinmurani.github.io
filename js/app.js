const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";

let interval = null;

function setIntervalLimited(callback, interval, x) {

    for (var i = 0; i < x; i++) {
        setTimeout(callback, i * interval);
    }

}

document.querySelector(".name").onmouseover = event => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
        event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return event.target.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 62)]
            })
            .join("");

        if (iteration >= event.target.dataset.value.length) {
            clearInterval(interval);
        }

        iteration += 1 / 3;
    }, 50);
}

const event = new Event("build");

document.querySelector(".nav p").addEventListener('build', event => {
    let iteration = 0;
    ;
    clearInterval(interval);

    interval = setInterval(() => {
        event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return event.target.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 62)]
            })
            .join("");

        if (iteration >= event.target.dataset.value.length) {
            clearInterval(interval);
        }

        iteration += 1 / 3;
    }, 50);
});

let i = 0;
document.querySelector(".nav p").dispatchEvent(event)

setIntervalLimited(() => {
    document.querySelector(".nav p").dispatchEvent(event)
    i++;
    if (i >= 5) {
        clearInterval()
    }
}, 10000, 5);