import CardPontoTuristico from '@/components/(wikipedia)/molecules/CardPontoTuristico'
import Title from '@/components/(wikipedia)/atoms/Title'

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
            <Title text='Pontos Turísticos' />
            {pontos.map((ponto, i) => (
                <CardPontoTuristico key={i} {...ponto} />
            ))}
        </div>
    )
}

export default PontosTuristicos
