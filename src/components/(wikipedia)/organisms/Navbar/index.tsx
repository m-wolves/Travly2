import { User } from 'lucide-react' // importando íconesAdd commentMore actions
import './Navbar.css'

import ButtonEntrar from '@/components/(main-site)/atoms/ButtonEntrar'

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
                        <ButtonEntrar/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar