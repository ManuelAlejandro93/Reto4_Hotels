import styles from "./card.module.css"; 
import { mostrarPrecio, mostrarBandera } from "./funciones.js";


export default function Card(props) {
  return (
    <>
      <div className={styles.divMain} style ={{backgroundImage: `url("${props.foto}")`}} >

        <h2 className={styles.h2}>{props.nombre}</h2>

        <div className={styles.contenedorArriba}>
          <img className={styles.img} src={`${mostrarBandera(props.pais)}`}/>
          <p className={styles.p}>{props.pais}</p>
        </div>

        <div className={styles.contenedorAbajo}>
          <p className={styles.pAbajo}>{props.piezas} Rooms</p>
          <p className={styles.precioAbajo}>{mostrarPrecio(props.precio)}</p>
        </div>
      </div>
    </>
  );
}