// Welcome Screen

const openBtn = document.getElementById("open-btn");
const welcomeScreen = document.getElementById("welcome-screen");
const mainContent = document.getElementById("main-content");
const music = document.getElementById("bg-music");

openBtn.addEventListener("click", () => {

    welcomeScreen.style.display = "none";
    mainContent.style.display = "block";

    if (music) {
        music.play().catch(() => {});
    }
});


// ======================
// Typewriter Message
// ======================

const message = `
प्रिय संदीप  और नंदानी ,

आप दोनों का साथ हमेशा प्रेम, विश्वास और खुशियों से भरा रहे।

भगवान आपको स्वस्थ जीवन, सफलता और अनगिनत मुस्कानें प्रदान करें।

विवाह वर्षगांठ की हार्दिक शुभकामनाएँ।

❤️ Happy Anniversary ❤️
`;

const typewriter =
document.getElementById("typewriter-text");

let index = 0;

function typeWriter() {

    if (!typewriter) return;

    if (index < message.length) {

        typewriter.innerHTML +=
        message.charAt(index);

        index++;

        setTimeout(typeWriter, 50);
    }
}

setTimeout(typeWriter, 1000);


// ======================
// Hearts Animation
// ======================

const heartsContainer =
document.getElementById(
"hearts-container"
);

setInterval(() => {

    const heart =
    document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left =
    Math.random() *
    window.innerWidth + "px";

    heart.style.bottom = "0";

    heart.style.animationDuration =
    (3 + Math.random() * 3) + "s";

    heartsContainer.appendChild(
    heart
    );

    setTimeout(() => {
        heart.remove();
    }, 6000);

}, 400);


// ======================
// Balloons
// ======================

const balloonsContainer =
document.getElementById(
"balloons-container"
);

setInterval(() => {

    const balloon =
    document.createElement("div");

    balloon.classList.add(
    "balloon"
    );

    balloon.innerHTML = "🎈";

    balloon.style.left =
    Math.random() *
    window.innerWidth + "px";

    balloon.style.animationDuration =
    (6 + Math.random() * 4) + "s";

    balloonsContainer.appendChild(
    balloon
    );

    setTimeout(() => {
        balloon.remove();
    }, 10000);

}, 2500);


// ======================
// Rose Petals
// ======================

const petalsContainer =
document.getElementById(
"petals-container"
);

setInterval(() => {

    const petal =
    document.createElement("div");

    petal.classList.add(
    "petal"
    );

    petal.innerHTML = "🌹";

    petal.style.left =
    Math.random() *
    window.innerWidth + "px";

    petal.style.animationDuration =
    (5 + Math.random() * 4) + "s";

    petalsContainer.appendChild(
    petal
    );

    setTimeout(() => {
        petal.remove();
    }, 9000);

}, 800);


// ======================
// Gift Box
// ======================

const giftBox =
document.getElementById(
"gift-box"
);

const giftMessage =
document.getElementById(
"gift-message"
);

giftBox.addEventListener(
"click",
() => {

    giftMessage.style.display =
    "block";

    giftBox.innerHTML = "💖";
}
);


// ======================
// Fireworks
// ======================

const fireworksContainer =
document.getElementById(
"fireworks-container"
);

function createFirework() {

    for(let i = 0; i < 40; i++) {

        const firework =
        document.createElement("div");

        firework.classList.add(
        "firework"
        );

        firework.style.left =
        Math.random() *
        window.innerWidth + "px";

        firework.style.top =
        Math.random() *
        window.innerHeight + "px";

        firework.style.setProperty(
        "--x",
        ((Math.random()-0.5)*300)+"px"
        );

        firework.style.setProperty(
        "--y",
        ((Math.random()-0.5)*300)+"px"
        );

        fireworksContainer.appendChild(
        firework
        );

        setTimeout(() => {
            firework.remove();
        }, 1000);
    }
}

const fireworkBtn =
document.getElementById(
"firework-btn"
);

fireworkBtn.addEventListener(
"click",
createFirework
);


// Auto Fireworks

setInterval(() => {
    createFirework();
}, 15000);