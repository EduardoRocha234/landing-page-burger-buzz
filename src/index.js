"use strict";
const changeIMG = (imageId, newPath) => {
    const image = document.getElementById(imageId);
    image.src = `./img/${newPath}`;
};
const openMenu = () => {
    const openMenu = document.getElementById('open-menu');
    const navbar = document.querySelector('.navbar');
    const body = document.body;
    openMenu.style.display = 'none';
    navbar.classList.remove('nav-bar-hidden');
    navbar.classList.add('nav-bar-visible');
    body.style.overflow = 'hidden';
};
const closeMenu = () => {
    const openMenu = document.getElementById('open-menu');
    const navbar = document.querySelector('.navbar');
    const body = document.body;
    openMenu.style.display = 'block';
    navbar.classList.remove('nav-bar-visible');
    navbar.classList.add('nav-bar-hidden');
    body.style.overflow = 'auto';
};
const liked = (element) => {
    element.classList.toggle('liked');
    element.classList.toggle('bxs-heart');
};
const stars = document.querySelectorAll('.card-dishe-stars');
stars.forEach((el) => {
    for (let index = 0; index < 5; index++) {
        const star = document.createElement('i');
        star.classList.add('bx');
        star.classList.add('bxs-star');
        star.classList.add('star');
        el.appendChild(star);
    }
});
const changeDishes = (dishesId, button) => {
    const allDishes = document.querySelectorAll('.dishes');
    allDishes.forEach((dish) => {
        dish.style.display = 'none';
    });
    const allButtons = document.querySelectorAll('.menu-buttons .button');
    allButtons.forEach((button) => {
        button.classList.remove('selected');
    });
    const selectedDish = document.getElementById(dishesId);
    if (selectedDish) {
        selectedDish.style.display = 'flex';
    }
    if (button)
        button.classList.add('selected');
};
const formatNumber = (num) => (num < 10 ? `0${num}` : num);
const updateHour = () => {
    const now = new Date();
    const day = formatNumber(now.getDate());
    const mounth = formatNumber(now.getMonth());
    const min = formatNumber(now.getMinutes());
    const seconds = formatNumber(now.getSeconds());
    const formatHour = `
        ${day} : ${mounth} : ${min} : ${seconds}
    `;
    const element = document.getElementById('actualHour');
    if (element)
        element.textContent = formatHour;
};
setInterval(updateHour, 1000);
updateHour();
document.addEventListener('DOMContentLoaded', () => {
    const showAnimateElement = (classElment, animateClass) => {
        window.addEventListener('scroll', () => {
            const element = document.querySelector(classElment);
            const elementPosition = element === null || element === void 0 ? void 0 : element.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;
            if (elementPosition && elementPosition < screenHeight * 0.75) {
                element.classList.add(animateClass || 'show');
            }
        });
    };
    showAnimateElement('.second-section-descriptions');
    showAnimateElement('.animate-card-1');
    showAnimateElement('.animate-card-2');
    showAnimateElement('.animate-card-3');
    showAnimateElement('.third-section-img', 'slide-in-bck-center');
    showAnimateElement('.card-bgr-animate-1', 'bounce-in-top');
    showAnimateElement('.card-bgr-animate-2', 'bounce-in-top');
    showAnimateElement('.card-bgr-animate-3', 'bounce-in-top');
    const defaultDishId = 'dishes1';
    changeDishes(defaultDishId);
    const defaultButton = document.querySelector(`.menu-buttons .button`);
    if (defaultButton) {
        defaultButton.classList.add('selected');
    }
});
