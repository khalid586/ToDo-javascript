

function Add_task(){
    const task = document.getElementById('task');

    if(task.value === ''){
        alert('Enter your task! Input field can\'t be empty!');
    }else{
        const list = document.getElementById('taskList');
        const li = document.createElement('li');
        list.appendChild(li);
        li.innerText = task.value;
        task.value = '';
    }
}

// function Add_task() {
//     const taskInput = document.getElementById('task');
//     const text = document.getElementById('Added_task');

//     // Display the task name
//     text.innerText = "Task: " + taskInput.value;

//     // You can clear the input field if needed
//     taskInput.value = '';
// }
