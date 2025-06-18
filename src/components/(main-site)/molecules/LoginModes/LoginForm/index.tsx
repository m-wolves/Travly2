import { FC } from 'react'
import '../LoginForm.css'

import TitleLogin from '@/components/(main-site)/atoms/TitleLogin'
import InputLogin from '@/components/(main-site)/atoms/InputLogin'
import LinkLogin from '@/components/(main-site)/atoms/LinkLogin'
import ButtonLogin from '@/components/(main-site)/atoms/ButtonLogin'

interface LoginFormProps {
    onChangeMode?: (mode: 'login' | 'register' | 'forgot' | 'emailSent' | 'reset') => void;
}

const LoginForm: FC<LoginFormProps> = ({ onChangeMode }) => {
    return (
        <div className='LoginForm'>
            <TitleLogin text="Entrar" />
            <div>
                <InputLogin type="text" placeholder="E-mail" />
                <InputLogin type="password" placeholder="Senha" />
            </div>
            <LinkLogin
                txtLink="Esqueci minha senha"
                link="#"
                onClick={() => onChangeMode?.('forgot')}
            />
            <div className='buttons'>
                <ButtonLogin text="Entrar" />
                <hr />
                <ButtonLogin
                    text="Criar conta"
                    onClick={() => onChangeMode?.('register')}
                />
            </div>
        </div>
    )
}

export default LoginForm 