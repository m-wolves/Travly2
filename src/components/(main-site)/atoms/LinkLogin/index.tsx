import './LinkLogin.css'
import { LinkLoginProps } from './types'

import { FC } from 'react'

const LinkLogin:FC <LinkLoginProps> = ({ text, txtLink, link, onClick }) => {
    return (
        <p className='LinkLogin'>
            {text}
            <a href={link} onClick={onClick}>{txtLink}</a>
        </p>
    )
}

export default LinkLogin