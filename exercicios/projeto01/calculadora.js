
function somar(a, b) {
    return a + b;
  }
  
  function subtrair(a, b) {
    return a - b;
  }
  
  function multiplicar(a, b) {
    return a * b;
  }
  
//   function dividir(a, b) {
//     return b !== 0 ? a / b : 'Erro: divisão por zero';
//   }
  
//   function aoQuadrado(a) {
//     return a * a;
//   }
  
//   function raizQuadrada(a) {
//     return a >= 0 ? Math.sqrt(a) : 'Erro: número negativo';
//   }
  
  module.exports = {
    somar,
    subtrair,
    multiplicar,
    // dividir,
    // aoQuadrado,
    // raizQuadrada
  };