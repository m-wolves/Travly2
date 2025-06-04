import './TitleContinente.css'
import { TitleContinentesProps } from './types'

import { FC } from 'react'

const TitleContinente:FC <TitleContinentesProps> = ({ text }) => {
    return (
        <div className='TitleContinente'>
            <hr/>
            <h2>{text}</h2>
            <hr/>
        </div>
    )
}

export default TitleContinente