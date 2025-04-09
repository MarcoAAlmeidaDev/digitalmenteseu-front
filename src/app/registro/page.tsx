'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FiUser, FiMail, FiPhone, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

export default function Registro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [showSenha, setShowSenha] = useState(false);
  const [showConfirmarSenha, setShowConfirmarSenha] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validações básicas
    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem');
      return;
    }
    // Aqui você implementaria a lógica de registro
    console.log('Registro attempt:', { nome, email, telefone, senha });
  };

  const handleLogin = () => {
    router.push('/login');
  };

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-grow">
        {/* Coluna da esquerda com fundo azul e texto */}
        <div className="hidden md:flex md:w-1/2 bg-blue-600 flex-col items-start justify-center p-12 relative overflow-hidden">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 z-10">Já tem cadastro?</h1>
          <p className="text-white text-lg md:text-xl mb-8 z-10">Clique no botão abaixo para se logar</p>
          
          <button 
            onClick={handleLogin}
            className="bg-white text-blue-600 font-medium py-2 px-6 rounded-full hover:bg-blue-50 transition duration-300 z-10 cursor-pointer"
          >
            Faça Login
          </button>
          
          {/* Elementos decorativos curvos */}
          <div className="absolute bottom-0 left-0 w-full h-48">
            <svg 
              viewBox="0 0 500 150" 
              preserveAspectRatio="none" 
              className="w-full h-full text-blue-700 opacity-30"
            >
              <path 
                d="M-8.17,75.50 C149.99,150.00 349.20,-49.98 506.17,75.50 L500.00,150.00 L0.00,150.00 Z" 
                style={{ stroke: 'none', fill: 'currentColor' }}
              ></path>
            </svg>
          </div>
        </div>

        {/* Coluna da direita com o formulário */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Criar Conta</h2>
              <p className="text-gray-600">Preencha os dados para se registrar</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nome */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiUser className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Nome completo"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
              </div>

              {/* Email */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Telefone */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiPhone className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  placeholder="Telefone"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  required
                />
              </div>

              {/* Senha */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showSenha ? "text" : "password"}
                  placeholder="Senha"
                  className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                  onClick={() => setShowSenha(!showSenha)}
                >
                  {showSenha ? <FiEyeOff className="h-5 w-5" /> : <FiEye className="h-5 w-5" />}
                </button>
              </div>

              {/* Confirmar Senha */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showConfirmarSenha ? "text" : "password"}
                  placeholder="Confirmar senha"
                  className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={confirmarSenha}
                  onChange={(e) => setConfirmarSenha(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                  onClick={() => setShowConfirmarSenha(!showConfirmarSenha)}
                >
                  {showConfirmarSenha ? <FiEyeOff className="h-5 w-5" /> : <FiEye className="h-5 w-5" />}
                </button>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md transition duration-200 mt-6"
              >
                Cadastrar
              </button>

              <div className="text-center pt-4">
                <p className="text-sm text-gray-600">
                  Já possui uma conta?{' '}
                  <Link href="/login" className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer">
                    Faça login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Separador estiloso */}
      <div className="relative h-16 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700">
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="w-full h-10 text-white"
          >
            <path 
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
              style={{ fill: 'currentColor', opacity: 0.25 }}
            ></path>
            <path 
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
              style={{ fill: 'currentColor', opacity: 0.5 }}
            ></path>
            <path 
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
              style={{ fill: 'currentColor' }}
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}