import llamarArreglo from "./api/api.js";
import Header from "./components/Organisms/header";
import Main from "./components/Organisms/main.jsx";
import ProveedorContexto from "./contexts/contextoFiltros.jsx";


export default async function Home() {
  let data = await llamarArreglo();
  let imagenDeFondo = data[4].photo;

  return (
    <>
      <ProveedorContexto>
        <Header fondoHeader={imagenDeFondo}
          textoDinamico={"All prices hotels, in All countries, for all sizes."}
        />
        <Main data = {data} />
      </ProveedorContexto>
    </>
  )
}
