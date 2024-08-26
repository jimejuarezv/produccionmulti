// Función para mostrar el panel principal y ocultar el panel de inicio de sesión
function showMainPanel() {
    // Oculta el panel de inicio de sesión (lo pone invisible)
    document.querySelector('#login-panel').style.display = 'none';
    // Muestra el panel principal (lo hace visible)
    document.querySelector('#main-panel').style.display = 'block';
}

// Configura el botón para agregar una tarea
document.querySelector('#add-task-button').onclick = function() {
    // Obtiene el formulario de tareas
    let taskForm = document.querySelector('#task-form');
    // Cambia la visibilidad del formulario de tareas: si está oculto, lo muestra; si está visible, lo oculta
    taskForm.style.display = taskForm.style.display === 'none' ? 'block' : 'none';
};

// Configura el formulario de nuevas tareas cuando se envía
document.querySelector('#new-task-form').onsubmit = function(event) {
    // Evita que el formulario recargue la página al enviarse
    event.preventDefault();
    
    // Obtiene los valores del título, descripción y fecha límite de la tarea
    let taskTitle = document.querySelector('#task-title').value;
    let taskDescription = document.querySelector('#task-description').value;
    let taskDeadline = document.querySelector('#task-deadline').value;

    // Crea un nuevo elemento de lista para la tarea
    let taskItem = document.createElement('li');
    // Establece el contenido del nuevo elemento de lista con los datos de la tarea
    taskItem.innerHTML = `<strong>${taskTitle}</strong> - ${taskDescription} <em>(Fecha límite: ${taskDeadline})</em>`;
    
    // Agrega el nuevo elemento de tarea a la lista de tareas
    document.querySelector('#tasks').appendChild(taskItem);
    
    // Oculta el formulario de tareas después de agregar la tarea
    document.querySelector('#task-form').style.display = 'none';
    // Limpia los campos del formulario de nuevas tareas
    document.querySelector('#new-task-form').reset();
};

// Configura el formulario de inicio de sesión cuando se envía
document.querySelector('#login-form').onsubmit = function(event) {
    // Evita que el formulario recargue la página al enviarse
    event.preventDefault();
    // Muestra el panel principal después de iniciar sesión
    showMainPanel();
};
