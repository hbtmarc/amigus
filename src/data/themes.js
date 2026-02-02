/**
 * Temas das Noites — Dataset completo
 */

export const themes = [
  {
    id: 'noite-jogos',
    title: 'Noite de Jogos',
    subtitle: 'Competição saudável entre casais',
    pitch: 'Uma noite dedicada a jogos de tabuleiro, cartas ou videogames cooperativos. O objetivo é se divertir, competir de forma leve e descobrir novos jogos juntos.',
    durationMin: 180,
    vibeTags: ['Competitivo', 'Casual', 'Risadas'],
    materials: [
      '2-3 jogos de tabuleiro ou cartas',
      'Snacks e bebidas',
      'Cronômetro (se necessário)',
      'Papel e caneta para pontuação'
    ],
    rules: [
      'Escolher jogos que todos saibam jogar ou que sejam fáceis de aprender',
      'Limite de 20 min para explicação de regras',
      'Casais jogam juntos OU modo livre (cada um por si)',
      'Vencedor escolhe o próximo jogo',
      'Proibido ficar chateado — é só um jogo!'
    ],
    steps: [
      'Escolher 3 jogos com antecedência',
      'Preparar snacks e drinks',
      'Explicar regras do primeiro jogo (máx 15 min)',
      'Jogar primeira rodada',
      'Intervalo rápido (10 min)',
      'Segundo jogo',
      'Intervalo com lanche',
      'Jogo final',
      'Anunciar vencedores e próxima noite'
    ],
    hostScript: [
      'Bem-vindos à Noite de Jogos!',
      'Hoje vamos jogar [lista dos jogos].',
      'Regra de ouro: diversão acima de tudo.',
      'Vamos começar com [primeiro jogo].',
      'Preparem-se para perder!'
    ],
    prompts: [
      'Qual foi o jogo mais engraçado que você já jogou?',
      'Se pudesse criar um jogo, qual seria?',
      'Qual sua estratégia secreta em jogos?',
      'Prefere jogos de sorte ou estratégia?',
      'Qual jogo você nunca mais quer jogar?',
      'Qual foi a maior trapaça que você já viu em um jogo?',
      'Prefere ganhar sozinho ou perder em grupo?'
    ]
  },
  {
    id: 'noite-administrador',
    title: 'Noite do Administrador',
    subtitle: 'Resolva os problemas da vida juntos',
    pitch: 'Uma noite produtiva para resolver aquelas tarefas burocráticas que sempre adiamos. Juntos, fica mais leve organizar finanças, planejar viagens ou decidir grandes compras.',
    durationMin: 120,
    vibeTags: ['Produtivo', 'Organização', 'Apoio'],
    materials: [
      'Notebooks ou tablets',
      'Documentos pendentes',
      'Planilhas (Google Sheets ou Excel)',
      'Café ou chá',
      'Quadro branco ou papel grande (opcional)'
    ],
    rules: [
      'Cada casal traz 2-3 tarefas para resolver',
      'Foco total: sem distrações ou redes sociais',
      'Ajudar o outro com ideias e opiniões',
      'Celebrar cada tarefa concluída',
      'Intervalos a cada 30 minutos'
    ],
    steps: [
      'Listar tarefas de cada casal (5 min)',
      'Priorizar: urgente vs importante',
      'Bloco 1: resolver tarefas urgentes (30 min)',
      'Intervalo com café (10 min)',
      'Bloco 2: planejamento de médio prazo (30 min)',
      'Intervalo',
      'Bloco 3: decisões grandes ou brainstorm (30 min)',
      'Revisar o que foi feito',
      'Planejar próximos passos'
    ],
    hostScript: [
      'Chegou a hora de sermos adultos responsáveis!',
      'Hoje vamos resolver aquilo que está pendente há meses.',
      'Regra: ajudar, não julgar.',
      'Vamos começar pelo mais chato primeiro.',
      'No final, celebramos com algo gostoso!'
    ],
    prompts: [
      'Qual tarefa você adia há mais tempo?',
      'O que você gostaria de planejar nos próximos 6 meses?',
      'Qual app ou ferramenta facilita sua vida?',
      'Se pudesse terceirizar uma tarefa, qual seria?',
      'Qual foi a melhor decisão financeira que você tomou?',
      'Onde você se vê daqui a 5 anos? (clássico)',
      'Qual hábito você quer criar este ano?',
      'Qual compra grande você está adiando?'
    ]
  },
  {
    id: 'noite-powerpoint',
    title: 'Noite de PowerPoint',
    subtitle: 'Apresentações absurdas e hilárias',
    pitch: 'Cada pessoa prepara uma apresentação de slides sobre um tema completamente aleatório ou absurdo. O objetivo é entreter, surpreender e arrancar risadas com storytelling criativo.',
    durationMin: 150,
    vibeTags: ['Criativo', 'Comédia', 'Performance'],
    materials: [
      'Computador ou tablet com PowerPoint/Google Slides',
      'TV ou projetor para apresentar',
      'Papel para votação',
      'Drinks e snacks'
    ],
    rules: [
      'Cada pessoa tem 7-10 minutos de apresentação',
      'Tema pode ser sorteado ou livre',
      'Slides devem ter imagens, gráficos ou memes',
      'Plateia pode fazer perguntas ao final',
      'Votação: melhor apresentação, mais engraçada, mais criativa'
    ],
    steps: [
      'Sortear ou escolher temas (30 min antes)',
      'Tempo de preparação: 30-45 min',
      'Ordem das apresentações (sortear)',
      'Primeira apresentação (10 min)',
      'Segunda apresentação (10 min)',
      'Intervalo (10 min)',
      'Terceira apresentação (10 min)',
      'Quarta apresentação (10 min)',
      'Votação e premiação',
      'Brindar ao vencedor'
    ],
    hostScript: [
      'Bem-vindos ao TED Talk caseiro!',
      'Hoje vamos aprender sobre [temas absurdos].',
      'Lembrem-se: seriedade é fundamental.',
      'Vamos à primeira apresentação!',
      'Palmas para o palestrante!'
    ],
    prompts: [
      'Temas: "Por que gatos dominarão o mundo"',
      '"A história secreta da batata"',
      '"Como seria a vida se todos fossem canhotos"',
      '"Ranking definitivo de frutas"',
      '"Por que os pinguins não voam (teoria da conspiração)"',
      '"Guia de sobrevivência em elevadores"',
      '"A evolução do meme: de 2010 a 2026"',
      '"Se eu fosse prefeito desta sala"',
      '"Por que pizza é superior a qualquer comida"',
      '"Manual de como fingir que entende de vinhos"'
    ]
  },
  {
    id: 'noite-sem-celular',
    title: 'Noite sem Celular',
    subtitle: 'Desconecte e reconecte com as pessoas',
    pitch: 'Uma noite inteira sem smartphones. Guardar todos os celulares em uma caixa e focar 100% em conversas, jogos analógicos e conexão humana real.',
    durationMin: 180,
    vibeTags: ['Mindful', 'Conexão', 'Desafio'],
    materials: [
      'Caixa ou gaveta para guardar celulares',
      'Jogos de cartas ou tabuleiro',
      'Livros ou revistas (opcional)',
      'Música ambiente (vitrola ou rádio)',
      'Comida e bebida'
    ],
    rules: [
      'Celulares na caixa no início da noite',
      'Única exceção: emergências reais',
      'Quem pegar o celular paga uma prenda',
      'Foco em atividades analógicas',
      'Relógio de parede ou relógio de pulso permitido'
    ],
    steps: [
      'Ritual de "entrega" dos celulares (todos juntos)',
      'Definir atividades da noite',
      'Conversa inicial: como estamos?',
      'Atividade 1: jogo ou dinâmica (40 min)',
      'Intervalo com lanche',
      'Atividade 2: conversa profunda ou jogo (40 min)',
      'Intervalo',
      'Atividade final: reflexão ou música',
      'Liberar celulares e ver o que perdemos (spoiler: nada)'
    ],
    hostScript: [
      'Hoje vamos viver como se fosse 2005!',
      'Celulares na caixa — sem exceções.',
      'Vamos focar no que realmente importa: nós.',
      'Preparem-se para conversas de verdade.',
      'No final, veremos quantas notificações perdemos (e não sentimos falta).'
    ],
    prompts: [
      'Quando foi a última vez que ficou sem celular por horas?',
      'O que você faria se não tivesse smartphone?',
      'Qual app você usa demais?',
      'Qual foi a melhor conversa que você teve cara a cara?',
      'Você sente falta de como era antes das redes sociais?',
      'Se pudesse deletar um app para sempre, qual seria?',
      'Você consegue jantar sem olhar o celular?',
      'Qual memória sua não está fotografada?'
    ]
  },
  {
    id: 'noite-sem-estranhos',
    title: 'Noite sem Estranhos',
    subtitle: 'Conheça melhor quem está ao seu lado',
    pitch: 'Uma noite dedicada a perguntas profundas, histórias pessoais e vulnerabilidade. O objetivo é sair conhecendo os amigos em um nível mais íntimo e verdadeiro.',
    durationMin: 150,
    vibeTags: ['Profundo', 'Vulnerável', 'Conexão'],
    materials: [
      'Lista de perguntas profundas',
      'Ambiente confortável (almofadas, luz baixa)',
      'Drinks leves',
      'Música ambiente suave',
      'Papel e caneta (opcional: para escrever reflexões)'
    ],
    rules: [
      'Tudo que é dito aqui, fica aqui',
      'Ninguém é obrigado a responder se não quiser',
      'Ouvir sem julgar',
      'Não interromper quem está falando',
      'Celulares no silencioso ou longe'
    ],
    steps: [
      'Definir clima: luz, música, conforto',
      'Rodada 1: perguntas leves de aquecimento',
      'Rodada 2: perguntas sobre infância e família',
      'Intervalo',
      'Rodada 3: medos, sonhos, arrependimentos',
      'Rodada 4: futuro e aspirações',
      'Momento de gratidão: cada um agradece algo',
      'Fechamento: abraço coletivo'
    ],
    hostScript: [
      'Hoje não haverá máscaras.',
      'Vamos nos conhecer de verdade.',
      'Regra de ouro: respeito e escuta.',
      'Vamos começar devagar e mergulhar fundo.',
      'No final, seremos amigos mais próximos.'
    ],
    prompts: [
      'Qual foi o momento que mais te transformou na vida?',
      'Do que você tem mais orgulho?',
      'Qual seu maior medo?',
      'Se pudesse mudar algo no passado, o que seria?',
      'Qual sonho você ainda não realizou?',
      'Quem te conhece melhor no mundo?',
      'O que você gostaria que as pessoas soubessem sobre você?',
      'Qual foi a última vez que você chorou e por quê?',
      'O que te faz sentir mais vivo?',
      'Se hoje fosse seu último dia, o que você faria?',
      'Qual a coisa mais corajosa que você já fez?',
      'O que você quer que digam sobre você quando você partir?'
    ]
  },
  {
    id: 'noite-trabalho',
    title: 'Noite: Explica o que você faz no trabalho',
    subtitle: 'Finalmente entenda o trabalho um do outro',
    pitch: 'Cada pessoa tem 15 minutos para explicar, de forma simples e visual, o que faz no trabalho. O objetivo é desmistificar, gerar empatia e aprender algo novo.',
    durationMin: 120,
    vibeTags: ['Educativo', 'Curioso', 'Apoio'],
    materials: [
      'Quadro branco ou flip chart',
      'Canetas coloridas',
      'Computador (para mostrar tela se necessário)',
      'Post-its',
      'Snacks'
    ],
    rules: [
      'Explicar como se a pessoa tivesse 10 anos',
      'Evitar jargões técnicos sem explicar',
      'Usar exemplos visuais ou metáforas',
      'Plateia pode fazer perguntas',
      'Duração: 15 min apresentação + 5 min perguntas'
    ],
    steps: [
      'Definir ordem das apresentações',
      'Primeira pessoa explica (20 min)',
      'Segunda pessoa explica (20 min)',
      'Intervalo (10 min)',
      'Terceira pessoa explica (20 min)',
      'Quarta pessoa explica (20 min)',
      'Discussão geral: o que aprendemos?',
      'Reflexão: como podemos ajudar uns aos outros?'
    ],
    hostScript: [
      'Quantas vezes você já fingiu entender o trabalho do outro?',
      'Hoje vamos acabar com isso!',
      'Regra: perguntas são bem-vindas.',
      'Vamos descobrir o que realmente fazem 8h por dia.',
      'Preparem-se para se surpreender!'
    ],
    prompts: [
      'Qual a parte mais legal do seu trabalho?',
      'Qual a parte mais chata?',
      'Como é um dia típico seu?',
      'Qual foi o projeto mais difícil que você fez?',
      'Se pudesse mudar algo na sua área, o que seria?',
      'Como você explica seu trabalho para sua avó?',
      'Qual habilidade você usa mais no trabalho?',
      'Você gosta do que faz?',
      'O que as pessoas não entendem sobre sua profissão?',
      'Qual foi o maior erro que você cometeu no trabalho?'
    ]
  },
  {
    id: 'noite-projeto-paralelo',
    title: 'Noite do Projeto Paralelo',
    subtitle: 'Mostre e desenvolva seus side projects',
    pitch: 'Uma noite para compartilhar projetos pessoais, hobbies ou ideias que ficam na gaveta. Traga trabalhos manuais, códigos, escritas, arte — e receba feedback honesto.',
    durationMin: 150,
    vibeTags: ['Criativo', 'Inspirador', 'Feedback'],
    materials: [
      'Projetos ou portfólios de cada um',
      'Computador (se precisar mostrar algo digital)',
      'Quadro para brainstorm',
      'Papel e caneta',
      'Café e snacks'
    ],
    rules: [
      'Cada pessoa tem 15-20 min para apresentar',
      'Feedback construtivo, nunca destrutivo',
      'Perguntar: "Como posso ajudar?"',
      'Celebrar progresso, não só resultados',
      'Compromisso: próxima apresentação em X semanas'
    ],
    steps: [
      'Cada pessoa apresenta seu projeto (15 min cada)',
      'Rodada de perguntas e ideias',
      'Intervalo',
      'Brainstorm: próximos passos de cada projeto',
      'Definir metas para os próximos 30 dias',
      'Criar accountability: check-in no grupo',
      'Celebrar a coragem de criar'
    ],
    hostScript: [
      'Hoje é dia de tirar da gaveta!',
      'Vamos mostrar o que estamos criando.',
      'Regra: apoio, não crítica destrutiva.',
      'Ninguém julga, todo mundo ajuda.',
      'Vamos fazer esses projetos saírem do papel!'
    ],
    prompts: [
      'Qual projeto você sempre quis fazer?',
      'Por que você ainda não começou?',
      'Qual a maior dificuldade do seu projeto?',
      'Se tivesse tempo infinito, o que criaria?',
      'Qual habilidade você quer aprender?',
      'Quem te inspira criativamente?',
      'Qual foi o último projeto que você concluiu?',
      'Você prefere trabalhar sozinho ou em grupo?',
      'Como você lida com bloqueio criativo?',
      'Se pudesse viver de um hobby, qual seria?'
    ]
  },
  {
    id: 'noite-culinaria',
    title: 'Noite de Culinária Cooperativa',
    subtitle: 'Cozinhem juntos uma refeição completa',
    pitch: 'Escolham uma receita complexa ou um menu de 3 pratos e preparem juntos. O processo é tão importante quanto o resultado — trabalho em equipe na cozinha.',
    durationMin: 180,
    vibeTags: ['Colaborativo', 'Sensorial', 'Delicioso'],
    materials: [
      'Receitas escolhidas com antecedência',
      'Ingredientes frescos',
      'Utensílios de cozinha',
      'Aventais',
      'Música para cozinhar',
      'Vinho ou drinks (opcional)'
    ],
    rules: [
      'Todos participam de alguma etapa',
      'Dividir tarefas: entrada, prato principal, sobremesa',
      'Chefe do dia coordena',
      'Limpar enquanto cozinha',
      'Proibido pedir delivery se der errado!'
    ],
    steps: [
      'Definir menu e dividir tarefas',
      'Preparar mise en place (organizar ingredientes)',
      'Começar pela sobremesa ou entrada (o que leva mais tempo)',
      'Prato principal',
      'Finalizar e montar pratos',
      'Jantar juntos sem pressa',
      'Lavar louça em equipe',
      'Avaliar: o que funcionou?'
    ],
    hostScript: [
      'Hoje somos chefs!',
      'Vamos criar algo delicioso juntos.',
      'Regra: se queimar, improvisamos.',
      'Trabalho em equipe na cozinha!',
      'Bon appétit!'
    ],
    prompts: [
      'Qual o melhor prato que você já comeu?',
      'Qual receita você quer aprender?',
      'Você cozinha por prazer ou necessidade?',
      'Qual foi o maior desastre culinário que você causou?',
      'Doce ou salgado?',
      'Se pudesse jantar com alguém (vivo ou morto), quem seria?',
      'Qual ingrediente você não vive sem?',
      'Você prefere cozinhar ou lavar louça?'
    ]
  },
  {
    id: 'noite-cultura',
    title: 'Noite Cultural',
    subtitle: 'Filmes, livros, músicas e arte',
    pitch: 'Cada pessoa traz uma indicação cultural (filme, livro, álbum, exposição virtual) e apresenta por que aquilo é importante. Depois, todos experimentam juntos.',
    durationMin: 180,
    vibeTags: ['Cultural', 'Reflexivo', 'Descoberta'],
    materials: [
      'Livros, filmes ou álbuns escolhidos',
      'TV ou computador',
      'Fones de ouvido ou caixas de som',
      'Papel para anotações',
      'Snacks e bebidas'
    ],
    rules: [
      'Cada pessoa traz 1 indicação',
      'Apresentar em 5 min: por que é especial?',
      'Assistir/ler/ouvir um trecho juntos',
      'Discussão aberta: o que acharam?',
      'Respeitar gostos diferentes'
    ],
    steps: [
      'Apresentação da primeira indicação',
      'Experimentar (20-30 min)',
      'Discussão',
      'Segunda indicação',
      'Experimentar',
      'Intervalo',
      'Terceira e quarta indicações',
      'Votação: o que vamos consumir até a próxima noite?'
    ],
    hostScript: [
      'Hoje vamos expandir nossos horizontes!',
      'Cada um traz algo que ama.',
      'Vamos tentar com mente aberta.',
      'Arte é subjetiva — e tudo bem.',
      'Preparem-se para descobrir algo novo!'
    ],
    prompts: [
      'Qual livro mudou sua vida?',
      'Qual filme você assistiria infinitas vezes?',
      'Qual álbum marcou uma fase sua?',
      'Você tem um artista favorito?',
      'Qual série você recomendaria?',
      'Prefere arte clássica ou contemporânea?',
      'Qual documentário te impressionou?',
      'Se pudesse recomendar só uma coisa, o que seria?'
    ]
  },
  {
    id: 'noite-debate',
    title: 'Noite de Debates',
    subtitle: 'Discussões acaloradas (mas respeitosas)',
    pitch: 'Escolham 3-4 tópicos polêmicos ou filosóficos e debatam com argumentos. O objetivo não é convencer, mas entender perspectivas diferentes.',
    durationMin: 120,
    vibeTags: ['Intelectual', 'Provocativo', 'Respeitoso'],
    materials: [
      'Lista de tópicos',
      'Cronômetro',
      'Quadro para anotar argumentos',
      'Drinks',
      'Regras de debate impressas'
    ],
    rules: [
      'Cada pessoa tem 2 min ininterruptos para argumentar',
      'Ouvir sem interromper',
      'Foco em ideias, não em ataques pessoais',
      'Moderador controla o tempo',
      'Aceitar mudar de opinião é sinal de inteligência'
    ],
    steps: [
      'Escolher 3 tópicos',
      'Sortear quem defende cada lado (mesmo que não concorde)',
      'Debate 1 (20 min)',
      'Intervalo',
      'Debate 2 (20 min)',
      'Intervalo',
      'Debate 3 (20 min)',
      'Reflexão: o que aprendemos?'
    ],
    hostScript: [
      'Hoje vamos discordar civilizadamente!',
      'Regra de ouro: respeito sempre.',
      'Não é sobre ganhar, é sobre entender.',
      'Argumentos fortes, tom suave.',
      'Vamos começar!'
    ],
    prompts: [
      'Tecnologia: aliada ou inimiga?',
      'Trabalho remoto é o futuro?',
      'Arte precisa ter mensagem?',
      'Dinheiro traz felicidade?',
      'Devemos colonizar Marte?',
      'Redes sociais fazem mais mal que bem?',
      'Existe destino ou livre arbítrio?',
      'Qual é mais importante: razão ou emoção?'
    ]
  }
];

export function getThemeById(id) {
  return themes.find(t => t.id === id);
}

export function getAllThemes() {
  return themes;
}
