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
  // Validation
  if (!text || text.trim() === "") {
    alert("❌ La tâche ne peut pas être vide");
    return;
  }

  // Créer tâche
  const task = {
    id: Date.now(),
    text: text.trim(),
    completed: false,
    createdAt: new Date().toISOString(),
  };

  // Ajouter au tableau
  todos.push(task);
  console.log("✅ Tâche ajoutée:", task);

  // Rafraîchir affichage
  displayTasks();
  updateStats();
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
  const index = todos.findIndex((t) => t.id === id);

  if (index > -1) {
    const deleted = todos.splice(index, 1);
    console.log("✅ Tâche supprimée:", deleted[0]);
    displayTasks();
    updateStats();
  } else {
    console.error("❌ Tâche non trouvée");
  }
}

function toggleTask(id) {
  const task = todos.find((t) => t.id === id);

  if (task) {
    task.completed = !task.completed;
    console.log(`✅ Tâche ${task.completed ? "terminée" : "réactivée"}:`, task);
    displayTasks();
    updateStats();
  } else {
    console.error("❌ Tâche non trouvée");
  }
}

function toggleTask(id) {
  // TODO: Votre code ici
}

// Étudiant 4 : Implémenter ces fonctions
function filterTasks(status) {
  switch (status) {
    case "active":
      return todos.filter((t) => !t.completed);
    case "completed":
      return todos.filter((t) => t.completed);
    default:
      return todos;
  }
}

function displayFilteredTasks(status) {
  const container = document.getElementById("task-list");
  if (!container) return;

  const filtered = filterTasks(status);

  // Vider conteneur
  container.innerHTML = "";

  // Si aucune tâche filtrée
  if (filtered.length === 0) {
    container.innerHTML = `<p style="text-align: center; color: #999;">
            Aucune tâche ${status === "active" ? "active" : status === "completed" ? "terminée" : ""}
        </p>`;
    return;
  }

  // Afficher tâches filtrées
  filtered.forEach((task) => {
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

  console.log(`✅ ${filtered.length} tâches filtrées (${status})`);
}

function updateStats() {
  const countElement = document.getElementById("task-count");
  if (!countElement) return;

  const total = todos.length;
  const completed = todos.filter((t) => t.completed).length;
  const active = total - completed;

  countElement.textContent = `${total} tâche${total > 1 ? "s" : ""} (${active} active${active > 1 ? "s" : ""}, ${completed} terminée${completed > 1 ? "s" : ""})`;
}
