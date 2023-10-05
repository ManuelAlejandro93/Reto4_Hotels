function filtrarPorChecks(estadoCheckIn, estadoCheckOut, hotel) {
  let checkInEnMS
  let checkOutEnMS
  let checkInDisponibleEnMS;
  let checkOutDisponibleEnMS;

  if (estadoCheckIn !== "estado-inicial" && estadoCheckOut === "estado-inicial" || estadoCheckIn === "estado-inicial" && estadoCheckOut !== "estado-inicial" || estadoCheckIn === "estado-inicial" && estadoCheckOut === "estado-inicial") {
    return true;
  }

  if (estadoCheckIn !== "estado-inicial" && estadoCheckOut !== "estado-inicial") {

    checkInEnMS = new Date(estadoCheckIn).setHours(24, 0, 0, 0);
    // checkIn en ms a las 00:00h;

    checkOutEnMS = new Date(estadoCheckOut).setHours(24, 0, 0, 0);
    // checkOut en ms a las 00:00h;
  }

  if (checkOutEnMS < checkInEnMS) {
    return false;
  }

  let hoyEnMS = new Date().setHours(0, 0, 0, 0);
  // Hoy en ms a las 00:00h;


  checkInDisponibleEnMS = hoyEnMS + hotel.availabilityFrom;

  checkOutDisponibleEnMS = hoyEnMS + hotel.availabilityTo;

  if (checkInEnMS >= checkInDisponibleEnMS && checkOutEnMS <= checkOutDisponibleEnMS) {
    return true;
  } else {
    return false;
  }
}

export function filtrarCards(estadoPais,
  estadoCheckIn,
  estadoCheckOut,
  estadoPrecio,
  estadoTamano, data) {

  let arregloAImprimir = data.filter(hotel => {

    let filtroPais = estadoPais === "estado-inicial" || estadoPais === "allcountries" || estadoPais.toLowerCase() === hotel.country.toLowerCase();

    let filtroPrecio = estadoPrecio === "estado-inicial" || estadoPrecio === 0 || estadoPrecio === hotel.price;

    let filtroTamano = estadoTamano === "estado-inicial" || estadoTamano === "allsizes" || estadoTamano === "small" && hotel.rooms <= 15 || estadoTamano === "medium" && hotel.rooms <= 30 && hotel.rooms > 15 || estadoTamano === "large" && hotel.rooms > 30


    let filtroChecks = filtrarPorChecks(estadoCheckIn, estadoCheckOut, hotel);
    

    return filtroPais && filtroPrecio && filtroTamano && filtroChecks
  })

  return arregloAImprimir;
}