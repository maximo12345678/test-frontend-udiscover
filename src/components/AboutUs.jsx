import kid from '../images/kid.png'


const AboutUs = () =>{
    return(
        <section className="about-us">
            
            <div className="text-about-us">
                <h2>Por una educacion <span className="textGreen">+</span> <span className="textOrange">humana</span></h2>

                <div>
                    <h3><span className="textOrange">uDiscover</span> es un <span className="textOrange">Colegio Virtual</span> bilingüe Americano, con enfoque en Tecnología, Emprendimiento e Innovación.</h3>
                    <p>
                        Ofrecemos la modalidad: Académica bilingüe (español–inglés). Contamos con 3 niveles: 
                        <span> Elementary School (básica primaria)</span>,
                        <span> Middle School (básica secundaria)</span> y  <span>High School (educación media)</span> de carácter mixto, 
                        Calendarios A (Inicio clases Febrero) y B (Inicio clases Agosto).
                    </p>
                </div>
            </div>

            
            <div className="text2-about-us">
                <img data-aos="flip-up" alt="Niño jugando" src={kid}></img>
                
                <div>
                    <p><span className='textBlue'>S</span><span className='textOrange'>aberes y</span></p>
                    <p><span className='textBlue'>E</span><span className='textOrange'>xperiencias para</span></p>
                    <p><span className='textBlue'>R</span><span className='textOrange'>econocerse</span></p>

                    <h4>
                        Más que la mera transmisión de información, el conocimiento es una 
                        herramienta para <span>descubrir por sí mismos</span> el 
                        rol dentro de una sociedad, <span>las virtudes y las pasiones</span>. Con una mentalidad de libertad e 
                        interminable curiosidad, aquí lo importante, más que las respuestas, son las preguntas.
                    </h4>
                    
                    <a target="_blank" rel="noreferrer" href="https://ud.school/metodologia/"><button data-aos="zoom-in" title="¡Haz click para ver nuestra metodología!" className="genericButton">Conoce nuestra metodología</button></a>

                </div>
            </div>


        </section>
    )
}


export default AboutUs;