// Mostrar el evento click y cambiar el src de la imagen
const divCarta = document.getElementById('carta')!;
const imgCarta = document.getElementById('imagen-carta') as HTMLImageElement;

divCarta.addEventListener('click', () => {
  imgCarta.src = 'images/2.png';
  imgCarta.alt = 'Búho';
});
