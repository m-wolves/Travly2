import Localizacao from '@/components/(wikipedia)/atoms/Localizacao'
import './CardPontoTuristico.css'

type CardPontoTuristicoProps = {
    titulo: string
    descricao: string
    imagemUrl: string
    localizacao: string
}

const CardPontoTuristico: React.FC<CardPontoTuristicoProps> = ({
    titulo,
    descricao,
    imagemUrl,
    localizacao
    }) => {

    return (
        <div className="CardPontoTuristico">
            <img src={imagemUrl} alt={titulo} />
            <div className="card-conteudo">
                <Localizacao texto={localizacao} />
                <h3>{titulo}</h3>
                <p>{descricao}</p>
            </div>
        </div>
    )
}

export default CardPontoTuristico
