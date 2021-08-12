import React from "react";
import { RecetasContext } from "../context/RecetasContext";
import Receta from "./Receta";

const ListaRecetas = () => {
  const { recetas } = React.useContext(RecetasContext);

  return (
    <div className="row mt-5">
      {recetas.map((item) => {
        return <Receta key={item.idDrink} receta={item} />;
      })}
    </div>
  );
};

export default ListaRecetas;
