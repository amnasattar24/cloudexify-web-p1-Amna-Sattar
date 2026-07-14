// ==========================
// HAMBURGER MENU
// ==========================

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// ==========================
// TYPEWRITER EFFECT
// ==========================

const phrases = [
    "Web Developer",
    "CloudExify Intern",
    "Freelancer",
    "Problem Solver"
];

let phraseIndex = 0;
let charIndex = 0;

const typedText = document.getElementById("typedText");

function typeWriter() {

    const currentPhrase = phrases[phraseIndex];

    typedText.textContent = currentPhrase.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentPhrase.length) {

        setTimeout(() => {

            charIndex = 0;

            phraseIndex++;

            if (phraseIndex >= phrases.length) {

                phraseIndex = 0;

            }

            typeWriter();

        }, 1500);

        return;

    }

    setTimeout(typeWriter, 100);

}

typeWriter();


// ==========================
// SKILL BAR ANIMATION
// ==========================

const skillObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const fill = entry.target.querySelector(".fill");

            fill.style.width = entry.target.dataset.percent + "%";

            skillObserver.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.4

});

document.querySelectorAll(".skill").forEach(skill => {

    skillObserver.observe(skill);

});


// ==========================
// PROJECT FILTER
// ==========================

const filterButtons = document.querySelectorAll("[data-filter]");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        const filter = button.dataset.filter;

        document.querySelectorAll(".project-card").forEach(card => {

            const tags = card.dataset.tags.split(",");

            if (filter === "all" || tags.includes(filter)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


// ==========================
// CONTACT FORM VALIDATION
// ==========================

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = form.name.value.trim();

    const email = form.email.value.trim();

    const message = form.message.value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "") {

        alert("Please enter your name.");

        return;

    }

    if (!emailPattern.test(email)) {

        alert("Please enter a valid email.");

        return;

    }

    if (message === "") {

        alert("Please write a message.");

        return;

    }

    alert("Thanks! Your message has been received.");

    form.reset();

});


// ==========================
// DARK / LIGHT MODE
// ==========================

// const themeToggle = document.getElementById("themeToggle");

// if (localStorage.getItem("theme") === "light") {

//     document.body.classList.add("light");

// }

// themeToggle.addEventListener("click", () => {

//     document.body.classList.toggle("light");

//     if (document.body.classList.contains("light")) {

//         localStorage.setItem("theme", "light");

//     } else {

//         localStorage.setItem("theme", "dark");

//     }

// });

// ==========================
// DARK / LIGHT MODE
// ==========================

const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");

// Load saved theme
if (localStorage.getItem("theme") === "light") {

    document.body.classList.add("light");

    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");

}

// Toggle Theme

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        localStorage.setItem("theme", "light");

        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");

    } else {

        localStorage.setItem("theme", "dark");

        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");

    }

});
// ==========================
// SMOOTH SCROLL ACTIVE LINK
// ==========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ==========================
// SCROLL TO TOP BUTTON
// ==========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.padding = "12px 15px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.fontSize = "18px";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
// tutooo
// ABOUT SECTION ANIMATION

const aboutObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.3
});

document.querySelectorAll(".about-image,.about-text,.stat-card").forEach(item=>{

item.classList.add("hidden");

aboutObserver.observe(item);

});