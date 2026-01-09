// IMPORTACIONES DE TERCEROS
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { es } from "react-day-picker/locale";
import "react-day-picker/dist/style.css";

// IMPORTACIONES PROPIAS
import './CalendarioFechas.scss'


export const CalendarioFechas = ({ fechasSeleccionadas, setFechasSeleccionadas, fechasDeshabilitadas = [] }) => {
    
    // const fechasDeshabilitadasDate = fechasDeshabilitadas.map(f => new Date(f));
    return (
        <>
                <h2>Calendario de fechas</h2>
                <DayPicker locale={es} numerals="latn" className="calendario-programacion"
                    animate
                    mode="multiple"
                    selected={fechasSeleccionadas}
                    onSelect={setFechasSeleccionadas}
                    disabled={{ before: new Date() }}
                    //...fechasDeshabilitadasDate
                />

        </>

    )
}
