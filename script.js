'use strict';

const inputText = document.querySelector('.input-text');
const listToDo = document.querySelector('.list__todo');
const cong = document.querySelector('.cong');
function working() {
  for (const r of document.querySelectorAll('.list__todo__task')) {
    let arrow = r.querySelector('.arrow-right');
    let del = r.querySelector('.delete-task');
    r.addEventListener('mouseenter', function () {
      arrow.classList.remove('hide');
      del.classList.remove('hide');
      r.classList.add('border');

      r.addEventListener('mouseleave', function () {
        arrow.classList.add('hide');
        del.classList.add('hide');
        r.classList.remove('border');
      });
      del.addEventListener('click', function () {
        r.remove();
      });
      arrow.addEventListener('click', function () {
        r.removeChild(arrow);
        r.removeChild(del);
        document.querySelector('.list__done').appendChild(r);
        r.className = 'list__done__task';
        if (!listToDo.hasChildNodes()) {
          cong.classList.remove('hide');
          document
            .querySelector('.cong__text-close')
            .addEventListener('click', function () {
              cong.classList.add('hide');
            });
        }
      });
    });
  }
}

//After press ENTER
inputText.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    listToDo.innerHTML += `<div class="list__todo__task"><ion-icon class="delete-task hide" name="trash-outline"></ion-icon></ion-icon>
    <div class="task__name">${inputText.value}</div>
    <ion-icon class="arrow-right hide" name="arrow-forward-outline"></ion-icon>
  </div>`;
    inputText.value = '';
  }
  working();
});
//After click PLUS
const inputBox = document.querySelector('.input');
const addTask = document.querySelector('.add__task');
addTask.addEventListener('click', function () {
  if (inputText.value != '') {
    listToDo.innerHTML += `<div class="list__todo__task"><ion-icon class="delete-task hide" name="trash-outline"></ion-icon></ion-icon>
    <div class="task__name">${inputText.value}</div>
    <ion-icon class="arrow-right hide" name="arrow-forward-outline"></ion-icon>
  </div>`;
    inputText.value = '';
  } else {
    alert('type some task in the text field'.toUpperCase());
  }
  working();
});
inputBox.addEventListener('mouseenter', function () {
  addTask.classList.remove('hide');
});
inputBox.addEventListener('mouseleave', function () {
  addTask.classList.add('hide');
});
//ALL TASK DONE INFO
