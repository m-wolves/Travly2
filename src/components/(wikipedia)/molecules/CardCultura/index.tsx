import './CardCultura.css'

type CardCulturaProps = {
    titulo: string
    descricao: string
    imagem: string
}

const CardCultura: React.FC<CardCulturaProps> = ({
        titulo,
        descricao,
        imagem
        }) => {

    return (
        <div className="CardCultura">
            <h3>{titulo}</h3>
            <img src={imagem} alt={titulo} />
            <p>{descricao}</p>
        </div>
    )
}

export default CardCultura