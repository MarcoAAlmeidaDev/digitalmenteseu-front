'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

interface FormValues {
  name: string;
  email: string;
}

const NewsletterSection: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  
  const onSubmit = (data: FormValues) => {
    console.log(data);
    // Aqui você implementaria a lógica para enviar os dados para seu backend
    // Por exemplo: fetch('/api/newsletter', { method: 'POST', body: JSON.stringify(data) })
    
    alert('Inscrição realizada com sucesso!');
  };

  return (
    <section className="py-20 bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: 'url(/images/newsletter-bg.jpg)' }}>
      {/* Overlay escuro para melhorar a legibilidade do texto */}
      <div className="absolute inset-0 bg-navy-900 bg-opacity-80"></div>
      
      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Quer Receber Dicas e Novidades Exclusivas?
          </h2>
          <p className="text-xl text-white/80">
            Inscreva-se em nossa newsletter
          </p>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Preencha seu Nome"
              className={`w-full px-6 py-4 rounded-lg text-gray-900 bg-opacity-90 bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 ${errors.name ? 'border-2 border-red-500' : ''}`}
              {...register('name', { required: 'Nome é obrigatório' })}
            />
            {errors.name && <p className="mt-1 text-red-400 text-sm">{errors.name.message}</p>}
          </div>
          
          <div>
            <input
              type="email"
              placeholder="Preencha seu Email"
              className={`w-full px-6 py-4 rounded-lg text-gray-900 bg-opacity-90 bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 ${errors.email ? 'border-2 border-red-500' : ''}`}
              {...register('email', { 
                required: 'Email é obrigatório',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Endereço de email inválido'
                }
              })}
            />
            {errors.email && <p className="mt-1 text-red-400 text-sm">{errors.email.message}</p>}
          </div>
          
          <div className="text-center pt-4">
            <button
              type="submit"
              className="px-10 py-3 bg-[#fe6905] hover:bg-[#e55a00] text-white font-medium rounded-full text-lg transition-colors shadow-lg"
            >
              Receber Novidades
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;