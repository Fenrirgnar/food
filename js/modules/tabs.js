function tabs(tabsSelector,tabContentSelector,tabsParentSelector, activeClass) {
    //тут наши табы
    const tabs = document.querySelectorAll(tabsSelector),
          tabsConten = document.querySelectorAll(tabContentSelector),
          tabsParent = document.querySelector(tabsParentSelector);



    function hideTabContent() {
        tabsConten.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade'); //скрываем табы
        });

        tabs.forEach(item => {
            item.classList.remove(activeClass);//удаляем классс активности
        });
    }

    function showTabContent(i = 0) {//в ES6 формате приравниваем знач элемента к первому
        tabsConten[i].classList.add('show', 'fade');//показываем табы
        tabsConten[i].classList.remove('hide');//убираем
        tabs[i].classList.add(activeClass); //добавляем класс активности
    }

    hideTabContent();
    showTabContent();//тут подставляем первый элемент дефолтный

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;

        if(target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if(target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

export default  tabs;