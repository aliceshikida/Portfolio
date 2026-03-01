// src/data/experiences.js

export const experiences = {
    pt: [
        {
            id: 1,
            year: 'Out 2025 - Atual',
            role: 'Estagiário Desenvolvimento Mobile',
            company: 'Hinova Mobile',
            description:'Atuo no desenvolvimento, manutenção e melhoria contínua de aplicações Web e Mobile, com foco em planejamento, qualidade operacional, desempenho e experiência do usuário. Participo ativamente da organização de demandas, definição de prioridades, acompanhamento de entregas e controle de tarefas, utilizando Azure DevOps e GitHub para garantir rastreabilidade, governança e eficiência nos processos. \n' +
                'Atuo com sistemas CRM e gestão de clientes, colaborando na análise de dados operacionais, melhoria de fluxos, otimização de processos e ajustes estratégicos em projetos e comunicações da equipe. Realizo testes, validações, customizações e otimizações de aplicativos, garantindo redução de falhas, aumento de eficiência e melhoria contínua da performance.',
            type: 'work',
            // Adicione o caminho da imagem (coloque as imagens na pasta public/logos)
            logo: '/logos/Hinova.webp',
            tags: ['.NET', 'Node.js', 'React', 'Scrum', 'Clean Code', 'C#']
        },
        {
            id: 2,
            year: 'Ago 2025 - Fev 2026',
            role: 'Projeto de Extensâo',
            company: 'Puc Minas',
            description: 'Participei de um projeto de extensão da PUC Minas em parceria com a Santa Casa de Misericórdia de Belo Horizonte, que teve como objetivo desenvolver uma solução tecnológica para reduzir a mortalidade causada pela sepse. Dentro desse projeto, me envolvi e participei na criação de um sistema capaz de coletar dados em tempo real dos pacientes internados, integrando essas informações ao Sistema MV da Santa Casa e utilizando Inteligência Artificial para gerar alertas rápidos e antecipar possíveis casos da doença.\n' +
                'Com isso, pude aprender bastante sobre integração de sistemas hospitalares por meio de middleware, uso de Big Data e Inteligência Artificial na análise de dados clínicos, além de aprofundar meus conhecimentos em arquitetura de software e interoperabilidade entre plataformas.',
            type: 'work',
            logo: '/logos/Vellozia.png',
            tags: ['Design Visual', 'Branding', 'Photoshop', 'Criatividade', 'Adobe Illustrator']
        },
        {
            id: 3,
            year: 'Fev 2024 - Atual',
            role: 'Engenharia de Software',
            company: 'PUC Minas',
            description: 'Formação focada em arquitetura de software, POO, modelagem e implementação de sistemas.',
            type: 'academic',
            logo: '/logos/Puc.png',
            tags: ['POO', 'Arquitetura de Software', 'Algoritmos', 'Modelagem']
        },

    ],
    en: [
        // ... Repita a mesma estrutura para o inglês, traduzindo as tags
        {
            id: 1,
            year: 'Out 2025 - Present',
            role: 'Mobile Development Intern',
            company: 'Hinova Mobile',
            description: 'I work in the development, maintenance, and continuous improvement of web and mobile applications, focusing on planning, operational quality, performance, and user experience. I actively participate in organizing demands, defining priorities, monitoring deliverables, and controlling tasks, using Azure DevOps and GitHub to ensure traceability, governance, and efficiency in processes. I work with CRM and customer management systems, collaborating in the analysis of operational data, improving workflows, optimizing processes, and making strategic adjustments to projects and team communications. I perform tests, validations, customizations, and optimizations of applications, ensuring a reduction in failures, increased efficiency, and continuous performance improvement.',
            type: 'work',
            logo: '/logos/Hinova.webp',
            tags: ['.NET', 'Node.js', 'React', 'Scrum', 'Clean Code', 'C#']
        },
        {
            id: 2,
            year: 'Ago 2025 - Feb 2026',
            role: 'Extension Project',
            company: 'Puc Minas',
            description: 'I participated in an extension project at PUC Minas in partnership with Santa Casa de Misericórdia de Belo Horizonte, which aimed to develop a technological solution to reduce mortality caused by sepsis. Within this project, I was involved in and participated in the creation of a system capable of collecting real-time data from hospitalized patients, integrating this information into the Santa Casa\'s MV System and using Artificial Intelligence to generate rapid alerts and anticipate possible cases of the disease.\n' +
                '\n' +
                'With this, I was able to learn a lot about the integration of hospital systems through middleware, the use of Big Data and Artificial Intelligence in the analysis of clinical data, in addition to deepening my knowledge in software architecture and interoperability between platforms.',
            type: 'work',
            logo: '/logos/Vellozia.png',
            tags: ['Visual Design', 'Branding', 'Photoshop', 'Creativity', 'Adobe Illustrator']
        },
        {
            id: 3,
            year: 'Feb 2024 - Present',
            role: 'Software Engineering',
            company: 'PUC Minas',
            description: 'Education focused on software architecture, OOP, modeling, and system implementation.',
            type: 'academic',
            logo: '/logos/Puc.png',
            tags: ['OOP', 'Software Architecture', 'Algorithms', 'Modeling']
        }

    ]
};