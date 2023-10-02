window.addEventListener('DOMContentLoaded', () => {
  const tabs = require('./modules/tabs'),
        modal = require('./modules/modal'),
        calc = require('./modules/calc'),
        timer = require('./modules/timer'),
        cards = require('./modules/cards'),
        forms = require('./modules/forms'),
        slider =require('./modules/slider');

        tabs();
        modal();
        calc();
        timer();
        cards();
        forms();
        slider();
});