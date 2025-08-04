// Se usa el algoritmo Fisher–Yates, explicado en StackOverflow, 
// y se tipa con genéricos para que sirva para cualquier tipo, no solo cartas.

// Función genérica para barajar un array
export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array]; // Copia para no mutar el original
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}