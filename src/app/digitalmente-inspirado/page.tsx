'use client';

import React, { useState, useEffect } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { ChronicleCard } from '@/components/digitalmente-inspirado/ChronicleCard';
import { chronicles } from '@/data/chroniclesData';
import { Search } from 'lucide-react';

// export const metadata: Metadata = {
//   title: 'Digitalmente Inspirado | DigitalmenteSeu',
//   description: 'Crônicas e inspirações digitais para o mundo contemporâneo.',
// };

export default function DigitalmenteInspiradoPage() {
  // Estados para busca e filtro de categorias
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredChronicles, setFilteredChronicles] = useState(chronicles);
  
  // Estados para o formulário
  const [formData, setFormData] = useState({
    name: '',
    profession: '',
    about: '',
    linkedin: '',
    instagram: '',
    biography: '',
    title: '',
    content: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Extrair todas as categorias únicas das crônicas
  const allCategories = [...new Set(chronicles.flatMap(chronicle => chronicle.categories || []))];

  // Filtrar crônicas baseado na busca e categoria selecionada
  useEffect(() => {
    const results = chronicles.filter(chronicle => {
      const matchesSearch = chronicle.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           chronicle.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = !selectedCategory || 
                             (chronicle.categories && chronicle.categories.includes(selectedCategory));
      
      return matchesSearch && matchesCategory;
    });
    
    setFilteredChronicles(results);
  }, [searchTerm, selectedCategory]);

  // Resetar filtros
  const handleReset = () => {
    setSearchTerm('');
    setSelectedCategory('');
  };
  
  // Manipular mudanças no formulário
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Manipular envio do formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // Em uma aplicação real, aqui você enviaria os dados para seu backend
      // Simulando uma resposta de API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Dados enviados:', formData);
      setSubmitSuccess(true);
      
      // Resetar formulário após sucesso
      setFormData({
        name: '',
        profession: '',
        about: '',
        linkedin: '',
        instagram: '',
        biography: '',
        title: '',
        content: ''
      });
      
      // Esconder mensagem de sucesso após 5 segundos
      setTimeout(() => setSubmitSuccess(false), 5000);
      
    } catch (error) {
      console.error('Erro ao enviar:', error);
      setSubmitError('Ocorreu um erro ao enviar sua crônica. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex flex-col min-h-screen">
      {/* Banner principal */}
      <section className="relative h-80 w-full">
        <div className="absolute inset-0">
          <Image 
            src="/images/dashboard-screen.jpg" 
            alt="Banner Digitalmente Inspirado"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Conteúdo do banner */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Digitalmente Inspirado
          </h1>
          <p className="text-xl md:text-2xl text-center">
            Inspiração Digital Visual
          </p>
        </div>
      </section>
      
      {/* Container principal do conteúdo */}
      <section className="container mx-auto px-4 py-12">
        {/* Área de pesquisa e categorias */}
        <div className="mb-10">
          {/* Barra de pesquisa */}
          <div className="relative mb-8">
            <div className="flex items-center border-2 border-gray-300 rounded-lg overflow-hidden">
              <div className="px-3 py-2 bg-gray-100">
                <Search className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="text"
                placeholder="Buscar crônicas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-grow px-4 py-2 outline-none"
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="px-3 text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
          
          {/* Grid de categorias */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Categorias</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              <button
                onClick={() => setSelectedCategory('')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === '' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                Todas
              </button>
              
              {allCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Barra de resultados */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">
              {filteredChronicles.length} {filteredChronicles.length === 1 ? 'crônica encontrada' : 'crônicas encontradas'}
            </p>
            {(searchTerm || selectedCategory) && (
              <button
                onClick={handleReset}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Limpar filtros
              </button>
            )}
          </div>
        </div>
        
        <h2 className="text-3xl font-bold mb-8">Nossas Crônicas</h2>
        
        {/* Grid de crônicas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredChronicles.length > 0 ? (
            filteredChronicles.map((chronicle) => (
              <ChronicleCard key={chronicle.id} chronicle={chronicle} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="text-xl font-medium text-gray-700 mb-2">Nenhuma crônica encontrada</h3>
              <p className="text-gray-500">Tente ajustar seus filtros de busca.</p>
            </div>
          )}
        </div>
        
        {/* Banner de convite para publicar crônicas */}
        <section className="mt-20 mb-10">
          <div className="relative rounded-xl overflow-hidden">
            {/* Fundo do banner */}
            <div className="bg-gradient-to-r from-blue-600 to-orange-800 h-96 md:h-80">
              <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#pattern)" />
                  <defs>
                    <pattern id="pattern" patternUnits="userSpaceOnUse" width="10" height="10">
                      <circle cx="5" cy="5" r="2" fill="white" />
                    </pattern>
                  </defs>
                </svg>
              </div>
              
              {/* Conteúdo do banner */}
              <div className="relative h-full flex flex-col md:flex-row items-center justify-between px-8 py-12">
                <div className="text-white md:w-2/3 text-center md:text-left mb-8 md:mb-0">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Compartilhe sua visão digital!</h2>
                  <p className="text-lg md:text-xl opacity-90 mb-6">
                    Tem uma história inspiradora, uma reflexão sobre tecnologia ou uma experiência transformadora para compartilhar?
                  </p>
                  <p className="text-lg md:text-xl">
                    Chegou a hora de sua voz ser ouvida e suas ideias brilharem na nossa comunidade digital.
                  </p>
                </div>
                
                <div className="md:w-1/3 flex justify-center">
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-20 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <div className="text-black text-center">
                      <span className="text-5xl font-bold">Seja um</span>
                      <p className="text-2xl mt-2">Autor Convidado</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Formulário de submissão de crônicas */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-20">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Envie sua crônica</h3>
          
          {/* Mensagem de sucesso */}
          {submitSuccess && (
            <div className="mb-6 p-4 bg-green-100 border-l-4 border-green-500 text-green-700 rounded">
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Sua crônica foi enviada com sucesso! Nossa equipe irá revisá-la e entraremos em contato em breve.
              </p>
            </div>
          )}
          
          {/* Mensagem de erro */}
          {submitError && (
            <div className="mb-6 p-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded">
              <p>{submitError}</p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Grid de campos - informações pessoais */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nome e Sobrenome */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Seu nome e sobrenome"
                />
              </div>
              
              {/* Profissão */}
              <div>
                <label htmlFor="profession" className="block text-sm font-medium text-gray-700 mb-1">
                  Profissão *
                </label>
                <input
                  type="text"
                  id="profession"
                  name="profession"
                  value={formData.profession}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Sua profissão atual"
                />
              </div>
            </div>
            
            {/* Redes sociais */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* LinkedIn */}
              <div>
                <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">
                  LinkedIn (opcional)
                </label>
                <input
                  type="url"
                  id="linkedin"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="https://linkedin.com/in/seuperfil"
                />
              </div>
              
              {/* Instagram */}
              <div>
                <label htmlFor="instagram" className="block text-sm font-medium text-gray-700 mb-1">
                  Instagram (opcional)
                </label>
                <input
                  type="text"
                  id="instagram"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="@seuinstagram"
                />
              </div>
            </div>
            
            {/* Sobre você */}
            <div>
              <label htmlFor="about" className="block text-sm font-medium text-gray-700 mb-1">
                Sobre você *
              </label>
              <textarea
                id="about"
                name="about"
                value={formData.about}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Conte um pouco sobre você"
              />
            </div>
            
            {/* Mini biografia */}
            <div>
              <label htmlFor="biography" className="block text-sm font-medium text-gray-700 mb-1">
                Mini biografia profissional *
              </label>
              <textarea
                id="biography"
                name="biography"
                value={formData.biography}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Descreva brevemente sua trajetória profissional"
              />
            </div>
            
            {/* Separador */}
            <div className="border-t border-gray-200 my-8"></div>
            
            {/* Título da crônica */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Título da sua crônica *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Um título cativante para sua crônica"
              />
            </div>
            
            {/* Conteúdo da crônica */}
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                Conteúdo da crônica *
              </label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                required
                rows={10}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Escreva sua crônica aqui. Seja criativo e inspirador!"
              />
            </div>
            
            {/* Botão de envio */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-4 rounded-lg text-white font-medium ${
                  isSubmitting 
                    ? 'bg-blue-400 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700 transform hover:-translate-y-1'
                } transition-all duration-200 flex items-center`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </>
                ) : (
                  'Enviar Crônica'
                )}
              </button>
            </div>
          </form>
        </section>
      </section>
    </main>
  );
}