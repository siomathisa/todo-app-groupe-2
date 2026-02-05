// Base Todo App
let todos = [];

// Cette fonction sera implémentée par les étudiants
function addTaskFromInput() {
  const input = document.getElementById("taskInput");
  addTask(input.value);
  input.value = "";
}

// === À IMPLÉMENTER PAR LES ÉTUDIANTS ===

// Étudiant 1 : Implémenter cette fonction
function addTask(text) {
  // TODO: Votre code ici
}

// Étudiant 2 : Implémenter cette fonction
function displayTasks() {
  function displayTasks() {
    const container = document.getElementById("task-list");
    if (!container) {
      console.error("❌ Container task-list introuvable");
      return;
    }

    // Vider conteneur
    container.innerHTML = "";

    // Si aucune tâche
    if (todos.length === 0) {
      container.innerHTML =
        '<p style="text-align: center; color: #999;">Aucune tâche</p>';
      return;
    }

    // Afficher chaque tâche
    todos.forEach((task) => {
      const div = document.createElement("div");
      div.className = "task";
      div.innerHTML = `
            <input type="checkbox" 
                   ${task.completed ? "checked" : ""} 
                   onchange="toggleTask(${task.id})">
            <span class="${task.completed ? "completed" : ""}">
                ${task.text}
            </span>
            <button onclick="deleteTask(${task.id})">🗑️ Supprimer</button>
        `;
      container.appendChild(div);
    });

    console.log(`✅ ${todos.length} tâches affichées`);
  }
}

// Étudiant 3 : Implémenter ces fonctions
function deleteTask(id) {
  // TODO: Votre code ici
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
