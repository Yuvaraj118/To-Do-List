document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');
    li.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.classList.add('remove-btn');
    
    removeBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    li.appendChild(removeBtn);
    taskList.appendChild(li);
    
    taskInput.value = "";
});
