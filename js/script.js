import initMenuMobile from './modules/menu-mobile.js';
import initPizzaModal from './modules/pizzaModal.js';
import ScrollSuave from './modules/scroll-suave.js';
import Modal from './modules/modal.js';

initMenuMobile();
initPizzaModal();

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();



        
