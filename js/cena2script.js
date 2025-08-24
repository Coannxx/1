document.addEventListener('DOMContentLoaded', function() {
    console.log('🍎 Cena 2 carregada!');
    
    setTimeout(() => {
        const vinheta = document.getElementById('vinheta-cena2');
        if (vinheta) {
            console.log('🍎 Abrindo vinheta da cena 2...');
            vinheta.classList.add('opening');
            
            setTimeout(() => {
                // Mostrar o texto central após a vinheta abrir
                const textoCentral = document.querySelector('.texto-central');
                if (textoCentral) {
                    textoCentral.style.opacity = '1';
                    console.log('🍎 Texto central exibido!');
                }
                
                setTimeout(() => {
                    vinheta.style.display = 'none';
                    console.log('🍎 Vinheta removida da tela');
                    
                    // Tornar a tela clicável
                    document.body.classList.add('clickable');
                    console.log('🍎 Tela agora é clicável!');
                }, 500);
                
            }, 3000);
        }
    }, 1000);
    
    // Adicionar listener para clique em qualquer lugar da tela
    document.addEventListener('click', function() {
        if (document.body.classList.contains('clickable')) {
            iniciarFesta();
        }
    });
});

function iniciarFesta() {
    console.log('🍎 Festa iniciada!');
    
    // Remover classe clicável
    document.body.classList.remove('clickable');
    
    // Fazer o texto desaparecer
    const textoCentral = document.querySelector('.texto-central');
    if (textoCentral) {
        textoCentral.style.opacity = '0';
        setTimeout(() => {
            textoCentral.style.display = 'none';
        }, 1000);
    }
    
    // Mostrar o GIF de dança
    const gifContainer = document.querySelector('.gif-danca-container');
    if (gifContainer) {
        gifContainer.classList.add('visible');
        gifContainer.style.opacity = '1'; // Forçar opacidade
        gifContainer.style.display = 'block'; // Garantir que está visível
        console.log('🍎 GIF de dança aparecendo!');
        
        // Iniciar música
        const audio = document.getElementById('trilha-cena2');
        if (audio) {
            audio.volume = 0.5;
            audio.play().then(() => {
                console.log('🍎 Música da cena 2 iniciada!');
                iniciarSincronizacaoLetra(audio);
            }).catch(error => {
                console.log('🍎 Erro ao tocar música:', error);
            });
        }
        
        // Fazer o GIF crescer imediatamente (crescimento será muito lento)
        gifContainer.classList.add('growing');
        console.log('🍎 GIF começando a crescer muito lentamente...');
        
        // Log para debug
        console.log('🍎 Estado do GIF:', {
            opacity: gifContainer.style.opacity,
            display: gifContainer.style.display,
            classes: gifContainer.className
        });
    }
}

function voltarCenaAnterior() {
    const vinheta = document.createElement('div');
    vinheta.className = 'vinheta-overlay';
    vinheta.style.width = '0';
    vinheta.style.height = '0';
    vinheta.style.opacity = '0';
    document.body.appendChild(vinheta);
    
    setTimeout(() => {
        vinheta.style.width = '200vw';
        vinheta.style.height = '200vw';
        vinheta.style.opacity = '1';
    }, 100);
    
    setTimeout(() => {
        window.location.href = '../index.html';
    }, 3000);
}

function proximaCena() {
    const vinheta = document.createElement('div');
    vinheta.className = 'vinheta-overlay';
    vinheta.style.width = '0';
    vinheta.style.height = '0';
    vinheta.style.opacity = '0';
    document.body.appendChild(vinheta);
    
    setTimeout(() => {
        vinheta.style.width = '200vw';
        vinheta.style.height = '200vw';
        vinheta.style.opacity = '1';
    }, 100);
    
    setTimeout(() => {
        // window.location.href = 'cena3.html'; // Cena 3 não implementada ainda
    }, 3000);
}

// Função para sincronizar a letra com a música
function iniciarSincronizacaoLetra(audio) {
    console.log('🎵 Iniciando sincronização da letra...');
    
    // Mostrar a letra da música
    const letraMusica = document.querySelector('.letra-musica');
    const letraAtual = document.getElementById('letra-atual');
    
    if (letraMusica && letraAtual) {
        letraMusica.classList.add('visible');
        console.log('🎵 Letra da música ativada!');
        
        // Iniciar sincronização da letra
        iniciarSincronizacaoLetra(audio, letraAtual);
    }
    
    // Função para sincronizar a letra com a música
    function iniciarSincronizacaoLetra(audio, elementoLetra) {
        console.log('🎵 Iniciando sincronização da letra...');
        
        // Array com todas as letras e seus tempos
        const letras = [
            { texto: "Eu conheci uma menina diferente", inicio: 10, fim: 15 },
            { texto: "Me apaixonei e foi assim tão de repente", inicio: 16, fim: 20 },
            { texto: "Nunca pensei que pudesse gostar", inicio: 21, fim: 25 },
            { texto: "De uma garota que só sabe me esnobar", inicio: 26, fim: 30 },
            { texto: "E ela já faz faculdade e eu aqui", inicio: 31, fim: 35 },
            { texto: "Aprendendo a dirigir", inicio: 36, fim: 37 },
            { texto: "Nem sei se vou me formar", inicio: 38, fim: 40 },
            { texto: "E ela diz que um garotinho assim", inicio: 41, fim: 45 },
            { texto: "Que só quer se divertir", inicio: 46, fim: 48 },
            { texto: "Nunca vai te conquistar", inicio: 49, fim: 51 },
            { texto: "Ela não gosta da minha roupa", inicio: 52, fim: 54 },
            { texto: "Vive falando do meu cabelo", inicio: 55, fim: 57 },
            { texto: "Reclama sempre o meu estranho jeito de falar", inicio: 58, fim: 62 },
            { texto: "Mas quando beija a minha boca", inicio: 63, fim: 65 },
            { texto: "Perde a cabeça e fica louca", inicio: 66, fim: 68 },
            { texto: "É uma questão de tempo até você se entregar", inicio: 69, fim: 73 },
            { texto: ":)", inicio: 74, fim: 85 },
            { texto: "Eu conheci uma menina diferente", inicio: 85, fim: 89 },
            { texto: "Me apaixonei e foi assim tão de repente", inicio: 90, fim: 94 },
            { texto: "Nunca pensei que pudesse gostar", inicio: 95, fim: 99 },
            { texto: "De uma garota que só sabe me esnobar", inicio: 100, fim: 104 },
            { texto: "E ela já faz faculdade e eu aqui", inicio: 105, fim: 109 },
            { texto: "Aprendendo a dirigir", inicio: 109, fim: 110 },
            { texto: "Nem sei se vou me formar", inicio: 111, fim: 114 },
            { texto: "E ela diz que um garotinho assim", inicio: 115, fim: 119 },
            { texto: "Que só quer se divertir", inicio: 120, fim: 122 },
            { texto: "Nunca vai te conquistar", inicio: 123, fim: 125 },
            { texto: "Ela não gosta da minha roupa", inicio: 126, fim: 128 },
            { texto: "Vive falando do meu cabelo", inicio: 129, fim: 131 },
            { texto: "Reclama sempre o meu estranho jeito de falar", inicio: 132, fim: 137 },
            { texto: "Mas quando beija a minha boca", inicio: 138, fim: 140 },
            { texto: "Perde a cabeça e fica louca", inicio: 141, fim: 142 },
            { texto: "É uma questão de tempo até você se entregar", inicio: 143, fim: 147 },
            { texto: "Ela não gosta da minha roupa", inicio: 148, fim: 150 },
            { texto: "Vive falando do meu cabelo", inicio: 151, fim: 153 },
            { texto: "Reclama sempre o meu estranho jeito de falar", inicio: 154, fim: 158 },
            { texto: "Mas quando beija a minha boca", inicio: 159, fim: 161 },
            { texto: "Perde a cabeça e fica louca", inicio: 162, fim: 163 },
            { texto: "É uma questão de tempo, até você...", inicio: 164, fim: 168 },
            { texto: "Me namorar", inicio: 169, fim: 179 }
        ];
        
        // Função para atualizar a letra baseada no tempo da música
        function atualizarLetra() {
            const tempoAtual = audio.currentTime;
            
            // Encontrar a letra atual
            const letraAtual = letras.find(letra => 
                tempoAtual >= letra.inicio && tempoAtual <= letra.fim
            );
            
            if (letraAtual) {
                elementoLetra.textContent = letraAtual.texto;
                console.log(`🎵 Letra ativa (${letraAtual.inicio}s-${letraAtual.fim}s): ${letraAtual.texto}`);
            }
        }
        
        // Atualizar a letra a cada 100ms para sincronização suave
        const intervaloLetra = setInterval(atualizarLetra, 100);
        
        // Parar a sincronização quando a música terminar
        audio.addEventListener('ended', () => {
            clearInterval(intervaloLetra);
            console.log('🎵 Música terminou, sincronização parada');
        });
        
        // Parar se a música for pausada
        audio.addEventListener('pause', () => {
            clearInterval(intervaloLetra);
            console.log('🎵 Música pausada, sincronização parada');
        });
    }
    
    // Atualizar a letra a cada 100ms para sincronização suave
    const intervaloLetra = setInterval(atualizarLetra, 100);
    
    // Parar a sincronização quando a música terminar
    audio.addEventListener('ended', () => {
        clearInterval(intervaloLetra);
        console.log('🎵 Música terminou, sincronização parada');
    });
    
    // Parar se a música for pausada
    audio.addEventListener('pause', () => {
        clearInterval(intervaloLetra);
        console.log('🎵 Música pausada, sincronização parada');
    });
}