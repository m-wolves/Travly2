import './TitleLogin.css'
import { TitleLoginProps } from './types'

import { FC } from 'react'

const TitleLogin:FC <TitleLoginProps> = ({ text }) => {
    return (
        <button className='TitleLogin'>
            {text}
        </button>
    )
}

export default TitleLogin