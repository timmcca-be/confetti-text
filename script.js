const urlParams = new URLSearchParams(location.search);

document.getElementById("text").innerText = urlParams.get("text");
if (urlParams.get("sound") === "true") {
    document.getElementById("fanfare").play();
}

const particleCount = 50;
const defaults = {
    startVelocity: 15,
    spread: 360,
    ticks: 60,
    zIndex: 0,
    scalar: 1.5,
};

function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

const interval = setInterval(function () {
    // since particles fall down, start a bit higher than random
    confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    });
    confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    });
}, 400);
