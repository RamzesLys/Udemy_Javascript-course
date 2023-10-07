function tabs(tabsSelector, tabsContentSelector, tabsParentsSelector, activeClass) {
  const tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector),
        tabsParent = document.querySelector(tabsParentsSelector);

  function hideTabContent() {
    tabsContent.forEach((item) => {
    item.classList.add('hide');
    item.classList.remove('show', 'fade');
    });

    tabs.forEach((item) => {
      item.classList.remove(activeClass);
    });
  }

  function showTabContent (i = 0) {//якщо викликається без аргументів, то значення по замовчуванню 0
    // tabsContent[i].style.display = 'block';
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add(activeClass);
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener('click', function(event) {
    const target = event.target;
    if (target && target.classList.contains(tabsSelector.slice(1))) {// видаляємо перший елемент - крапку
      tabs.forEach((item, i) => {
          if (target == item) {
          hideTabContent();
          showTabContent(i);
        } 
      });
    }
  });
}

export default tabs;