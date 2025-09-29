// app/data/treatmentsData.ts

export interface Treatment {
  slug: string;
  name: string;
  category: "facial" | "corporal" | "capilar";
  shortDescription: string;
  longDescription: string[];
  duration: string;
  price: string;
  image: {
    src: string;
    alt: string;
  };
  benefits: string[];
  treatmentAreas?: string[];
  indications?: string[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  timeline?: {
    time: string;
    title: string;
    description: string;
  }[];
  protocols?: {
    title: string;
    sessions: string;
    description: string;
    details: string[];
  }[];
  idealCandidate?: {
    indications: string[];
    contraindications: string[];
  };
  beforeAfterCare?: {
    before: string[];
    after: string[];
  };
  faq: {
    question: string;
    answer: string;
  }[];
  cta: {
    title: string;
    subtitle: string;
  };
}

export const treatments: Treatment[] = [
  {
    slug: "harmonizacao-facial",
    name: "Harmonização Facial",
    category: "facial",
    shortDescription: "Procedimento que visa equilibrar e realçar os traços faciais de forma natural e harmoniosa, utilizando técnicas avançadas de preenchimento e contorno.",
    longDescription: [
      "A harmonização facial é um conjunto de procedimentos estéticos que tem como objetivo equilibrar as proporções do rosto, realçando a beleza natural de cada paciente.",
      "Utilizamos técnicas modernas com ácido hialurônico e outros bioestimuladores para criar resultados naturais e harmoniosos.",
      "O procedimento é realizado de forma personalizada, considerando as características únicas de cada rosto. Nossa abordagem visa manter a naturalidade, respeitando a identidade facial do paciente enquanto promove melhorias sutis e elegantes.",
      "Com técnicas avançadas e produtos de alta qualidade, conseguimos resultados imediatos que evoluem positivamente ao longo das semanas seguintes, proporcionando maior confiança e bem-estar."
    ],
    duration: "60-90 minutos",
    price: "A partir de R$ 800",
    image: {
      src: "/images/@lucasantosfotografo-45.jpg",
      alt: "Harmonização Facial"
    },
    benefits: [
      "Equilíbrio das proporções faciais",
      "Realce da beleza natural",
      "Resultados imediatos e naturais",
      "Procedimento minimamente invasivo",
      "Recuperação rápida",
      "Melhora da autoestima",
      "Técnicas personalizadas",
      "Produtos de alta qualidade"
    ],
    process: [
      { step: "1", title: "Consulta e Avaliação", description: "Análise detalhada das proporções faciais e definição dos objetivos do tratamento." },
      { step: "2", title: "Planejamento Personalizado", description: "Elaboração de um plano específico considerando suas características únicas." },
      { step: "3", title: "Preparação", description: "Aplicação de anestésico tópico e preparação da área a ser tratada." },
      { step: "4", title: "Procedimento", description: "Aplicação precisa dos produtos para harmonização facial." },
      { step: "5", title: "Finalização", description: "Avaliação do resultado e orientações pós-procedimento." }
    ],
    beforeAfterCare: {
      before: ["Evitar medicamentos anticoagulantes", "Não consumir álcool 24h antes", "Informar sobre alergias", "Chegar sem maquiagem", "Hidratação adequada"],
      after: ["Evitar exercícios por 24h", "Não massagear a área", "Aplicar gelo se necessário", "Evitar exposição solar", "Seguir orientações médicas"]
    },
    faq: [
      { question: "Quanto tempo dura o resultado?", answer: "Os resultados da harmonização facial podem durar de 12 a 18 meses, dependendo do produto utilizado e das características individuais de cada paciente." },
      { question: "O procedimento é doloroso?", answer: "O desconforto é mínimo. Utilizamos anestésico tópico e os produtos já contêm lidocaína, garantindo maior conforto durante o procedimento." },
      { question: "Quando posso ver os resultados?", answer: "Os resultados são imediatos, mas o efeito final pode ser observado após 2 semanas, quando o produto se integra completamente aos tecidos." }
    ],
    cta: {
      title: "Pronto para harmonizar sua beleza facial?",
      subtitle: "Agende uma consulta personalizada e descubra como a harmonização facial pode realçar sua beleza natural com segurança e naturalidade."
    }
  },
  {
    slug: "toxina-botulinica",
    name: "Toxina Botulínica",
    category: "facial",
    shortDescription: "Tratamento para suavizar rugas de expressão e prevenir o envelhecimento, proporcionando uma aparência mais jovem e descansada de forma natural.",
    longDescription: [
      "A toxina botulínica é um tratamento seguro e eficaz para suavizar rugas dinâmicas causadas pela contração muscular repetitiva. É ideal para tratar rugas da testa, pés de galinha e glabela, proporcionando um aspecto mais jovem e descansado.",
      "O procedimento atua bloqueando temporariamente os sinais nervosos que causam a contração muscular, permitindo que a pele se relaxe e as rugas se suavizem. Os resultados são naturais e preservam a expressividade facial.",
      "Além do efeito estético, a toxina botulínica também pode ser utilizada para tratar condições como bruxismo, sorriso gengival e hiperidrose, oferecendo benefícios funcionais importantes."
    ],
    duration: "30-45 minutos",
    price: "A partir de R$ 600",
    image: {
      src: "/images/@lucasantosfotografo-54.jpg",
      alt: "Toxina Botulínica"
    },
    benefits: ["Suavização de rugas de expressão", "Prevenção do envelhecimento", "Resultado natural e harmonioso", "Procedimento rápido e seguro", "Sem tempo de inatividade", "Melhora da autoestima", "Técnica minimamente invasiva", "Efeito duradouro"],
    treatmentAreas: ["Rugas da testa", "Pés de galinha", "Glabela (entre as sobrancelhas)", "Sorriso gengival", "Rugas do pescoço", "Bruxismo"],
    process: [
      { step: "1", title: "Avaliação Facial", description: "Análise da musculatura facial e identificação das áreas a serem tratadas." },
      { step: "2", title: "Marcação dos Pontos", description: "Demarcação precisa dos pontos de aplicação para resultados otimizados." },
      { step: "3", title: "Aplicação", description: "Injeção da toxina botulínica com técnica refinada e segura." },
      { step: "4", title: "Orientações", description: "Instruções pós-tratamento para maximizar os resultados." }
    ],
    timeline: [
      { time: "3-7 dias", title: "Início dos Efeitos", description: "Os primeiros sinais de relaxamento muscular começam a aparecer." },
      { time: "2 semanas", title: "Resultado Completo", description: "O efeito máximo é alcançado com suavização completa das rugas." },
      { time: "4-6 meses", title: "Duração", description: "Os resultados se mantêm por este período, quando nova aplicação pode ser feita." }
    ],
    faq: [
      { question: "A toxina botulínica é segura?", answer: "Sim, quando aplicada por profissionais qualificados. É um tratamento aprovado pela ANVISA e amplamente utilizado na medicina estética há décadas." },
      { question: "O rosto fica \"congelado\"?", answer: "Não, quando aplicada corretamente, a toxina botulínica preserva a expressividade natural, apenas suavizando as rugas de expressão." },
      { question: "Posso fazer exercícios após o tratamento?", answer: "Recomendamos evitar exercícios intensos nas primeiras 24 horas para garantir a fixação adequada do produto." }
    ],
    cta: {
      title: "Pronto para suavizar suas rugas de expressão?",
      subtitle: "Agende uma consulta e descubra como a toxina botulínica pode proporcionar uma aparência mais jovem e descansada de forma natural."
    }
  },
  {
    slug: "criolipolise",
    name: "Criolipólise",
    category: "corporal",
    shortDescription: "Eliminação de gordura localizada através do congelamento controlado das células adiposas, sem cirurgia e com resultados duradouros.",
    longDescription: [
      "A criolipólise é um tratamento não invasivo que utiliza o frio controlado para eliminar células de gordura localizada. O procedimento congela as células adiposas, que são naturalmente eliminadas pelo organismo ao longo das semanas seguintes.",
      "Esta tecnologia revolucionária permite reduzir camadas de gordura sem cirurgia, cortes ou anestesia. O frio aplicado de forma controlada destrói apenas as células de gordura, preservando os tecidos circundantes como pele, músculos e nervos.",
      "Os resultados são progressivos e naturais, com redução visível da gordura localizada entre 2 a 4 meses após o tratamento. É ideal para pessoas próximas ao peso ideal que possuem gorduras resistentes à dieta e exercícios."
    ],
    duration: "60-90 minutos",
    price: "A partir de R$ 400",
    image: {
      src: "/images/@lucasantosfotografo-56.jpg",
      alt: "Criolipólise"
    },
    benefits: ["Redução de gordura localizada", "Procedimento não invasivo", "Sem tempo de recuperação", "Resultados duradouros", "Seguro e eficaz", "Não requer anestesia", "Retorno imediato às atividades", "Eliminação natural das células"],
    treatmentAreas: ["Abdômen", "Flancos (love handles)", "Culote", "Costas", "Braços", "Coxas", "Papada", "Região submentoniana"],
    process: [
      { step: "1", title: "Avaliação", description: "Análise das áreas de gordura localizada e planejamento do tratamento." },
      { step: "2", title: "Preparação", description: "Posicionamento do equipamento e proteção da pele com gel." },
      { step: "3", title: "Aplicação", description: "Congelamento controlado das células adiposas por 35-60 minutos." },
      { step: "4", title: "Massagem", description: "Massagem pós-tratamento para otimizar os resultados." }
    ],
    timeline: [
      { time: "Imediato", title: "Pós-Tratamento", description: "Retorno imediato às atividades normais sem restrições." },
      { time: "3 semanas", title: "Início dos Efeitos", description: "Primeiros sinais de redução da gordura localizada." },
      { time: "2 meses", title: "Resultado Visível", description: "Redução significativa e visível da camada de gordura." },
      { time: "3-4 meses", title: "Resultado Final", description: "Resultado máximo com eliminação completa das células tratadas." }
    ],
    idealCandidate: {
      indications: ["Pessoas próximas ao peso ideal", "Gordura localizada resistente", "Pele com boa elasticidade", "Expectativas realistas", "Estilo de vida saudável"],
      contraindications: ["Obesidade ou sobrepeso significativo", "Gravidez ou amamentação", "Doenças autoimunes", "Crioglobulinemia", "Hérnias na área de tratamento"]
    },
    faq: [
      { question: "Quantas sessões são necessárias?", answer: "Geralmente uma sessão é suficiente por área. Em casos específicos, uma segunda sessão pode ser recomendada após 3 meses." },
      { question: "O procedimento é doloroso?", answer: "Inicialmente há sensação de frio intenso que se torna confortável. Muitos pacientes relaxam ou até dormem durante o tratamento." },
      { question: "Posso ganhar peso após o tratamento?", answer: "As células eliminadas não retornam, mas é importante manter hábitos saudáveis para preservar os resultados obtidos." }
    ],
    cta: {
      title: "Pronto para eliminar a gordura localizada?",
      subtitle: "Agende uma avaliação e descubra como a criolipólise pode ajudar você a conquistar o corpo que sempre desejou."
    }
  },
  {
    slug: "radiofrequencia-corporal",
    name: "Radiofrequência Corporal",
    category: "corporal",
    shortDescription: "Tratamento para firmeza e tonificação da pele, reduzindo flacidez corporal através do aquecimento controlado das camadas profundas.",
    longDescription: [
      "A radiofrequência corporal utiliza ondas eletromagnéticas para aquecer as camadas profundas da pele, estimulando a produção de colágeno e elastina. Isso resulta em maior firmeza, redução da flacidez e melhora da textura da pele.",
      "O aquecimento controlado promove a contração das fibras de colágeno existentes e estimula a formação de novas fibras, proporcionando um efeito lifting natural e progressivo. É um tratamento confortável e relaxante.",
      "Além dos benefícios estéticos, a radiofrequência melhora a circulação sanguínea e linfática, contribuindo para a saúde geral da pele e redução de medidas por melhora do metabolismo local."
    ],
    duration: "45-60 minutos",
    price: "A partir de R$ 300",
    image: {
      src: "/images/@lucasantosfotografo-44.jpg",
      alt: "Radiofrequência Corporal"
    },
    benefits: ["Firmeza da pele", "Redução da flacidez", "Estimulação do colágeno", "Melhora da circulação", "Procedimento confortável", "Sem tempo de inatividade", "Resultados progressivos", "Tratamento seguro"],
    treatmentAreas: ["Abdômen", "Braços", "Coxas", "Glúteos", "Costas", "Pescoço", "Flancos", "Região do soutien"],
    process: [
      { step: "1", title: "Preparação", description: "Limpeza da pele e aplicação de gel condutor para o tratamento." },
      { step: "2", title: "Aquecimento", description: "Aplicação gradual da radiofrequência com aquecimento controlado." },
      { step: "3", title: "Tratamento", description: "Movimentos circulares para distribuição uniforme da energia." },
      { step: "4", title: "Finalização", description: "Hidratação da pele e orientações pós-tratamento." }
    ],
    protocols: [
      { title: "Protocolo Básico", sessions: "6-8 sessões", description: "Para flacidez leve e manutenção", details: ["• Sessões semanais", "• Resultados graduais", "• Ideal para prevenção"] },
      { title: "Protocolo Intensivo", sessions: "10-12 sessões", description: "Para flacidez moderada", details: ["• Sessões bi-semanais", "• Resultados visíveis", "• Firmeza significativa"] },
      { title: "Protocolo Avançado", sessions: "15+ sessões", description: "Para flacidez acentuada", details: ["• Sessões frequentes", "• Resultados máximos", "• Remodelação corporal"] }
    ],
    timeline: [
      { time: "Imediato", title: "Pós-Sessão", description: "Sensação de firmeza e pele mais lisa." },
      { time: "2-4 semanas", title: "Primeiros Resultados", description: "Melhora visível na textura da pele." },
      { time: "2-3 meses", title: "Resultado Significativo", description: "Firmeza notável e redução da flacidez." },
      { time: "6 meses", title: "Resultado Máximo", description: "Efeito completo com nova formação de colágeno." }
    ],
    faq: [
      { question: "O tratamento é doloroso?", answer: "Não, a radiofrequência proporciona uma sensação de aquecimento agradável e relaxante. Muitos pacientes consideram o tratamento prazeroso." },
      { question: "Posso fazer exercícios após o tratamento?", answer: "Sim, não há restrições. Você pode retomar suas atividades normais imediatamente após a sessão." },
      { question: "Qual a diferença para outros tratamentos?", answer: "A radiofrequência atua estimulando a produção natural de colágeno, proporcionando resultados graduais e naturais sem invasividade." }
    ],
    cta: {
      title: "Pronto para conquistar uma pele mais firme?",
      subtitle: "Agende uma avaliação e descubra como a radiofrequência corporal pode ajudar você a ter uma pele mais firme e tonificada."
    }
  },
  {
    slug: "drenagem-linfatica",
    name: "Drenagem Linfática",
    category: "corporal",
    shortDescription: "Técnica que estimula o sistema linfático, reduzindo inchaço, melhorando a circulação e promovendo relaxamento profundo e bem-estar.",
    longDescription: [
      "A drenagem linfática é uma técnica de massagem suave que estimula o sistema linfático, ajudando na eliminação de toxinas e redução do inchaço. É ideal para pós-operatório, retenção de líquidos e como tratamento de bem-estar.",
      "Esta técnica utiliza movimentos específicos e pressão suave para direcionar o fluxo da linfa em direção aos gânglios linfáticos, promovendo a eliminação natural de líquidos e toxinas acumulados nos tecidos.",
      "Além dos benefícios estéticos, a drenagem linfática fortalece o sistema imunológico, melhora a qualidade do sono e proporciona uma sensação profunda de relaxamento e bem-estar."
    ],
    duration: "60-75 minutos",
    price: "A partir de R$ 200",
    image: {
      src: "/images/@lucasantosfotografo-49.jpg",
      alt: "Drenagem Linfática"
    },
    benefits: ["Reduz inchaço e retenção", "Melhora a circulação", "Elimina toxinas", "Promove relaxamento", "Acelera recuperação pós-procedimentos", "Fortalece sistema imunológico", "Melhora qualidade do sono", "Reduz celulite"],
    indications: ["Pós-operatório", "Retenção de líquidos", "Inchaço nas pernas", "Celulite", "Fadiga", "Estresse", "Problemas circulatórios", "Recuperação pós-treino"],
    process: [
      { step: "1", title: "Avaliação", description: "Análise do paciente e identificação das necessidades específicas." },
      { step: "2", title: "Preparação", description: "Ambiente relaxante e posicionamento adequado para o tratamento." },
      { step: "3", title: "Massagem", description: "Técnica específica de drenagem linfática manual ou com equipamentos." },
      { step: "4", title: "Orientações", description: "Recomendações para potencializar os resultados do tratamento." }
    ],
    faq: [
      { question: "Quantas sessões são recomendadas?", answer: "Para manutenção, recomendamos sessões quinzenais ou mensais. Para pós-operatório, o protocolo é definido conforme orientação médica." },
      { question: "Posso fazer durante a gravidez?", answer: "A drenagem linfática pode ser realizada durante a gravidez, mas sempre com autorização médica e técnicas específicas para gestantes." },
      { question: "Há contraindicações?", answer: "Sim, como infecções agudas, trombose, insuficiência cardíaca descompensada e alguns tipos de câncer. Sempre consulte um profissional." }
    ],
    cta: {
      title: "Pronto para sentir os benefícios da drenagem linfática?",
      subtitle: "Agende uma sessão e experimente uma sensação única de relaxamento e bem-estar com nossa drenagem linfática especializada."
    }
  },
  {
    slug: "mesoterapia-capilar",
    name: "Mesoterapia Capilar",
    category: "capilar",
    shortDescription: "Aplicação de ativos revitalizantes diretamente no couro cabeludo para estimular o crescimento e fortalecer os fios de forma eficaz.",
    longDescription: [
      "A mesoterapia capilar consiste na aplicação de um coquetel de vitaminas, minerais e ativos específicos diretamente no couro cabeludo. Este tratamento estimula a circulação sanguínea, fortalece os folículos pilosos e promove o crescimento de fios mais saudáveis.",
      "Os ativos são aplicados através de microinjeções na derme do couro cabeludo, garantindo que os nutrientes cheguem diretamente aos folículos pilosos. Isso resulta em maior eficácia comparado aos tratamentos tópicos convencionais.",
      "O tratamento é personalizado conforme as necessidades específicas de cada paciente, podendo incluir vitaminas do complexo B, aminoácidos, minerais, fatores de crescimento e outros ativos que nutrem e revitalizam o couro cabeludo."
    ],
    duration: "45-60 minutos",
    price: "A partir de R$ 250",
    image: {
      src: "/images/@lucasantosfotografo-51.jpg",
      alt: "Mesoterapia Capilar"
    },
    benefits: ["Estimula o crescimento capilar", "Fortalece os fios", "Melhora a circulação do couro cabeludo", "Reduz a queda de cabelo", "Nutrição profunda", "Aumenta densidade capilar", "Melhora qualidade dos fios", "Revitaliza folículos pilosos"],
    indications: ["Queda de cabelo", "Alopecia androgenética", "Cabelos finos e fracos", "Falta de densidade", "Couro cabeludo ressecado", "Calvície inicial", "Cabelos sem brilho", "Envelhecimento capilar"],
    process: [
      { step: "1", title: "Avaliação Tricológica", description: "Análise completa do couro cabeludo e identificação das necessidades." },
      { step: "2", title: "Preparação", description: "Limpeza do couro cabeludo e preparação dos ativos específicos." },
      { step: "3", title: "Aplicação", description: "Injeção dos ativos revitalizantes diretamente no couro cabeludo." },
      { step: "4", title: "Massagem", description: "Massagem estimulante para potencializar a absorção dos ativos." }
    ],
    protocols: [
      { title: "Fase Intensiva", sessions: "4-6 sessões", description: "Sessões semanais para resultados iniciais", details: ["• Estímulo inicial dos folículos", "• Nutrição profunda", "• Redução da queda"] },
      { title: "Fase de Consolidação", sessions: "4-6 sessões", description: "Sessões quinzenais para consolidar resultados", details: ["• Fortalecimento dos fios", "• Aumento da densidade", "• Melhora da qualidade"] },
      { title: "Manutenção", sessions: "Mensal", description: "Sessões mensais para manter os resultados", details: ["• Preservação dos resultados", "• Prevenção da queda", "• Saúde capilar contínua"] }
    ],
    faq: [
      { question: "O procedimento é doloroso?", answer: "O desconforto é mínimo. Utilizamos agulhas muito finas e técnicas que minimizam qualquer incômodo durante a aplicação." },
      { question: "Quando posso ver os primeiros resultados?", answer: "Os primeiros sinais de melhora aparecem após 4-6 semanas, com redução da queda e melhora da qualidade dos fios." },
      { question: "Posso lavar o cabelo após o tratamento?", answer: "Recomendamos aguardar 24 horas antes de lavar o cabelo para permitir a absorção completa dos ativos aplicados." }
    ],
    cta: {
      title: "Pronto para revitalizar seus cabelos?",
      subtitle: "Agende uma avaliação tricológica e descubra como a mesoterapia capilar pode transformar a saúde e beleza dos seus cabelos."
    }
  }
];
