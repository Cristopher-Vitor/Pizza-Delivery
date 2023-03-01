export default function initPizzaModal(){
    const pizzas = document.querySelectorAll('.pizzas li');
    const pizzasImg = document.querySelectorAll('.pizzas img');
    const botoesAbrir = document.querySelectorAll('.pizzas li a');
    const botaoFechar = document.querySelector('[data-pizza="fechar"]');
    const containderModal = document.querySelector('[data-modal="pizza-container"]');

    function abrirModal(){
        containderModal.classList.add('ativo');
    }

    function fecharModal(){
        containderModal.classList.remove('ativo');
    }

    function modalEvents(){
        botaoFechar.addEventListener('click', fecharModal);
        pizzasImg.forEach((item) =>{
            item.addEventListener('click', abrirModal);
})
        botoesAbrir.forEach((item) =>{
            item.addEventListener('click', abrirModal);
})
}


modalEvents();
}
