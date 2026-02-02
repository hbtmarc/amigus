/**
 * Temas das Noites — Dataset completo
 */

export const themes = [
  {
    id: 'noite-jogos',
    title: 'Noite de Jogos',
    subtitle: 'Competição saudável entre casais',
    pitch: 'Uma noite dedicada a jogos de tabuleiro, cartas ou videogames cooperativos. O objetivo é se divertir, competir de forma leve e descobrir novos jogos juntos, com regras claras, tempo definido e pausas para manter o ritmo e o clima leve.',
    durationMin: 180,
    vibeTags: ['Competitivo', 'Casual', 'Risadas'],
    materials: [
      '2-3 jogos com duração de 30-45 min cada',
      'Manual ou regra resumida impressa',
      'Snacks e bebidas fáceis de servir',
      'Cronômetro (para turnos longos)',
      'Papel e caneta para pontuação'
    ],
    rules: [
      'Escolher jogos que todos saibam jogar ou que sejam fáceis de aprender',
      'Resumo de regras em até 10-15 min (exemplo rápido antes de iniciar)',
      'Definir se é por casal ou individual antes do primeiro jogo',
      'Vencedor escolhe o próximo jogo, mas a mesa aprova',
      'Sem discussões longas durante a rodada: dúvidas só no intervalo'
    ],
    steps: [
      'Escolher 3 jogos com antecedência e a ordem sugerida (rápido → médio → final)',
      'Preparar snacks e organizar a mesa (copos e pontuação prontos)',
      'Explicar regras do primeiro jogo + rodada de teste (máx 10 min)',
      'Jogar primeira rodada completa',
      'Intervalo rápido para água e ajustes (5-10 min)',
      'Segundo jogo com tempo-alvo definido',
      'Intervalo com lanche e feedback rápido do jogo',
      'Jogo final valendo “título” simbólico da noite',
      'Fechamento: anunciar vencedores e escolher o próximo tema'
    ],
    hostScript: [
      'Bem-vindos à Noite de Jogos! Hoje é sobre diversão e boas risadas.',
      'Ordem de hoje: [jogo 1], depois [jogo 2] e fechamos com [jogo 3].',
      'Regras rápidas, exemplo rápido e começamos — sem stress.',
      'Se surgir dúvida, anotamos e resolvemos no intervalo.',
      'No final, coroamos o time campeão e escolhemos a próxima noite.'
    ],
    prompts: [
      'Qual foi o jogo mais engraçado que você já jogou?',
      'Se pudesse criar um jogo, qual seria e quais seriam as regras?',
      'Qual sua estratégia secreta em jogos competitivos?',
      'Prefere jogos de sorte ou estratégia? Por quê?',
      'Qual jogo você nunca mais quer jogar e o motivo?',
      'Qual foi a maior trapaça que você já viu em um jogo?',
      'Prefere ganhar sozinho ou perder em grupo?'
    ]
  },
  {
    id: 'noite-administrador',
    title: 'Noite do Administrador',
    subtitle: 'Resolva os problemas da vida juntos',
    pitch: 'Uma noite produtiva para resolver aquelas tarefas burocráticas que sempre adiamos. Juntos, fica mais leve organizar finanças, planejar viagens ou decidir grandes compras, com um plano claro por blocos e entregas objetivas.',
    durationMin: 120,
    vibeTags: ['Produtivo', 'Organização', 'Apoio'],
    materials: [
      'Notebooks ou tablets com acesso a contas',
      'Documentos pendentes organizados em uma pasta',
      'Planilhas (Google Sheets ou Excel) compartilhadas',
      'Café, chá e água',
      'Quadro branco ou papel grande para prioridades'
    ],
    rules: [
      'Cada casal traz 2-3 tarefas com status e objetivo definidos',
      'Foco total: sem redes sociais durante os blocos de trabalho',
      'Ajudar o outro com ideias e decisões, sem julgamento',
      'Celebrar cada tarefa concluída com um mini-check-in',
      'Intervalos cronometrados a cada 30 minutos'
    ],
    steps: [
      'Listar tarefas de cada casal com prazo e prioridade (5-10 min)',
      'Priorizar com matriz urgente/importante',
      'Bloco 1: tarefas urgentes com prazo hoje/semana (30 min)',
      'Intervalo com café (10 min) e revisão rápida do que saiu',
      'Bloco 2: planejamento de médio prazo (30 min)',
      'Intervalo curto (5 min)',
      'Bloco 3: decisões grandes ou brainstorm com prós/cons (30 min)',
      'Revisar o que foi feito e registrar pendências',
      'Definir próximos passos e responsáveis por cada item'
    ],
    hostScript: [
      'Chegou a hora de sermos adultos responsáveis — com leveza!',
      'Hoje vamos resolver o que está pendente, um bloco por vez.',
      'Regra: ajudar, não julgar. Estamos no mesmo time.',
      'Começamos pelo mais chato para liberar energia.',
      'No final, celebramos o que avançamos e o que ficou definido.'
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
    pitch: 'Cada pessoa prepara uma apresentação de slides sobre um tema completamente aleatório ou absurdo. O objetivo é entreter, surpreender e arrancar risadas com storytelling criativo, seguindo um roteiro simples e tempo definido.',
    durationMin: 150,
    vibeTags: ['Criativo', 'Comédia', 'Performance'],
    materials: [
      'Computador ou tablet com PowerPoint/Google Slides',
      'TV ou projetor para apresentar',
      'Controle remoto ou mouse',
      'Papel para votação e canetas',
      'Drinks e snacks'
    ],
    rules: [
      'Cada pessoa tem 7-10 minutos + 2 minutos de perguntas',
      'Tema pode ser sorteado ou livre, mas precisa ter começo, meio e fim',
      'Slides devem ter imagens, gráficos ou memes (no mínimo 1 por slide)',
      'A plateia respeita o tempo, perguntas só ao final',
      'Votação: melhor apresentação, mais engraçada e mais criativa'
    ],
    steps: [
      'Sortear ou escolher temas (30 min antes)',
      'Tempo de preparação: 30-45 min com roteiro e 6-10 slides',
      'Sortear a ordem das apresentações',
      'Primeira apresentação (10 min + 2 de perguntas)',
      'Segunda apresentação (10 min + 2 de perguntas)',
      'Intervalo (10 min)',
      'Terceira apresentação (10 min + 2 de perguntas)',
      'Quarta apresentação (10 min + 2 de perguntas)',
      'Votação e premiação simbólica',
      'Brindar ao vencedor e registrar o “melhor momento”'
    ],
    hostScript: [
      'Bem-vindos ao TED Talk caseiro! Hoje temos temas memoráveis.',
      'Cada apresentação terá 10 minutos e mais 2 de perguntas.',
      'Lembrem-se: criatividade e storytelling contam muito.',
      'Vamos à primeira apresentação — palmas para o palestrante!',
      'No final, votamos nas categorias e celebramos.'
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
    pitch: 'Uma noite inteira sem smartphones. Guardar todos os celulares em uma caixa e focar 100% em conversas, jogos analógicos e conexão humana real, com atividades guiadas para evitar momentos “mortos”.',
    durationMin: 180,
    vibeTags: ['Mindful', 'Conexão', 'Desafio'],
    materials: [
      'Caixa ou gaveta para guardar celulares',
      'Jogos de cartas ou tabuleiro',
      'Livros ou revistas (opcional)',
      'Música ambiente (vitrola ou rádio)',
      'Comida e bebida organizada em porções fáceis'
    ],
    rules: [
      'Celulares na caixa no início da noite (combinado coletivo)',
      'Única exceção: emergências reais',
      'Quem pegar o celular paga uma prenda leve',
      'Foco em atividades analógicas e conversa',
      'Relógio de parede ou relógio de pulso permitido'
    ],
    steps: [
      'Ritual de “entrega” dos celulares (todos juntos)',
      'Definir a sequência de atividades da noite',
      'Conversa inicial: como estamos? (10 min)',
      'Atividade 1: jogo ou dinâmica (40 min)',
      'Intervalo com lanche (10 min)',
      'Atividade 2: conversa profunda ou jogo (40 min)',
      'Intervalo curto (5 min)',
      'Atividade final: reflexão, música ou leitura rápida',
      'Liberar celulares e comentar como foi ficar off'
    ],
    hostScript: [
      'Hoje vamos viver como se fosse 2005: presença total.',
      'Celulares na caixa — sem exceções, combinado?',
      'A sequência é: conversa inicial, jogo, pausa, conversa.',
      'Sem pressa, sem interrupções — só a gente.',
      'No final, abrimos a caixa e refletimos como foi.'
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
    pitch: 'Uma noite dedicada a perguntas profundas, histórias pessoais e vulnerabilidade. O objetivo é sair conhecendo os amigos em um nível mais íntimo e verdadeiro, com cuidado, ritmo e segurança emocional.',
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
      'Ouvir sem julgar e sem dar conselhos não solicitados',
      'Não interromper quem está falando',
      'Celulares no silencioso ou longe'
    ],
    steps: [
      'Definir clima: luz, música, conforto e água na mesa',
      'Rodada 1: perguntas leves de aquecimento (10-15 min)',
      'Rodada 2: perguntas sobre infância e família',
      'Intervalo curto para respirar',
      'Rodada 3: medos, sonhos e arrependimentos',
      'Rodada 4: futuro e aspirações',
      'Momento de gratidão: cada um agradece algo',
      'Fechamento: abraço coletivo ou mensagem final'
    ],
    hostScript: [
      'Hoje não haverá máscaras. Vamos com calma e respeito.',
      'Regra de ouro: escuta ativa e sem julgamentos.',
      'Se algo for sensível, a pessoa pode pular sem explicar.',
      'Vamos começar leve e aprofundar com cuidado.',
      'No final, fazemos um momento de gratidão.'
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
    pitch: 'Cada pessoa tem 15 minutos para explicar, de forma simples e visual, o que faz no trabalho. O objetivo é desmistificar, gerar empatia e aprender algo novo, com exemplos práticos e metáforas simples.',
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
      'Usar exemplos visuais, metáforas e “um dia típico”',
      'Plateia pode fazer perguntas ao final',
      'Duração: 15 min apresentação + 5 min perguntas'
    ],
    steps: [
      'Definir ordem das apresentações',
      'Primeira pessoa explica (15 min + 5 min perguntas)',
      'Segunda pessoa explica (15 min + 5 min perguntas)',
      'Intervalo (10 min)',
      'Terceira pessoa explica (15 min + 5 min perguntas)',
      'Quarta pessoa explica (15 min + 5 min perguntas)',
      'Discussão geral: o que aprendemos?',
      'Reflexão: como podemos ajudar uns aos outros?'
    ],
    hostScript: [
      'Quantas vezes você já fingiu entender o trabalho do outro?',
      'Hoje vamos acabar com isso, com exemplos simples.',
      'Regra: perguntas são bem-vindas no final de cada fala.',
      'Vamos descobrir o que cada um faz no dia a dia.',
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
    pitch: 'Uma noite para compartilhar projetos pessoais, hobbies ou ideias que ficam na gaveta. Traga trabalhos manuais, códigos, escritas, arte — e receba feedback honesto, com foco em próximos passos claros.',
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
      'Rodada de perguntas e ideias (5-10 min por pessoa)',
      'Intervalo',
      'Brainstorm: próximos passos de cada projeto',
      'Definir metas para os próximos 30 dias (2 metas por pessoa)',
      'Criar accountability: check-in no grupo',
      'Celebrar a coragem de criar'
    ],
    hostScript: [
      'Hoje é dia de tirar da gaveta!',
      'Vamos mostrar o que estamos criando, sem medo.',
      'Regra: apoio, não crítica destrutiva.',
      'Ao final, cada um sai com próximos passos.',
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
    pitch: 'Escolham uma receita complexa ou um menu de 3 pratos e preparem juntos. O processo é tão importante quanto o resultado — trabalho em equipe na cozinha com tarefas bem distribuídas.',
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
      'Chefe do dia coordena e controla o tempo',
      'Limpar enquanto cozinha',
      'Se algo der errado, improvisar sem estresse'
    ],
    steps: [
      'Definir menu e dividir tarefas com tempo estimado',
      'Preparar mise en place (organizar ingredientes)',
      'Começar pelo item que leva mais tempo',
      'Cozinhar o prato principal com check-ins de ponto',
      'Finalizar, montar pratos e organizar a mesa',
      'Jantar juntos sem pressa',
      'Lavar louça em equipe',
      'Avaliar: o que funcionou e o que melhorar?'
    ],
    hostScript: [
      'Hoje somos chefs! Cada um tem sua tarefa.',
      'Vamos seguir a ordem: mise en place → cozimento → finalização.',
      'Regra: se queimar, improvisamos e rimos.',
      'Cozinha em equipe = cozinha feliz.',
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
    pitch: 'Cada pessoa traz uma indicação cultural (filme, livro, álbum, exposição virtual) e apresenta por que aquilo é importante. Depois, todos experimentam juntos com tempo definido e discussão guiada.',
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
      'Apresentar em 5 min: por que é especial e para quem recomenda',
      'Assistir/ler/ouvir um trecho juntos',
      'Discussão aberta: o que acharam?',
      'Respeitar gostos diferentes'
    ],
    steps: [
      'Apresentação da primeira indicação',
      'Experimentar (20-30 min)',
      'Discussão guiada (5-10 min)',
      'Segunda indicação',
      'Experimentar',
      'Intervalo',
      'Terceira e quarta indicações',
      'Votação: o que vamos consumir até a próxima noite?'
    ],
    hostScript: [
      'Hoje vamos expandir nossos horizontes com mente aberta!',
      'Cada um traz algo que ama e explica o porquê.',
      'Vamos experimentar um trecho e conversar com calma.',
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
    pitch: 'Escolham 3-4 tópicos polêmicos ou filosóficos e debatam com argumentos. O objetivo não é convencer, mas entender perspectivas diferentes com tempo equilibrado para cada voz.',
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
      'Escolher 3 tópicos e definir ordem',
      'Sortear quem defende cada lado (mesmo que não concorde)',
      'Debate 1 (20 min) com tempo de fala alternado',
      'Intervalo curto',
      'Debate 2 (20 min) com rodada de réplica final',
      'Intervalo',
      'Debate 3 (20 min)',
      'Reflexão: o que aprendemos e o que mudou?'
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
