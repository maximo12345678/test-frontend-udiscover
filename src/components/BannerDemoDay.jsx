import banner from '../images/banner.png'

const BannerDemoDay = () => {
    return (
        <section className="banner-demoday">

            <div className='banner-demoday-content'>
                
                <img data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="300"
                    data-aos-offset="0" 
                    alt="Banner Demo Day" src={banner}>    
                </img>

                <div>
                    <h2>Conoce a los finalistas de nuestro Demo Day 2021</h2>
                    <a target="_blank" rel="noreferrer" href="https://calendly.com/udiscover-virtual-school/reunion-con-asesor?month=2022-05">
                        <button className="genericButton">Inscripciones abiertas</button>
                    </a>
                </div>

            </div>

          
        </section>
    )
}


export default BannerDemoDay;