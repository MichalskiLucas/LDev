import CnpjGenerator from "./cnpj/CnpjGenerator";
import CpfGenerator from "./cpf/CpfGenerator";
import CnpjAlfanumerico from "./cnpj-alfanumerico/CnpjAlfanumerico";
import validarCnpjAlfanumerico from "./cnpj-alfanumerico/ValidarCnpjAlfanumerico";

export const tools = {
  cnpj: {
    key: "cnpj",
    label: "Gerador de CNPJ",
    component: CnpjGenerator,
  },
  cpf: {
    key: "cpf",
    label: "Gerador de CPF",
    component: CpfGenerator,
  },
  cnpjAlfanumerico: {
    key: "cnpjAlfanumerico",
    label: "Gerador de CNPJ Alfanumérico",
    component: CnpjAlfanumerico,
  },
  validarCnpjAlfanumerico: {
    key: "validarCnpjAlfanumerico",
    label: "Validador de CNPJ Alfanumérico",
    component: validarCnpjAlfanumerico,
  }
};

export type ToolKey = keyof typeof tools;
