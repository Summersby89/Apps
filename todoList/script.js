let task = document.querySelector('.inputName').value;
const addBtn = document.getElementById('addBtn');
const toDoList = document.querySelector('.toDoList');
const alertList = document.querySelector('.alert');
const formToDo = document.querySelector('.formToDo');
const yesBtn = document.getElementById('Yes');
const noBtn = document.getElementById('No');


function addToList() {
    task = document.querySelector('.inputName').value;
    if (task === '') {
        alert('Напишите что-нибудь!');
    } else {
        let alerts = true;
        let elementChildrens = toDoList.children;
        for (let i = 0, child; child = elementChildrens[i]; i++) {
            if (task === child.textContent) {
                alerts = false;
                break;
            }
        }

        function toggleHiden() {
            alertList.classList.toggle('hiden');
            formToDo.classList.toggle('hiden');
            toDoList.classList.toggle('hiden');
        }

        function createLi() {
            let l1 = document.createElement('li');
            l1.setAttribute('tabindex', 2)
            l1.innerHTML = '<li></li>';
            l1.classList.add('toDo');
            l1.textContent = task;
            toDoList.appendChild(l1);
            document.querySelector('.inputName').value = '';
        }

        if (alerts) {
            createLi();

        } else {

            toggleHiden();

            yesBtn.onclick = function () {
                createLi();
                toggleHiden();
            }

            noBtn.onclick = function () {
                toggleHiden();
                document.querySelector('.inputName').value = '';
            }
        }
    }
}

addBtn.addEventListener('keydown', function (ev) {
    if (ev.keyCode === 13 || ev.keyCode === 32) {
        addToList();
    }
});

document.querySelector('input').addEventListener('keydown', function (ev) {
    if (ev.keyCode === 13) {
        addToList();
    }
});

addBtn.addEventListener('click', addToList);

function selectedLi(ev) {
    ev.target.classList.toggle('through');
}

toDoList.addEventListener('click', selectedLi);

toDoList.addEventListener('keydown', function (ev) {
    if (ev.keyCode === 32) {
        selectedLi(ev);
    }
});