const changeIMG = (imageId: string, newPath: string) => {
	const image = document.getElementById(imageId) as HTMLImageElement
	image.src = `./img/${newPath}`
}

const liked = (element: Element) => {
	element.classList.toggle('liked')
	element.classList.toggle('bxs-heart')
}

const stars = document.querySelectorAll('.card-dishe-stars')

stars.forEach((el) => {
	for (let index = 0; index < 5; index++) {
		const star = document.createElement('i')
		star.classList.add('bx')
		star.classList.add('bxs-star')
		star.classList.add('star')
		el!.appendChild(star)
	}
})
