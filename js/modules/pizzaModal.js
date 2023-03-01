export default function initPizzaModal(){
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
        botoesAbrir.forEach((item) =>{
            item.addEventListener('click', preencherModal)
        })

        botaoFechar.addEventListener('click', fecharModal);
        botoesAbrir.forEach((item) =>{
            item.addEventListener('click', abrirModal);
        })

            function preencherModal(event){
                const btn = event.target;
                const pizzaInfo = btn.parentElement;
                const pizzaImg = pizzaInfo.querySelector('img').src;
                const pizzaTitulo = pizzaInfo.querySelector('h3').innerText;
                const pizzaPreco = pizzaInfo.querySelector('span').innerText;
                
                const imagemModal = document.querySelector('.imagem-modal img');
                imagemModal.src = pizzaImg;

                const precoModal = document.querySelector('.price p');
                precoModal.innerHTML = pizzaPreco;

                const tituloModal = document.querySelector('.pizza-titulo');
                tituloModal.innerHTML = pizzaTitulo;
            }       
}
modalEvents();

}
