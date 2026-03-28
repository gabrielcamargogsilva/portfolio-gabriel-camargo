const projetos = [
    {
        id: 1,
        titulo: "GramatXplorer (TCC)",
        descCurta: "Sistema de Back-End robusto para processamento linguístico.",
        descLonga: "Desenvolvido como TCC, este projeto foca em processamento de linguagem natural (NLP). Utiliza Python e Flask para análise gramatical complexa com persistência em FirebaseSQL.",
        tags: ["PYTHON", "FLASK", "NLP", "FIREBASE"],
        imagem: "assets/img/tcc.jpg",
        github: "https://github.com/gabrielcamargogsilva/GramatXplorer---TCC",
        demo: "#"
    },
    {
        id: 2,
        titulo: "Sistema Academia Fullstack",
        descCurta: "Gestão completa com interfaces Admin e Cliente.",
        descLonga: "Um ecossistema completo para academias. A parte Admin permite o registro de alunos e gestão, enquanto a parte Cliente foca na experiência do usuário e consulta de dados.",
        tags: ["NODE.JS", "REACT", "FULLSTACK"],
        imagem: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800",
        // Links múltiplos para este projeto
        links: [
            { label: "GitHub Admin", url: "https://github.com/gabrielcamargogsilva/Projeto-Academia-Admin", tipo: "github" },
            { label: "GitHub Cliente", url: "https://github.com/gabrielcamargogsilva/Projeto-Academia-Cliente.git", tipo: "github" },
            { label: "Ver Admin", url: "https://projeto-academia-admin-liart.vercel.app/", tipo: "demo" },
            { label: "Ver Cliente", url: "https://projeto-academia-cliente.vercel.app/", tipo: "demo" }
        ]
    },
    {
        id: 3,
        titulo: "Consultor de Treino",
        descCurta: "Aplicação Fullstack para gestão de treinos.",
        descLonga: "Sistema que separa a lógica de interface em React da inteligência de dados no Back-end, permitindo uma gestão de treinos eficiente e escalável.",
        tags: ["REACT", "NODE.JS", "API REST"],
        imagem: "assets/img/treinai.png",
        links: [
            { label: "GitHub Front", url: "https://github.com/gabrielcamargogsilva/Consultor-de-treino---Front-End", tipo: "github" },
            { label: "GitHub API", url: "https://github.com/gabrielcamargogsilva/Consultor-de-treino---Back-End.git", tipo: "github" },
            { label: "Ver", url: "https://consultor-de-treino-front-end.vercel.app/", tipo: "demo" }
        ]
    },
    {
        id: 4,
        titulo: "API & Front de Charadas",
        descCurta: "API REST própria com interface de consumo.",
        descLonga: "Projeto focado na criação de uma API de entretenimento e na implementação de um Front-end moderno para consumir esses dados de forma assíncrona.",
        tags: ["API", "JAVASCRIPT", "BACKEND"],
        imagem: "assets/img/charada.png",
        links: [
            { label: "GitHub API", url: "https://github.com/gabrielcamargogsilva/ProjetoAPI_Charada", tipo: "github" },
            { label: "GitHub Front", url: "https://github.com/gabrielcamargogsilva/Front-end-Charada", tipo: "github" },
            { label: "Ver", url: "https://front-end-charada-sigma.vercel.app/", tipo: "demo" },
        ]
    },
    {
        id: 5,
        titulo: "Consultor Tabela FIPE",
        descCurta: "Consulta de preços de veículos em tempo real.",
        descLonga: "Consome uma API externa oficial para fornecer dados atualizados sobre o mercado automóvel brasileiro de forma intuitiva.",
        tags: ["REACT", "TAILWIND", "API"],
        imagem: "assets/img/fipe.png",
        github: "https://github.com/gabrielcamargogsilva/Projeto-API-Tabela-FIPE",
        links: [
            { label: "GitHub ", url: "https://github.com/gabrielcamargogsilva/Projeto-API-Tabela-FIPE", tipo: "github" },
            { label: "Ver", url: "https://projeto-api-tabela-fipe.vercel.app/", tipo: "demo" }
        ]
    },
    {
        id: 6,
        titulo: "Front-end Netflix Clone",
        descCurta: "Clone da interface da Netflix com Html, CSS e JavaScript.",
        descLonga: "Projeto de front-end que replica a interface da Netflix utilizando apenas HTML, CSS e JavaScript, focando na responsividade e interatividade. Fins de uma imersão para aprimorar habilidades de design e desenvolvimento web.",
        tags: ["HTML", "CSS", "JAVASCRIPT"],
        imagem: "assets/img/front-end-netflix.png",
        github: "https://github.com/gabrielcamargogsilva/netflix",
        links: [
            { label: "GitHub ", url: "https://github.com/gabrielcamargogsilva/netflix", tipo: "github" },
            { label: "Ver", url: "https://netflix-xi-plum.vercel.app/", tipo: "demo" }
        ]
    }
];

const containerProjetos = document.getElementById('lista-projetos');
const modal = document.getElementById('modal-projeto');

function renderizarProjetos() {
    containerProjetos.innerHTML = projetos.map(p => `
        <div onclick="abrirModal(${p.id})" class="bg-[#0f172a] rounded-2xl overflow-hidden border border-gray-800 hover:border-emerald-500 transition-all duration-300 group cursor-pointer shadow-lg">
            <div class="h-44 overflow-hidden relative">
                <img src="${p.imagem}" class="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-500">
                <div class="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent"></div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold mb-2 text-white">${p.titulo}</h3>
                <p class="text-gray-400 text-sm mb-4 line-clamp-2">${p.descCurta}</p>
                <span class="text-emerald-500 text-xs font-bold uppercase tracking-widest">Detalhes →</span>
            </div>
        </div>
    `).join('');
}

function abrirModal(id) {
    const p = projetos.find(proj => proj.id === id);
    if (!p) return;

    document.getElementById('modal-titulo').innerText = p.titulo;
    document.getElementById('modal-desc-longa').innerText = p.descLonga;
    document.getElementById('modal-img').src = p.imagem;
    
    // Gerar Tags
    const tagsContainer = document.getElementById('modal-tags');
    tagsContainer.innerHTML = p.tags.map(t => `<span class="bg-emerald-500/10 text-emerald-400 text-[10px] font-bold px-3 py-1 rounded-full border border-emerald-500/20">${t}</span>`).join('');

    // Gerar Botões Dinâmicos
    const linksContainer = document.getElementById('modal-links-container');
    linksContainer.innerHTML = ""; // Limpa os botões

    // Se o projeto tiver a estrutura de links múltiplos (como Academia ou Charadas)
    if (p.links) {
        p.links.forEach(link => {
            const estilo = link.tipo === 'github' ? 'bg-white text-black hover:bg-gray-200' : 'bg-emerald-600 text-white hover:bg-emerald-500';
            linksContainer.innerHTML += `
                <a href="${link.url}" target="_blank" class="flex-1 min-w-[140px] ${estilo} text-center py-3 rounded-xl font-bold transition-all text-sm uppercase">
                    ${link.label}
                </a>
            `;
        });
    } else {
        // Fallback para projetos simples (Tabela FIPE, etc)
        linksContainer.innerHTML = `
            <a href="${p.github}" target="_blank" class="flex-1 bg-white text-black text-center py-3 rounded-xl font-bold hover:bg-gray-200 transition-all text-sm uppercase">GitHub</a>
            ${p.demo !== "#" ? `<a href="${p.demo}" target="_blank" class="flex-1 bg-emerald-600 text-white text-center py-3 rounded-xl font-bold hover:bg-emerald-500 transition-all text-sm uppercase">Acessar Demo</a>` : ''}
        `;
    }

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function fecharModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

window.onclick = function(event) { if (event.target == modal) fecharModal(); }
document.addEventListener('DOMContentLoaded', renderizarProjetos);


