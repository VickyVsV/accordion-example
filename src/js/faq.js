/* import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.accordion-container', {
  duration: 400,
  showMultiple: false,
  openOnInit: [0],
});

const triggers = document.querySelectorAll('.ac-trigger');

function updateAccordionIcons() {
  const listItems = document.querySelectorAll('.ac');

  listItems.forEach(listItem => {
    const icon = listItem.querySelector('.ac-icon use');

    if (!icon) return; // Если иконка не найдена, пропускаем

    if (listItem.classList.contains('is-active')) {
      icon.setAttribute('href', '/accordion-example/sprite.svg#arrow-up');
    } else {
      icon.setAttribute('href', '/accordion-example/sprite.svg#arrow-down');
    }
  });
}

triggers.forEach(trigger => {
  trigger.addEventListener('click', function () {
    //setTimeout(updateAccordionIcons, 400); // Даем время для переключения классов
    updateAccordionIcons();
  });
});
 */


import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordion = new Accordion('.accordion-container', {
  duration: 400,
  showMultiple: false,
  openOnInit: [0],
  onOpen: updateAccordionIcons,  // Обновление иконок при открытии
  onClose: updateAccordionIcons, // Обновление иконок при закрытии
});

function updateAccordionIcons() {
  const listItems = document.querySelectorAll('.ac');

  listItems.forEach(listItem => {
    const icon = listItem.querySelector('.ac-icon use');

    if (!icon) return;

    /* if (listItem.classList.contains('is-active')) {
      icon.setAttribute('href', '/accordion-example/sprite.svg#arrow-up');
      // или icon.setAttribute('xlink:href', '/accordion-example/sprite.svg#arrow-up');
    } else {
      icon.setAttribute('href', '/accordion-example/sprite.svg#arrow-down');
    } */

      requestAnimationFrame(() => {
        if (listItem.classList.contains('is-active')) {
          icon.setAttribute('href', '/accordion-example/sprite.svg#arrow-up');
        } else {
          icon.setAttribute('href', '/accordion-example/sprite.svg#arrow-down');
        }
      });
  });
}

// И сразу обновляем иконки на старте
setTimeout(updateAccordionIcons, 100); // Убираем задержку

/* // Слушаем события открытия и закрытия секций
document.querySelector('.accordion-container').addEventListener('accordion.open', () => {
  updateAccordionIcons();
});

document.querySelector('.accordion-container').addEventListener('accordion.close', () => {
  updateAccordionIcons();
});

// И сразу обновляем на старте, чтобы иконки были правильными
updateAccordionIcons(); */
