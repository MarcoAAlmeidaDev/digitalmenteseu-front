// src/data/chroniclesData.ts
import { Chronicle, Author } from '@/types/chronicles';

// Autores
export const authors: Author[] = [
  {
    id: 'jackie-chan',
    name: 'Jackie Chan',
    image: '/images/authors/jackie-chan.jpg',
    role: 'Escritor Digital',
    bio: 'Especialista em marketing digital e tecnologia, Jackie Chan escreve sobre as transformações da era digital e como elas impactam nossa vida cotidiana.',
    social: {
      linkedin: 'https://linkedin.com/in/jackiechan',
      twitter: 'https://twitter.com/jackiechan',
      instagram: 'https://instagram.com/jackiechan',
    }
  },
  {
    id: 'maria-silva',
    name: 'Maria Silva',
    image: '/images/authors/maria-silva.jpg',
    role: 'Consultora de Inovação',
    bio: 'Maria Silva é especialista em inovação e transformação digital. Possui mais de 10 anos de experiência auxiliando empresas em sua jornada de digitalização.',
    social: {
      linkedin: 'https://linkedin.com/in/mariasilva',
      twitter: 'https://twitter.com/mariasilva',
    }
  },
  {
    id: 'carlos-santos',
    name: 'Carlos Santos',
    image: '/images/authors/carlos-santos.jpg',
    role: 'Tecnólogo e Futurista',
    bio: 'Carlos Santos é apaixonado por tecnologias emergentes e seu impacto na sociedade. Escreve sobre IA, blockchain, e como preparar-se para o futuro digital.',
    social: {
      linkedin: 'https://linkedin.com/in/carlossantos',
      instagram: 'https://instagram.com/carlossantos',
    }
  }
];

// Crônicas
export const chronicles: Chronicle[] = [
  {
    id: 'cronica-1',
    title: 'Crônica 1: A Revolução Silenciosa da Inteligência Artificial',
    excerpt: 'Como a inteligência artificial está mudando nosso dia a dia sem que percebamos',
    content: `
      <p>A inteligência artificial já está entre nós, mesmo que não percebamos. Quando abrimos nosso feed de notícias, quando recebemos recomendações de produtos, quando nossa casa inteligente ajusta a temperatura com base em nossos hábitos - estamos interagindo com IA constantemente.</p>
      
      <p>É fascinante pensar como algo que parecia tão distante há poucos anos, limitado aos filmes de ficção científica, agora é parte integrante do nosso cotidiano. A revolução digital acontece silenciosamente, infiltrando-se em cada aspecto de nossas vidas.</p>
      
      <h2>O invisível que transforma</h2>
      
      <p>O mais interessante sobre essa revolução é sua invisibilidade. Diferente das revoluções industriais anteriores, onde máquinas enormes e mudanças físicas evidentes sinalizavam transformação, a revolução da IA acontece em algoritmos, em linhas de código, em decisões automatizadas que mal percebemos.</p>
      
      <p>Essa invisibilidade é, paradoxalmente, o que torna essa revolução tão poderosa. Ela se integra tão naturalmente às nossas vidas que quase não notamos sua presença - até pararmos para analisar o quanto dependemos dela.</p>
      
      <h2>O futuro já presente</h2>
      
      <p>O que nos aguarda nessa jornada é ainda mais fascinante. Assistentes virtuais cada vez mais capazes de entender nuances humanas, sistemas de saúde preventivos que podem antecipar doenças antes mesmo dos primeiros sintomas, cidades inteligentes que se adaptam em tempo real às necessidades de seus habitantes.</p>
      
      <p>Este é apenas o começo. Estamos testemunhando os primeiros passos de uma transformação que redefinirá o que significa ser humano na era digital.</p>
      
      <p>A pergunta que fica é: estamos preparados para navegar conscientemente por esse novo mundo? Ou seguiremos apenas como usuários passivos, deixando que a tecnologia molde nossas vidas sem que questionemos seu papel e direção?</p>
    `,
    coverImage: '/images/digitalmente-inspirado/cronica1.jpg',
    date: '2023-10-15',
    author: authors[0],
    readTime: 5,
    tags: ['inteligência artificial', 'futuro', 'tecnologia', 'transformação digital']
  },
  {
    id: 'cronica-2',
    title: 'Crônica 2: Nostalgia Digital - As Memórias na Era das Nuvens',
    excerpt: 'Uma reflexão sobre como armazenamos nossas memórias na era digital',
    content: `
      <p>Lembro-me de quando guardávamos fotografias em álbuns físicos, cuidadosamente organizados na estante da sala. Cartas escritas à mão em papel perfumado, bilhetes passados durante as aulas, fitas cassete com mixtapes preparadas com tanto carinho... Onde foram parar essas memórias tangíveis?</p>
      
      <p>Hoje nossas memórias flutuam em nuvens virtuais. Temos milhares de fotos armazenadas em servidores distantes, conversas fragmentadas em múltiplos aplicativos, playlists que se multiplicam sem o esforço das fitas que gravávamos pacientemente, canção após canção.</p>
      
      <h2>A tangibilidade perdida</h2>
      
      <p>Há algo de nostálgico em poder tocar nossas memórias. O cheiro de um livro antigo, a textura de uma fotografia Polaroid, o som característico de uma fita VHS sendo rebobinada. Sensações que se perdem quando tudo se torna digital.</p>
      
      <p>Mas seria isso apenas romantismo? Ou há realmente algo valioso que se perde quando transferimos tudo para o digital? A facilidade que ganhamos tem um preço que talvez só perceberemos depois de algumas décadas.</p>
      
      <h2>Um novo tipo de nostalgia</h2>
      
      <p>Curiosamente, já começamos a desenvolver um novo tipo de nostalgia, puramente digital. A interface de um software antigo, o som de uma conexão dial-up, o design de um website dos anos 90, a estética pixelada dos primeiros videogames. São memórias que existem apenas no mundo digital, mas que ainda assim evocam sentimentos profundos.</p>
      
      <p>Talvez não estejamos perdendo a capacidade de sentir nostalgia, apenas transformando-a. Nossas crianças terão nostalgia de coisas que nunca existiram no mundo físico, e isso será tão válido quanto nossas próprias memórias.</p>
      
      <p>O desafio está em preservar essas memórias digitais. Em um mundo onde formatos e plataformas se tornam obsoletos tão rapidamente, como garantiremos que nossas memórias digitais sobrevivam ao teste do tempo?</p>
    `,
    coverImage: '/images/digitalmente-inspirado/cronica2.jpg',
    date: '2023-10-20',
    author: authors[1],
    readTime: 6,
    tags: ['memória', 'nostalgia', 'era digital', 'transformação']
  },
  {
    id: 'cronica-3',
    title: 'Crônica 3: O Paradoxo da Conexão - Tão Próximos, Tão Distantes',
    excerpt: 'Por que nos sentimos tão sozinhos na era mais conectada da história?',
    content: `
      <p>Nunca estivemos tão conectados quanto hoje. Podemos conversar instantaneamente com pessoas do outro lado do planeta, acompanhar em tempo real a vida de centenas de amigos e conhecidos, trabalhar remotamente com equipes distribuídas globalmente.</p>
      
      <p>E, no entanto, a solidão se tornou uma epidemia. Como explicar esse paradoxo? Como é possível sentir-se sozinho quando estamos constantemente conectados?</p>
      
      <h2>Conexões superficiais</h2>
      
      <p>Talvez o problema esteja na qualidade das conexões. Trocamos profundidade por amplitude. Temos centenas de "amigos" nas redes sociais, mas com quantos deles temos conversas verdadeiramente significativas? Quantos conhecem nossas inseguranças, medos e sonhos mais profundos?</p>
      
      <p>Passamos horas rolando feeds infinitos, consumindo fragmentos da vida alheia, mas raramente nos permitimos mergulhar em conversas profundas que nutrem a alma. É como matar a sede com goles de água salgada - quanto mais bebemos, mais sedentos ficamos.</p>
      
      <h2>A atenção fragmentada</h2>
      
      <p>Outro aspecto desse paradoxo é a fragmentação da nossa atenção. Mesmo quando estamos fisicamente com outras pessoas, muitas vezes estamos mentalmente ausentes, verificando notificações, respondendo mensagens, deslizando por timelines.</p>
      
      <p>Essa atenção dividida compromete nossa capacidade de estar verdadeiramente presentes. E é na presença plena que construímos conexões significativas.</p>
      
      <h2>O caminho de volta</h2>
      
      <p>A solução não é abandonar a tecnologia, mas usá-la de forma mais consciente. Estabelecer limites claros, priorizar interações de qualidade sobre quantidade, criar espaços e momentos de desconexão digital para reconexão humana.</p>
      
      <p>Talvez o maior desafio da nossa era não seja tecnológico, mas humano: como preservar o que há de mais essencial em nós - nossa capacidade de conexão profunda - em um mundo que constantemente nos puxa para a superfície?</p>
    `,
    coverImage: '/images/digitalmente-inspirado/cronica3.jpg',
    date: '2023-10-25',
    author: authors[2],
    readTime: 7,
    tags: ['conexão', 'solidão', 'redes sociais', 'relacionamentos']
  },
  {
    id: 'cronica-4',
    title: 'Crônica 4: A Fadiga Digital - Quando o Virtual Exaure o Real',
    excerpt: 'Como o excesso de estímulos digitais está afetando nossa saúde mental',
    content: `
      <p>Reuniões virtuais uma após a outra, sem intervalo. Notificações constantes de múltiplos aplicativos. E-mails que se acumulam, pedindo atenção imediata. Stories, reels, tweets, posts - um fluxo incessante de conteúdo para consumir.</p>
      
      <p>Bem-vindo à era da fadiga digital, onde o cansaço não vem apenas do trabalho físico, mas do constante bombardeio de estímulos digitais que drenam nossa energia mental.</p>
      
      <h2>O cérebro sobrecarregado</h2>
      
      <p>Nosso cérebro evoluiu por milênios para processar o mundo físico em um ritmo natural. Agora, subitamente, pedimos que ele processe um volume de informações milhares de vezes maior, sem pausa, sem descanso.</p>
      
      <p>O resultado? Exaustão mental, dificuldade de concentração, ansiedade crescente, insônia. Nosso hardware biológico simplesmente não foi projetado para lidar com esse nível de sobrecarga.</p>
      
      <h2>A economia da atenção</h2>
      
      <p>Por trás dessa sobrecarga está uma economia inteira baseada na captura e monetização da nossa atenção. Empresas competem ferozmente por cada segundo do nosso tempo mental, otimizando algoritmos para nos manter engajados, rolando, clicando, consumindo.</p>
      
      <p>Tornamo-nos o produto, e nossa atenção, a commodity mais valiosa do mundo digital. Mas a que custo para nossa saúde mental?</p>
      
      <h2>O direito à desconexão</h2>
      
      <p>Talvez precisemos estabelecer um novo direito humano para o século XXI: o direito à desconexão. O direito de não ser constantemente acessível, de não responder imediatamente, de ter momentos de silêncio digital.</p>
      
      <p>Precisamos reaprender a estar ociosos, a permitir que nosso cérebro vagueie sem estímulos externos, a recuperar os momentos de tédio produtivo que tanto contribuem para nossa criatividade e bem-estar.</p>
      
      <p>A tecnologia veio para nos servir, não para nos esgotar. Está na hora de reequilibrar essa relação.</p>
    `,
    coverImage: '/images/digitalmente-inspirado/cronica4.jpg',
    date: '2023-10-30',
    author: authors[0],
    readTime: 6,
    tags: ['saúde mental', 'fadiga digital', 'desconexão', 'equilíbrio']
  },
  {
    id: 'cronica-5',
    title: 'Crônica 5: Identidades Digitais - Quem Somos Online?',
    excerpt: 'Uma reflexão sobre autenticidade e performance nas redes sociais',
    content: `
      <p>Quem é você no Instagram? E no LinkedIn? E no TikTok? Somos as mesmas pessoas em todas essas plataformas, ou criamos diferentes versões de nós mesmos para cada espaço digital que habitamos?</p>
      
      <p>A questão da identidade sempre foi complexa, mas a era digital adiciona novas camadas a essa complexidade. Agora gerenciamos múltiplas facetas de nós mesmos, distribuídas por diversas plataformas, cada uma com suas próprias regras e expectativas sociais.</p>
      
      <h2>O eu curado</h2>
      
      <p>Nas redes sociais, raramente apresentamos nosso eu autêntico e integral. Em vez disso, oferecemos uma versão curada, editada e filtrada de quem somos - ou de quem gostaríamos de ser.</p>
      
      <p>Selecionamos cuidadosamente quais partes de nossas vidas compartilhar, quais opiniões expressar, até mesmo quais emoções demonstrar. É uma performance constante, muitas vezes inconsciente, moldada pelas métricas de engajamento e aprovação social.</p>
      
      <h2>A fragmentação do eu</h2>
      
      <p>Essa curadoria constante traz riscos para nossa integridade psicológica. Quando gerenciamos múltiplas personas digitais, corremos o risco de nos fragmentar, de perder o senso do nosso eu autêntico sob tantas camadas de performance.</p>
      
      <p>O que acontece quando a versão de nós mesmos que apresentamos online se distancia tanto da realidade que começamos a não nos reconhecer mais? Onde termina a representação e começa a dissociação?</p>
      
      <h2>Em busca de autenticidade</h2>
      
      <p>Curiosamente, enquanto muitos de nós lutamos com essa fragmentação, um novo valor emerge nas redes sociais: a autenticidade. Paradoxalmente, a autenticidade se torna mais uma performance, mais uma estratégia de engajamento.</p>
      
      <p>A verdadeira autenticidade talvez esteja na integração dessas múltiplas facetas, no reconhecimento de que somos seres complexos e multifacetados, tanto online quanto offline.</p>
      
      <p>Em um mundo que nos incentiva constantemente a dividir e performar, o ato revolucionário pode ser justamente o de integrar, de buscar coerência entre as diversas expressões do nosso eu.</p>
    `,
    coverImage: '/images/digitalmente-inspirado/cronica5.jpg',
    date: '2023-11-05',
    author: authors[1],
    readTime: 8,
    tags: ['identidade', 'redes sociais', 'autenticidade', 'psicologia digital']
  },
  {
    id: 'cronica-6',
    title: 'Crônica 6: A Era da Desinformação - Navegando pelo Mar de Mentiras',
    excerpt: 'Como distinguir fato de ficção em tempos de manipulação digital',
    content: `
      <p>Houve um tempo em que o conhecimento era escasso e precioso. Passamos milênios construindo bibliotecas, universidades e sistemas educacionais para democratizar o acesso à informação. Hoje, paradoxalmente, afogamo-nos em informação, mas morremos de sede por conhecimento confiável.</p>
      
      <p>A era digital nos trouxe acesso instantâneo a um volume inimaginável de informação. Mas também trouxe algo perturbador: a capacidade de gerar e disseminar desinformação em escala industrial.</p>
      
      <h2>A democratização da mentira</h2>
      
      <p>Antigamente, criar e disseminar mentiras convincentes exigia recursos consideráveis. Hoje, qualquer pessoa com acesso à internet pode criar conteúdo falso sofisticado e distribuí-lo globalmente com um clique.</p>
      
      <p>As ferramentas de manipulação digital - deepfakes, IA gerativa, bots automatizados - se tornam cada vez mais acessíveis e indistinguíveis da realidade. A linha entre o verdadeiro e o falso se desfaz diante dos nossos olhos.</p>
      
      <h2>Economia da atenção e polarização</h2>
      
      <p>Piorando a situação, a economia da atenção online privilegia o chocante, o divisivo, o emocional sobre o factual. Algoritmos projetados para maximizar engajamento nos servem informações que confirmam nossas crenças existentes, nos trancando em câmaras de eco ideológicas.</p>
      
      <p>Não é de admirar que estejamos mais polarizados do que nunca. Literalmente vivemos em realidades informacionais paralelas, cada um com sua própria versão dos "fatos".</p>
      
      <h2>Navegando no mar de mentiras</h2>
      
      <p>Como navegar por esse oceano turbulento? Precisamos desenvolver uma nova forma de alfabetização - a alfabetização informacional. Precisamos aprender a verificar fontes, a reconhecer sinais de manipulação, a desconfiar do que parece bom demais para ser verdade.</p>
      
      <p>Mais do que isso, precisamos cultivar a humildade intelectual. Reconhecer que todos somos vulneráveis à desinformação, que nossos cérebros estão repletos de vieses cognitivos que nos predispõem a acreditar em certas narrativas.</p>
      
      <p>Em um mundo onde a verdade se torna cada vez mais elusiva, talvez a sabedoria esteja menos em ter certezas absolutas e mais em fazer as perguntas certas.</p>
    `,
    coverImage: '/images/digitalmente-inspirado/cronica6.jpg',
    date: '2023-11-10',
    author: authors[2],
    readTime: 7,
    tags: ['desinformação', 'fake news', 'pensamento crítico', 'alfabetização digital']
  }
];