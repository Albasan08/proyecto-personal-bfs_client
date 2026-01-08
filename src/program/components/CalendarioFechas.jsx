// IMPORTACIONES DE TERCEROS
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { es } from "react-day-picker/locale";
import "react-day-picker/dist/style.css";

// IMPORTACIONES PROPIAS
import './CalendarioFechas.scss'


export const CalendarioFechas = () => {

    const [selected, setSelected] = useState([]);

    return (
        <>
            <article>
                <DayPicker locale={es} numerals="latn" className="calendario-programacion"
                    animate
                    mode="multiple"
                    selected={selected}
                    onSelect={setSelected}
                    disabled={{ before: new Date() }}
                />
            </article>
        </>

    )
}
