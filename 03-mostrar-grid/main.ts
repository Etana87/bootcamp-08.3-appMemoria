// Seleccionamos el contenedor
const gridContainer = document.getElementById('grid-container')!

// Creamos 12 cartas
for (let i = 1; i <= 12; i++) {
  const card = document.createElement('div')
  card.className = 'card'
  card.textContent = `Carta ${i}`
  gridContainer.appendChild(card)
}
