const newTask = document.getElementById('newtask')
const AddTask = document.getElementById('Add-task')
const taskList = document.getElementById('tasks')


AddTask.addEventListener('click', function(){
    let task = newTask.value;

    let taskItem = document.createElement('div')
    taskItem.classList.add('task')
    taskItem.innerHTML = `
    <span>${task}</span>
    <button class="delete-task">
    <i class="fa-solid fa-trash"></i>
    </button>
  `;
  taskList.appendChild(taskItem);
    newTask.value = "";


taskItem.querySelector(".delete-task").addEventListener("click", function(){
            taskItem.remove();
  });
})

