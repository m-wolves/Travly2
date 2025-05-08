import BoxAvaliar from "@/components/(wikipedia)/atoms/BoxAvaliar"
import ButtonFavoritar from "@/components/(wikipedia)/atoms/ButtonFavoritar"

import './ActionsPais.css'

// Section lateral direita, não precisa de props. São as ações de favoritar e avaliar
const ActionsPais = () => {
    return (
        <div className='ActionsPais'>
            <ButtonFavoritar />
            <BoxAvaliar />
        </div>
    )
}

export default ActionsPais