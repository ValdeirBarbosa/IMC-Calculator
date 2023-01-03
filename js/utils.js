export function calculateIMC(weigth, heigth) {
  return (weigth / (heigth / 100) ** 2).toFixed(2);
}

export function notAnNumber(value) {
  return isNaN(value) || value == "";
}
