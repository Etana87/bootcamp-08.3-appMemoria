import type { Carta, Tablero } from "./model";

// Barajar cartas usando algoritmo de Fisher-Yates
export const barajarCartas = (cartas: Carta[]): Carta[] => {
  const barajadas = [...cartas];
  for (let i = barajadas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [barajadas[i], barajadas[j]] = [barajadas[j], barajadas[i]];
  }
  return barajadas;
};

// Verifica si se puede voltear una carta
export const sePuedeVoltearLaCarta = (tablero: Tablero, indice: number): boolean => {
  const carta = tablero.cartas[indice];
  return (
    carta &&
    !carta.encontrada &&
    !carta.estaVuelta &&
    tablero.estadoPartida !== "DosCartasLevantadas"
  );
};

// Voltear carta si es válido
export const voltearLaCarta = (tablero: Tablero, indice: number): void => {
  tablero.cartas[indice].estaVuelta = true;
};

// Verifica si dos cartas son pareja
export const sonPareja = (indiceA: number, indiceB: number, tablero: Tablero): boolean => {
  return tablero.cartas[indiceA].idFoto === tablero.cartas[indiceB].idFoto;
};

// Marca una pareja como encontrada
export const parejaEncontrada = (tablero: Tablero, indiceA: number, indiceB: number): void => {
  tablero.cartas[indiceA].encontrada = true;
  tablero.cartas[indiceB].encontrada = true;
  tablero.estadoPartida = esPartidaCompleta(tablero) ? "PartidaCompleta" : "CeroCartasLevantadas";
};

// Si no son pareja, dales la vuelta (boca abajo)
export const parejaNoEncontrada = (tablero: Tablero, indiceA: number, indiceB: number): void => {
  tablero.cartas[indiceA].estaVuelta = false;
  tablero.cartas[indiceB].estaVuelta = false;
  tablero.estadoPartida = "CeroCartasLevantadas";
};

// Verifica si todas las cartas han sido encontradas
export const esPartidaCompleta = (tablero: Tablero): boolean => {
  return tablero.cartas.every((carta) => carta.encontrada);
};

// Iniciar partida: baraja y reinicia tablero
export const iniciaPartida = (tablero: Tablero): void => { // Crear tablero inicial y barajar cartas
  const cartasBarajadas = barajarCartas(tablero.cartas).map((carta) => ({
    ...carta,
    estaVuelta: false,
    encontrada: false,
  }));
  tablero.cartas = cartasBarajadas;
  tablero.estadoPartida = "CeroCartasLevantadas";
  tablero.indiceCartaVolteadaA = undefined;
  tablero.indiceCartaVolteadaB = undefined;
};
