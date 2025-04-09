import React from 'react';
import LoginForm from '@/components/auth/LoginForm';
import Image from 'next/image';

export const metadata = {
  title: 'Login | DigitalmenteSEU',
  description: 'Faça login para acessar sua conta e recursos exclusivos.',
};

export default function LoginPage() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Formulário de Login */}
            <div className="p-8 md:p-12">
              <h1 className="text-3xl font-bold text-gray-800 mb-6">Bem-vindo de volta!</h1>
              <p className="text-gray-600 mb-8">
                Entre com seus dados de acesso para continuar sua jornada de aprendizado e descobertas digitais.
              </p>
              
              <LoginForm />
            </div>
            
            {/* Imagem ilustrativa */}
            <div className="hidden md:block relative">
              <div className="absolute inset-0 bg-blue-100">
                <Image
                  src="/images/login-illustration.jpg"
                  alt="Login Illustration"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Dica de teste */}
        <div className="mt-8 max-w-5xl mx-auto p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h3 className="font-medium text-yellow-800 mb-2">🔑 Contas para teste:</h3>
          <ul className="space-y-1 text-yellow-700">
            <li><span className="font-medium">Usuário:</span> teste@exemplo.com / <span className="font-medium">Senha:</span> senha123</li>
            <li><span className="font-medium">Admin:</span> admin@exemplo.com / <span className="font-medium">Senha:</span> admin123</li>
          </ul>
        </div>
      </div>
    </div>
  );
}