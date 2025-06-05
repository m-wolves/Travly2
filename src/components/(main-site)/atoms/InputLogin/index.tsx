import './InputLogin.css'
import { InputLoginProps } from './types'

import { FC, useState } from 'react'
import { Eye, EyeClosed } from 'lucide-react'

const InputLogin:FC <InputLoginProps> = ({ placeholder, type }) => {
    const [show, setShow] = useState(false);
    const isPassword = type === 'password';
    const inputType = isPassword && show ? 'text' : type;

    return (
        <div className="InputLoginWrapper">
            <input
                className='InputLogin'
                type={inputType}
                placeholder={placeholder}
                required
                style={isPassword ? { paddingRight: '40px' } : {}}
            />
            {isPassword && (
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
        </div>
    )
}

export default InputLogin