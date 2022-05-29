import colombia from '../images/colombia.png'

const CardsPlans = () => {
    return (
        <section className="plans">

            <div  style={{ height: "150px", overflow: "hidden" }}>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none"
                    style={{ height: "100%", width: "100%" }}>
                    <path d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
                        style={{ stroke: "none", fill: "#fff" }}>

                    </path>
                </svg>
            </div>

            <h2 className="title-plans">Aprovecha nuestros precios especiales con descuento</h2>

            <div className="cards-plans">


                <div data-aos="flip-up" className="card-plan">
                    <h2 className="card-plan-title">Plan anual</h2>
                    <span className="card-plan-pagos">1 pago</span>
                    <div className="line"></div>

                    <img alt="Bandera Colombia" src={colombia}></img>
                    <h3 className='card-plan-price'>COP$ 741.000<i>/mes</i></h3>
                    
                    <div className='card-plan-content'>
                        <h4 className='card-plan-content-oldPrice'>Precio regular COP$ 870.000</h4>
                        <h4 className='card-plan-content-ahorro'>Ahorras COP$ 129.000</h4>
                    </div>
                    
                    <a target="_blank" rel="noreferrer" href="https://calendly.com/udiscover-virtual-school/reunion-con-asesor?month=2022-05">
                        <button className="genericButton">Contacta a tu asesor</button>
                    </a>
                </div>

                <div data-aos="flip-up" className="card-plan">
                    <h2 className="card-plan-title">Plan mensual anticipado</h2>
                    <span className="card-plan-pagos">12 pagos</span>
                    <div className="line"></div>

                    <img alt="Bandera Colombia" src={colombia}></img>
                    <h3 className='card-plan-price'>COP$ 769.000<i>/mes</i></h3>
                    
                    <div className='card-plan-content'>
                        <h4 className='card-plan-content-oldPrice'>Precio regular COP$ 870.000</h4>
                        <h4 className='card-plan-content-ahorro'>Ahorras COP$ 101.000</h4>
                    </div>
                    
                    <a target="_blank" rel="noreferrer" href="https://calendly.com/udiscover-virtual-school/reunion-con-asesor?month=2022-05">
                        <button className="genericButton">Contacta a tu asesor</button>
                    </a>

                </div>

                <div data-aos="flip-up" className="card-plan">
                    <h2 className="card-plan-title">Plan mensual</h2>
                    <span className="card-plan-pagos">12 pagos</span>
                    <div className="line"></div>

                    <img alt="Bandera Colombia" src={colombia}></img>
                    <h3 className='card-plan-price'>COP$ 869.000<i>/mes</i></h3>

                    <div className='card-plan-content'>
                        <h4 className='card-plan-content-oldPrice'>Precio regular COP$ 870.000</h4>
                        <h4 className='card-plan-content-ahorro'>Ahorras COP$ 101.000</h4>
                    </div>

                    <a target="_blank" rel="noreferrer" href="https://calendly.com/udiscover-virtual-school/reunion-con-asesor?month=2022-05">
                        <button className="genericButton">Contacta a tu asesor</button>
                    </a>


                </div>
       
            </div>
        </section>
    )
}


export default CardsPlans;