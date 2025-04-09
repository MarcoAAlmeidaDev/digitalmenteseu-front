// src/data/productsData.ts
import { Product, Category } from '@/types/product';

export const categories: Category[] = [
  { id: 'tech', name: 'Tecnologia', slug: 'tecnologia' },
  { id: 'courses', name: 'Cursos', slug: 'cursos' },
  { id: 'software', name: 'Software', slug: 'software' },
  { id: 'office', name: 'Escritório', slug: 'escritorio' },
  { id: 'home', name: 'Casa', slug: 'casa' },
  { id: 'games', name: 'Jogos', slug: 'jogos' },
  { id: 'electronics', name: 'Eletrônicos', slug: 'eletronicos' }
];

export const products: Product[] = [
  {
    id: '2234569',
    name: 'Pacote Office',
    description: 'Pacote completo da Microsoft Office com Word, Excel, PowerPoint, Outlook e mais. Licença para uso em 1 PC, com atualizações gratuitas.',
    price: 899.00,
    originalPrice: 999.00,
    discount: 10,
    rating: 5,
    reviewCount: 97,
    image: '/images/produtos/office.jpg',
    category: 'software',
    featured: true
  },
  {
    id: '7890122',
    name: 'Formação em Baralho Cigano - Tradicional e Terapêutico',
    description: 'Curso completo de baralho cigano tradicional e terapêutico com o Prof. Rogério Temporim. Aprenda a interpretar as cartas e realizar consultas.',
    price: 27.90,
    rating: 4.9,
    reviewCount: 410,
    image: '/images/produtos/baralho-cigano.jpg',
    category: 'courses'
  },
  {
    id: '3456788',
    name: 'Academia Farley Santiago - Curso de Barbeiro',
    description: 'Curso completo para se tornar um barbeiro profissional. Aprenda técnicas de corte, barba, desenhos e muito mais.',
    price: 497.00,
    rating: 4.9,
    reviewCount: 322,
    image: '/images/produtos/barbeiro.jpg',
    category: 'courses'
  },
  {
    id: '9876544',
    name: 'Curso Plástica dos Pés Avançado',
    description: 'Curso avançado de tratamento estético para os pés. Aprenda técnicas profissionais para podologia e estética.',
    price: 97.00,
    rating: 4.8,
    reviewCount: 495,
    image: '/images/produtos/plastica-pes.jpg',
    category: 'courses'
  },
  {
    id: '5432199',
    name: 'Curso Loucos por Drywall On Line',
    description: 'Aprenda a trabalhar com drywall e forros de gesso. Curso completo desde o básico até técnicas avançadas.',
    price: 199.00,
    rating: 4.9,
    reviewCount: 395,
    image: '/images/produtos/drywall.jpg',
    category: 'courses'
  },
  {
    id: '1122334',
    name: 'Mouse Gamer RGB 16000 DPI',
    description: 'Mouse gamer com sensor de alta precisão, 16000 DPI ajustáveis, iluminação RGB personalizável e 8 botões programáveis.',
    price: 149.90,
    originalPrice: 199.90,
    discount: 25,
    rating: 4.7,
    reviewCount: 328,
    image: '/images/produtos/mouse.jpg',
    category: 'tech',
    featured: true
  },
  {
    id: '2244668',
    name: 'Notebook Ultra Pro',
    description: 'Notebook com processador Intel Core i7, 16GB RAM, SSD 512GB, tela 15.6" Full HD, placa de vídeo dedicada.',
    price: 4599.00,
    originalPrice: 5299.00,
    discount: 13,
    rating: 4.8,
    reviewCount: 243,
    image: '/images/produtos/notebook.jpg',
    category: 'tech',
    featured: true
  },
  {
    id: '3366998',
    name: 'Cadeira Gamer Ergonômica',
    description: 'Cadeira gamer com apoio lombar, apoio de braço ajustável, reclinável até 180°, suporta até 150kg.',
    price: 899.90,
    originalPrice: 1199.90,
    discount: 25,
    rating: 4.6,
    reviewCount: 178,
    image: '/images/produtos/cadeira.jpg',
    category: 'office'
  },
  {
    id: '4488776',
    name: 'Smartphone UltraMax 128GB',
    description: 'Smartphone com 128GB de armazenamento, 8GB RAM, tela AMOLED 6.5", câmera quádrupla 64MP, bateria 5000mAh.',
    price: 2499.00,
    originalPrice: 2999.00,
    discount: 17,
    rating: 4.9,
    reviewCount: 512,
    image: '/images/produtos/smartphone.jpg',
    category: 'electronics',
    featured: true
  },
  {
    id: '5500221',
    name: 'Adobe Photoshop - Licença Anual',
    description: 'Licença anual do Adobe Photoshop, o software líder mundial em edição de imagens e designs gráficos.',
    price: 499.00,
    originalPrice: 599.00,
    discount: 17,
    rating: 4.7,
    reviewCount: 387,
    image: '/images/produtos/photoshop.jpg',
    category: 'software'
  },
  {
    id: '6677889',
    name: 'Teclado Mecânico RGB',
    description: 'Teclado mecânico com switches blue, iluminação RGB por tecla, anti-ghosting, corpo em alumínio.',
    price: 289.90,
    originalPrice: 349.90,
    discount: 17,
    rating: 4.8,
    reviewCount: 265,
    image: '/images/produtos/teclado.jpg',
    category: 'tech'
  },
  {
    id: '7788990',
    name: 'Curso de Marketing Digital Completo',
    description: 'Aprenda marketing digital do zero ao avançado. Inclui SEO, tráfego pago, redes sociais, e-mail marketing e mais.',
    price: 397.00,
    originalPrice: 597.00,
    discount: 33,
    rating: 4.9,
    reviewCount: 476,
    image: '/images/produtos/marketing.jpg',
    category: 'courses',
    featured: true
  }
];