import CardPontoTuristico from '@/components/(wikipedia)/molecules/CardPontoTuristico'
import './PontosTuristicos.css'

type Ponto = {
    titulo: string
    descricao: string
    imagemUrl: string
    localizacao: string
}

type PontosTuristicosProps = {
    pontos: Ponto[]
}

const PontosTuristicos: React.FC<PontosTuristicosProps> = ({ pontos }) => {
    return (
        <div className="PontoTuristico">
            {pontos.map((ponto, i) => (
                <CardPontoTuristico key={i} {...ponto} />
            ))}
        </div>
    )
}

export default PontosTuristicos
