const next = document.querySelectorAll('.btn-proximo');

next.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativa')
        const proximaExplicacao = 'explicacao-' + this.getAttribute('data-proximo')

        atual.classList.remove('ativa')
        document.getElementById(proximaExplicacao).classList.add('ativa')
    })
})