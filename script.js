let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu')
let links = document.querySelectorAll('a[href^="#"]');

btnMenu.addEventListener("click", () => {
    menu.classList.add("abrir-menu");
});

menu.addEventListener("click", () => {
    menu.classList.remove("abrir-menu");
});

overlay.addEventListener("click", () => {
    menu.classList.remove("abrir-menu");
});

let links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        let targetId = link.getAttribute('href');
        let targetElement = document.querySelector(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"
        });
    });
});

