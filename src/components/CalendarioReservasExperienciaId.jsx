// IMPORTACIONES DE TERCEROS
import { useState } from 'react';
import { DayPicker } from "react-day-picker";
import { es } from "react-day-picker/locale";
import "react-day-picker/dist/style.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getAuth } from "firebase/auth";


// IMPORTACIONES PROPIAS
import './CalendarioReservasExperiencia.scss'

export const CalendarioReservasExperienciaId = ({ programacion, experiencia }) => {

    const [fechaSeleccionada, setFechaSeleccionada] = useState(null);
    const [horaSeleccionada, setHoraSeleccionada] = useState(null);
    const [personas, setPersonas] = useState("");

    const { id } = useParams();
    const auth = getAuth(); 
    const emailUsuario = auth.currentUser?.email;

    const fechasDisponibles = programacion ?.flatMap(program => program.fechas_program) .map(fecha => new Date(fecha)); // aplana todos los arrays de programación en uno solo, recorre ese array para convertirlo en Date(válido para trabajar con DayPicker), guarda los objetos como fechas disponibles para marcar en el calendario

    const horas = programacion?.map(p => ({ id: p.id_program, inicio: p.hora_inicio, fin: p.hora_fin })) || []; //Toma cada fechas_program y las junta en un solo array, elimina booleanos o array vacío para mapear(para que no de error)
  
    const navigate = useNavigate();

    const handleSubmit = (event) => {

        event.preventDefault();
        //Normalizar fechas
        const fechaNormalizada = fechaSeleccionada.toISOString().split("T")[0];
        // Encontrar hora seleccionada 
        const hora = horas.find(hora => hora.id === horaSeleccionada);

        const reservaTemporal = {
            id_experience: experiencia.id_expe, 
            email_user: emailUsuario,
            id_experiencia: id,
            nombre_experiencia: experiencia.nombre_expe, 
            fecha_reserva: fechaNormalizada, 
            horario_reserva: hora.inicio, 
            personas_reserva: personas, 
            estado_reserva: false
        }

        navigate(`/experiencias/${id}/reserva`, { state: reservaTemporal});

    }

    return (
    <>
    <section className="formulario-reserva">
        <form className="reserva-experiencia" encType="multipart/form-data" onSubmit={handleSubmit}> 
            {/*Calendario*/} 
            <div className="calendario-para-reservar"> 
                <DayPicker locale={es} numerals="latn" className="calendario-programacion"
                    mode="single" 
                    selected={fechaSeleccionada} 
                    onSelect={setFechaSeleccionada} 
                    modifiers={{ disponibles: fechasDisponibles }} 
                    disabled={[ 
                        { before: fechasDisponibles[0] }, 
                        { after: fechasDisponibles[fechasDisponibles.length - 1] }, 
                        date => !fechasDisponibles.some(fecha => fecha.toDateString() === date.toDateString())
                    ]}
                />
            </div> 
            
            {/* Horas */} 
            <div className="horarios-para-reservar"> 
                <header>
                    <h2>Horas disponibles</h2> 
                </header>

                <div className="grid-horarios"> 
                    {horas.length > 0 && horas.map(hora => ( 
                        <button 
                            key={hora.id} 
                            type="button" 
                            className={`btn-horario ${horaSeleccionada === hora.id ? "activo" : ""}`} 
                            onClick={() => setHoraSeleccionada(hora.id)} > 
                            {hora.inicio.replace(":00", "")} – {hora.fin.replace(":00", "")} 
                        </button> )) } 
                </div>
                
                <div className="selector-personas">
                <select value={personas} onChange={(e) => setPersonas(Number(e.target.value))} > 
                    <option value="">Selecciona las personas</option> 
                    <option value="1">1 persona</option> 
                    <option value="2">2 personas</option> 
                    <option value="3">3 personas</option> 
                    <option value="4">4 personas</option> 
                    <option value="5">5 personas</option> 
                    <option value="6">6 personas</option> 
                    <option value="7">7 personas</option> 
                    <option value="8">8 personas</option> 
                    <option value="9">9 personas</option> 
                    <option value="10">10 personas</option> 
                </select>
                </div>
    
                <button type="submit" className="btn-principal" disabled={!horaSeleccionada} >Reservar</button> 
            </div> 
        </form>
    </section>
    </>
  )
}

/* disable - array de normas para desactivar los días no disponibles
1 - desactivar todas las fechas anteriores al mismo día
2- Desactiva las fechas posteriores a la última fecha disponible
3- Función que recibe cada date del calendario.
Si ninguna de las fechasDisponibles tiene el mismo toDateString() que date, devuelve true - esa fecha se deshabilita.
*/
