// Rutas de las imágenes
const backImage = 'back.png'  // Imagen de reverso de la carta
const frontImage1 = '/images/1.png' // Imagen que muestra carta 1
const frontImage2 = '/images/2.png' // Imagen que muestra carta 2

// Seleccionamos las cartas y sus imágenes
const card1 = document.getElementById('card1')!
const card2 = document.getElementById('card2')!
const img1 = card1.querySelector('img')!
const img2 = card2.querySelector('img')!

// Función para voltear la carta y mostrar la imagen frontal
function flipCard(cardImg: HTMLImageElement, frontSrc: string) {
  cardImg.src = frontSrc
}

// Event listeners para las cartas
card1.addEventListener('click', () => {
  flipCard(img1, frontImage1)
})

card2.addEventListener('click', () => {
  flipCard(img2, frontImage2)
})
