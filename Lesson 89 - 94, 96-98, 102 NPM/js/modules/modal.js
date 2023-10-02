function modal() {
  const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');

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
}

module.exports = modal;