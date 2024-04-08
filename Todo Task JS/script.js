document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('add-todo-form');
    const input = document.getElementById('add-todo-inp');
    const errorSpan = document.querySelector('.error-msg');
    const todoList = document.querySelector('.to-do-list');
    const clearAllBtn = document.querySelector('.clear-all-btn');
    const countSpan = document.querySelector('.count');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const inputValue = input.value.trim();

        if (inputValue === '') {
            errorSpan.classList.remove('d-none');
            errorSpan.textContent = 'Input is empty';
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Input is empty!',
            });
            return;
        }

        errorSpan.classList.add('d-none');
        addTodoToList(inputValue);
        input.value = '';
    });

    input.addEventListener('input', function() {
        if (input.value.trim() === '') {
            clearAllBtn.classList.remove('btn-purple');
            clearAllBtn.classList.add('btn-warning');
        } else {
            clearAllBtn.classList.remove('btn-warning');
            clearAllBtn.classList.add('btn-purple');
        }
    });

    clearAllBtn.addEventListener('click', function() {
        todoList.innerHTML = '';
        updateTaskCount();
        clearAllBtn.classList.remove('btn-warning');
        clearAllBtn.classList.add('btn-purple');
    });

    function addTodoToList(todoText) {
        const listItem = document.createElement('li');
        listItem.textContent = todoText;

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
        deleteButton.classList.add('btn', 'btn-danger', 'mx-1');
        deleteButton.addEventListener('click', function() {
            listItem.remove();
            updateTaskCount();
        });

        const editButton = document.createElement('button');
        editButton.innerHTML = '<i class="fas fa-edit"></i>';
        editButton.classList.add('btn', 'btn-warning', 'mx-1');
        editButton.addEventListener('click', function() {
            const newText = prompt('Edit the todo:', listItem.textContent.trim());
            if (newText !== null) {
                listItem.textContent = newText;
            }
        });

        const lineThroughButton = document.createElement('button');
        lineThroughButton.innerHTML = '<i class="fas fa-minus"></i>';
        lineThroughButton.classList.add('btn', 'btn-primary', 'mx-1');
        lineThroughButton.addEventListener('click', function() {
            listItem.classList.toggle('line-through');
        });

        listItem.appendChild(deleteButton);
        listItem.appendChild(editButton);
        listItem.appendChild(lineThroughButton);

        todoList.appendChild(listItem);
        updateTaskCount();
    }

    function updateTaskCount() {
        const tasksCount = todoList.children.length;
        countSpan.textContent = tasksCount;
        countSpan.classList.toggle('text-danger', tasksCount === 0);
    }
});
