const socket = io('http://localhost:3000');

const createTaskForm = document.getElementById('createTaskForm');
const taskTitleInput = document.getElementById('taskTitle');
const tasksContainer = document.getElementById('tasksContainer');

const toastElement = document.getElementById('liveToast');
const toastTitle = document.getElementById('toastTitle');
const toastTime = document.getElementById('toastTime');
const toastBody = document.getElementById('toastBody');
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastElement);

function showToast(title, body) {
  toastTitle.textContent = title;
  toastBody.textContent = body;
  toastTime.textContent = new Date().toLocaleTimeString();
  toastBootstrap.show();
}

async function fetchTasks() {
  const res = await fetch('http://localhost:3000/tasks');
  const tasks = await res.json();
  tasksContainer.innerHTML = '';
  tasks.forEach(task => createTaskCard(task));
}

function createTaskCard(task) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <div class="card-body">
      <h5 class="card-title">${task.title}</h5>
      <div>
        <button class="btn btn-info text-white btn-edit">Editar</button>
        <button class="btn btn-danger btn-delete">Deletar</button>
      </div>
    </div>
  `;
  const editBtn = card.querySelector('.btn-edit');
  const deleteBtn = card.querySelector('.btn-delete');

  editBtn.addEventListener('click', () => editTask(task));
  deleteBtn.addEventListener('click', () => deleteTask(task.id));

  tasksContainer.appendChild(card);
}

createTaskForm.addEventListener('submit', async e => {
  e.preventDefault();
  const title = taskTitleInput.value.trim();
  if (!title) return;

  try {
    const res = await fetch('http://localhost:3000/task', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    });
    const newTask = await res.json();

    socket.emit('new task', newTask);

    fetchTasks();
    taskTitleInput.value = '';
  } catch (err) {
    console.error(err);
  }
});

async function deleteTask(id) {
  await fetch(`http://localhost:3000/task/${id}`, {
    method: 'DELETE',
  });
  showToast('Task deletada', `Task de id ${id} foi deletada`);
  fetchTasks();
}

function editTask(task) {
  const newTitle = prompt('Digite o novo título', task.title);
  if (!newTitle) return;

  fetch(`http://localhost:3000/task/${task.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: newTitle }),
  }).then(() => {
    showToast('Task atualizada', `Task "${task.title}" atualizada para "${newTitle}"`);
    fetchTasks();
  });
}

socket.on('new task', data => {
  showToast('Nova Task', data.title);
  fetchTasks();
});

socket.onAny((eventName, data) => {
  if (eventName.startsWith('task') && eventName.includes('edited')) {
    showToast('Task editada', `Tarefa ${data?.id || ''} atualizada`);
    fetchTasks();
  }
  if (eventName.startsWith('task') && eventName.includes('deleted')) {
    showToast('Task deletada', `Tarefa ${data?.id || ''} removida`);
    fetchTasks();
  }
});

fetchTasks();
