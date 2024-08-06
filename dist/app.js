"use strict";
const taskButton = document.getElementById('addTaskButton');
taskButton.addEventListener('click', function () {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskList = document.getElementById('taskList');
        const newTask = document.createElement('li');
        newTask.textContent = taskText;
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.setAttribute('class', 'editButton');
        // Add event listener to remove task when clicked
        newTask.addEventListener('click', function () {
            taskList.removeChild(newTask);
            taskList.removeChild(editButton);
        });
        // Add event listener to show edit form when clicked
        editButton.addEventListener('click', function () {
            const editForm = document.getElementById('editForm');
            editForm.classList.remove('hidden');
            const newVal = document.getElementById('newValue');
            newVal.value = newTask.textContent || "";
            const saveButton = document.getElementById('saveButton');
            saveButton.onclick = function () {
                const newValue = newVal.value.trim();
                if (newValue !== '') {
                    newTask.textContent = newValue;
                    editForm.classList.add('hidden');
                    newVal.value = ''; // Clear the input field
                }
            };
        });
        taskList.appendChild(newTask);
        taskList.appendChild(editButton);
        taskInput.value = '';
    }
    else {
        alert("empty value");
    }
});
