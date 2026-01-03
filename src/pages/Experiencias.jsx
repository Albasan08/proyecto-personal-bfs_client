// IMPORTACIONES DE TERCEROS

// IMPORTACIONES PROPIAS
import { Footer } from "../components/Footer"
import { GridCard } from "../components/GridCard"
import { NavBar } from "../components/NavBar"
import { useObtenerTodasExperiencias } from "../hooks/useObtenerTodasExperiencias"
export const Experiencias = () => {

  const { experiencias, error } = useObtenerTodasExperiencias();

  return (
    <>
    <NavBar />

    <header>
      <h1>Encuentra tu experiencia soñada</h1>
    </header>

    {!error && experiencias.length > 0 && (
        <GridCard experiencias={experiencias}/>
    )}

    {/*Gestión de errores*/}
    {error && (
      <p className="errores">{error}</p>
    )}
    <Footer />
    </>
  )
}
