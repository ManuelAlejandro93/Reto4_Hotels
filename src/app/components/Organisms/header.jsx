"use client"
import styles from "./header.module.css";
import {headerIcons as icons} from "../../assests/icons.js";
import { useState } from "react";
import { cambioEnPaises } from "./funciones";

const [locationIcon,checkInIcon,checkOutIcon, dollarIcon, bedIcon] = [icons.location,icons.checkIn,icons.checkOut,icons.dollar,icons.bed];


export default function Header(props) {
  let [estadoPais,setEstadoPais] = useState("allcountries");

  let [estadoCheckIn,setEstadoCheckIn] = useState("inicial");

  let [estadoCheckOut,setEstadoCheckOut] = useState("inicial");

  let [estadoPrecios,setEstadoPrecios] = useState(0);

  let [estadoTamanos,setEstadoTamanos] = useState("allsizes");



  return (
    <>
      <header className={styles.header}>
        <div
          className={styles.contenedorDeHeader}
        >
          <h1 className={styles.h1}>Book it!</h1>
          <div className={styles.contenedorFiltros}>
            <div className={styles.flexFiltros}>
              <select
                className={`${styles.filtro} ${styles.selectCountry}`}
                name="selectCountry" 
                style={{backgroundImage: `url(${locationIcon})`}}
                onChange={e=>{setEstadoPais(e.target.value)}}
              >
                <option value="allcountries">All Countries</option>
                <option value="argentina">Argentina</option>
                <option value="brasil">Brasil</option>
                <option value="chile">Chile</option>
                <option value="uruguay">Uruguay</option>
              </select>
              <input
                className={`${styles.filtro} ${styles.checkIn}`}
                type="date" 

                style={{backgroundImage: `url(${checkInIcon})`}}

                onChange={(e)=>{setEstadoCheckIn(e.target.value), console.log(estadoCheckIn)}}

              />
              <input
                className={`${styles.filtro} ${styles.checkOut}`}
                type="date" 

                style={{backgroundImage: `url(${checkOutIcon})`}}

                onChange={(e)=>setEstadoCheckOut(e.target.value)}
              />
              <select
                className={`${styles.filtro} ${styles.prices}`}
                name="selectPrice"

                style={{backgroundImage: `url(${dollarIcon})`}}

                onChange={(e)=>setEstadoPrecios(e.target.value)}

              >
                <option value={0}>AllPrices</option>
                <option value={1}>$</option>
                <option value={2}>$$</option>
                <option value={3}>$$$</option>
                <option value={4}>$$$$</option>
              </select>
              <select
                className={`${styles.filtro} ${styles.sizes}`}
                name="selectSize"

                style={{backgroundImage: `url(${bedIcon})`}}

                onChange={(e)=>setEstadoTamanos(e.target.value)}

              >
                <option value="allsizes">AllSizes</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
              <button className={`${styles.clear}`}>Clear</button>
            </div>
          </div>
          <div className={`${styles.contenedorTexto}`}>
            <p className={`${styles.textoFijo}`}>We have found for you...</p>
            <p className={`${styles.textoDinamico}`}>
              {props.textoDinamico}
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
