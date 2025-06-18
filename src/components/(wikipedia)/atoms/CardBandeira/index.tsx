import { FC } from 'react'

import { CardBandeiraProps } from './types'
import './CardBandeira.css'

const CardBandeira:FC <CardBandeiraProps> = ({ img, text, link }) => {
    return (
        <div className='CardBandeira'>

            <div className='Bandeira'>
                <img src={img} alt={text} />
            </div>

            <div className='NomePais'>
                <a href={link}>{text}</a>
            </div>

        </div>
    )
}

export default CardBandeira