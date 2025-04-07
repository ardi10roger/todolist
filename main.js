let idCounter = 0;
const input = document.querySelector('input[type="text"]');
userInput.addEventListener('submit', (event)=>{
    event.preventDefault();
    addTask();
});

let addTask = ()=>{
    idCounter++;

    let newValue = input.value;

    list.innerHTML += `
        <div class="task-container" id="${idCounter}">
            <label>
                <input type="checkbox">
                ${newValue}
            </label>
            <img src="./img/delete.png" alt="delete" class="closeBtn">
        </div>`
        input.value = '';
        updateStats();
};

list.addEventListener('click', (event)=>{
  if(event.srcElement.nodeName == 'INPUT'){
    updateStats();
    } else if(event.srcElement.nodeName == 'IMG'){
        deleteTash(event.srcElement.parentNode.id);
    }
});

let updateStats = ()=>{
    let element = list.querySelectorAll('div');
    let checkbox = list.querySelectorAll('input[type="checkbox"]:checked');
    stats.innerHTML = `<p>Tareas Pendientes: ${element.length} Completadas: ${checkbox.length}</p>`
};

let deleteTash = (id)=>{
    let taskToDelete = document.getElementById(id);
    list.removeChild(taskToDelete);
    updateStats();
}

