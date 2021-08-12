import React from "react";
import axios from "axios";

export const CategoriasContext = React.createContext();

const CategoriasProvider = (props) => {
  const [categorias, setCategorias] = React.useState([]);

  React.useEffect(() => {
    const obtenerCategorias = async () => {
      try {
        const url =
          "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
        const categorias = await axios.get(url);
        setCategorias(categorias.data.drinks);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerCategorias();
  }, []);

  return (
    <CategoriasContext.Provider value={{ categorias }}>
      {props.children}
    </CategoriasContext.Provider>
  );
};

export default CategoriasProvider;
