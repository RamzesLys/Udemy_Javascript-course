window.addEventListener('DOMContentLoaded', () => {
//TABS
  const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

  function hideTabContent() {
    tabsContent.forEach((item) => {
      // item.style.display = 'none';
      item.classList.add('hide');
      item.classList.remove('show', 'fade');

    });

    tabs.forEach((item) => {
      item.classList.remove('tabheader__item_active');
    });
  }

  function showTabContent (i = 0) {//якщо викликається без аргументів, то значення по замовчуванню 0
    // tabsContent[i].style.display = 'block';
    tabsContent[i].classList.add('show');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener('click', (event) => {
    const target = event.target;
    
    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => {
          if (target == item) {
          hideTabContent();
          showTabContent(i);
          } 
      });
    }
  });

  //TIMER
  const deadline = '2023-08-20';

  function getTimeRemaining(endtime) {

    let days, hours, minutes, seconds;
    const t = Date.parse(endtime) - Date.parse(new Date());

    if( t <= 0) {
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0
    } else {
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      hours = Math.floor((t / (1000 * 60 * 60) % 24)),
      minutes = Math.floor((t / 1000 / 60) %  60),
      seconds = Math.floor((t / 1000) % 60);
    }
          

    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };

  }

  function getZero (num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000);

  updateClock()

    function updateClock () {
      const t = getTimeRemaining(endtime)

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock('.timer', deadline);

  //MODAL WINDOWS
  const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');

  function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    //через Toggle
    //modal.classList.toggle('show')
    document.body.style.overflow = 'hidden';
    //прибираємо виклик вікна якщо користувач самостійно його викликав та закрив
    clearInterval(modalTimerId);
  }

  modalTrigger.forEach((btn) => {
    btn.addEventListener('click', openModal);
  });

  //щоб код не повторювався створюємо функцію
  function closeModal() {
    modal.classList.remove('show');
    modal.classList.add('hide');
    document.body.style.overflow = '';
  }
  
  modalCloseBtn.addEventListener('click', closeModal);

  //закриття при кліці за межами модального вікна
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal()
    }
  })

  //закриття по клавіші Esc
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
      closeModal()
    }
  });

  //встановлюмо час для відкриття модального вікна
  // const modalTimerId = setTimeout(openModal, 5000);
  
    //відслідковуємо коли користувач відскролив сторінку до кінця
  function showModalByScroll () {
    if (window.scrollY + document.documentElement.clientHeight  >= document.documentElement.scrollHeight - 1) { 
      openModal();
      window.removeEventListener('scroll', showModalByScroll)
    }
  }
  
  window.addEventListener('scroll', showModalByScroll);
  // }, {once: true}); //виконання коду лише один раз

  //висористання класів для карточок
  class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 39; //курс валют
      this.changeToUAH();
    }

    //конвертація USD в UAH
    changeToUAH () {
      this.price = Math.round(+this.price * this.transfer);
    }

    render() {
      const element = document.createElement('div');
      element.innerHTML = `
      <div class="menu__item">
        <img src=${this.src} alt=${this.alt} >
        <h3 class="menu__item-subtitle">${this.title}</h3>
        <div class="menu__item-descr">${this.descr}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
          <div class="menu__item-cost">Цена:</div>
          <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
        </div>
      </div>
      `;

      this.parent.append(element);
    }
  }

  //один з варіантів
  //const div = new MenuCard();
  //div.render()

  new MenuCard(
    "img/tabs/vegy.jpg",
    "Vegy",
    'Меню "Фітнес"',
    `Меню «Фітнес» - це новий підхід до приготування страв: більше свіжих овочів 
    і фруктів. Продукт активних і здорових людей. Це абсолютно новий продукт 
    з оптимальною ціною та високою якістю!`,
    9.2,
    ".menu .container"
  ).render();

  new MenuCard(
    "img/tabs/elite.jpg",
    "elite",
    'Меню "Преміум"',
    `У меню "Преміум" ми використовуємо не лише гарний дизайн упаковки, але й якісне виконання страв. 
    Червона риба, морепродукти, фрукти – ресторанне меню без походу до ресторану!`,
    12.2,
    ".menu .container"
  ).render();

});

