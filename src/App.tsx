import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Navigate to="/cnpj" />} />
        <Route path="/:tool" element={<Home />} />
        <Route path="*" element={<Navigate to="/cnpj" />} />
      </Routes>
    </>
  );
}

export default App;
