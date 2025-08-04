interface InfoCarta {
  idFoto: number;
  imagen: string;
}

// Cartas base (solo 3 imágenes para ejemplo)
const cartasBase: InfoCarta[] = [
  { idFoto: 1, imagen: '/images/1.png' },
  { idFoto: 2, imagen: '/images/2.png' },
  { idFoto: 3, imagen: '/images/3.png' }
];

// Creamos un array con 2 cartas de cada para tener pares
const cartas: InfoCarta[] = [...cartasBase, ...cartasBase];

// Referencia al contenedor
const container = document.getElementById('cards-container')!;

// Imagen reverso carta
const backImg = 'back.png';

// Función para crear el grid con los divs
function crearCartas() {
  cartas.forEach((carta, index) => {
    // Crear div carta
    const divCarta = document.createElement('div');
    divCarta.className = 'card';
    divCarta.setAttribute('data-indice-id', index.toString());

    // Crear imagen reverso
    const img = document.createElement('img');
    img.src = backImg;
    img.alt = `Carta ${index + 1}`;
    img.setAttribute('data-indice-id', index.toString());

    // Añadir imagen al div
    divCarta.appendChild(img);

    // Añadir div al contenedor
    container.appendChild(divCarta);

    // Evento click para voltear la carta y mostrar imagen correspondiente
    divCarta.addEventListener('click', () => {
      // Leemos el índice de la carta desde el atributo
      const indice = parseInt(divCarta.getAttribute('data-indice-id')!);
      // Cambiamos la imagen al frontal correspondiente
      img.src = cartas[indice].imagen;
    });
  });
}

// Ejecutamos la función para mostrar las cartas
crearCartas();
