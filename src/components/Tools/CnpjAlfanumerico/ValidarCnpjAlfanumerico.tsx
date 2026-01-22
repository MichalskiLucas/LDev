import { useState } from "react";
import { CNPJAlfanumerico } from "../CnpjAlfanumerico/cnpjAlfanumerico.logic";

function ValidarCnpjAlfanumerico() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<null | boolean>(null);

  function handleValidate() {
    if (!value.trim()) {
      setResult(null);
      return;
    }

    const isValid = CNPJAlfanumerico.isValid(value.trim());
    setResult(isValid);
  }

  return (
    <div className="tool-container">
      <h2>Validador de CNPJ Alfanumérico</h2>

      <p style={{ fontSize: 12, color: "#666", textAlign: "center" }}>
        Validação conforme especificação da Receita Federal.
      </p>

      <div className="controls-wrapper">
        <div className="form-group" style={{ width: "100%" }}>
          <label>CNPJ Alfanumérico</label>
          <input
            type="text"
            placeholder="Ex: AB12C345D67890"
            value={value}
            onChange={(e) => setValue(e.target.value.toUpperCase())}
          />
        </div>

        <button className="generate-button" onClick={handleValidate}>
          Validar CNPJ
        </button>
      </div>

      {result !== null && (
        <div
          style={{
            marginTop: 20,
            padding: 12,
            borderRadius: 6,
            textAlign: "center",
            fontWeight: 600,
            color: result ? "#155724" : "#721c24",
            backgroundColor: result ? "#d4edda" : "#f8d7da",
            border: `1px solid ${result ? "#c3e6cb" : "#f5c6cb"}`,
          }}
        >
          {result ? "CNPJ ALFANUMÉRICO VÁLIDO" : "CNPJ ALFANUMÉRICO INVÁLIDO"}
        </div>
      )}
    </div>
  );
}

export default ValidarCnpjAlfanumerico;
