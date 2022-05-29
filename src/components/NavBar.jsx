import logo from '../images/logo-nav.png'
import '../styles/Animations.css'

const NavBar = () => {

    function modificarMenu() {
        document.querySelector('.menu').classList.toggle('show');
    }

    return (
        <nav className="nav">
            <li className="nav-img"><a href="/"><img src={logo} alt="Logo uDiscover"></img></a></li>
            <div style={{ flexGrow: 1 }}></div>
            <ul className="menu">
                <li>
                    <a href="/">Experiencia uDiscover</a>
                </li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">Admisiones</a></li>
                <li><a href="/">Plataforma uDiscover</a></li>
                <li><button className='buttonContact'>CONTACTO</button></li>
            </ul>

            <input type="checkbox" id="btn-menu"></input>
            <label onClick={modificarMenu} for="btn-menu" className="lbl-menu">
                <span id="spn1"></span>
                <span id="spn2"></span>
                <span id="spn3"></span>
            </label>


        </nav>
    )
}


export default NavBar;