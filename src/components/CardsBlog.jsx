import blog1 from '../images/blog1.jpeg';
import blog2 from '../images/blog2.jpeg';
import blog3 from '../images/blog3.jpeg';

const CardsBlog = () =>{
    return (
        <section className="blog">
            <h2 className='title-blog'>BLOG</h2>
            <div style={{  borderBottom: "1px solid #ccc", margin: "0 100px"}}></div>
            

            <div className="cards-blog">
                <div data-aos="zoom-in-right" className='card-blog'>
                    <img alt="Imagen blog" src={blog1}></img>
                    <div className='content-card-blog'>
                        <h3>¿Qué es la “flexibilidad cognitiva”? ¿Por qué es clave para uDiscover Virtual School el aprendizaje y la creatividad dentro de su modelo académico de colegio virtual?</h3>
                        <p>¿Qué es la “flexibilidad cognitiva”? ¿Por qué es clave para uDiscover Virtual School el aprendizaje y la creatividad dentro de su modelo académico de colegio</p>
                        <a target="_blank" rel='noreferrer' href="https://ud.school/que-es-la-flexibilidad-cognitiva/">LEER MÁS »</a>
                        <hr></hr>
                        <span>julio 17, 2021</span>
                    </div>
                </div>

                <div data-aos="zoom-in-up" className='card-blog quit1'>
                    <img alt="Imagen blog" src={blog2}></img>
                    <div className='content-card-blog'>
                        <h3>Emprendimiento innovación y tecnología tendencias de la nueva forma de educación</h3>
                        <p>Emprendimiento, innovación y tecnología: tendencias de la nueva forma de educación virtual que presenta uDiscover Virtual School, dentro de los mejores colegios virtuales en Colombia</p>
                        <a target="_blank" rel='noreferrer' href="https://ud.school/que-es-la-flexibilidad-cognitiva/">LEER MÁS »</a>
                        <hr></hr>
                        <span>julio 10, 2021</span>
                    </div>
                </div>


                <div data-aos="zoom-in-left" className='card-blog quit2'>
                    <img alt="Imagen blog" src={blog3}></img>
                    <div className='content-card-blog'>
                        <h3>Crecen alternativas de colegios virtuales en Colombia con uDiscover Virtual School</h3>
                        <p>Crecen alternativas de colegios virtuales en Colombia con uDiscover Virtual School Dada la actual situación que enfrenta el mundo, la educación ha afrontado nuevos retos</p>
                        <a target="_blank" rel='noreferrer' href="https://ud.school/que-es-la-flexibilidad-cognitiva/">LEER MÁS »</a>
                        <hr></hr>
                        <span>julio 3, 2021</span>
                    </div>
                </div>

            </div>


            <div className="wave" style={{ height: "150px", overflow: "hidden" }}>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none"
                    style={{ height: "100%", width: "100%" }}>
                    <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                        style={{ stroke: "none", fill: "#fff" }}>

                    </path>
                </svg>
            </div>


        </section>
    )
}


export default CardsBlog;