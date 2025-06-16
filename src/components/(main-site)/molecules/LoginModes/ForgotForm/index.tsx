import { FC } from 'react'
import '../LoginForm.css'

import TitleLogin from '@/components/(main-site)/atoms/TitleLogin'
import InputLogin from '@/components/(main-site)/atoms/InputLogin'
import ButtonLogin from '@/components/(main-site)/atoms/ButtonLogin'

interface ForgotFormProps {
    onChangeMode?: (mode: 'login' | 'register' | 'forgot' | 'emailSent' | 'reset') => void;
}

const ForgotForm: FC<ForgotFormProps> = ({ onChangeMode }) => {
    return (
        <div className='LoginForm'>
            <div className='title'>
                <TitleLogin text="redefina sua senha" />
                <p>Insira o seu email ou nome de usuário e enviaremos um link para você voltar a acessar a sua conta.</p>
            </div>
            <div className='space'>
                <InputLogin type="text" placeholder="E-mail ou nome de usuário" />
            </div>
            <div className='buttons'>
                <ButtonLogin
                    text="Enviar Código"
                    onClick={() => onChangeMode?.('emailSent')}
                />
                <hr />
                <ButtonLogin
                    text="Fazer Login"
                    onClick={() => onChangeMode?.('login')}
                />
            </div>
        </div>
    )
}

export default ForgotForm 