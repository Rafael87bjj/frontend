// BOTÃO SCROLL TOP (Subir para o topo do site)

// Função para rolar a página até o topo
function scrollToTop() {
    window.scrollTo({
        top: 0, // Define a posição de rolagem no topo da página (0 pixels de distância do topo)
    });
}

// Adiciona um evento que será executado sempre que a página for rolada
window.addEventListener('scroll', function () {
    // Seleciona o botão que rola a página para o topo
    var scrollTopButton = document.querySelector('.scroll-top');

    // Verifica se a página foi rolada mais de 200 pixels
    if (this.window.pageYOffset > 200) {
        // Se sim, exibe o botão para rolar até o topo
        scrollTopButton.style.display = 'block';
    } else {
        // Caso contrário, esconde o botão
        scrollTopButton.style.display = 'none';
    }
});
