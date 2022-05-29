

const Header = () => {
    return (
        <header>
            <section className="main-texts">
                <h1>Descubre el legado que <b>dejarás al mundo</b></h1>
                <h2>
                    Desde un entorno virtual, guiamos <b>virtudes</b>, <b>habilidades</b>, <b>intereses</b> y <b>afinidades</b> para una 
                    proyección integral y sólida del individuo.
                </h2>
            
                <a target="_blank" rel="noreferrer" href="https://calendly.com/udiscover-virtual-school/reunion-con-asesor?month=2022-05"><button data-aos="zoom-in" className="genericButton">Inscripciones abiertas</button></a>
            </section>

            <div className="wave" style={{ height: "150px", overflow: "hidden" }}>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none"
                    style={{ height: "100%", width: "100%" }}>
                    <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                        style={{ stroke: "none", fill: "#fff" }}>

                    </path>
                </svg>
            </div>


        </header>
    )
}


export default Header;