import React from "react";
import axios from "axios";
export const RecetasContext = React.createContext();

const RecetasProvider = (props) => {
  const [busquedaRecetas, setBusquedaRecetas] = React.useState({
    categoria: "",
  });

  const { categoria } = busquedaRecetas;

  const [recetas, setRecetas] = React.useState([]);
  const [consultar, setConsultar] = React.useState(false);

  React.useEffect(() => {
    if (consultar) {
      const obtenerRecetas = async () => {
        try {
          const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoria}`;
          const resultado = await axios.get(url);
          setRecetas(resultado.data.drinks);
        } catch (error) {
          console.log(error);
        }
      };
      obtenerRecetas();
    }
  }, [busquedaRecetas, categoria, consultar]);

  return (
    <RecetasContext.Provider
      value={{ recetas, setBusquedaRecetas, setConsultar }}
    >
      {props.children}
    </RecetasContext.Provider>
  );
};

export default RecetasProvider;
