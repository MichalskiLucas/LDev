function randomDigit(): number {
  return Math.floor(Math.random() * 9);
}

function calculateDigit(numbers: number[], factor: number): number {
  let total = 0;

  numbers.forEach((num) => {
    total += num * factor--;
  });

  const remainder = total % 11;
  return remainder < 2 ? 0 : 11 - remainder;
}

export function generateCPF(): string {
  const baseNumbers = Array.from({ length: 9 }, randomDigit);

  const firstDigit = calculateDigit(baseNumbers, 10);
  const secondDigit = calculateDigit([...baseNumbers, firstDigit], 11);

  return [...baseNumbers, firstDigit, secondDigit].join("");
}

export function formatCPF(cpf: string): string {
  return cpf.replace(
    /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
    "$1.$2.$3-$4"
  );
}
