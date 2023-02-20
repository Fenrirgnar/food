import tabs from'./modules/tabs';
import modal from'./modules/modal';
import timer from'./modules/timer';
import calc from'./modules/calc';
import cards from'./modules/cards';
import forms from'./modules/forms';
import slider from'./modules/slider';
import { openThisModal } from './modules/modal';

window.addEventListener('DOMContentLoaded', () => { //обратились к ДОМУ внутри будем создавать функкицонал

   const modalTimeId = setTimeout(() => openThisModal('.modal', modalTimeId), 500000);//открывает модалку через 6 сек автоматом 


    calc();
    cards();
    forms('form', modalTimeId);
    modal('[data-modal]', '.modal', modalTimeId);
    slider({
        slide: '.offer__slide',
        container: '.offer__slider',
        nextArr: '.offer__slider-next',
        prevArr: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    tabs('.tabheader__item', '.tabcontent','.tabheader__items','tabheader__item_active');
    timer('.timer', '2023-02-24');    
});

