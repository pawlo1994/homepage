let changeThemeButton = document.querySelector(".js-changeThemeButton");
let imageButton = document.querySelector(".js-imageButton");
let container = document.querySelector(".js-container");
let sectionImage = document.querySelector(".js-sectionImage");
let imageButtonInner = document.querySelector(".js-imageButtonInner");
let changeThemeButtonInner = document.querySelector(".js-changeThemeButtonInner");

changeThemeButton.addEventListener("click", () => {
    container.classList.toggle("container--dark");
    changeThemeButtonInner.innerText = changeThemeButtonInner.innerText === "Ciemne" ? "Jasne" : "Ciemne";
});

imageButton.addEventListener("click", () => {
    sectionImage.classList.toggle("section__image--hidden");
    imageButtonInner.innerText = imageButtonInner.innerText === "Ukryj" ? "Pokaż" : "Ukryj";
});