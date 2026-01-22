import { useState } from "react";
import { generateCPF, formatCPF } from "./cpf.logic";
import "../Cnpj/cnpj.css";

function CpfGenerator() {
  const [quantity, setQuantity] = useState<number>(1);
  const [formatted, setFormatted] = useState<boolean>(false);
  const [cpfs, setCpfs] = useState<string[]>([]);

  function handleGenerate() {
    const qty = quantity < 1 ? 1 : quantity;

    const generated = Array.from({ length: qty }, () => {
      const cpf = generateCPF();
      return formatted ? formatCPF(cpf) : cpf;
    });

    setCpfs(generated);
  }

  return (
    <>
      <div className="tool-container">
        <h2>Gerador de CPF</h2>

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
            Gerar CPF
          </button>
        </div>

        {cpfs.length > 0 && (
          <div className="result-container">
            {cpfs.length === 1 ? (
              <input
                className="result-input"
                value={cpfs[0]}
                readOnly
              />
            ) : (
              <ul className="result-list">
                {cpfs.map((cpf, index) => (
                  <li key={index}>{cpf}</li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default CpfGenerator;
