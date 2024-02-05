function Add_task(){
    const task = document.getElementById('task');

    if(task.value === ''){
        alert('Enter your task! Input field can\'t be empty!');
    }else{
        const list = document.getElementById('taskList');
        const li = document.createElement('li');
        list.appendChild(li);
        li.innerHTML = `<b>${task.value}</b> </style>
        <img align = "right" src = "Assets/trash-solid.svg" width = "20px">`;

        task.value = '';
    }
}

