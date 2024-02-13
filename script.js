// Variaveis dos elementos no HTML.
const menuMobile = document.querySelector('.menu-mobile');
const hamburgerIcon = document.getElementById('hamburger-mobile');
const closeIcon = document.getElementById('close-mobile');
const navMenu = document.querySelector('.menu-mobile ul');

// Adicionar eventos para abrir e fechar menu.
hamburgerIcon.addEventListener("click", chamadaMenu);
closeIcon.addEventListener("click", chamadaMenu);

function chamadaMenu(){
    // Verificar se o menu ta aberto.
    const menuAberto = menuMobile.classList.contains('aberto');

    // Se o menu tiver aberto, fechar.
    if (menuAberto) {
        menuMobile.classList.remove('aberto');
        hamburgerIcon.style.display = 'block';
        closeIcon.style.display = 'none';
        navMenu.style.display = 'none';
    } else {
        // Se o menu estiver fechado, abrir.
        menuMobile.classList.add('aberto');
        hamburgerIcon.style.display = 'none';
        closeIcon.style.display = 'block';
        navMenu.style.display = 'flex';
    }
}