import React from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import RecetasProvider from "./context/RecetasContext";
import CategoriasProvider from "./context/CategoriasContext";
import ListaRecetas from "./components/ListaRecetas";
import ModalProvider from "./context/ModalContext";

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>
          <Header />
          <div className="container mt-5">
            <div className="row">
              <Formulario />
            </div>
            <ListaRecetas />
          </div>
        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
