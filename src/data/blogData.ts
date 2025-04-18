// src/data/blogData.ts
import { Post, Category } from '@/types/blog';

export const categories: Category[] = [
  { id: 'todos', name: 'Todos', slug: 'todos' },
  { id: 'automacao', name: 'Automação', slug: 'automacao' },
  { id: 'bem-estar', name: 'Bem-Estar e Saúde Mental', slug: 'bem-estar-e-saude-mental' },
  { id: 'curiosidades', name: 'Curiosidades e Tendências', slug: 'curiosidades-e-tendencias' },
  { id: 'desenvolvimento', name: 'Desenvolvimento Pessoal', slug: 'desenvolvimento-pessoal' },
  { id: 'empreendedorismo', name: 'Empreendedorismo e Renda Online', slug: 'empreendedorismo-e-renda-online' },
  { id: 'google-ads', name: 'Google e Meta ADS', slug: 'google-e-meta-ads' },
  { id: 'idiomas', name: 'Idiomas e Comunicação', slug: 'idiomas-e-comunicacao' },
  { id: 'ia', name: 'Inteligência Artificial', slug: 'inteligencia-artificial' },
  { id: 'marketing', name: 'Marketing Digital', slug: 'marketing-digital' },
  { id: 'mundo-digital', name: 'Mundo Digital 50+', slug: 'mundo-digital-50-mais' },
  { id: 'conteudo', name: 'Produção de Conteúdo', slug: 'producao-de-conteudo' },
  { id: 'produtos-digitais', name: 'Produtos Digitais', slug: 'produtos-digitais' },
  { id: 'redes-sociais', name: 'Redes Sociais', slug: 'redes-sociais' },
  { id: 'seo', name: 'SEO e Tráfego Orgânico', slug: 'seo-e-trafego-organico' },
  { id: 'tecnologia', name: 'Tecnologia', slug: 'tecnologia' },
  { id: 'acessibilidade', name: 'Tecnologia Assistiva e Acessibilidade', slug: 'tecnologia-assistiva-e-acessibilidade' },
  { id: 'terapias', name: 'Terapias Holísticas', slug: 'terapias-holisticas' }
];

export const posts: Post[] = [
  {
    id: '1',
    title: 'O que são Produtos Digitais? Quais suas vantagens e desvantagens?',
    excerpt: 'Conheça os produtos digitais, suas principais características e como eles podem transformar seu negócio.',
    content: 'Conteúdo completo do artigo sobre produtos digitais...',
    category: 'Produtos Digitais',
    imageUrl: '/images/blog/produtos-digitais.jpg',
    date: '2023-10-15',
    author: 'Maria Silva',
    readTime: 8,
    tags: ['produtos digitais', 'negócios', 'transformação digital'],
    views: 1250
  },
  {
    id: '2',
    title: 'Tecnologia 5G chega às metrópoles brasileiras, prometendo revolucionar a forma como vivemos e nos comunicamos',
    excerpt: 'Descubra como a tecnologia 5G está transformando o cenário digital brasileiro e seus impactos.',
    content: 'Conteúdo completo do artigo sobre 5G...',
    category: 'Tecnologia',
    imageUrl: '/images/blog/5g-tecnologia.jpg',
    date: '2023-10-10',
    author: 'Carlos Mendes',
    readTime: 6,
    tags: ['5G', 'internet', 'tecnologia', 'comunicação'],
    views: 980
  },
  {
    id: '3',
    title: 'Desenvolvimento Pessoal: O Caminho para uma Versão Melhor de Você!',
    excerpt: 'Aprenda técnicas e estratégias para seu desenvolvimento pessoal e profissional.',
    content: 'Conteúdo completo do artigo sobre desenvolvimento pessoal...',
    category: 'Desenvolvimento Pessoal',
    imageUrl: '/images/blog/desenvolvimento-pessoal.jpg',
    date: '2023-10-08',
    author: 'Ana Costa',
    readTime: 10,
    tags: ['desenvolvimento pessoal', 'carreira', 'autoconhecimento'],
    views: 1550
  },
  {
    id: '4',
    title: 'Priorizando o Bem-Estar: Explorando a Importância da Saúde Mental',
    excerpt: 'Como cuidar da sua saúde mental em tempos de tanta informação e estresse digital.',
    content: 'Conteúdo completo do artigo sobre saúde mental...',
    category: 'Bem-Estar e Saúde Mental',
    imageUrl: '/images/blog/saude-mental.jpg',
    date: '2023-10-05',
    author: 'Paulo Ribeiro',
    readTime: 7,
    tags: ['saúde mental', 'bem-estar', 'equilíbrio', 'mindfulness'],
    views: 2100
  },
  {
    id: '5',
    title: 'Inteligência Artificial na Educação: Transformando o Aprendizado',
    excerpt: 'Como a IA está revolucionando o setor educacional com ferramentas personalizadas.',
    content: 'Conteúdo completo do artigo sobre IA na educação...',
    category: 'Inteligência Artificial',
    imageUrl: '/images/blog/ia-educacao.jpg',
    date: '2023-09-30',
    author: 'Mariana Santos',
    readTime: 9,
    tags: ['inteligência artificial', 'educação', 'tecnologia', 'aprendizado'],
    views: 1830
  },
  {
    id: '6',
    title: 'Como Criar uma Estratégia de Marketing Digital Eficiente em 2023',
    excerpt: 'Passo a passo para desenvolver uma estratégia de marketing digital que realmente converte.',
    content: 'Conteúdo completo do artigo sobre marketing digital...',
    category: 'Marketing Digital',
    imageUrl: '/images/blog/marketing-digital.jpg',
    date: '2023-09-25',
    author: 'Roberto Almeida',
    readTime: 12,
    tags: ['marketing digital', 'estratégia', 'conversão', 'vendas'],
    views: 2450
  },
  {
    id: '7',
    title: 'SEO para Iniciantes: Como Aparecer no Topo das Buscas',
    excerpt: 'Guia completo para otimizar seu site e conquistar as primeiras posições no Google.',
    content: 'Conteúdo completo do artigo sobre SEO...',
    category: 'SEO e Tráfego Orgânico',
    imageUrl: '/images/blog/seo-iniciantes.jpg',
    date: '2023-09-20',
    author: 'Juliana Pereira',
    readTime: 8,
    tags: ['SEO', 'tráfego orgânico', 'Google', 'otimização'],
    views: 1900
  },
  {
    id: '8',
    title: 'Automação de Marketing: Como Ganhar Tempo e Aumentar Resultados',
    excerpt: 'Ferramentas e técnicas para automatizar seus processos de marketing.',
    content: 'Conteúdo completo do artigo sobre automação de marketing...',
    category: 'Automação',
    imageUrl: '/images/blog/automacao-marketing.jpg',
    date: '2023-09-15',
    author: 'Fernando Oliveira',
    readTime: 6,
    tags: ['automação', 'marketing', 'produtividade', 'ferramentas'],
    views: 1100
  },
  {
    id: '9',
    title: 'O Futuro do Trabalho: Tendências e Habilidades para 2024',
    excerpt: 'Quais habilidades serão mais valorizadas e como se preparar para o mercado futuro.',
    content: 'Conteúdo completo do artigo sobre o futuro do trabalho...',
    category: 'Curiosidades e Tendências',
    imageUrl: '/images/blog/futuro-trabalho.jpg',
    date: '2023-09-10',
    author: 'Camila Rodrigues',
    readTime: 11,
    tags: ['carreira', 'futuro', 'trabalho', 'habilidades'],
    views: 2800
  },
  {
    id: '10',
    title: 'Como Monetizar seu Perfil nas Redes Sociais',
    excerpt: 'Estratégias e dicas para transformar seus perfis sociais em fontes de renda.',
    content: 'Conteúdo completo do artigo sobre monetização nas redes sociais...',
    category: 'Redes Sociais',
    imageUrl: '/images/blog/monetizacao-redes.jpg',
    date: '2023-09-05',
    author: 'Thiago Moreira',
    readTime: 9,
    tags: ['redes sociais', 'monetização', 'Instagram', 'influenciadores'],
    views: 3200
  },
  {
    id: '11',
    title: 'Tecnologias Assistivas que Estão Transformando Vidas',
    excerpt: 'Como a tecnologia está promovendo maior inclusão e qualidade de vida para pessoas com deficiência.',
    content: 'Conteúdo completo do artigo sobre tecnologias assistivas...',
    category: 'Tecnologia Assistiva e Acessibilidade',
    imageUrl: '/images/blog/tecnologia-assistiva.jpg',
    date: '2023-09-01',
    author: 'Lúcia Ferreira',
    readTime: 7,
    tags: ['acessibilidade', 'tecnologia assistiva', 'inclusão'],
    views: 1750
  },
  {
    id: '12',
    title: 'Guia Completo sobre Google Ads para Pequenos Negócios',
    excerpt: 'Como utilizar o Google Ads de forma eficiente mesmo com orçamento limitado.',
    content: 'Conteúdo completo do artigo sobre Google Ads...',
    category: 'Google e Meta ADS',
    imageUrl: '/images/blog/google-ads.jpg',
    date: '2023-08-28',
    author: 'Marcos Silva',
    readTime: 10,
    tags: ['Google Ads', 'publicidade', 'marketing digital', 'PPC'],
    views: 2300
  },
  {
    id: '13',
    title: 'Podcast: O Formato de Conteúdo que Continua em Crescimento',
    excerpt: 'Por que investir em podcasts e como criar um do zero.',
    content: 'Conteúdo completo do artigo sobre podcasts...',
    category: 'Produção de Conteúdo',
    imageUrl: '/images/blog/podcasts.jpg',
    date: '2023-08-25',
    author: 'Renata Lima',
    readTime: 8,
    tags: ['podcast', 'conteúdo', 'áudio', 'streaming'],
    views: 1600
  },
  {
    id: '14',
    title: 'Meditação e Produtividade: A Combinação Perfeita para Profissionais',
    excerpt: 'Como a prática de meditação pode melhorar seu desempenho profissional.',
    content: 'Conteúdo completo do artigo sobre meditação e produtividade...',
    category: 'Bem-Estar e Saúde Mental',
    imageUrl: '/images/blog/meditacao.jpg',
    date: '2023-08-20',
    author: 'Gustavo Mendes',
    readTime: 6,
    tags: ['meditação', 'produtividade', 'bem-estar', 'mindfulness'],
    views: 1900
  }
];