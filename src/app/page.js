import llamarArreglo from "./api/api.js";
import Header from "./components/Organisms/header";
import Main from "./components/Organisms/main.jsx";


export default async function Home() {
  let data = await llamarArreglo();
  let imagenDeFondo = data[4].photo;
  
  return (
    <>
      <Header fondoHeader={imagenDeFondo}
        textoDinamico={"All prices hotels, in All countries, for all sizes."}
      />
      <Main/>
    </>
  )
}
