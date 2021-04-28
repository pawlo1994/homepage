{
    const welcome = () => {
        console.log("welcome to my personal homepage");
    };

    const changeTheme = () => {
        const container = document.querySelector(".js-container");
        const changeThemeButtonInner = document.querySelector(".js-changeThemeButtonInner");
        container.classList.toggle("container--dark");
        changeThemeButtonInner.innerText = changeThemeButtonInner.innerText === "Ciemne" ? "Jasne" : "Ciemne";
    };

    const toggleImage = () => {
        const sectionImage = document.querySelector(".js-sectionImage");
        const imageButtonInner = document.querySelector(".js-imageButtonInner");
        sectionImage.classList.toggle("section__image--hidden");
        imageButtonInner.innerText = imageButtonInner.innerText === "Ukryj" ? "Pokaż" : "Ukryj";
    };

    const init = () => {
        const changeThemeButton = document.querySelector(".js-changeThemeButton");
        const imageButton = document.querySelector(".js-imageButton");
        changeThemeButton.addEventListener("click", changeTheme);
        imageButton.addEventListener("click", toggleImage);
    };

    welcome();
    init();

}