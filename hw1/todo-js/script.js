document.addEventListener('DOMContentLoaded', () => {
    const addTodoBtn = document.getElementById('addTodoBtn');
    const newTodoTitleInput = document.getElementById('newTodoTitle');
    const newTodoDescriptionInput = document.getElementById('newTodoDescription');
    const todoItemsContainer = document.querySelector('.todo-items-container');

    let todos = [];

    // Default todos
    for (let i = 1; i <= 20; i++) {
        todos.push({
            id: Date.now() + i,
            title: `todo ${i}`,
            description: `This is the description for todo ${i}.`,
            expanded: false
        });
    }

    function renderTodos() {
        todoItemsContainer.innerHTML = '';
        todos.forEach(todo => {
            const todoItem = document.createElement('div');
            todoItem.classList.add('todo-item');
            todoItem.setAttribute('data-id', todo.id);

            const todoTitle = document.createElement('div');
            todoTitle.classList.add('todo-title');
            todoTitle.textContent = todo.title;

            const todoDescription = document.createElement('div');
            todoDescription.classList.add('todo-description');
            if (todo.expanded) {
                todoDescription.classList.add('expanded');
            }
            todoDescription.textContent = todo.description;

            todoItem.appendChild(todoTitle);
            todoItem.appendChild(todoDescription);
            todoItemsContainer.appendChild(todoItem);

            todoTitle.addEventListener('click', () => {
                todo.expanded = !todo.expanded;
                renderTodos();
            });
        });
    }

    addTodoBtn.addEventListener('click', () => {
        const title = newTodoTitleInput.value.trim();
        const description = newTodoDescriptionInput.value.trim();

        if (title) {
            todos.push({
                id: Date.now(),
                title: title,
                description: description,
                expanded: false
            });
            newTodoTitleInput.value = '';
            newTodoDescriptionInput.value = '';
            renderTodos();
        }
    });

    renderTodos();
});

