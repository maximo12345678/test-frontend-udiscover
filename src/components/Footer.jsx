import logoFooter from '../images/logo-footer.png';


const Footer = () => {
    return (
        <footer>
            <div class="contenedor-footer">
                <div class="content-foo">
                    <img alt="Logo uDiscover" src={logoFooter}></img>                    
                </div>
                <div class="content-foo">
                    <h4>Contáctanos</h4>
                    <p title="¡Click para contactarnos!">
                        <a href='https://web.whatsapp.com/send?phone=573054246600&text=Hola%20uDiscover%20Virtual%20School%2C%20%C2%BFpodr%C3%ADan%20ayudarme%20con%20las%20siguientes%20dudas%3F'> 
                        <i className='fab fa-whatsapp'></i> +57 3054246600</a>
                    </p>
                    <p title="¡Click para contactarnos!">
                        <a href='https://web.whatsapp.com/send?phone=17867890299&text=Hola%20uDiscover%20Virtual%20School%2C%20%C2%BFpodr%C3%ADan%20ayudarme%20con%20las%20siguientes%20dudas%3F'> 
                        <i className='fas fa-phone-alt'></i> USA +1786 789 0299</a>
                    </p>
                    <p title="¡Click para contactarnos!">
                        <a href='https://web.whatsapp.com/send?phone=573330333477&text=Hola%20uDiscover%20Virtual%20School%2C%20%C2%BFpodr%C3%ADan%20ayudarme%20con%20las%20siguientes%20dudas%3F'> 
                        <i className='fas fa-phone-alt'></i> COL +57 333 033 3477</a>
                    </p>
                    <p title="¡Click para contactarnos!">
                        <a href='https://web.whatsapp.com/send?phone=56323820966&text=Hola%20uDiscover%20Virtual%20School%2C%20%C2%BFpodr%C3%ADan%20ayudarme%20con%20las%20siguientes%20dudas%3F'> 
                        <i className='fas fa-phone-alt'></i> CHI +56 323 820 966</a>
                    </p>
                    <p title="¡Click para contactarnos!">
                        <a href='https://web.whatsapp.com/send?phone=525590633939&text=Hola%20uDiscover%20Virtual%20School%2C%20%C2%BFpodr%C3%ADan%20ayudarme%20con%20las%20siguientes%20dudas%3F'> 
                        <i className='fas fa-phone-alt'></i> MEX +52 559 063 3939</a>
                    </p>
                    <p title="¡Click para contactarnos por email!"><a href="mailto:admisiones@ud.school"><i className='far fa-envelope'></i> admisiones@ud.school</a></p>
                </div>
                <div class="content-foo">
                    <h4>Síguenos</h4>
                    <div className='icons-redes-footer'>
                        <p title="¡Click para ir a nuestro facebook!"><a href="https://www.facebook.com/udiscovervirtual.school"><i className='fab fa-facebook'></i></a></p>
                        <p title="¡Click para ir a nuestro instagram!"><a href="https://www.instagram.com/ud.school/"><i className='fab fa-instagram'></i></a></p>
                        <p title="¡Click para ir a nuestro youtube!"><a href="https://www.youtube.com/channel/UCm7qjip86QoVYmu4LilFVRQ"><i className='fab fa-youtube'></i></a></p>
                        <p title="¡Click para ir a nuestro linkedin!"><a href="https://www.linkedin.com/company/67940123"><i className='fab fa-linkedin'></i></a></p>
                    </div>
                </div>
            </div>


            <div style={{  borderBottom: "1px solid #ccc", margin: "0 100px"}} ></div>
            <h2 class="titulo-final">Copyright &copy; 2022 - uDiscover Virtual School - All rights reserved.</h2>
        </footer>
    )
}



export default Footer;