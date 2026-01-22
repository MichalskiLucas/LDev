import CnpjGenerator from "./Cnpj/CnpjGenerator";
import CpfGenerator from "./Cpf/CpfGenerator";
import CnpjAlfanumerico from "./CnpjAlfanumerico/CnpjAlfanumerico";
import validarCnpjAlfanumerico from "./CnpjAlfanumerico/ValidarCnpjAlfanumerico";

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
