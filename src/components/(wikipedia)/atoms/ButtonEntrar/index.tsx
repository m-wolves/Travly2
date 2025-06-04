import { FC } from 'react';
import { User, Home } from 'lucide-react';

import './ButtonEntrar.css'
import { ButtonEntrarProps } from './types'

const ButtonEntrar:FC <ButtonEntrarProps> = ({ isLogged = false }) => {
    return (
        <div className='ButtonEntrar'>
            {isLogged ? <Home className='icon' /> : <User className='icon' />}
            <p>{isLogged ? 'Voltar para o Feed' : 'Entrar/Criar uma Conta'}</p>
        </div>
    )
}

export default ButtonEntrar