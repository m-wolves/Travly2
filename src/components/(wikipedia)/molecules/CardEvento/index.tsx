import './CardEvento.css'

type CardEventoProps = {
    titulo: string
    descricao: string
    imagem: string
    tipo: string
    data: string
}

const CardEvento: React.FC<CardEventoProps> = ({
        titulo,
        descricao,
        imagem,
        tipo,
        data
        }) => {

    return (
        <div className="CardEvento">
            <div className="evento-img">
                <img src={imagem} alt={titulo} />
                <div className="tipo-evento">{tipo}</div>
            </div>
            <div className="evento-content">
                <p className='event-date'>{data}</p>
                <h3>{titulo}</h3>
                <p>{descricao}</p>
            </div>
        </div>
    )
}

export default CardEvento