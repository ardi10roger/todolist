let idCounter = 0;
const input = document.querySelector('input[type="text"]');
userInput.addEventListener('submit', (event) => {
    event.preventDefault();
    addTask();
});

let addTask = () => {

     // Validación para evitar tareas vacías
     if (input.value.trim() === "") {
        // Mostrar un mensaje de advertencia
        if (!document.getElementById("warningMessage")) {
            let warningMessage = document.createElement("p");
            warningMessage.id = "warningMessage";
            warningMessage.textContent = "¡Por favor, escribe una tarea!";
            document.querySelector("form").appendChild(warningMessage);
        }
        
        // Colocar el foco en el input
        input.focus();
        return; // Si el campo está vacío, no hacer nada
    }

    // Si hay una tarea válida, eliminar el mensaje de advertencia
    let warningMessage = document.getElementById("warningMessage");
    if (warningMessage) {
        warningMessage.remove();
    }

    idCounter++;

    let newValue = input.value;

    list.innerHTML += `
        <div class="task-container" id="${idCounter}">
          <div class="checkbox-label">
            <input type="checkbox" id="check-${idCounter}">
            <label for="check-${idCounter}">${newValue}</label>
            <img src="./img/delete.png" alt="delete" class="closeBtn">
          </div>
        </div>`;
    
    input.value = '';
    updateStats();
    input.focus(); // Devolver el foco al input
};

list.addEventListener('click', (event) => {
  if (event.target && event.target.type === 'checkbox') {
    updateStats();
  } else if (event.target && event.target.classList.contains('closeBtn')) {
    // Usamos closest para asegurarnos de que estamos eliminando la tarea correcta
    deleteTask(event.target.closest('.task-container').id);
  }
});

let updateStats = () => {
    let element = list.querySelectorAll('.task-container');
    let checkbox = list.querySelectorAll('input[type="checkbox"]:checked');

    if (element.length === 0){
      stats.innerHTML = '';
      stats.style.display = 'none';
    }else{
      stats.style.display = 'block';
      stats.innerHTML = `<p>Tareas Pendientes: ${element.length}</p>
    <p>Completadas: ${checkbox.length}</p>`;
    }
};

let deleteTask = (id) => {
    let taskToDelete = document.getElementById(id);
    list.removeChild(taskToDelete);
    updateStats();
};
