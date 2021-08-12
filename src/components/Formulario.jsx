import React from "react";
import { CategoriasContext } from "../context/CategoriasContext";
import { RecetasContext } from "../context/RecetasContext";

const Formulario = () => {
  const { categorias } = React.useContext(CategoriasContext);
  const { setBusquedaRecetas, setConsultar } = React.useContext(RecetasContext);

  const [busqueda, setBusqueda] = React.useState({
    categoria: "",
  });
  const [error, setError] = React.useState(false);

  const establecerBusqueda = (e) => {
    e.preventDefault();

    if (!busqueda.categoria.trim()) {
      setError(true);
      return;
    }
    setError(false);
    setBusquedaRecetas(busqueda);
    setConsultar(true);
  };

  return (
    <form className="col-12" onSubmit={(e) => establecerBusqueda(e)}>
      {error ? (
        <p className="bg-danger text-center text-light">
          Todos los campos son obligatorios
        </p>
      ) : null}
      <fieldset className="text-center ">
        <legend className="text-dark">Busca bebidas por categoria</legend>
      </fieldset>

      <div className="row mt-4">
        <div className="col-md-8 my-2 my-md-0">
          <select
            name="categoria"
            id="categoria"
            className="form-control"
            onChange={(e) =>
              setBusqueda({ ...busqueda, [e.target.name]: e.target.value })
            }
          >
            <option value="">-- Selecciona Categoria --</option>
            {categorias.map((item) => {
              return (
                <option value={item.strCategory} key={item.strCategory}>
                  {item.strCategory}
                </option>
              );
            })}
          </select>
        </div>
        <div className="col-md-4 my-2 my-md-0">
          <input
            type="submit"
            value="Buscar Bebidas"
            className="btn btn-block btn-primary"
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;
