import React from 'react'
import './glimpse.css'

const Glimpse1 = ({showFunction}) => {
    return (
        <article className="glimpse-review">
            <button onClick={showFunction}><i className='bx bxs-caret-left-circle' ></i></button>
            <p>
                Las disputas teológicas se volvieron tan violentas que, durante los siglos XVI y XVII,
                los católicos y los protestantes se mataron unos a otros por cientos de miles.
                El 23 de agosto de 1572, los católicos franceses, que señalaban la importancia de las buenas obras,
                atacaron a comunidades de protestantes franceses, que destacaban el amor de Dios por la humanidad.
                En este ataque, la Matanza del día de San Bartolomé, entre 5000 y 10.000 portestantes fueron asesinados en menos de 24 horas.
                Cuando al papa de roma le llegaron las noticas de Francia, quedó tan embargado por la alegría, 
                que organizó plegarias festivas para celebrar la ocación, y encargó a Giorgio Vasari que decorará una de las salas del Vaticano
                con un fresco de la matanza {`(en la actualidad el acceso a la sala está vedado a los visitantes).`} Durante esas 24 horas murieron más cristianos
                en manos de otros cristianos que a manos del Imperio romano politeísta a lo largo de toda su existencia. <span>Pag. 241. La ley de la religión.</span> 
            </p>
        </article>
    )
}

export default Glimpse1