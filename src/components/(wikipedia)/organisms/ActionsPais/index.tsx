import BoxAvaliar from "@/components/(wikipedia)/atoms/BoxAvaliar"
import ButtonFavoritar from "@/components/(wikipedia)/atoms/ButtonFavoritar"
import Mapa from "@/components/(wikipedia)/molecules/Mapa"

import './ActionsPais.css'

// Section lateral direita, não precisa de props. São as ações de favoritar e avaliar
const ActionsPais = () => {
    return (
        <div className='ActionsPais'>
            <ButtonFavoritar />
            <BoxAvaliar />
            <Mapa />
        </div>
    )
}

export default ActionsPais