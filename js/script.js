import initMenuMobile from './modules/menu-mobile.js';
import ScrollSuave from './modules/scroll-suave.js';




initMenuMobile();

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();