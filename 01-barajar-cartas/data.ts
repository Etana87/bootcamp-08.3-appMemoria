// Creación de seis parejas (12 cartas en total)

import { Carta } from './carta';

const contenidos = ['🐱', '🐶', '🐰', '🦊', '🐻', '🐼'];

export const cartasBase: Carta[] = contenidos.flatMap((contenido, i) => [ // Se usa flatMap para duplicar
  { id: i * 2, contenido },
  { id: i * 2 + 1, contenido }
]);
