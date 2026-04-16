/**
 * Modulo di utilità per il Lab 1 del Corso GitHub Esobit.
 * Contiene funzioni semplici usate per dimostrare la CI con GitHub Actions.
 */

function somma(a, b) {
  return a + b;
}

function sottrazione(a, b) {
  return a - b;
}

function moltiplicazione(a, b) {
  return a * b;
}

function divisione(a, b) {
  if (b === 0) {
    throw new Error("Divisione per zero non consentita");
  }
  return a / b;
}

function isPari(n) {
  return n % 2 === 0;
}

function isDispari(n) {
  return n % 2 != 0;
}

function fattoriale(n) {
  if (n < 0) throw new Error("Il fattoriale non è definito per numeri negativi");
  if (n === 0 || n === 1) return 1;
  return n * fattoriale(n - 1);
}

module.exports = {
  somma,
  sottrazione,
  moltiplicazione,
  divisione,
  isPari,
  fattoriale,
};