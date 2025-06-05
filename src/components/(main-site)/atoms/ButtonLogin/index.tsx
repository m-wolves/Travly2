import './ButtonLogin.css'
import { ButtonLoginProps } from './types'

import { FC } from 'react'

const ButtonLogin:FC <ButtonLoginProps> = ({ text, onClick }) => {
    return (
        <button className='ButtonLogin' onClick={onClick}>
            {text}
        </button>
    )
}

export default ButtonLogin