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

const formatNumber = (num: number) => (num < 10 ? `0${num}` : num)

const updateHour = () => {
	const now = new Date()
	const day = formatNumber(now.getDate())
	const mounth = formatNumber(now.getMonth())
	const min = formatNumber(now.getMinutes())
	const seconds = formatNumber(now.getSeconds())

	const formatHour = `
        ${day} : ${mounth} : ${min} : ${seconds}
    `

    const element = document.getElementById('actualHour')
    if(element) element.textContent = formatHour
}

setInterval(updateHour, 1000)

updateHour()