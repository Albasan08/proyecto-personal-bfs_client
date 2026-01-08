// IMPORTACIONES DE TERCEROS

// IMPORTACIONES PROPIAS
import { useEffect } from "react"
import { Footer } from "../components/Footer"
import { GridCard } from "../components/GridCard"
import { NavBar } from "../components/NavBar"
import { useFetch } from "../hooks/useFetch"
const APIKEY_BACK = import.meta.env.VITE_APIKEY_SERVER;

export const Experiencias = () => {

  const { fetchData, data, error, loading} = useFetch();

  const url = "experiencias"
  useEffect(() => {
    fetchData(`${APIKEY_BACK}${url}`, "GET");
  }, []);

  return (
    <>
      <NavBar />
      <main>
        <header>
          <h1>Encuentra tu experiencia soñada</h1>
        </header>

        {loading && (
          <div className="loading">
            <p>Cargando...</p>
          </div>
        )}

        {data && (
          <GridCard experiencias={data.data} />
        )}

       {error && (
          <div>
            <p className="errores">{data.mensaje}</p>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
