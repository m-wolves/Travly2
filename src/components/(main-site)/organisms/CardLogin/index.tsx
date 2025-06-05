import './CardLogin.css'
import { CardLoginProps } from './types'
import { FC } from 'react'

// Variações do Form
import LoginForm from '@/components/(main-site)/molecules/LoginForm';
import RegisterForm from '@/components/(main-site)/molecules/RegisterForm';
import ForgotForm from '@/components/(main-site)/molecules/ForgotForm';
import EmailSent from '@/components/(main-site)/molecules/EmailSent';
import ResetForm from '@/components/(main-site)/molecules/ResetForm';

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
            {/* {mode === 'register' && <RegisterForm onChangeMode={onChangeMode} />}
            {mode === 'forgot' && <ForgotForm onChangeMode={onChangeMode} />}
            {mode === 'emailSent' && <EmailSent onChangeMode={onChangeMode} />}
            {mode === 'reset' && <ResetForm onChangeMode={onChangeMode} />} */}

            {/* {mode === 'login' && (
                <>
                <TitleLogin text="Entrar" />
                <InputLogin type="text" placeholder="E-mail" />
                <InputLogin type="password" placeholder="Senha" />
                <LinkLogin txtLink="Esqueci minha senha" link="#" onClick={() => onChangeMode?.('forgot')} />
                <ButtonLogin text="Entrar" />
                <ButtonLogin text="Criar conta" onClick={() => onChangeMode?.('register')} />
                </>
            )}

            {mode === 'register' && (
                <>
                <TitleLogin text="Criar Conta" />
                <InputLogin type="text" placeholder="E-mail" />
                <InputLogin type="text" placeholder="Nome de usuário" />
                <InputLogin type="password" placeholder="Senha" />
                <InputLogin type="password" placeholder="Confirmar senha" />
                <AceitarTermos />
                <ButtonLogin text="Criar conta" />
                <LinkLogin txtLink="Já tem uma conta?" link="#" onClick={() => onChangeMode?.('login')} />
                </>
            )}

            {mode === 'forgot' && (
                <>
                <TitleLogin text="Redefina sua senha" />
                <InputLogin type="text" placeholder="E-mail" />
                <ButtonLogin text="Enviar código" />
                <ButtonLogin text="Fazer login" onClick={() => onChangeMode?.('login')} />
                </>
            )}

            {mode === 'emailSent' && (
                <>
                <TitleLogin text="E-mail enviado!" />
                <ButtonLogin text="Voltar para login" onClick={() => onChangeMode?.('login')} />
                </>
            )}

            {mode === 'reset' && (
                <>
                <TitleLogin text="Redefina sua senha" />
                <InputLogin type="password" placeholder="Nova senha" />
                <InputLogin type="password" placeholder="Confirmar senha" />
                <ButtonLogin text="Confirmar" />
                </>
            )} */}
        </div>
    )
}

export default CardLogin