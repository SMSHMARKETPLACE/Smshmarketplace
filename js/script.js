
// ================= MOBILE MENU =================
const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// ================= COUNTER ANIMATION =================
const counters = document.querySelectorAll(".counter");

const startCounter = (counter) => {
    const target = +counter.getAttribute("data-target");
    let count = 0;

    const update = () => {
        const increment = target / 100;

        if (count < target) {
            count += increment;
            counter.innerText = Math.ceil(count);
            setTimeout(update, 20);
        } else {
            counter.innerText = target + "+";
        }
    };

    update();
};

// Run counter when visible
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounter(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.6 });

counters.forEach(counter => {
    observer.observe(counter);
});

// ================= SMOOTH SCROLL =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: "smooth"
            });
        }
    });
});

// ================= HEADER SCROLL EFFECT =================
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "#050a14";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";
    } else {
        header.style.background = "#09111f";
        header.style.boxShadow = "none";
    }
});

// ================= FORM SUBMIT (BASIC) =================
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        alert("Thank you! Your enquiry has been submitted.");

        form.reset();
    });
}