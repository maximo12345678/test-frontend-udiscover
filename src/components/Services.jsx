import service1 from '../images/service1.png'
import service2 from '../images/service2.png'
import service3 from '../images/service3.png'
import service4 from '../images/service4.png'


const Services = () =>{
    return(
        <section className="services">
            <div className="texts-services">
                <h2>¿Por qué tu hijo debe estudiar en uDiscover?</h2>
                <h3>Tu hijo merece tener una educación de calidad y a la vez, tiempo para desarrollar diferentes actividades. Estudiar en uDiscover les permitirá eso y mucho más:</h3>
            </div>

            <div className="cards-sercices">
                <div data-aos="fade-right" className="card-service">
                    <img alt="Servicio acompañamiento continuo" src={service1}></img>
                    <h2 className='title-card '>Acompañamiento continuo</h2>
                    <h4 className='description-card'>Tu hijo nunca estará solo. El 100% de las clases son guiadas y acompañadas por profesores en tiempo real.</h4>
                </div>

                <div data-aos="fade-right" className="card-service">
                    <img alt="Educación internacional" src={service2}></img>
                    <h2 className='title-card '>Educación internacional</h2>
                    <h4 className='description-card'>Curriculum Internacional, enfocado en tecnología, emprendimiento e innovación.</h4>
                </div>

                <div data-aos="fade-left" className="card-service">
                    <img alt="Bilingüismo" src={service3}></img>
                    <h2 className='title-card '>Bilingüismo</h2>
                    <h4 className='description-card'>Aprendizaje y perfeccionamiento del Inglés a través de experiencias. Contamos con profesores nativos. Nuestros estudiantes se gradúan con High School Diploma con el que pueden ingresar a la universidad latinoamericana de su elección.</h4>
                </div>

                <div data-aos="fade-left" className="card-service">
                    <img alt="Apoyamos las ideas" src={service4}></img>
                    <h2 className='title-card '>Apoyamos las ideas</h2>
                    <h4 className='description-card'>Con nuestra incubadora de proyectos basados en modelos disruptivos e innovadores tu hijo llevará sus ideas a otro nivel.</h4>
                </div>
            </div>

            <br></br>

        </section>
    )
}


export default Services;