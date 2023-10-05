export default function formatearTodo(setEstadoPais,
  setEstadoCheckIn,
  setEstadoCheckOut,
  setEstadoTamano,
  setEstadoPrecio,
  estadoBotonClear,
  setEstadoBotonClear) {
  setEstadoBotonClear(!estadoBotonClear);
  setEstadoPais("estado-inicial");
  setEstadoCheckIn("estado-inicial");
  setEstadoCheckOut("estado-inicial");
  setEstadoTamano("estado-inicial");
  setEstadoPrecio("estado-inicial");
}