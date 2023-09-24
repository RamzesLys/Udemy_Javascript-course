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

  const getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Coul not fetch ${url}, status: ${res.status} `);
    }

    return await res.json();
  };


  //Cпосіб 1 з класами
  getResource('http://localhost:3000/menu')
      .then(data => {
        data.forEach(({img, altimg, title, descr, price}) => {
          new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
        });
      });

  //Cпосіб 2 (без використання класів)
  // getResource('http://localhost:3000/menu')
  //     .then(data => createCard(data));

  // function createCard(data ) {
  //   data.forEach(({img, altimg, title, descr, price}) => {
  //     const element = document.createElement('div');
  //     price = Math.round(price * 36,6);
  //     element.classList.add('menu__item');
  //     element.innerHTML = `
  //     <img src=${img} alt=${altimg} >
  //     <h3 class="menu__item-subtitle">${title}</h3>
  //     <div class="menu__item-descr">${descr}</div>
  //     <div class="menu__item-divider"></div>
  //     <div class="menu__item-price">
  //       <div class="menu__item-cost">Цена:</div>
  //       <div class="menu__item-total"><span>${price}</span> грн/день</div>
  //     </div>
  //     `;
  //     document.querySelector('.menu .container').append(element)
  //   });
  // } 

  //Спосіб 3 через бібліотеку axios
  // axios.get('http://localhost:3000/menu')
  //       .then(data => {
  //         data.data.forEach(({img, altimg, title, descr, price}) => {
  //       new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
  //        });
  //     });

  //один з варіантів
  //const div = new MenuCard();
  //div.render()

  // new MenuCard(
  //   "img/tabs/vegy.jpg",
  //   "Vegy",
  //   'Меню "Фітнес"',
  //   `Меню «Фітнес» - це новий підхід до приготування страв: більше свіжих овочів 
  //   і фруктів. Продукт активних і здорових людей. Це абсолютно новий продукт 
  //   з оптимальною ціною та високою якістю!`,
  //   9.2,
  //   ".menu .container",
  //   'menu__item',
  //   'big'
  // ).render();

  // new MenuCard(
  //   "img/tabs/post.jpg",
  //   "Post",
  //   'Меню "Пісне"',
  //   `Меню "Пісне" - це ретельний підбір інгредієнтів: повна відсутність продуктів 
  //   тваринного походження, молоко з мигдалю, вівса, кокосу чи гречки, правильна кількість 
  //   білків за рахунок тофу та імпортних вегетаріанських стейків`,
  //   12.2,
  //   ".menu .container",
  //   'menu__item'
  // ).render();

  // new MenuCard(
  //   "img/tabs/elite.jpg",
  //   "elite",
  //   'Меню "Преміум"',
  //   `У меню "Преміум" ми використовуємо не лише гарний дизайн упаковки, але й якісне виконання страв. 
  //   Червона риба, морепродукти, фрукти – ресторанне меню без походу до ресторану!`,
  //   12.2,
  //   ".menu .container",
  //   'menu__item'
  // ).render();

  //FORMS
  const forms = document.querySelectorAll('form');

  const message = {
    loading: 'img/form/spinner.svg',
    success: 'Дякуємо! Ми з Вами звяжемося',
    failure: 'Щось пішло не так ...'
  };

  forms.forEach(item => {
    bindPostData(item)
  });

  const postData = async (url, data) => {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: data
    });

    return await res.json();
  };
  
  function bindPostData (form) {
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

      // const object = {};
      // formData.forEach(function(value, key) {
      //   object[key] = value;
      // });
      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      //Новий метод
      // fetch('server.php', {
      //   method: "POST",
      //   headers: {
      //     'Content-type': 'application/json'
      //   },
      //   body: JSON.stringify(object)
      // })
      postData('http://localhost:3000/requests', json)
      // .then(data => data.text())
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

  fetch('http://localhost:3000/menu')
      .then(data => data.json())
      .then(res => console.log(res));

      //SLIDER
  let offset = 0;
  let slideIndex = 1;


  const slides = document.querySelectorAll('.offer__slide'),
        slider = document.querySelector('.offer__slider'),
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        total = document.querySelector('#total'),
        current = document.querySelector('#current'),

        //СЛАЙД 2
        slidesWrapper = document.querySelector('.offer__slider-wrapper'),
        slidesField = document.querySelector('.offer__slider-inner'),
        width = window.getComputedStyle(slidesWrapper).width;


  


        //МЕТОД 1
  // showSlides(slideIndex);

  // if (slides.length < 10) {
  //   total.textContent = `0${slides.length}`
  // } else {
  //   total.textContent = slides.length;
  // }

  // function showSlides (n) {
  //   if (n > slides.length) {
  //     slideIndex = 1;
  //   }
  //   if (n < 1) {
  //     slideIndex = slides.length;
  //   }

  //   slides.forEach(item => item.style.display = 'none');

  //   slides[slideIndex - 1].style.display = 'block';

  //   if (slides.length < 10) {
  //    current.textContent = `0${slideIndex}`
  //   } else {
  //     current.textContent = slideIndex;
  //   }
  // }

  // function plusSlides (n) {
  //   showSlides(slideIndex += n)
  // }

  // prev.addEventListener('click', () => {
  //   plusSlides(-1);
  // });

  // next.addEventListener('click', () => {
  //   plusSlides(+1);
  // });


   //МЕТОД 2

   //нумерація слайдів

  if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
    current.textContent = `0${slideIndex}`;
  } else {
    total.textContents = slides.length;
    current.textContent = slideIndex;
  }

  slidesField.style.width = 100 * slides.length + '%';
  slidesField.style.display = 'flex';
  slidesField.style.transition = '0.5s all';

  slidesWrapper.style.overflow = 'hidden';

  slides.forEach(slide => {
    slide.style.width = width;
  });

  slider.style.position = 'relative';

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

  for (let i = 0; i < slides.length; i ++ ) {
    const dot = document.createElement('li');
    dot.setAttribute('data-slide-to', i + 1);
    dot.style.cssText = `
      box-sizing: content-box;
      flex: 0 1 auto;
      width: 30px;
      height: 10px;
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
      dot.style.opacity = 1
    }
    indicators.append(dot);
    dots.push(dot);
  }

  //функція для перетворення строки у числовий тип даних (+width)
  function deleteNotDigits(str) {
    return +str.replace(/\D/g, '') //видаляються не цифри (px)
  }
  
  next.addEventListener('click', () => {
    // if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {//width.slice(0, width.length - 2) прибираємо px у значенні
    //робимо через регулярні висловлювання 
    //if (offset = +width.replace(/\D/g, '') * (slides.length -1)) {
      //або через функцію
    if (offset == (deleteNotDigits(width) * (slides.length -1))) {
    offset = 0;
    } else {
      offset += deleteNotDigits(width);
    }
    
    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == slides.length) {
      slideIndex = 1;
    } else {
      slideIndex ++;
    }

    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex
    }

    dots.forEach(dot => dot.style.opacity = '.5');
    dots[slideIndex - 1].style.opacity = 1;
  });

  prev.addEventListener('click', () => {
    if (offset == 0) {//width.slice(0, width.length - 2) прибираємо px у значенні
      offset = deleteNotDigits(width) * (slides.length - 1); //замість +width.slice(0, width.length - 2)
    } else {
      offset -= deleteNotDigits(width);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == 1) {
      slideIndex = slides.length;
    } else {
      slideIndex --;
    }

    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex
    }

    dots.forEach(dot => dot.style.opacity = '.5');
    dots[slideIndex - 1].style.opacity = 1;
  });

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      const slideTo = e.target.getAttribute('data-slide-to');
      slideIndex = slideTo;
      offset = deleteNotDigits(width) * (slideTo - 1);
      slidesField.style.transform = `translateX(-${offset}px)`;

      if (slides.length < 10) {
        current.textContent = `0${slideIndex}`;
      } else {
        current.textContent = slideIndex;
      }

      dots.forEach(dot => dot.style.opacity = '.5');
      dots[slideIndex - 1].style.opacity = 1;
    });
  });

  //CALCULATOR

  const result = document.querySelector('.calculating__result span');
  let sex, height, weight, age, ratio;

  function calcTotal() {
    if (!sex || !height || !weight, !age || !ratio) {
      result.textContent = '___';
      return;
    } 
    
    if (sex === 'female') {
      result.textContent = (447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio;
    } else {
      result.textContent = (88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio
    }
  }

  calcTotal();

  function getStaticInformation (parentSelector, activeClass) {
    const element = document.querySelectorAll(`${parentSelector} div`);

    document.querySelector(parentSelector).addEventListener('click', (e) => {
      if (e.target.getAttribute('data-ratio')) {
        ratio = +e.target.getAttribute('data-ratio');
      } else {
        sex = e.target.getAttribute('id')
      }

      console.log(ratio, sex);

      element.forEach( elem => {
        elem.classList.remove(activeClass);
      });
      e.target.classList.add(activeClass);
    });
  }
  getStaticInformation('#gender', 'calculating__choose-item_active');
  getStaticInformation('.calculating__choose_big', 'calculating__choose-item_active');

  function getDinamicInformation (selector) {
    const input = document.querySelector(selector);
    input.addEventListener('input', () => {
      switch (getAttribute('id')) {
        case 'height': 
          height = +input.value;
          break;
        case 'weight':
          weight = +input.value;
          break;
        case 'age':
          age = +input.value;
          break;
      }
    });
  }

  getDinamicInformation()


});
