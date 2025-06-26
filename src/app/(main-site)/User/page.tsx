'use client';

import './user.css';
import React, { useState } from 'react';
import Navbar from '@/components/(wikipedia)/organisms/Navbar';
import { Eye, EyeOff } from 'lucide-react';

function User() {
  const [file, setFile] = useState<File | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) {
      alert('Selecione uma imagem primeiro!');
      return;
    }

    const formData = new FormData();
    formData.append('imagem', file);
  };

  return (
    <main>
      <Navbar />
      <div className="caixa-conteudo">
        <div className="nome-perfil">
          <h1>Página de Perfil</h1>
        </div>

        <div className="conteudo">
          <div className="avatar-sair">
            <div className="avatar">
              <img src="/path/to/default-avatar.jpg" alt="Avatar do Usuário" />
              {/* Upload da foto */}
              <form onSubmit={handleUpload}>
                <input
                  type="file"
                  name="imagem"
                  id="fileInput"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />

                <label htmlFor="fileInput" className="escolher-imagem">
                  Escolher imagem
                </label>

                {/* <input type="submit" value="Enviar" className="escolher imagem" /> */}
              </form>
            </div>
          </div>

          <div className="perfil-sair">
            <div className="perfil-form">

              {/* Formulário de dados */}
              <form method="post" className="form-perfil">
                <label htmlFor="user">NOME DE USUÁRIO</label>
                <input type="text" name="user" id="user" />

                <label htmlFor="email">EMAIL</label>
                <input type="email" name="email" id="email" />

                <label htmlFor="password">SENHA</label>
                <div className="input-password-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                    onClick={() => setShowPassword((v) => !v)}
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                  </button>
                </div>

                <div className="atualizar-dados">
                  <input type="submit" name="UPDATE" value="ATUALIZAR DADOS" />
                </div>
              </form>



            </div>
          </div>

          {/* Botão de deletar conta */}
          <div>
            <form onSubmit={(e) => {
              e.preventDefault();
              const confirma = window.confirm('Tem certeza que deseja deletar sua conta?');
              if (confirma) {
                // Lógica de exclusão da conta
                console.log('Conta deletada');
              }
            }}>
              <input type="submit" name="delete" value="DELETAR CONTA" className="deletar-conta" />
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default User;
