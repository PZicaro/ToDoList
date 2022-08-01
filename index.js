const inputElement = document.querySelector('.new-task-input');
const addTaskButton = document.querySelector('.new-task-button');
const container = document.querySelector('.tasks-done');


addTaskButton.addEventListener('click', ()=>{
    let Check = inputElement.value.trim().length>0;
    if (!Check) return inputElement.classList.add("error");

    const taskItemContainer = document.createElement('div');
    taskItemContainer.classList.add('task-container');

    const taskContent = document.createElement('p');
    taskContent.classList.add("task-name")
    taskContent.innerText = inputElement.value;
    taskContent.setAttribute("onClick", "check(this)")

    const buttonIcon = document.createElement('button');
    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fa-solid');
    deleteIcon.classList.add('fa-trash-can');
    buttonIcon.setAttribute("onClick", "removeTask(this)")
    buttonIcon.type="button"
    buttonIcon.appendChild(deleteIcon);
    taskItemContainer.appendChild(taskContent);
    taskItemContainer.appendChild(buttonIcon);
    container.appendChild(taskItemContainer);



    inputElement.value = "";
   



});


function removeTask(button){
  let task = button.parentNode;
  document.getElementById('teste').removeChild(task)
  

}

function check(text){
  text.classList.toggle("completed")

}

inputElement.addEventListener('click', ()=>{
  return  inputElement.classList.remove("error")
})

