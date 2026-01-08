// IMPORTACIONES DE TERCEROS
import { useState } from 'react';

// IMPORTACIONES PROPIAS
import './BotonReserva.scss'
import { useFetch } from '../../hooks/useFetch';
const APIKEY_BACK = import.meta.env.VITE_APIKEY_SERVER;

export const BotonReserva = ({ idReserva, estadoInicial }) => {

  const [estado, setEstado] = useState(estadoInicial);

  const { fetchData } = useFetch();

  const handleToggle = async() => {

    const url = `admin/gestion-reserva/${idReserva}`
    await fetchData(`${APIKEY_BACK}${url}`, "PUT", {
      estado_reserva: !estado
    });

    setEstado(estado => !estado);

  };

  return (
    <>
    <button className={`btn-toggle ${estado ? "confirmado" : "pendiente"}`}
        onClick={handleToggle}>{estado}
        <span>
        {estado ? "Confirmada" : "Pendiente"}</span>
    </button>
    </>
  )
}
