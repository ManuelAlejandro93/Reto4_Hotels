import llamarArreglo from "@/app/api/api";
import Card from "../Molecules/card";
import styles from "./main.module.css";

export default async function Main() {
  let arreglo = await llamarArreglo();
  let imprimir = arreglo.map((e, i) => {
    return (
      <Card
        foto={e.photo}
        nombre={e.name}
        pais={e.country}
        piezas={e.rooms}
        precio={e.price}
        key={i}
      />
    );
  })
  return (
    <>
      <main className={styles.main}>
        {imprimir}
      </main>
    </>
  );
}
