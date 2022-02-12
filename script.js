'use strict';

//Moving from to-do to done
const arrowRight = document.getElementsByName('arrow-forward-circle-outline');
for (const arrow of arrowRight) {
  arrow.addEventListener('click', function () {
    document
      .querySelector('.list__done')
      .appendChild(arrow.closest('.list__tasks__task'));
    arrow.parentNode.removeChild(arrow.parentNode.firstElementChild);
    arrow.parentNode.removeChild(arrow.parentNode.lastElementChild);
  });
}
//Using prompt to change text
const addCircle = document.getElementsByName('add-circle-outline');
for (const add of addCircle) {
  add.addEventListener('click', function () {
    let text = prompt('What is your task');
    add.parentNode.querySelector('.task__name').textContent = text;
  });
}
