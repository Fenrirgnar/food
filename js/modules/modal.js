function openThisModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    if (modalTimerId) {
    clearInterval(modalTimerId);//если пользователь уже нажал модалку не октрывает ее интервалом

    }
}


function closeThisModal(modalSelector) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}



function modal(triggerSelector, modalSelector, modalTimerId) {
    //Модальное окно

    const modalOpen = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector);



    

    modalOpen.forEach(btn => {//переираем все кнопки
        btn.addEventListener('click',() => openThisModal(modalSelector, modalTimerId));
            //modal.classList.add('show');//добавляет класс для появления окна
            //modal.classList.remove('hide');//убирает класс хайд скрывающий окно
            //modal.classList.toggle('show');
            //document.body.style.overflow = 'hidden';//непозволяет после открытия окна скролиться странице
        });
    
    
    
        //modal.classList.add('hide');//при наэатии на крестик убирает окно
        //modal.classList.remove('show');
        /* modal.classList.toggle('show');
        document.body.style.overflow = ''; *///вовзращает скролл после закерытия окна
   

    modal.addEventListener('click', (e) => {//убираеммодальное окно при клике в черноту
        if(e.target === modal || e.target.getAttribute('data-close') == '') {
            closeThisModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {//при нажатии кнопки закрывается окно
       if (e.code === "Escape" && modal.classList.contains('show')) {
        closeThisModal(modalSelector);
       }
    });

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openThisModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }

    }
    window.addEventListener('scroll', showModalByScroll);/* , {once: true} *///событие срабоатет один раз;



}

export default  modal;

export {closeThisModal, openThisModal};