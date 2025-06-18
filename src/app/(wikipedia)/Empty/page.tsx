'use client'

import CardPaisX from '@/components/(wikipedia)/molecules/CardPaisX'
import './Empty.css'
import ContentPais from '@/components/(wikipedia)/organisms/ContentPais'

const Empty = () => {
    return (
        <div className='Empty'>
            <p>Ops! Parece que ainda não temos informações sobre esse lugar em nosso banco de dados...</p>
            <p>Mas não se preocupe! Fique de olho nas próximas atualizações para estar ciente quando a página desse país for atualizada.</p>
        </div>
    )
}

export default Empty