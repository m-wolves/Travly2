// Gerencia o usuário logado. Guarda quem está logado, e funções para entrar/sair.

'use client';

import { createContext, useContext, useState, ReactNode } from 'react'; //Importa as bibliotecas necessárias do React
    // createContext: cria o contexto
    // useContext: permite acessar o contexto em outros componentes
    // useState: permite criar um estado dentro do componente, que pode ser atualizado
    // ReactNode: tipo que representa qualquer elemento React, como componentes, strings, números, etc.

// Tipo de dado do usuário
type User = {
    name: string;
    email: string;
};

// Tipo de dado que o contexto vai compartilhar com a app
type AuthContextType = {
    user: User | null; // O usuário pode ser nulo se não estiver logado
    login: (user: User) => void; // Função para fazer login, recebe um usuário e salva no estado
    logout: () => void; // Função para fazer logout, limpa o usuário do estado
};

// Criamos o contexto vazio
const AuthContext = createContext <AuthContextType | undefined> (undefined);

// Componente que envolve a aplicação com o contexto
export const AuthProvider = ({ children }: { children: ReactNode }) => { // Componente que fornece o contexto para os filhos
    const [user, setUser] = useState<User | null>(null); // Estado que guarda o usuário logado, começa como nulo

    // Funções para fazer login e logout
    const login = (newUser: User) => setUser(newUser); // Função que recebe um usuário e salva no estado
    const logout = () => setUser(null); // Função que limpa o usuário do estado

    // Entrega os valores do contexto (user, login, logout) para todos os componentes "filhos"
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook pra acessar o contexto facilmente
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used inside AuthProvider');
    return context;
};