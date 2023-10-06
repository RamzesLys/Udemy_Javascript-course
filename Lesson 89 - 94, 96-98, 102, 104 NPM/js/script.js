import tabs from './modules/tabs';
import modal from './modules/modal';
import calc from './modules/calc';
import timer from './modules/timer';
import cards from './modules/cards';
import forms from './modules/forms';
import slider from './modules/slider';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
  //встановлюмо час для відкриття модального вікна
  const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);

  tabs();
  modal('[data-modal]', '.modal', modalTimerId);
  calc();
  timer();
  cards();
  forms();
  slider();
});