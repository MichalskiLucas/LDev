import { tools } from "../tools";
import type { ToolKey } from "../tools";
import "./toolMenu.css";

interface ToolMenuProps {
  activeTool: ToolKey;
  onSelect: (tool: ToolKey) => void;
}

function ToolMenu({ activeTool, onSelect }: ToolMenuProps) {
  return (
    <aside className="tool-menu">
      <h3>Ferramentas</h3>

      <ul>
        {Object.values(tools).map((tool) => (
          <li key={tool.key}>
            <button
              className={activeTool === tool.key ? "active" : ""}
              onClick={() => onSelect(tool.key as ToolKey)}
              
            >
              {tool.label}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default ToolMenu;
