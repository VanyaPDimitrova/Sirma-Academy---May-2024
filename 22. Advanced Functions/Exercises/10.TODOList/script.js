document.getElementById('add-button').addEventListener('click', function() {
    const input = document.getElementById('todo-input');
    const task = input.value.trim();

    const list = document.getElementById('todo-list');
    const listItem = document.createElement('li');
    listItem.textContent = task;
    list.appendChild(listItem);

});
