import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";

import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";

const Loading = () => <div className="loading">Loading...</div>;

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cadastro" element={<Cadastro />} />
      </Routes>
    </Suspense>
  );
}
