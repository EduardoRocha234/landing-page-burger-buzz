"use strict";
const changeIMG = (imageId, newPath) => {
    const image = document.getElementById(imageId);
    image.src = `./img/${newPath}`;
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
