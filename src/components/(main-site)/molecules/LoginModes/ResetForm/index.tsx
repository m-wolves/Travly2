import { FC } from 'react'
import '../LoginForm.css'

import TitleLogin from '@/components/(main-site)/atoms/TitleLogin'
import InputLogin from '@/components/(main-site)/atoms/InputLogin'
import LinkLogin from '@/components/(main-site)/atoms/LinkLogin'
import ButtonLogin from '@/components/(main-site)/atoms/ButtonLogin'

interface ResetFormProps {
    onChangeMode?: (mode: 'login' | 'register' | 'forgot' | 'emailSent' | 'reset') => void;
}

const ResetForm: FC<ResetFormProps> = ({ onChangeMode }) => {
    return (
        <div className='LoginForm'>
            <div className='title'>
                <TitleLogin text="redefinir senha" />
                <p>Crie uma nova senha para sua conta.</p>
            </div>
            <div className='space'>
                <InputLogin type="password" placeholder="Nova senha" />
                <InputLogin type="password" placeholder="Confirmação de senha" />
            </div>
            <div className='buttons'>
                <ButtonLogin
                    text="Confirmar"
                    onClick={() => onChangeMode?.('login')}
                />
            </div>
        </div>
    )
}

export default ResetForm  