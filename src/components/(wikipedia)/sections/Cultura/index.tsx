import CardCultura from '@/components/(wikipedia)/molecules/CardCultura'
import Title from '@/components/(wikipedia)/atoms/Title'

import './Cultura.css'

type Cultura = {
    titulo: string
    descricao: string
    imagem: string
}

type CulturaProps = {
    culturas: Cultura[]
}

const Cultura: React.FC<CulturaProps> = ({ culturas }) => {
    return (
        <div className="Cultura">
            <Title text='Culturas' />
            {culturas.map((cultura, i) => (
                <CardCultura key={i} {...cultura} />
            ))}
        </div>
    )
}

export default Cultura
