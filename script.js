document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    function addTask(taskText) {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            taskItem.classList.toggle('completed');
        });

        const taskTextElement = document.createElement('span');
        taskTextElement.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', function() {
            taskItem.remove();
        });

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskTextElement);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
    }
});
