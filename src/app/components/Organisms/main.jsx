"use client";
import Card from "../Molecules/card";
import styles from "./main.module.css";
import { useContext, useEffect, useState } from "react";
import { ContextoFiltros } from "@/app/contexts/contextoFiltros";
import { filtrarCards } from "./funcionesMain.js";

export default function Main({ data }) {
  let [imprimir, setImprimir] = useState("");

  let {
    estadoPais,
    estadoCheckIn,
    estadoCheckOut,
    estadoPrecio,
    estadoTamano,
    estadoBotonClear,
  } = useContext(ContextoFiltros);

  useEffect(() => {
    setImprimir(
      filtrarCards(
        estadoPais,
        estadoCheckIn,
        estadoCheckOut,
        estadoPrecio,
        estadoTamano,
        data
      ).map((e, i) => {
        return (
          <Card
            key={i}
            nombre={e.name}
            pais={e.country}
            piezas={e.rooms}
            precio={e.price}
            foto={e.photo}
          />
        );
      })
    );
  }, [
    estadoPais,
    estadoCheckIn,
    estadoCheckOut,
    estadoPrecio,
    estadoTamano,
    estadoBotonClear,
  ]);

  if (imprimir.length === 0) {
    setImprimir(
      <Card
        nombre={"Lo sentimos 😪"}
        pais={"No hay hoteles para tí."}
        piezas={`No hay match, ni `}
        foto={data[14].photo}
      />
    );
  }

  return (
    <>
      <main className={styles.main}>{imprimir}</main>
    </>
  );
}
