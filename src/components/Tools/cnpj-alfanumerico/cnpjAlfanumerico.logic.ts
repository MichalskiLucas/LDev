export class CNPJAlfanumerico {
  private static readonly TAMANHO_BASE = 12;
  private static readonly REGEX_BASE = /^([A-Z\d]){12}$/;
  private static readonly REGEX_COMPLETO = /^([A-Z\d]){12}(\d){2}$/;
  private static readonly REGEX_MASCARA = /[./-]/g;
  private static readonly REGEX_INVALIDOS = /[^A-Z\d./-]/i;

  private static readonly VALOR_BASE = "0".charCodeAt(0);
  private static readonly PESOS = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  private static readonly CNPJ_ZERADO = "00000000000000";

  static calculaDV(cnpj: string): string {
    if (this.REGEX_INVALIDOS.test(cnpj)) {
      throw new Error("CNPJ contém caracteres inválidos");
    }

    const base = this.removeMascara(cnpj);

    if (
      !this.REGEX_BASE.test(base) ||
      base === this.CNPJ_ZERADO.substring(0, this.TAMANHO_BASE)
    ) {
      throw new Error("Base do CNPJ inválida");
    }

    let soma1 = 0;
    let soma2 = 0;

    for (let i = 0; i < this.TAMANHO_BASE; i++) {
      const ascii = base.charCodeAt(i) - this.VALOR_BASE;
      soma1 += ascii * this.PESOS[i + 1];
      soma2 += ascii * this.PESOS[i];
    }

    const dv1 = soma1 % 11 < 2 ? 0 : 11 - (soma1 % 11);
    soma2 += dv1 * this.PESOS[this.TAMANHO_BASE];
    const dv2 = soma2 % 11 < 2 ? 0 : 11 - (soma2 % 11);

    return `${dv1}${dv2}`;
  }

  static isValid(cnpj: string): boolean {
    if (this.REGEX_INVALIDOS.test(cnpj)) return false;

    const semMascara = this.removeMascara(cnpj);
    if (
      !this.REGEX_COMPLETO.test(semMascara) ||
      semMascara === this.CNPJ_ZERADO
    ) {
      return false;
    }

    const base = semMascara.substring(0, this.TAMANHO_BASE);
    const dvInformado = semMascara.substring(this.TAMANHO_BASE);

    return this.calculaDV(base) === dvInformado;
  }

  static format(cnpj: string): string {
    return cnpj.replace(
      /^(.{2})(.{3})(.{3})(.{4})(.{2})$/,
      "$1.$2.$3/$4-$5"
    );
  }

  private static removeMascara(cnpj: string): string {
    return cnpj.replace(this.REGEX_MASCARA, "");
  }
}

const ALPHANUM = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function randomChar(): string {
  return ALPHANUM.charAt(Math.floor(Math.random() * ALPHANUM.length));
}

export function generateCNPJAlfanumerico(): string {
  let base = "";

  for (let i = 0; i < 12; i++) {
    base += randomChar();
  }

  const dv = CNPJAlfanumerico.calculaDV(base);
  return base + dv;
}

