import './CardLogin.css'
import { CardLoginProps } from './types'
import { FC } from 'react'

// Variações do Form
import LoginForm from '@/components/(main-site)/molecules/LoginModes/LoginForm';
import RegisterForm from '@/components/(main-site)/molecules/LoginModes/RegisterForm';
import ForgotForm from '@/components/(main-site)/molecules/LoginModes/ForgotForm';
import EmailSent from '@/components/(main-site)/molecules/LoginModes/EmailSent';
import ResetForm from '@/components/(main-site)/molecules/LoginModes/ResetForm';

type Mode =
    | 'login'
    | 'register'
    | 'forgot'
    | 'emailSent'
    | 'reset';

interface Props extends CardLoginProps {
    mode: Mode;
    onChangeMode?: (mode: Mode) => void;
}

const CardLogin:FC <Props> = ({ mode, onChangeMode }) => {
    return (
        <div className='CardLogin'>
            {mode === 'login' && <LoginForm onChangeMode={onChangeMode} />}
            {mode === 'register' && <RegisterForm onChangeMode={onChangeMode} />}
            {mode === 'forgot' && <ForgotForm onChangeMode={onChangeMode} />}
            {mode === 'emailSent' && <EmailSent onChangeMode={onChangeMode} />}
            {mode === 'reset' && <ResetForm onChangeMode={onChangeMode} />}
        </div>
    )
}

export default CardLogin