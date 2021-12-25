import { Route, Routes } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";

import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Loading = () => <div className="loading">Loading...</div>;

export default function App() {
  const [hasInfoModalAppeared, setInfoModalAppeared] = useState(false);

  useEffect(handleInfoModalToTeacher);

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cadastro" element={<Cadastro />} />
      </Routes>
    </Suspense>
  );

  function handleInfoModalToTeacher() {
    const MySwal = withReactContent(Swal);
    if (!hasInfoModalAppeared) {
      setTimeout(async () => {
        await MySwal.fire({
          title: <p>Informação sobre o trabalho</p>,
          html: (
            <p>
              Professor, para testar o nosso trabalho, por favor ler o{" "}
              <a
                href="https://github.com/Vacinas-Backend/vacinas-front"
                target="_blank"
                rel="noreferrer"
              >
                README
              </a>
              &nbsp; com as instruções necessárias.
            </p>
          ),
          icon: "info",
        });
        setInfoModalAppeared(true);
      }, 1000);
    }
  }
}
