function closeModal(modalSelector) {
  const modal = document.querySelector(modalSelector);

  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow = '';
}

function openModal(modalSelector, modalTimerId) {
  const modal = document.querySelector(modalSelector);

  modal.classList.add('show');
  modal.classList.remove('hide');
  document.body.style.overflow = 'hidden';
  if (modalTimerId) {
      //прибираємо виклик вікна якщо користувач самостійно його викликав та закрив
  clearInterval(modalTimerId);
  }
}

function modal(triggerSelector, modalSelector, modalTimerId) {
  const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector, modalTimerId);

  modalTrigger.forEach(btn => {
    btn.addEventListener('click', () => openModal(modalSelector));
  });


  //закриття при кліці за межами модального вікна
  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == "") {
      closeModal(modalSelector);
    }
  });

  //закриття по клавіші Esc
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
      closeModal(modalSelector, modalTimerId);
    }
  });
  
    //відслідковуємо коли користувач відскролив сторінку до кінця
  function showModalByScroll () {
    if (window.scrollY + document.documentElement.clientHeight  >= document.documentElement.scrollHeight - 1) { 
      openModal(modalSelector);
      window.removeEventListener('scroll', showModalByScroll)
    }
  }
  
  window.addEventListener('scroll', showModalByScroll);
  // }, {once: true}); //виконання коду лише один раз
}

export default modal;
export {closeModal};
export {openModal};