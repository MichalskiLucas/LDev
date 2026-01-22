import { useParams, useNavigate } from "react-router-dom";
import ToolMenu from "../../components/ToolMenu/ToolMenu";
import { tools, type ToolKey } from "../../components/Tools";

function Home() {
  const { tool } = useParams<{ tool: ToolKey }>();

  const navigate = useNavigate();

  const toolKey = (tool || "cnpj") as ToolKey;

  const toolExists = tools[toolKey];

  if (!toolExists) {
    return null;
  }

  const ActiveComponent = tools[toolKey].component;

  return (
    <div className="layout">
      <ToolMenu
        activeTool={toolKey}
        onSelect={(tool) => navigate(`/${tool}`)}
      />

      <main className="content">
        <ActiveComponent />
      </main>

      <aside className="ads-area">
      </aside>
    </div>
  );
}

export default Home;
