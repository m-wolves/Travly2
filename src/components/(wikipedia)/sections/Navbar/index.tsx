import { User } from 'lucide-react' // importando ícones
import './Navbar.css'

function Navbar(){
    return(
        <header>
            <nav>
                <ul className="navbar">
                    <li>
                        <a href="/" className='logo'>
                            <img src='/assets/main-site/Logo01.png' alt="" className='img-logo'/>
                            <h1 className='nomeTravly'>TRAVLY</h1>
                        </a>
                    </li>


                    <li>
                            <a href="" className='user'>
                                <User className='user-icon'/>
                                Entrar/Criar uma conta
                                </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;