// Função para mover o botão flutuante
let clickCount = 0;
const headerTexts = [
    "Quer mesmo entrar nessa casa?",
    "Você tem certeza?",
    "Certo, pode entrar então!"
];

function moveText() {
    try {
        const floatingText = document.querySelector('.floating-text');
        const header = document.querySelector('.main-header h1');
        
        if (!floatingText || !header) {
            console.error('Elementos não encontrados');
            return;
        }
        
        // Incrementar contador de cliques
        clickCount++;
        
        // Mudar texto do header
        if (clickCount <= headerTexts.length) {
            header.textContent = headerTexts[clickCount - 1];
        }
        
        // Mover o botão para uma posição aleatória
        const maxX = window.innerWidth - floatingText.offsetWidth;
        const maxY = window.innerHeight - floatingText.offsetHeight;
        
        const randomX = Math.max(20, Math.random() * maxX);
        const randomY = Math.max(20, Math.random() * maxY);
        
        floatingText.style.left = randomX + 'px';
        floatingText.style.top = randomY + 'px';
        floatingText.style.transform = 'none';
        
        // Adicionar efeito visual ao botão
        floatingText.style.transform = 'scale(0.95)';
        setTimeout(() => {
            floatingText.style.transform = 'scale(1)';
        }, 150);
        
        // Fazer o botão desaparecer após 3 cliques
        if (clickCount >= 3) {
            setTimeout(() => {
                floatingText.style.opacity = '0';
                floatingText.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    floatingText.style.display = 'none';
                    
                    // Ativar a vinheta após o botão desaparecer
                    setTimeout(() => {
                        sequenciaVinhetaComCena();
                    }, 500);
                }, 300);
            }, 500);
        }
        
    } catch (error) {
        console.error('Erro ao mover botão:', error);
    }
}

// Função para lidar com teclas (acessibilidade)
function handleKeyPress(event) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        moveText();
    }
}

// Função para verificar se as imagens carregaram
function checkImagesLoaded() {
    const images = document.querySelectorAll('img');
    let loadedCount = 0;
    
    images.forEach(img => {
        if (img.complete) {
            loadedCount++;
        } else {
            img.addEventListener('load', () => {
                loadedCount++;
                if (loadedCount === images.length) {
                    console.log('Todas as imagens carregaram com sucesso!');
                }
            });
            
            img.addEventListener('error', () => {
                console.error('Erro ao carregar imagem:', img.src);
            });
        }
    });
}

// Função para otimizar performance em dispositivos móveis
function optimizeForMobile() {
    if ('ontouchstart' in window) {
        // Dispositivo touch
        document.body.classList.add('touch-device');
        
        // Otimizar para touch
        const floatingText = document.querySelector('.floating-text');
        if (floatingText) {
            floatingText.style.touchAction = 'manipulation';
        }
    }
}

// Função para verificar suporte de recursos
function checkFeatureSupport() {
    const features = {
        backdropFilter: CSS.supports('backdrop-filter', 'blur(10px)'),
        clamp: CSS.supports('width', 'clamp(100px, 50vw, 300px)'),
        grid: CSS.supports('display', 'grid'),
        flexbox: CSS.supports('display', 'flex')
    };
    
    console.log('Suporte de recursos:', features);
    
    // Fallbacks para navegadores sem suporte
    if (!features.backdropFilter) {
        document.body.classList.add('no-backdrop-filter');
    }
    
    if (!features.clamp) {
        document.body.classList.add('no-clamp');
    }
}

// ===== CONTROLE DE TRILHA SONORA =====

// Variáveis para controle do áudio
let isPlaying = false;

// Função para iniciar o áudio
function iniciarAudio() {
    const audio = document.getElementById('trilha-sonora');
    if (audio) {
        audio.volume = 0.3; // Volume baixo (30%)
        audio.play().then(() => {
            isPlaying = true;
            const toggleBtn = document.getElementById('audio-toggle');
            if (toggleBtn) {
                toggleBtn.textContent = '🔊';
                toggleBtn.classList.remove('muted');
            }
        }).catch(error => {
            // Erro ao reproduzir áudio (normal em alguns navegadores)
        });
    }
}

// Função para alternar áudio
function toggleAudio() {
    const audio = document.getElementById('trilha-sonora');
    const toggleBtn = document.getElementById('audio-toggle');
    
    if (audio && toggleBtn) {
        if (isPlaying) {
            audio.pause();
            isPlaying = false;
            toggleBtn.textContent = '🔇';
            toggleBtn.classList.add('muted');
        } else {
            audio.play();
            isPlaying = true;
            toggleBtn.textContent = '🔊';
            toggleBtn.classList.remove('muted');
        }
    }
}

// Função para fade out do áudio
function fadeOutAudio() {
    const audio = document.getElementById('trilha-sonora');
    if (audio && isPlaying) {
        const fadeOut = setInterval(() => {
            if (audio.volume > 0.1) {
                audio.volume -= 0.1;
            } else {
                audio.pause();
                clearInterval(fadeOut);
            }
        }, 100);
    }
}

// Inicialização quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    console.log('🍎 Apple House da Mari carregada com sucesso!');
    
    // Verificar suporte de recursos
    checkFeatureSupport();
    
    // Otimizar para dispositivos móveis
    optimizeForMobile();
    
    // Verificar carregamento das imagens
    checkImagesLoaded();
    
    // Configurar controle de áudio
    const toggleBtn = document.getElementById('audio-toggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleAudio);
    }
    
    // Tentar iniciar o áudio após primeira interação do usuário
    document.addEventListener('click', function() {
        if (!isPlaying) {
            iniciarAudio();
        }
    }, { once: true });
    
    // Adicionar listener para redimensionamento da janela
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            // Reposicionar elementos se necessário
            const floatingText = document.querySelector('.floating-text');
            if (floatingText && floatingText.style.left !== '50%') {
                // Se o botão foi movido, centralizar novamente
                floatingText.style.left = '50%';
                floatingText.style.top = '50%';
                floatingText.style.transform = 'translate(-50%, -50%)';
            }
        }, 250);
    });
    
    // Adicionar listener para orientação do dispositivo
    window.addEventListener('orientationchange', function() {
        setTimeout(function() {
            // Ajustar layout após mudança de orientação
            const floatingText = document.querySelector('.floating-text');
            if (floatingText && floatingText.style.left !== '50%') {
                floatingText.style.left = '50%';
                floatingText.style.top = '50%';
                floatingText.style.transform = 'translate(-50%, -50%)';
            }
        }, 100);
    });
    
    // Fade out do áudio quando sair da página
    window.addEventListener('beforeunload', function() {
        fadeOutAudio();
    });
});

// Função para verificar se o site está funcionando
function healthCheck() {
    const elements = {
        header: document.querySelector('.main-header'),
        floatingText: document.querySelector('.floating-text'),
        bottomGif: document.querySelector('.bottom-gif'),
        casaOverlay: document.querySelector('.casa-overlay'),
        nuvens: document.querySelectorAll('.nuvem')
    };

    const status = {};
    for (const [key, element] of Object.entries(elements)) {
        status[key] = element !== null;
    }
    
    console.log('Status dos elementos:', status);
    return status;
}

// Expor função para debug
window.healthCheck = healthCheck;
window.moveText = moveText;
window.clickCount = () => clickCount;
window.toggleAudio = toggleAudio;

// ===== FUNÇÕES DA VINHETA CIRCULAR =====

// Função para ativar a vinheta
function ativarVinheta() {
    const vinheta = document.getElementById('vinheta');
    if (vinheta) {
        vinheta.classList.add('active');
        console.log('🍎 Vinheta ativada!');
    }
}

// Função para fechar a vinheta (tela fica preta)
function fecharVinheta() {
    const vinheta = document.getElementById('vinheta');
    if (vinheta) {
        vinheta.classList.add('closing');
        
        // Fazer fade out do áudio quando a vinheta fechar
        fadeOutAudio();
        
        // Após a transição, aplicar o estado fechado
        setTimeout(() => {
            vinheta.classList.remove('closing');
            vinheta.classList.add('closed');
            
            // Aplicar background preto ao body
            document.body.classList.add('vinheta-finished');
            
            console.log('🍎 Vinheta fechada - tela completamente preta!');
        }, 3000); // 3 segundos para a transição
    }
}

// Função para abrir a vinheta (mostra nova cena)
function abrirVinheta() {
    const vinheta = document.getElementById('vinheta');
    if (vinheta) {
        // Remover classes da vinheta
        vinheta.classList.remove('closed', 'closing', 'active');
        
        // Remover background preto do body
        document.body.classList.remove('vinheta-finished');
        
        console.log('🍎 Vinheta aberta - nova cena revelada!');
    }
}

// Função para iniciar nova cena com vinheta reversa
function iniciarNovaCena() {
    const vinheta = document.getElementById('vinheta');
    if (vinheta) {
        console.log('🍎 Iniciando nova cena...');
        
        // Garantir que a vinheta esteja completamente preta
        vinheta.classList.remove('active', 'closing');
        vinheta.classList.add('closed');
        document.body.classList.add('vinheta-finished');
        
        // Aqui você pode adicionar o conteúdo da nova cena
        // Por exemplo, trocar conteúdo HTML, mostrar novos elementos, etc.
        mostrarNovaCena();
        
        // Após 1 segundo, abrir a vinheta para revelar a nova cena
        setTimeout(() => {
            abrirVinheta();
        }, 1000);
    }
}

// Função para mostrar o conteúdo da nova cena
function mostrarNovaCena() {
    console.log('🍎 Redirecionando para scenes/cena2.html...');
    
    // Redirecionar para o arquivo cena2.html na pasta scenes
    window.location.href = 'scenes/cena2.html';
}

// Função para sequência completa da vinheta
function sequenciaVinheta() {
    console.log('🍎 Iniciando sequência da vinheta...');
    
    // Ativar vinheta
    ativarVinheta();
    
    // Fechar após 1 segundo
    setTimeout(() => {
        fecharVinheta();
    }, 1000);
    
    // Abrir após 6 segundos (3s de transição + 3s de tela preta)
    setTimeout(() => {
        abrirVinheta();
    }, 7000);
}

// Função para sequência da vinheta COM nova cena
function sequenciaVinhetaComCena() {
    console.log('🍎 Iniciando sequência da vinheta com nova cena...');
    
    // Ativar vinheta
    ativarVinheta();
    
    // Fechar após 1 segundo
    setTimeout(() => {
        fecharVinheta();
    }, 1000);
    
    // Após 5 segundos de tela preta, iniciar nova cena
    setTimeout(() => {
        iniciarNovaCena();
    }, 5000); // 5 segundos após o botão ser pressionado
}

// Função para vinheta com tempo personalizado
function vinhetaPersonalizada(tempoAtivacao = 1000, tempoFechada = 3000) {
    console.log(`🍎 Vinheta personalizada: ${tempoAtivacao}ms ativação, ${tempoFechada}ms fechada`);
    
    ativarVinheta();
    
    setTimeout(() => {
        fecharVinheta();
    }, tempoAtivacao);
    
    setTimeout(() => {
        abrirVinheta();
    }, tempoAtivacao + 3000 + tempoFechada);
}

// Expor funções da vinheta globalmente
window.ativarVinheta = ativarVinheta;
window.fecharVinheta = fecharVinheta;
window.abrirVinheta = abrirVinheta;
window.sequenciaVinheta = sequenciaVinheta;
window.sequenciaVinhetaComCena = sequenciaVinhetaComCena;
window.iniciarNovaCena = iniciarNovaCena;
window.mostrarNovaCena = mostrarNovaCena;
window.vinhetaPersonalizada = vinhetaPersonalizada;