'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FiSend, FiCopy, FiChevronRight, FiHome } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

// Tipos para as mensagens do chat
type MessageType = 'user' | 'bot';

interface Message {
  id: string;
  text: string;
  type: MessageType;
  timestamp: Date;
}

// Lista de temas disponíveis
const availableTopics = [
  { id: 'technology', label: 'Tecnologia' },
  { id: 'education', label: 'Educação' },
  { id: 'personalDev', label: 'Desenvolvimento Pessoal' },
  { id: 'business', label: 'Empreendedorismo' },
  { id: 'fashion', label: 'Moda' },
  { id: 'health', label: 'Saúde e Bem-estar' },
  { id: 'finance', label: 'Finanças' },
  { id: 'marketing', label: 'Marketing Digital' },
  { id: 'sustainability', label: 'Sustentabilidade' },
  { id: 'creativity', label: 'Criatividade' },
];

export default function TextGeneratorContent() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '0',
      text: 'Olá! Sou o assistente IA do DigitalmenteSEU. Como posso ajudar você hoje?',
      type: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Função para rolar automaticamente para a última mensagem
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Gerar uma resposta simulada da API de IA (em um projeto real, isso seria uma chamada de API)
  const generateAIResponse = async (prompt: string, topic: string): Promise<string> => {
    // Simulação de uma chamada de API com um tempo de resposta
    return new Promise((resolve) => {
      setTimeout(() => {
        // Respostas simuladas baseadas no tópico selecionado
        const responses: { [key: string]: string[] } = {
          technology: [
            'A tecnologia está evoluindo rapidamente, com avanços significativos em IA, blockchain e computação quântica.',
            'Atualmente, estamos vendo uma convergência entre diferentes tecnologias como IA, IoT e 5G.',
            'O desenvolvimento de software moderno está cada vez mais focado em automação, DevOps e arquiteturas em nuvem.',
          ],
          education: [
            'A educação está passando por uma transformação digital, com modelos híbridos de aprendizagem se tornando mais comuns.',
            'Métodos educacionais baseados em projetos e aprendizagem ativa têm mostrado resultados promissores.',
            'A personalização do ensino através de tecnologias educacionais está revolucionando a forma como aprendemos.',
          ],
          personalDev: [
            'O desenvolvimento pessoal envolve autoconhecimento, definição de metas claras e criação de hábitos positivos.',
            'Estudos mostram que a prática de mindfulness pode melhorar significativamente a produtividade e bem-estar.',
            'A neuroplasticidade nos ensina que podemos desenvolver novas habilidades em qualquer idade com prática constante.',
          ],
          business: [
            'O empreendedorismo moderno está focado em modelos de negócios escaláveis e sustentáveis.',
            'Startups lean utilizam metodologias ágeis para validar ideias rapidamente antes de investir grandes recursos.',
            'O networking estratégico continua sendo um dos principais pilares para o sucesso nos negócios.',
          ],
          fashion: [
            'A moda sustentável está redefinindo a indústria, com mais consumidores buscando marcas éticas e ecológicas.',
            'O conceito de "slow fashion" está ganhando força como contraponto ao consumo rápido e descartável.',
            'Tecnologias como realidade aumentada estão transformando a experiência de compra no setor de moda.',
          ],
          health: [
            'A abordagem holística da saúde, integrando bem-estar físico e mental, está se tornando o novo padrão.',
            'A telemedicina e os wearables estão democratizando o acesso a cuidados de saúde preventiva.',
            'Pesquisas recentes destacam a importância do microbioma intestinal para a saúde geral do corpo.',
          ],
          finance: [
            'O planejamento financeiro pessoal começa com orçamento claro, fundo de emergência e metas bem definidas.',
            'Investimentos diversificados e de longo prazo tendem a superar estratégias de curto prazo.',
            'A educação financeira desde cedo é fundamental para desenvolver uma relação saudável com o dinheiro.',
          ],
          marketing: [
            'O marketing de conteúdo continua sendo uma das estratégias mais eficazes para construir relacionamentos de longo prazo com clientes.',
            'Dados e analytics estão no centro do marketing digital moderno, permitindo campanhas altamente personalizadas.',
            'As plataformas sociais estão constantemente evoluindo, exigindo que profissionais se adaptem às novas tendências.',
          ],
          sustainability: [
            'A economia circular está transformando negócios tradicionais em modelos mais sustentáveis e eficientes.',
            'Pequenas mudanças em hábitos diários, quando adotadas em massa, podem ter impacto ambiental significativo.',
            'Empresas com compromissos ESG genuínos estão vendo benefícios tanto em reputação quanto em performance financeira.',
          ],
          creativity: [
            'A criatividade pode ser cultivada através de práticas diárias e exposição a diferentes perspectivas e experiências.',
            'A inovação frequentemente vem da combinação de ideias já existentes de maneiras novas e inesperadas.',
            'O estado de "flow" - imersão completa em uma atividade criativa - é atingido quando há equilíbrio entre desafio e habilidade.',
          ],
        };

        // Se não houver um tópico selecionado ou o tópico não estiver na lista
        if (!topic || !responses[topic]) {
          resolve('Posso ajudar a responder sua pergunta, mas seria mais preciso se você selecionasse um tema específico. Isso me ajudaria a fornecer informações mais relevantes para você.');
          return;
        }

        // Seleciona uma resposta aleatória do tópico escolhido
        const topicResponses = responses[topic];
        const randomResponse = topicResponses[Math.floor(Math.random() * topicResponses.length)];
        
        // Cria uma resposta contextualizada com base na pergunta do usuário
        let finalResponse = `Sobre ${prompt}, ${randomResponse.toLowerCase()} `;
        
        // Adiciona mais conteúdo para parecer mais natural
        finalResponse += 'Além disso, é importante considerar que cada situação é única e pode requerer adaptações específicas. ';
        finalResponse += 'Espero que esta informação seja útil! Você gostaria de saber mais alguma coisa específica sobre este tema?';
        
        resolve(finalResponse);
      }, 1500); // Simula um delay de 1.5 segundos
    });
  };

  // Função para enviar uma mensagem
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (inputText.trim() === '') return;
    
    // Adiciona a mensagem do usuário
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      type: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);
    
    try {
      // Gera resposta da IA
      const response = await generateAIResponse(inputText, selectedTopic);
      
      // Adiciona a resposta do bot
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        type: 'bot',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Erro ao gerar resposta:', error);
      
      // Mensagem de erro
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Desculpe, ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde.',
        type: 'bot',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Função para copiar o texto para a área de transferência
  const handleCopyText = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert('Texto copiado para a área de transferência!');
      })
      .catch((err) => {
        console.error('Erro ao copiar texto:', err);
        alert('Não foi possível copiar o texto. Por favor, tente novamente.');
      });
  };

  // Formatar hora da mensagem
  const formatMessageTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Trilha de navegação (Breadcrumb) */}
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <Link href="/" className="flex items-center hover:text-purple-600">
          <FiHome className="mr-1" size={14} />
          <span>Início</span>
        </Link>
        <FiChevronRight className="mx-2" size={14} />
        <Link href="/digiai" className="hover:text-purple-600">
          DigiAI
        </Link>
        <FiChevronRight className="mx-2" size={14} />
        <span className="text-purple-600 font-medium">Gerador de Texto com IA</span>
      </div>

      {/* Cabeçalho da página */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Gerador de Texto com Inteligência Artificial
        </h1>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          Use nossa IA para criar conteúdo personalizado sobre diversos temas. Basta selecionar um assunto, 
          fazer sua pergunta e receber respostas inteligentes instantaneamente.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Painel lateral com seleção de temas */}
        <div className="lg:col-span-1 bg-white rounded-xl shadow-lg p-5 border border-gray-100">
          <h2 className="font-semibold text-gray-800 mb-3 text-lg">Temas Disponíveis</h2>
          <p className="text-gray-600 text-sm mb-4">
            Selecione um tema para obter respostas mais precisas e relevantes.
          </p>
          <div className="space-y-2.5">
            {availableTopics.map((topic) => (
              <div key={topic.id} className="flex items-center">
                <input
                  type="radio"
                  id={topic.id}
                  name="topic"
                  value={topic.id}
                  checked={selectedTopic === topic.id}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className="mr-2 accent-purple-600"
                />
                <label htmlFor={topic.id} className="text-gray-700 cursor-pointer hover:text-purple-600 transition-colors">
                  {topic.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Interface de chat */}
        <div className="lg:col-span-4 bg-gradient-to-br from-slate-50 to-gray-100 rounded-xl shadow-lg flex flex-col h-[650px] border border-gray-100">
          {/* Área de mensagens */}
          <div className="flex-grow p-5 overflow-y-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-4 shadow-sm ${
                    message.type === 'user'
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-tr-none'
                      : 'bg-white border border-gray-100 text-gray-800 rounded-tl-none'
                  }`}
                >
                  <div className="flex justify-between items-start mb-1.5">
                    <span className="font-medium text-sm">
                      {message.type === 'user' ? 'Você' : 'DigitalmenteAI'}
                    </span>
                    <span className="text-xs opacity-70 ml-2">
                      {formatMessageTime(message.timestamp)}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  
                  {/* Botão de copiar apenas para mensagens do bot */}
                  {message.type === 'bot' && (
                    <button
                      onClick={() => handleCopyText(message.text)}
                      className="mt-2 text-xs text-gray-500 hover:text-purple-600 flex items-center transition-colors"
                      aria-label="Copiar texto"
                    >
                      <FiCopy size={12} className="mr-1" />
                      Copiar
                    </button>
                  )}
                </div>
              </div>
            ))}
            
            {/* Indicador de digitação quando estiver carregando */}
            {isLoading && (
              <div className="flex items-center text-gray-500 text-sm ml-2 mb-4">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-1 animate-bounce delay-0"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-1 animate-bounce delay-150"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-300"></div>
              </div>
            )}
            
            {/* Elemento invisível para rolar para o final */}
            <div ref={chatEndRef} />
          </div>
          
          {/* Área de input */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 bg-white rounded-b-xl">
            <div className="flex">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Digite sua pergunta aqui..."
                className="flex-grow px-4 py-3 rounded-l-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                disabled={isLoading}
              />
              <button
                type="submit"
                className={`px-5 py-3 rounded-r-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white transition-all ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-md hover:from-purple-700 hover:to-indigo-700'
                }`}
                disabled={isLoading}
              >
                <FiSend />
              </button>
            </div>
            
            {!selectedTopic && (
              <p className="mt-2 text-xs text-amber-600">
                Dica: Selecione um tema para obter respostas mais relevantes.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}