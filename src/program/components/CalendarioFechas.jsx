// IMPORTACIONES DE TERCEROS
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { es } from "react-day-picker/locale";
import "react-day-picker/dist/style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//import { es }from "date-fns/locale";

// IMPORTACIONES PROPIAS
import './CalendarioFechas.scss'


export const CalendarioFechas = ({ onChangeFechas, onChangeRangos }) => {

    const [fechasSeleccionadas, setFechasSeleccionadas] = useState([]);
    
    const [horaInicio, setHoraInicio] = useState(null);
    const [horaFin, setHoraFin] = useState(null);
    const [rangosHoras, setRangosHoras] = useState([]);
    // Manejar fechas
    const actualizarFechas = (fechas) => {
        
        const nuevasFechas = fechas || [];
        setFechasSeleccionadas(nuevasFechas);
        //console.log(nuevasFechas)
        onChangeFechas(nuevasFechas)

    };

    // Manejar horas
    // Añadir horas
    const anadirRangoHora = () => {

        if (!horaInicio || !horaFin) return;

        const nuevaHora = {
            inicio: horaInicio,
            fin: horaFin
        }

        const nuevoRango = [...rangosHoras, nuevaHora]
        
        setRangosHoras(nuevoRango)
        onChangeRangos(nuevoRango)

        setHoraInicio(null);
        setHoraFin(null);

    };
    // Eliminar rango de horas
    const eliminarRangoHora = (index) => {

        const nuevosRangos = rangosHoras.filter((_, i) => i !== index); 

        setRangosHoras(nuevosRangos); 
        onChangeRangos(nuevosRangos)

    };

    return (
        <>
            <div className="calendario-container">

                <h2>Calendario de fechas</h2>
                <DayPicker locale={es} numerals="latn" className="calendario-programacion"
                    animate
                    mode="multiple"
                    selected={fechasSeleccionadas}
                    onSelect={actualizarFechas}
                    disabled={{ before: new Date() }}
                />

                {/*Horas*/}
                <div>
                    <p>Hora inicio:</p>
                    <DatePicker
                        selected={horaInicio}
                        onChange={setHoraInicio}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={30}
                        dateFormat="HH:mm"
                        placeholderText="Selecciona la hora de inicio"
                        timeCaption="Inicio"
                    />
                </div>

                <div>
                    <p>Hora fin:</p>
                    <DatePicker
                        selected={horaFin}
                        onChange={setHoraFin}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={30}
                        dateFormat="HH:mm"
                        placeholderText="Selecciona la hora de fin"
                        timeCaption="Fin"
                    />
                </div>

                <button type="button" className="btn-principal" onClick={anadirRangoHora}>Añadir rango</button>

                <div className="rangosSeleccionados">
                    <h3>Rangos de horas seleccionados</h3>
                    {rangosHoras.map((rango, index) => (
                        <div key={index} className="rango-items">
                            <p>
                                {rango.inicio.toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}
                                {" - "}
                                {rango.fin.toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}
                            </p>
                            <button type="button" className="btn-secundario" onClick={() => eliminarRangoHora(index)}>Eliminar rango</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

/* EXPLICACIÓN COMPONENTE
Dar un valor iniciar a las props para que no de fallo al cargar la página
Inline - Se muestra como un calendario visible
Selected(null) - Le digo que gestiono yo la selección ya que no da la opción de seleccionar varios días
onChange - Si no hay fecha, no hace nada
           Si hay fecha, comprobar que existe en el array de fechasSeleccionadas recorriendolo con some mientras compara las fechas(seleccionadas y array) en formato string ISO
           Devuelve true o false
           Si no existe, añadir al array(para no mutar)
highligthDates - Remarcar con color la selección
excludeDates - Convierte cada elemento del array de fechasDeshabilitadas a Date

Recorrer el array de fechasSeleccionadas para después poder mostrarlos, usar su índice como key que no se repite*

Selected - Hora inicio
onChange - Cuando el usuario marca una hora horaInicio se actualiza
showTimeSelect - Activa el selector de tiempo
showTimeselectOnly - Solo muestra las horas, quita los días
timeIntervals - Pasos de 1h
dateFormat - Muestra las horas en formato 24h
placeholder - Texto que se ve antes

RangosSeleccionados
Recorrer el map con las horas formateadas para poder mostrarlas en formato string (son objeto date)*/
