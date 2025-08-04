// Aplicación

import { cartasBase } from './data';
import { shuffleArray } from './shuffle';

console.log('Cartas originales:');
console.log(cartasBase.map(c => c.contenido));

const cartasBarajadas = shuffleArray(cartasBase);

console.log('Cartas barajadas:');
console.log(cartasBarajadas.map(c => c.contenido));
