import { Swiper, Navigation } from 'swiper'
Swiper.use([ Navigation ])

import MicroModal from 'micromodal'

document.addEventListener('DOMContentLoaded', () => {
 let tab = function () {
    let tabNav = document.querySelectorAll('.download-catigories__list'),
        tabContent = document.querySelectorAll('.tab'),
        tabName;
 
    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav);
        console.log('edsfs');
    });
 
    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }
 
    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
        });
    }
 
 };

 const swiperDoor = new Swiper('.doors-container', {
   slidesPerView: 1,
   loop: false,
   speed: 2400,
   navigation: {
         prevEl: '.swiper-button-prev',
         nextEl: '.swiper-button-next'
      }
})

const accordions = document.querySelectorAll('.accordion__item');

for(let item of accordions){
   item.addEventListener('click', function() {
     if(this.classList.contains('active')){
      this.classList.remove('active');
     } else{
        for(let el of accordions){
           el.classList.remove('active');
        }
        this.classList.add('active');
     }
   })
}

let burgerMenu = () => {
   const burger = document.querySelector('#sidebarBurger');
   const sidebar = document.querySelector('#sidebar');
   const body = document.body;

   burger.addEventListener('click', event =>{
      body.classList.toggle('show-sidebar');
      burger.classList.toggle('active');
   });
   
};
MicroModal.init({
   openTrigger: 'data-micromodal-open',
   closeTrigger: 'data-micromodal-close',
   disableFocus: true,
   disableScroll: true,
   awaitOpenAnimation: true,
   awaitCloseAnimation: true
});


let searchHeader = () => {
   const searchInput = document.querySelector('#search-input');
   const searchBtn = document.querySelector('#search-btn');
   const searchForm = document.querySelector('#header__search');

   searchBtn.addEventListener('click', event =>{
      event.preventDefault();
      console.log('sad');
      searchForm.classList.toggle('active');
      searchInput.classList.toggle('active');
   });

};


burgerMenu();
tab();
searchHeader();

})
