// Base Todo App
let todos = [];

// Cette fonction sera implémentée par les étudiants
function addTaskFromInput() {
    const input = document.getElementById('taskInput');
    addTask(input.value);
    input.value = '';
}

// === À IMPLÉMENTER PAR LES ÉTUDIANTS ===

// Étudiant 1 : Implémenter cette fonction
function addTask(text) {
    // TODO: Votre code ici
}

// Étudiant 2 : Implémenter cette fonction
function displayTasks() {
    // TODO: Votre code ici
}

// Étudiant 3 : Implémenter ces fonctions
function deleteTask(id) {
    const index = todos.findIndex(t => t.id === id);

    if (index > -1) {
        const deleted = todos.splice(index, 1);
        console.log('✅ Tâche supprimée:', deleted[0]);
        displayTasks();
        updateStats();
    } else {
        console.error('❌ Tâche non trouvée');
    }
}

function toggleTask(id) {
    const task = todos.find(t => t.id === id);

    if (task) {
        task.completed = !task.completed;
        console.log(`✅ Tâche ${task.completed ? 'terminée' : 'réactivée'}:`, task);
        displayTasks();
        updateStats();
    } else {
        console.error('❌ Tâche non trouvée');
    }
}

function toggleTask(id) {
    // TODO: Votre code ici
}

// Étudiant 4 : Implémenter ces fonctions
function filterTasks(status) {
    // TODO: Votre code ici
}

function displayFilteredTasks(status) {
    // TODO: Votre code ici
}

function updateStats() {
    // TODO: Votre code ici
}