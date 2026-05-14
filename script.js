const buttonEl = document.querySelector(".share-btn");
const buttonEl2 = document.querySelector(".share-btn2");
const shareEl = document.querySelector(".share-con");
const profile = document.querySelector(".profile");


buttonEl.addEventListener("click", () => {
    profile.classList.add("hidden");
    shareEl.classList.remove("hidden");
});

buttonEl2.addEventListener("click", () => {
    profile.classList.remove("hidden");
    shareEl.classList.add("hidden");
});

