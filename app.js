const inputFront = document.querySelector('.input-front');
const buttonFront = document.querySelector('.button-front');
const ToDoListFront = document.querySelector(".todo-list-front");

buttonFront.addEventListener('click', newToDo);
ToDoListFront.addEventListener("click", deleteCheck);





function newToDo(event){
    event.preventDefault();
    console.log("hello");


    const newToDoDiv = document.createElement('div');
    const newToDoListItem = document.createElement('li');
    newToDoListItem.innerText = inputFront.value;
    newToDoDiv.appendChild(newToDoListItem);

    // const newCompletedButton = document.createElement('button');
    // newCompletedButton.innerHTML = '<i class="far fa-check-circle"></i>';
    // newToDoDiv.appendChild(newCompletedButton);
   
    const newTrashButton = document.createElement("div");
    newTrashButton.innerHTML = '<i class="far fa-trash-alt"></i>';
    newTrashButton.classList.add("trash-btn");
    newToDoDiv.appendChild(newTrashButton);

    ToDoListFront.appendChild(newToDoDiv);

    inputFront.value = "";

}

function deleteCheck(e){
    const eventFront = e.target;
    console.log(e.target);
     if(eventFront.classList[0] === "trash-btn"){
         const targetNewParent = eventFront.parentElement;
        targetNewParent.remove();
    }
}