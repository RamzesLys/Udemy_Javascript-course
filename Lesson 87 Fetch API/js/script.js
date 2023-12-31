window.addEventListener('DOMContentLoaded', function() {
//TABS
  const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

  function hideTabContent() {
    tabsContent.forEach((item) => {
    item.classList.add('hide');
    item.classList.remove('show', 'fade');
    });

    tabs.forEach((item) => {
      item.classList.remove('tabheader__item_active');
    });
  }

  function showTabContent (i = 0) {//якщо викликається без аргументів, то значення по замовчуванню 0
    // tabsContent[i].style.display = 'block';
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener('click', function(event) {
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
  const deadline = '2023-09-14';

  function getTimeRemaining(endtime) {

    let days, hours, minutes, seconds;
    const t = Date.parse(endtime) - Date.parse(new Date());
          days = Math.floor(t / (1000 * 60 * 60 * 24)),
          hours = Math.floor((t / (1000 * 60 * 60) % 24)),
          minutes = Math.floor((t / 1000 / 60) %  60),
          seconds = Math.floor((t / 1000) % 60);
          
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
      return '0' + num;
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
        modal = document.querySelector('.modal');
        // modalCloseBtn = document.querySelector('[data-close]');

  modalTrigger.forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  //щоб код не повторювався створюємо функцію
  function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }

  function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    //прибираємо виклик вікна якщо користувач самостійно його викликав та закрив
    clearInterval(modalTimerId);
  }

  // modalCloseBtn.addEventListener('click', closeModal);

  //закриття при кліці за межами модального вікна
  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == "") {
      closeModal()
    }
  });

  //закриття по клавіші Esc
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
      closeModal()
    }
  });

  //встановлюмо час для відкриття модального вікна
  const modalTimerId = setTimeout(openModal, 300000);
  
    //відслідковуємо коли користувач відскролив сторінку до кінця
  function showModalByScroll () {
    if (window.scrollY + document.documentElement.clientHeight  >= document.documentElement.scrollHeight - 1) { 
      openModal();
      window.removeEventListener('scroll', showModalByScroll)
    }
  }
  
  window.addEventListener('scroll', showModalByScroll);
  // }, {once: true}); //виконання коду лише один раз

  //використання класів для карточок
  class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector, ...classes) { //rest-параметри не підтримують дефолтні значення
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.classes = classes;
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
      
      if (this.classes.length == 0) {
        this.element = 'menu__item';
        element.classList.add(this.element);
      } else {
        //перебираємо масив з классами та кожному елементу призначаємо клас
        this.classes.forEach((className) => {
        element.classList.add(className)
      });
      }

      element.innerHTML = 
      // `
      // <div class="menu__item">
      //   <img src=${this.src} alt=${this.alt} >
      //   <h3 class="menu__item-subtitle">${this.title}</h3>
      //   <div class="menu__item-descr">${this.descr}</div>
      //   <div class="menu__item-divider"></div>
      //   <div class="menu__item-price">
      //     <div class="menu__item-cost">Цена:</div>
      //     <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
      //   </div>
      // </div>
      // `;
      `
      <img src=${this.src} alt=${this.alt} >
      <h3 class="menu__item-subtitle">${this.title}</h3>
      <div class="menu__item-descr">${this.descr}</div>
      <div class="menu__item-divider"></div>
      <div class="menu__item-price">
        <div class="menu__item-cost">Цена:</div>
        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
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
    ".menu .container",
    'menu__item',
    'big'
  ).render();

  new MenuCard(
    "img/tabs/post.jpg",
    "Post",
    'Меню "Пісне"',
    `Меню "Пісне" - це ретельний підбір інгредієнтів: повна відсутність продуктів 
    тваринного походження, молоко з мигдалю, вівса, кокосу чи гречки, правильна кількість 
    білків за рахунок тофу та імпортних вегетаріанських стейків`,
    12.2,
    ".menu .container",
    'menu__item'
  ).render();

  new MenuCard(
    "img/tabs/elite.jpg",
    "elite",
    'Меню "Преміум"',
    `У меню "Преміум" ми використовуємо не лише гарний дизайн упаковки, але й якісне виконання страв. 
    Червона риба, морепродукти, фрукти – ресторанне меню без походу до ресторану!`,
    12.2,
    ".menu .container",
    'menu__item'
  ).render();

  //FORMS
  const forms = document.querySelectorAll('form');

  const message = {
    loading: 'img/form/spinner.svg',
    success: 'Дякуємо! Ми з Вами звяжемося',
    failure: 'Щось пішло не так ...'
  };

  forms.forEach(item => {
    postData(item)
  });
  
  function postData (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault(); //прибираємо стандартну поведінку для submit
      // const statusMessage = document.createElement('div');
      // statusMessage.classList.add('status');
      // statusMessage.textContent = message.loading;
      // form.append(statusMessage);
      let statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
        display: block;
        margin: 0 auto;
      `;
      // form.append(statusMessage); 
      form.insertAdjacentElement('afterend', statusMessage);//вставляємо спіннер після форми замість append
      
      //застарілий метод
      // const request = new XMLHttpRequest();
      // request.open('POST', 'server.php');



      // request.setRequestHeader('Content-type', 'application/json; charset=utf-8');//встановлюємо заголовки
      
      const formData = new FormData(form);

      const object = {};
      formData.forEach(function(value, key) {
        object[key] = value;
      });
  

      //Новий метод
      fetch('server1.php', {
        method: "POST",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(object)
      })
      .then(data => data.text())
      .then(data => {
        console.log(data);
        showThanksModal(message.success);
        statusMessage.remove();
      })
      .catch(() => {
        showThanksModal(message.failure);
      })
      .finally(() => {
        form.reset();
      })

      // request.addEventListener('load', () => {
      //   if (request.status === 200) {
      //     console.log(request.response);
      //     showThanksModal(message.success);
      //     statusMessage.remove();
      //     form.reset();
      //   } else {
      //     showThanksModal(message.failure);
      //   }
      // });
    });
  }

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');

    prevModalDialog.classList.add('hide');
    openModal();

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
      <div class="modal__content">
        <div class="modal__close" data-close>×</div>
        <div class="modal__title">${message}</div>
      </div>
    `;

    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add('show');
      prevModalDialog.classList.remove ('hide');
      closeModal();
    }, 4000)
  }

  // fetch('https://jsonplaceholder.typicode.com/posts', {
  //   method: "POST",
  //   body: JSON.stringify({name: 'Alex'}),
  //   headers: {
  //     'Content-type': 'application/json'
  //   }
  // })
  //     .then(response => response.json())
  //     .then(json => console.log(json));

});
