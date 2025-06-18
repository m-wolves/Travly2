import './BoxAvaliar.css'
import { Star } from 'lucide-react'
import { useState } from 'react'

const BoxAvaliar = () => {
    const [nota, setNota] = useState(0) // Estado que guarda a nota de 0 a 5
    const [hoverIndex, setHoverIndex] = useState(0) // Estado da estrela em hover

    const handleClick = (index: number) => {
        setNota(index) // Define a nota com base na estrela clicada
    }

    return (
        <div className='BoxAvaliar'>
            <div className='Avaliar'>
                <div className='Title'>
                    <p>Avaliar</p>
                </div>
                <div className='Estrelas'>
                    {[1, 2, 3, 4, 5].map((index) => {
                        const isHovered = hoverIndex !== 0 && index <= hoverIndex; // Todas as estrelas até a estrela em hover
                        const isFilled = hoverIndex === 0 && nota >= index; // Estrelas preenchidas com base na nota
                        return (
                            <Star
                                key={index}
                                className={`iconStar ${isHovered ? 'hovered' : ''} ${isFilled ? 'filled' : ''}`} // Aplica classe 'hovered' e 'filled'
                                onMouseEnter={() => setHoverIndex(index)}  // Atualiza estrela em foco
                                onMouseLeave={() => setHoverIndex(0)}      // Remove o foco ao sair
                                onClick={() => handleClick(index)}         // Define nota ao clicar
                            />
                        )
                    })}
                </div>
                <button className='ButtonComentar'>
                    e comentar
                </button>
            </div>
            <button className='Avaliacoes'>
                Ver Avaliações
            </button>
        </div>
    )
}

export default BoxAvaliar