import { FC } from 'react'
import './CardPaisL.css'

// Definindo o tipo das props do componente.
type CardPaisXProps = {
    nomePais: string;
    imagemBandeira: string;
};

const CardPaisX: FC<CardPaisXProps> = ({ nomePais, imagemBandeira }) => {
    return (
        <div className='cardPaisL'>
            <img 
                src={imagemBandeira} // A URL da imagem vem da prop "imagemBandeira"
                alt={`Bandeira do ${nomePais}`} // O "alt" descreve a imagem (acessibilidade)
            />
            <h3>{nomePais}</h3>
        </div>
    )
}

export default CardPaisX