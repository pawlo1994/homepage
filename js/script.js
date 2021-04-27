{
    const changeThemeButton = document.querySelector(".js-changeThemeButton");
    const imageButton = document.querySelector(".js-imageButton");

    const init = () => {
        console.log("welcome to my personal homepage");
    }

    const changeTheme = () => {
        const container = document.querySelector(".js-container");
        const changeThemeButtonInner = document.querySelector(".js-changeThemeButtonInner");
        container.classList.toggle("container--dark");
        changeThemeButtonInner.innerText = changeThemeButtonInner.innerText === "Ciemne" ? "Jasne" : "Ciemne";
    };

    const hideImage = () => {
        const sectionImage = document.querySelector(".js-sectionImage");
        const imageButtonInner = document.querySelector(".js-imageButtonInner");
        sectionImage.classList.toggle("section__image--hidden");
        imageButtonInner.innerText = imageButtonInner.innerText === "Ukryj" ? "Pokaż" : "Ukryj";
    };

    init();

    changeThemeButton.addEventListener("click", () => {
        changeTheme();
    });

    imageButton.addEventListener("click", () => {
        hideImage();
    });
}