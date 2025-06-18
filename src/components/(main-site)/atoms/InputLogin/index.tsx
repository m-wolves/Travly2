import './InputLogin.css'
import { InputLoginProps } from './types'

import { FC, useState } from 'react'
import { Eye, EyeClosed } from 'lucide-react'

const InputLogin:FC <InputLoginProps> = ({ placeholder, type, error, errorMessage }) => {
    const [show, setShow] = useState(false);
    const isPassword = type === 'password';
    const inputType = isPassword && show ? 'text' : type;

    return (
        <div className={`InputLoginWrapper${error ? ' has-error' : ''}`}>
            <input
                className={`InputLogin${error ? ' input-error' : ''}`}
                type={inputType}
                placeholder={placeholder}
                required
                style={isPassword ? { paddingRight: '40px' } : {}}
            />
            {isPassword && !error && (
                <button
                    type="button"
                    className="EyeButton"
                    onClick={() => setShow((v) => !v)}
                    tabIndex={-1}
                    aria-label={show ? "Ocultar senha" : "Mostrar senha"}
                >
                    {show ? <EyeClosed /> : <Eye />}
                </button>
            )}
            {error && errorMessage && (
                <span className="InputErrorBalloon">{errorMessage}</span>
            )}
        </div> 
    )
}

export default InputLogin 