import './NavContinentes.css'

const NavContinentes = () => {
    return (
        <div className='NavContinentes'>
            <ul>
                <a href="#norte"><li>América do Norte</li></a>

                <li>•</li>
                <a href="#sul"><li>América do Sul</li></a>

                <li>•</li>
                <a href="#centro"><li>América Central</li></a>
                
                <li>•</li>
                <a href="#africa"><li>África</li></a>
                
                <li>•</li>
                <a href=""><li>Ásia</li></a>
                
                <li>•</li>
                <a href="#europa"><li>Europa</li></a>
                
                <li>•</li>
                <a href="#oceania"><li>Oceania</li></a>
                
                <li>•</li>
                <a href="#antartida"><li>Antártida</li></a>
            </ul>
        </div>
    )
}

export default NavContinentes