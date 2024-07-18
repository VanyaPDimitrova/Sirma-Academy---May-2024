document.getElementById('add-button').addEventListener('click', function() {
    const input = document.getElementById('todo-input');
    const task = input.value.trim();
    

    if (input.value != '') {
        const list = document.getElementById('todo-list');

        const listItem = document.createElement('li');
        listItem.classList.add("list-item");
        listItem.textContent = task;
        list.appendChild(listItem);
        input.value = '';

        const deleteButton = document.createElement('button');
        listItem.appendChild(deleteButton);
        deleteButton.textContent = 'Remove';
        deleteButton.addEventListener('click', (e) => list.removeChild(e.currentTarget.parentElement));
    }
});
