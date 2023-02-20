function slider({container, slide, nextArr, prevArr, totalCounter,currentCounter, wrapper, field}) {
     //SLIDER_2

     const slides = document.querySelectorAll(slide),//получили слайды
     prev = document.querySelector(prevArr),//стрелка назад
     next = document.querySelector(nextArr),//стрелка вперед
     total = document.querySelector(totalCounter),
     slider = document.querySelector(container),
     current = document.querySelector(currentCounter),
     slidesWrapper = document.querySelector(wrapper),//обложка общая
     slidesField = document.querySelector(field),//обложка внутренняя
     width = window.getComputedStyle(slidesWrapper).width;//получаем ширину со страницы
 //начальный индекс слайдов
 let slideIndex = 1;
 //оступ вправа влево на сколько смещать на сколько отсупили 
 let offset = 0;
 //работа с нумерацией смена циферок над сслайдеров по типу карусели 
 if (slides.length < 10) {
     total.textContent = `0${slides.length}`;
     current.textContent = `0${slideIndex}`;
 } else {
     total.textContent = slides.length;
     current.textContent = slideIndex;
 }

 //устанавливаем шиирну блока колво слайдов на 100%
 slidesField.style.width = 100 * slides.length + '%';
 //добавляем стилей чтоб они выстроиилсь в одну полоску
 slidesField.style.display = 'flex';
 slidesField.style.transition = '0.5s all';
 //ограничиваем показ внутнри wrapper
 slidesWrapper.style.overflow = 'hidden';
 //фиксируем одинаковую ширину
 slides.forEach(slide => {
     slide.style.width = width;
 });
 //добавляем точки к слайдеру
 slider.style.position = 'relative';
 //создаем элемент точек
 const indicators = document.createElement('ol'),
       dots = [];

 indicators.classList.add('carousel-indicators');
 indicators.style.cssText = `
     position: absolute;
     right: 0;
     bottom: 0;
     left: 0;
     z-index: 15;
     display: flex;
     justify-content: center;
     margin-right: 15%;
     margin-left: 15%;
     list-style: none;
     `;
 slider.append(indicators);

 for(let i = 0; i < slides.length; i++) {
     const dot = document.createElement('li');
     dot.setAttribute('data-slide-to', i + 1);
     dot.style.cssText = `
         box-sizing: content-box;
         flex: 0 1 auto;
         width: 30px;
         height: 6px;
         margin-right: 3px;
         margin-left: 3px;
         cursor: pointer;
         background-color: #fff;
         background-clip: padding-box;
         border-top: 10px solid transparent;
         border-bottom: 10px solid transparent;
         opacity: .5;
         transition: opacity .6s ease;
 `;
 if (i == 0) {
     dot.style.opacity = 1;
 }
 indicators.append(dot);
 dots.push(dot);
 }

 function deleteNotDigits(str) {
     return +str.replace(/\D/g, '');
 }
 function dotsSlide(dots) {
     dots.forEach(dot => dot.style.opacity = ".5");
     dots[slideIndex-1].style.opacity = 1;
 }

 //кнопки для передвижения слайдов
 next.addEventListener('click', () => {                                      //в width сейас занчение с "px"(строка)500px
    if (offset == deleteNotDigits(width) * (slides.length -1)) {//метод срабатывает на строке и конвертируец в числовйо тип данных c помощью унарного плюса без px, урезали с помощью slice
        offset = 0;
    } else {
        offset += deleteNotDigits(width); //при нажатии стрелки вперед прибавлется ширина еще одного слайда,слайд смещается на ширину слайда
    }                                                           //влево отрицат значения, вправо положительные   
    slidesField.style.transform = `translateX(-${offset}px)`; //перемещаем по оси Х от 0 в переменной и насколько пермещаемся
    if (slideIndex == slides.length) {//циферка прибавляется от кнопки вперед
        slideIndex = 1;
    }else { slideIndex++;}
    if(slides.length <10){
        current.textContent = `0${slideIndex}`;
    }else {current.textContent = slideIndex;}
    //тут прозрачность точек в обработчике события по нажатию меняется актвиная точка становится ярче
    /* dots.forEach(dot => dot.style.opacity = ".5");
    dots[slideIndex-1].style.opacity = 1;  */
    dotsSlide(dots);
});
prev.addEventListener('click', () => {//функционал для кнопки назад
    if (offset == 0) {
        offset = deleteNotDigits(width) * (slides.length - 1);
    } else {
        offset -= deleteNotDigits(width);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == 1) {
        slideIndex = slides.length;
    } else {
        slideIndex--;
    }

    if (slides.length < 10) {
        current.textContent =  `0${slideIndex}`;
    } else {
        current.textContent =  slideIndex;
    }

    /* dots.forEach(dot => dot.style.opacity = ".5");
    dots[slideIndex-1].style.opacity = 1; */
    dotsSlide(dots);
});
//функционал перемещения слайдера по нажатию на точку
dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        const slideTo = e.target.getAttribute('data-slide-to');

        slideIndex = slideTo;
        offset = deleteNotDigits(width) * (slideTo - 1);

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slides.length < 10) {
            current.textContent =  `0${slideIndex}`;
        } else {
            current.textContent =  slideIndex;
        }

        /* dots.forEach(dot => dot.style.opacity = ".5");
        dots[slideIndex-1].style.opacity = 1; */
        dotsSlide(dots);
    });
});
/* function deleteNotDigits(str) {
    return +str.replace(/\D/g, '');
} */
}


export default  slider;






//SLIDER_1
    /* let slideIndex = 1;
    const slides = document.querySelectorAll('.offer__slide'),
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        total = document.querySelector('#total'),
        current = document.querySelector('#current');

    showSlides(slideIndex);

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
    } else {
        total.textContent = slides.length;
    }

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');

        slides[slideIndex - 1].style.display = 'block'; 
        
        if (slides.length < 10) {
            current.textContent =  `0${slideIndex}`;
        } else {
            current.textContent =  slideIndex;
        }
    }

    function plusSlides (n) {
        showSlides(slideIndex += n);
    }

    prev.addEventListener('click', function(){
        plusSlides(-1);
    });

    next.addEventListener('click', function(){
        plusSlides(1);
    }); */