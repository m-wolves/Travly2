// Retorna erro descritivo se a senha for fraca, ou null se for válida
export const validatePasswordWithMessage = (
    password: string
): string | null => {
    if (password.length < 8) {
        return 'A senha deve ter pelo menos 8 caracteres.';
    }

    if (!/[A-Z]/.test(password)) {
        return 'A senha deve conter pelo menos uma letra maiúscula.';
    }

    if (!/[a-z]/.test(password)) {
        return 'A senha deve conter pelo menos uma letra minúscula.';
    }

    if (!/\d/.test(password)) {
        return 'A senha deve conter pelo menos um número.';
    }

    if (!/[\W_]/.test(password)) {
        return 'A senha deve conter pelo menos um caractere especial (ex: !, @, #, $, %, etc).';
    }

    return null; // Está tudo certo!
};