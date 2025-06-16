import { FC, useState } from 'react'
import '../LoginForm.css'

import TitleLogin from '@/components/(main-site)/atoms/TitleLogin'
import InputLogin from '@/components/(main-site)/atoms/InputLogin'
import AceitarTermos from '@/components/(main-site)/atoms/AceitarTermos';
import LinkLogin from '@/components/(main-site)/atoms/LinkLogin';
import ButtonLogin from '@/components/(main-site)/atoms/ButtonLogin'

interface RegisterFormProps {
    onChangeMode?: (mode: 'login' | 'register' | 'forgot' | 'emailSent' | 'reset') => void;
}

const RegisterForm: FC<RegisterFormProps> = ({ onChangeMode }) => {
    return (
        <div className='LoginForm'>
            <TitleLogin text="Criar Conta" />
            <div>
                <InputLogin type="text" placeholder="E-mail" />
                <InputLogin type="text" placeholder="Nome de usuário" />
                <InputLogin type="password" placeholder="Senha" />
                <InputLogin type="password" placeholder="Confirmar senha" />
            </div>
            <AceitarTermos />
            <div className='buttons'>
                <ButtonLogin
                    text="Criar Conta"
                    onClick={() => onChangeMode?.('login')}
                />
                <hr />
                <LinkLogin
                    text="Já tem uma conta? "
                    txtLink='Entre aqui'
                    onClick={() => onChangeMode?.('login')}
                />
            </div>
        </div>
    )
}

export default RegisterForm 