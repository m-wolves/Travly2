import './ButtonFavoritar.css'
import { Heart } from 'lucide-react' // importando ícones
import { useState } from 'react'

// Definindo os tipos das props do componente
type ButtonFavoritarProps = {
    isActive?: boolean;      // Se o botão está marcado
    onClick?: () => void;    // Função chamada ao clicar
};

const ButtonFavoritar: React.FC<ButtonFavoritarProps> = ({ isActive = false, onClick }) => {
    const [favorito, setFavorito] = useState(isActive)

    const handleClick = () => {
        setFavorito(!favorito); // Inverte o estado atual: se estava favoritado, desfavorita e vice-versa
        onClick?.(); // Se uma função onClick foi passada, executa ela
    };

    return (
        <div className='ButtonFavoritar'>
            <button
                className={`ButtonFavoritarHeart ${favorito ? 'active' : ''}`} // Adiciona a classe 'active' se estiver favoritado
                onClick={handleClick} // Chama a função passada quando clicar
            >
                <Heart className="iconHeart" />
            </button>
            <p>
                {favorito ? 'FAVORITADO' : 'FAVORITAR'}
                {/* Condicionalmente renderiza o texto com base no estado 'favorito' */}
            </p>
        </div>
    )
}

export default ButtonFavoritar
