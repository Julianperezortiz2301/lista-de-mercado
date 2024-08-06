let fruits = [];

document.getElementById('addButton').addEventListener('click', addFruit);

function addFruit() {
    const fruitInput = document.getElementById('fruitInput');
    const fruit = fruitInput.value.trim();
    if (fruit) {
        fruits.push(fruit);
        fruitInput.value = '';
        updateList();
    }
}

function deleteFruit(index) {
    fruits.splice(index, 1);
    updateList();
}

function updateList() {
    const fruitList = document.getElementById('fruitList');
    fruitList.innerHTML = '';
    fruits.forEach((fruit, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${fruit}</span><button onclick="deleteFruit(${index})">Eliminar</button>`;
        fruitList.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTodo();
    });

    function addTodo() {
        if (todoInput.value.trim() === '') return;

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${todoInput.value}</span>
            <button class="delete-btn">Eliminar</button>
        `;

        li.style.opacity = '0';
        li.style.transform = 'translateY(20px)';

        todoList.appendChild(li);

        setTimeout(() => {
            li.style.transition = 'all 0.5s ease';
            li.style.opacity = '1';
            li.style.transform = 'translateY(0)';
        }, 10);

        todoInput.value = '';

        li.querySelector('.delete-btn').addEventListener('click', () => {
            li.style.transition = 'all 0.5s ease';
            li.style.opacity = '0';
            li.style.transform = 'translateY(20px)';
            setTimeout(() => {
                li.remove();
            }, 500);
        });
    }

   
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function (e) {
            let ripple = document.createElement('span');
            ripple.className = 'ripple';
            this.appendChild(ripple);
            let x = e.clientX - this.offsetLeft;
            let y = e.clientY - this.offsetTop;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});
