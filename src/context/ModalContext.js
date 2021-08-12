import React from "react";
import axios from "axios";


export const ModalContext = React.createContext();

const ModalProvider = (props) => {
  const [idReceta, setIdReceta] = React.useState(null);
  const [informacion, setInformacion] = React.useState({});

  React.useEffect(() => {
    const obtenerReceta = async () => {
      try {
        if (!idReceta) {
          return;
        }
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
        const resultado = await axios.get(url);
        setInformacion(resultado.data.drinks[0]);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerReceta();
  }, [idReceta]);

  return (
    <ModalContext.Provider value={{ informacion, setIdReceta, setInformacion }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
