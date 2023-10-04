import tabs from './modules/tabs';
import modal from './modules/modal';
import calc from './modules/calc';
import timer from './modules/timer';
import cards from './modules/cards';
import forms from './modules/forms';
import slider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {
  tabs();
  modal('[data-modal]', '.modal');
  calc();
  timer();
  cards();
  forms();
  slider();
});