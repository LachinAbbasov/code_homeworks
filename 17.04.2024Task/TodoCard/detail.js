const urlParams = new URLSearchParams(window.location.search);
const todoId = urlParams.get('id');

document.getElementById('loading').classList.remove('d-none');

if (todoId) { 
  setTimeout(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
      .then(response => response.json())
      .then(todo => {
        const todoDetails = document.getElementById('todoDetails');
       
        const cardColor = todo.completed ? "bg-success" : "bg-danger"; 
      
        todoDetails.innerHTML = `
          <h5 class="card-title text-center">Todo Details</h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">userId: ${todo.userId}</li>
            <li class="list-group-item">id: ${todo.id}</li>
            <li class="list-group-item">title: ${todo.title}</li>
            <li class="list-group-item">completed: ${todo.completed ? "Complete!" : "Compleden't!"}</li>
          </ul>
          <button id="goBackBtn" class="btn btn-primary mb-3">Go Back</button>
        `;
        todoDetails.classList.remove('d-none');
        todoDetails.parentElement.classList.add(cardColor); 
        document.getElementById('loading').classList.add('d-none');
        document.getElementById('goBackBtn').addEventListener('click', () => {
          window.history.back(); 
        });
      })
      .catch(error => console.error('Error:', error));
  }, 2500);
} 
  else {
  console.error('Error: Todo ID is not provided');
};
