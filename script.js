const linkToMenu = "inc/header.html";
const linkToFooter = "inc/footer.html";

window.addEventListener("DOMContentLoaded", start);

function start() {
    console.log("start");
    getHeader();
    getFooter();
}
async function getHeader() {
    const headerMenu = await fetch(linkToMenu);
    const including = await headerMenu.text();
    document.querySelector("header").innerHTML = including;
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}
async function getFooter() {
    const footerInfo = await fetch(linkToFooter);
    const including = await footerInfo.text();
    document.querySelector("footer").innerHTML = including;
}

function toggleMenu() {
    document.querySelector("#menu").classList.toggle("hidden");

    let menuHidden = document.querySelector("#menu").classList.contains("hidden");

    if (menuHidden == true) {
        document.querySelector("#menuknap").textContent = "☰";
    } else {
        document.querySelector("#menuknap").textContent = "X";
    }
}
