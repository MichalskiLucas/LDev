import { useState } from "react";
import { generateCNPJ, formatCNPJ } from "./cnpj.logic";
import "./cnpj.css";

function CnpjGenerator() {
  const [quantity, setQuantity] = useState<number>(1);
  const [formatted, setFormatted] = useState<boolean>(false);
  const [cnpjs, setCnpjs] = useState<string[]>([]);

  function handleGenerate() {
    const qty = quantity < 1 ? 1 : quantity;

    const generated = Array.from({ length: qty }, () => {
      const cnpj = generateCNPJ();
      return formatted ? formatCNPJ(cnpj) : cnpj;
    });

    setCnpjs(generated);
  }

  return (
    <>
      <div className="tool-container">
        <h2>Gerador de CNPJ</h2>

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
            Gerar CNPJ
          </button>
        </div>

        {cnpjs.length > 0 && (
          <div className="result-container">
            {cnpjs.length === 1 ? (
              <input
                className="result-input"
                value={cnpjs[0]}
                readOnly
              />
            ) : (
              <ul className="result-list">
                {cnpjs.map((cnpj, index) => (
                  <li key={index}>{cnpj}</li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default CnpjGenerator;
