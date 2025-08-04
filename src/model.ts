export interface Carta {
  idFoto: number;        // ID común para las parejas
  imagen: string;        // URL de la imagen
  estaVuelta: boolean;   // ¿Está actualmente volteada?
  encontrada: boolean;   // ¿Ya se encontró su pareja?
}

interface InfoCarta {
  idFoto: number;
  imagen: string;
}

const infoCartas: InfoCarta[] = [
  { idFoto: 1, imagen: "/assets/1.png" },
  { idFoto: 2, imagen: "/assets/2.png" },
  { idFoto: 3, imagen: "/assets/3.png" },
  { idFoto: 4, imagen: "/assets/4.png" },
  { idFoto: 5, imagen: "/assets/5.png" },
  { idFoto: 6, imagen: "/assets/6.png" },
];

const crearCartaInicial = (idFoto: number, imagen: string): Carta => ({
  idFoto,
  imagen,
  estaVuelta: false,
  encontrada: false,
});

const crearColeccionDeCartasInicial = (infoCartas: InfoCarta[]): Carta[] => {
  const duplicadas = infoCartas.flatMap(carta => [
    crearCartaInicial(carta.idFoto, carta.imagen),
    crearCartaInicial(carta.idFoto, carta.imagen),
  ]);
  return duplicadas;
};

export let cartas: Carta[] = crearColeccionDeCartasInicial(infoCartas);

export type EstadoPartida =
  | "PartidaNoIniciada"
  | "CeroCartasLevantadas"
  | "UnaCartaLevantada"
  | "DosCartasLevantadas"
  | "PartidaCompleta";

export interface Tablero {
  cartas: Carta[];
  estadoPartida: EstadoPartida;
  indiceCartaVolteadaA?: number;
  indiceCartaVolteadaB?: number;
}

const crearTableroInicial = (): Tablero => ({
  cartas: cartas,
  estadoPartida: "PartidaNoIniciada",
});

export let tablero: Tablero = crearTableroInicial();
