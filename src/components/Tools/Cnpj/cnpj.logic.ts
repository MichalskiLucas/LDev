function randomDigit(): number {
  return Math.floor(Math.random() * 9);
}

function calculateDigit(numbers: number[], weights: number[]): number {
  const sum = numbers.reduce(
    (acc, num, index) => acc + num * weights[index],
    0
  );

  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
}

export function generateCNPJ(): string {
  const baseNumbers = Array.from({ length: 12 }, randomDigit);

  const firstWeights = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const firstDigit = calculateDigit(baseNumbers, firstWeights);

  const secondWeights = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const secondDigit = calculateDigit(
    [...baseNumbers, firstDigit],
    secondWeights
  );

  return [...baseNumbers, firstDigit, secondDigit].join("");
}

export function formatCNPJ(cnpj: string): string {
  return cnpj.replace(
    /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
    "$1.$2.$3/$4-$5"
  );
}
