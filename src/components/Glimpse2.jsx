import React from 'react'
import './glimpse2.css'

const Glimpse2 = ({showFunction}) => {
    return (
        <article className="glimpse2-review">
            <button onClick={showFunction}><i className='bx bxs-caret-left-circle' ></i></button>
            <p>
                Por la razón resulta desatinado que se atribuya la ciencia de la naturaleza
                exclusivamente a una clase de personas llamadas científicos y la filosofía
                a otra clase llamada filósofos. Un hombre que no ha reflexionado jamás sobre
                los principios que animan su obra no ha alcanzado una actitud de madurez
                viril frente a ella; un científico que no ha reflexionado jamás sobre su ciencia 
                no pasará de ser un científico de segunda mano, imitador y jornalero. 
                Un hombre que no ha pasado jamás por un cierto tipo de experiencia no puede
                reflexionar sobre ella; un filósofo que no ha estudiado ni trabajado jamás 
                la ciencia natural no puede filosofar sobre ella si no es engañandose a sí mismo. <span>Pag. 17. Ciencia y filosofía.</span>
            </p>
        </article>
    )
}

export default Glimpse2