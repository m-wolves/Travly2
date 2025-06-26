import { FC } from 'react';
import { User, Home } from 'lucide-react';

import './ButtonEntrar.css'
import { ButtonEntrarProps } from './types'

const ButtonEntrar:FC <ButtonEntrarProps> = ({ isLogged = false, link }) => {
    return (
        <a className='ButtonEntrar' href='/Login'>
            {isLogged ? <Home className='icon' /> : <User className='icon' />}
            <p>{isLogged ? 'Voltar para o Feed' : 'Entrar/Criar uma Conta'}</p>
        </a>
    )
}

export default ButtonEntrar