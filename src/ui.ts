import { tablero } from "./model";
import {
  iniciaPartida,
  sePuedeVoltearLaCarta,
  voltearLaCarta,
  sonPareja,
  parejaEncontrada,
  parejaNoEncontrada,
} from "./motor";

// 📍 Referencias a DOM
const botonIniciar = document.getElementById("boton-iniciar") as HTMLButtonElement;
const contenedorCartas = document.getElementById("tablero-cartas") as HTMLDivElement;

// 🖼 Imagen de carta boca abajo
const IMG_BOCA_ABAJO = "/assets/back.png";

// 🔁 Renderiza todas las cartas en el tablero
const renderizarCartas = (): void => {
  contenedorCartas.innerHTML = ""; // Limpiar tablero
  tablero.cartas.forEach((carta, indice) => {
    const divCarta = document.createElement("div");
    divCarta.classList.add("carta");
    divCarta.dataset.indiceArray = indice.toString();

    const img = document.createElement("img");
    img.src = carta.estaVuelta || carta.encontrada ? carta.imagen : IMG_BOCA_ABAJO;
    img.dataset.indiceImagen = indice.toString();

    divCarta.appendChild(img);
    contenedorCartas.appendChild(divCarta);
  });
};

// 🔄 Actualiza solo dos cartas (tras comprobar pareja o no)
const actualizarCartas = (indiceA: number, indiceB: number): void => {
  const imgs = contenedorCartas.querySelectorAll("img");
  [indiceA, indiceB].forEach((indice) => {
    const img = imgs[indice];
    const carta = tablero.cartas[indice];
    img.src = carta.estaVuelta || carta.encontrada ? carta.imagen : IMG_BOCA_ABAJO;
  });
};

// 👆 Lógica al clickear una carta
const manejarClickCarta = (event: MouseEvent): void => {
  const target = event.currentTarget;

  if (!(target instanceof HTMLDivElement)) return;

  const indice = Number(target.dataset.indiceArray);
  if (isNaN(indice)) return;

  if (!sePuedeVoltearLaCarta(tablero, indice)) return;

  voltearLaCarta(tablero, indice);
  renderizarCartas();

  switch (tablero.estadoPartida) {
    case "CeroCartasLevantadas":
      tablero.estadoPartida = "UnaCartaLevantada";
      tablero.indiceCartaVolteadaA = indice;
      break;

    case "UnaCartaLevantada":
      tablero.estadoPartida = "DosCartasLevantadas";
      tablero.indiceCartaVolteadaB = indice;

      const indiceA = tablero.indiceCartaVolteadaA!;
      const indiceB = tablero.indiceCartaVolteadaB!;

      if (sonPareja(indiceA, indiceB, tablero)) {
        parejaEncontrada(tablero, indiceA, indiceB);
        setTimeout(() => renderizarCartas(), 500);
      } else {
        setTimeout(() => {
          parejaNoEncontrada(tablero, indiceA, indiceB);
          renderizarCartas();
        }, 1000);
      }
      break;

    default:
      break;
  }
};

// 🆕 Iniciar juego
const iniciarJuego = (): void => {
  iniciaPartida(tablero);
  renderizarCartas();
  agregarListenersCartas();
};

const agregarListenersCartas = (): void => {
  const divsCartas = contenedorCartas.querySelectorAll(".carta");
  divsCartas.forEach((div) => {
    div.addEventListener("click", manejarClickCarta);
  });
};

// 🟢 Listeners iniciales
botonIniciar.addEventListener("click", iniciarJuego);
