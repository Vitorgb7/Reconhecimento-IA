// evento de escrolar e ir aparecendo os elementos ao decorrer de descer com o mouse
window.addEventListener('scroll', () => {
    const conteudoHeroiverso = document.getElementById('conteudo-heroiverso');
    
    // ele pega a distância do elemento em relação ao topo da janela visível
    const distanciaDoTopo = conteudoHeroiverso.getBoundingClientRect().top;
    conteudoHeroiverso.style.opacity = 0;
    
// esse if olha se o elemento está visível na janela visível do navegador
    if (distanciaDoTopo < window.innerHeight) {
        conteudoHeroiverso.style.opacity = 1;
        conteudoHeroiverso.style.transition = 'opacity 3s ease';
    }
})

// evento de escrolar e ir aparecendo os elementos ao decorrer de descer com o mouse na segunda sessao do site(area dos personagens)
window.addEventListener('scroll', () => {
    const sessaoPersonagens = document.getElementById('sessao-personagens');
    
    const distanciaDoTopo = sessaoPersonagens.getBoundingClientRect().top;
    sessaoPersonagens.style.opacity = 0;
    
    if (distanciaDoTopo < window.innerHeight) {
        sessaoPersonagens.style.opacity = 1;
        sessaoPersonagens.style.transition = 'opacity 5s ease';
    }
})
