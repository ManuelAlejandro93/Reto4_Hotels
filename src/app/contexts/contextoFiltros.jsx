"use client";
import React, { useState } from "react";

//creo el contexto.
export let ContextoFiltros = React.createContext();

//creo el proveedor.
export default function ProveedorContexto({ children }) {
  //creo las variables que van a ser proveidas
  const [estadoPais, setEstadoPais] = useState("estado-inicial");

  const [estadoCheckIn, setEstadoCheckIn] = useState("estado-inicial");

  const [estadoCheckOut, setEstadoCheckOut] = useState("estado-inicial");

  const [estadoPrecio, setEstadoPrecio] = useState("estado-inicial");

  const [estadoTamano, setEstadoTamano] = useState("estado-inicial");

  const [estadoBotonClear, setEstadoBotonClear] = useState(true);

  // objeto para ser enviado a value.
  let objetoValue = {
    estadoPais,
    setEstadoPais,
    estadoCheckIn,
    setEstadoCheckIn,
    estadoCheckOut,
    setEstadoCheckOut,
    estadoPrecio,
    setEstadoPrecio,
    estadoTamano,
    setEstadoTamano,
    estadoBotonClear,
    setEstadoBotonClear,
  };

  return (
    <>
      <ContextoFiltros.Provider value={objetoValue}>
        {children}
      </ContextoFiltros.Provider>
    </>
  );
}
