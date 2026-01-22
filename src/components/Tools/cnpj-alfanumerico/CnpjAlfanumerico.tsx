import { useState } from "react";
import {
  generateCNPJAlfanumerico,
  CNPJAlfanumerico,
} from "./cnpjAlfanumerico.logic";

function CnpjAlfanumerico() {
  const [quantity, setQuantity] = useState(1);
  const [formatted, setFormatted] = useState(false);
  const [values, setValues] = useState<string[]>([]);

  function handleGenerate() {
    const qty = quantity < 1 ? 1 : quantity;

    const list = Array.from({ length: qty }, () => {
      const cnpj = generateCNPJAlfanumerico();
      return formatted ? CNPJAlfanumerico.format(cnpj) : cnpj;
    });

    setValues(list);
  }

  return (
    <div className="tool-container">
      <h2>Gerador de CNPJ Alfanumérico</h2>

      <p style={{ fontSize: 12, color: "#666", textAlign: "center" }}>
        CNPJ fictício para testes. Não é válido para uso oficial.
      </p>

      <div className="controls-wrapper">
        <div className="controls-row">
          <div className="form-group">
            <label>Quantidade</label>
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </div>

          <div className="toggle-group">
            <span>Formatado</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={formatted}
                onChange={() => setFormatted(!formatted)}
              />
              <span className="slider" />
            </label>
          </div>
        </div>

        <button className="generate-button" onClick={handleGenerate}>
          Gerar CNPJ Alfanumérico
        </button>
      </div>

      {values.length > 0 && (
        <>
          <div className="result-container">
            {values.length === 1 ? (
              <input className="result-input" value={values[0]} readOnly />
            ) : (
              <ul className="result-list">
                {values.map((v, i) => (
                  <li key={i}>{v}</li>
                ))}
              </ul>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default CnpjAlfanumerico;
