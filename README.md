# 🍎 Apple House da Mari

Uma casa encantada em formato de maçã com céu animado e interatividade.

## ✨ Funcionalidades

### 🌤️ **Céu Animado**
- **Gradiente natural** de azul claro a branco azulado
- **Nuvens estáticas** posicionadas estrategicamente
- **Sol brilhante** com animação suave de brilho
- **Casa PNG** sobreposta ao céu (fundo.png)

### 🎮 **Interatividade**
- **Botão flutuante** que se move aleatoriamente
- **Contador de cliques** (1-3)
- **Mudança de texto** no header a cada clique:
  1. "Aceita entrar na minha casa, Mari? 🍎"
  2. "Você tem certeza mesmo?"
  3. "Certo, pode entrar então"
- **Desaparecimento** do botão após 3 cliques

### 🎨 **Elementos Visuais**
- **5 nuvens** com formas realistas e profundidade
- **GIF decorativo** na parte inferior
- **Header responsivo** com backdrop-filter
- **Animações suaves** e transições

## 📁 Estrutura dos Arquivos

```
📦 Apple House
├── 📄 index.html          # Estrutura HTML principal
├── 🎨 styles.css          # Estilos CSS e animações
├── ⚡ script.js           # Lógica JavaScript
├── 🏠 fundo.png           # Imagem da casa em formato de maçã
├── 🎭 2628418_a3601.gif  # GIF decorativo inferior
└── 📖 README.md           # Documentação do projeto
```

## 🚀 Como Usar

1. **Abra** `index.html` em um navegador
2. **Clique** no botão "Clique aqui" no centro
3. **Observe** o texto mudar a cada clique
4. **Veja** o botão desaparecer após 3 cliques

## 🛠️ Tecnologias

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos, animações e responsividade
- **JavaScript ES6+** - Interatividade e funcionalidades
- **CSS Variables** - Sistema de cores consistente
- **Media Queries** - Responsividade completa

## 📱 Responsividade

- **Desktop** - Layout otimizado para telas grandes
- **Tablet** - Adaptação para dispositivos médios
- **Mobile** - Interface otimizada para touch
- **Landscape** - Ajustes para orientação horizontal

## 🎯 Funcionalidades JavaScript

### **Variáveis Globais**
- `clickCount` - Contador de cliques
- `headerTexts` - Array com textos do header

### **Funções Principais**
- `moveText()` - Lógica principal do botão
- `handleKeyPress()` - Acessibilidade por teclado
- `healthCheck()` - Verificação de elementos
- `checkImagesLoaded()` - Controle de carregamento
- `optimizeForMobile()` - Otimizações mobile

### **Event Listeners**
- `DOMContentLoaded` - Inicialização
- `resize` - Redimensionamento da janela
- `orientationchange` - Mudança de orientação

## 🎨 Sistema de Cores

```css
:root {
    --primary-color: #ffffff;      /* Branco principal */
    --secondary-color: #2c3e50;   /* Azul escuro */
    --accent-color: #e74c3c;      /* Vermelho maçã */
    --overlay-dark: rgba(0, 0, 0, 0.3);
    --overlay-darker: rgba(0, 0, 0, 0.7);
    --overlay-darkest: rgba(0, 0, 0, 0.8);
}
```

## 🔧 Debug e Desenvolvimento

### **Funções de Debug**
```javascript
// Verificar status dos elementos
healthCheck()

// Ver contador de cliques
clickCount()

// Executar função manualmente
moveText()
```

### **Console Logs**
- Carregamento de imagens
- Suporte de recursos CSS
- Status dos elementos
- Erros e exceções

## 🌟 Características Especiais

- **Céu CSS puro** sem dependências de imagens
- **Nuvens HTML reais** para máxima compatibilidade
- **Animações suaves** com fallbacks
- **Acessibilidade completa** (ARIA, teclado)
- **Performance otimizada** para mobile
- **Responsividade extrema** para todos os dispositivos

## 📝 Licença

Projeto pessoal criado por Gabriel para Mari 🍎

---

*Uma casa encantada onde a magia acontece a cada clique! ✨🏠*
