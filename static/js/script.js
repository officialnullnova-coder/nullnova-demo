/* =====================================================
   NULLNOVA PORTFOLIO
   Professional JavaScript
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ================= HEADER ================= */

    const header = document.querySelector(".header");

    function updateHeader() {

        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

    window.addEventListener("scroll", updateHeader);

    updateHeader();


    /* ================= MOBILE MENU ================= */

const menuToggle =
    document.getElementById("menuToggle");

const navbar =
    document.getElementById("navbar");


if (menuToggle && navbar) {

    menuToggle.addEventListener(
        "click",
        function () {

            menuToggle.classList.toggle("active");

            navbar.classList.toggle("active");

        }
    );


    /* Close menu after clicking a link */

    const mobileLinks =
        navbar.querySelectorAll("a");

    mobileLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                menuToggle.classList.remove(
                    "active"
                );

                navbar.classList.remove(
                    "active"
                );

            }
        );

    });

}



    /* ================= SMOOTH SCROLL ================= */

    const navLinks = document.querySelectorAll(
        '.navbar a[href^="#"]'
    );

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            event.preventDefault();

            const targetId = link.getAttribute("href");
            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            const headerHeight = header.offsetHeight;

            const targetPosition =
                target.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        });

    });


    /* ================= ACTIVE NAVBAR ================= */

    const sections = document.querySelectorAll(
        "section[id]"
    );

    function updateActiveNav() {

        const scrollPosition =
            window.scrollY + header.offsetHeight + 120;

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            const navLink = document.querySelector(
                '.navbar a[href="#' + sectionId + '"]'
            );

            if (!navLink) {
                return;
            }

            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight
            ) {

                navLinks.forEach(function (link) {
                    link.classList.remove("active");
                });

                navLink.classList.add("active");
            }

        });

    }

    window.addEventListener(
        "scroll",
        updateActiveNav
    );

    updateActiveNav();


    /* ================= SCROLL REVEAL ================= */

    const revealElements = document.querySelectorAll(
        ".section-heading, " +
        ".about-card, " +
        ".service-card, " +
        ".project-card, " +
        ".skill, " +
        ".contact-box"
    );


    revealElements.forEach(function (element) {

        element.classList.add("reveal");

    });


    const revealObserver = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "reveal-visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });


    /* ================= PROJECT ANIMATION ================= */

    const projectCards =
        document.querySelectorAll(".project-card");

    projectCards.forEach(function (card, index) {

        card.style.transitionDelay =
            index * 80 + "ms";

    });


    /* ================= SERVICE ANIMATION ================= */

    const serviceCards =
        document.querySelectorAll(".service-card");

    serviceCards.forEach(function (card, index) {

        card.style.transitionDelay =
            index * 80 + "ms";

    });


    /* ================= SKILL ANIMATION ================= */

    const skillCards =
        document.querySelectorAll(".skill");

    skillCards.forEach(function (card, index) {

        card.style.transitionDelay =
            index * 60 + "ms";

    });


    /* ================= BUTTON RIPPLE ================= */

    const buttons =
        document.querySelectorAll(".btn");

    buttons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            const ripple =
                document.createElement("span");

            const rect =
                button.getBoundingClientRect();

            const size =
                Math.max(
                    rect.width,
                    rect.height
                );

            ripple.style.width =
                size + "px";

            ripple.style.height =
                size + "px";

            ripple.style.left =
                event.clientX -
                rect.left -
                size / 2 +
                "px";

            ripple.style.top =
                event.clientY -
                rect.top -
                size / 2 +
                "px";

            ripple.classList.add("ripple");

            button.appendChild(ripple);

            setTimeout(function () {

                ripple.remove();

            }, 600);

        });

    });


    /* ================= CODE WINDOW ================= */

    const codeWindow =
        document.querySelector(".code-window");


    if (codeWindow) {

        codeWindow.addEventListener(
            "mousemove",
            function (event) {

                const rect =
                    codeWindow.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;

                const rotateY =
                    ((x / rect.width) - 0.5) * 8;

                const rotateX =
                    ((y / rect.height) - 0.5) * -8;

                codeWindow.style.transform =
                    "perspective(1000px) " +
                    "rotateX(" + rotateX + "deg) " +
                    "rotateY(" + rotateY + "deg) " +
                    "translateY(-5px)";

            }
        );


        codeWindow.addEventListener(
            "mouseleave",
            function () {

                codeWindow.style.transform =
                    "perspective(1000px) " +
                    "rotateY(-5deg)";

            }
        );

    }


    /* ================= FOOTER YEAR ================= */

    const footerText =
        document.querySelector(".footer p");

    if (footerText) {

        const currentYear =
            new Date().getFullYear();

        footerText.textContent =
            "© " +
            currentYear +
            " NullNova. All rights reserved.";

    }


});