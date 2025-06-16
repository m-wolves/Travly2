import { FC } from 'react'
import '../LoginForm.css'

import TitleLogin from '@/components/(main-site)/atoms/TitleLogin'
import InputLogin from '@/components/(main-site)/atoms/InputLogin'
import LinkLogin from '@/components/(main-site)/atoms/LinkLogin'
import ButtonLogin from '@/components/(main-site)/atoms/ButtonLogin'

interface EmailSentProps {
    onChangeMode?: (mode: 'login' | 'register' | 'forgot' | 'emailSent' | 'reset') => void;
}

const EmailSent: FC<EmailSentProps> = ({ onChangeMode }) => {
    return (
        <div className='LoginForm'>
            <div className='title'>
                <TitleLogin text="Email enviado" />
            </div>
            <div className='space'>
                <p>Enviamos um email com um link para você poder alterar a sua senha. <br/> Verifique na sua caixa de email ou spam.</p>
            </div>
            <div className='buttons'>
                <ButtonLogin
                    text="VOLTAR PARA LOGIN"
                    onClick={() => onChangeMode?.('login')}
                />
            </div>
        </div>
    )
}

export default EmailSent  