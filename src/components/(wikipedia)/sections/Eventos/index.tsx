import CardEvento from '@/components/(wikipedia)/molecules/CardEvento'
import Title from '@/components/(wikipedia)/atoms/Title'

import './Eventos.css'

type Evento = {
    titulo: string
    descricao: string
    imagem: string
    tipo: string
    data: string
}

type EventosProps = {
    eventos: Evento[]
}

const Eventos: React.FC<EventosProps> = ({ eventos }) => {
    return (
        <div className="Eventos">
            <Title text='Eventos' />
            {eventos.map((evento, i) => (
                <CardEvento key={i} {...evento} />
            ))}
        </div>
    )
}

export default Eventos
