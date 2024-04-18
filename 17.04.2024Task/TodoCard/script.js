function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        const todoLists = document.getElementById('todoList');
        todoLists.innerHTML = ""; 
  
        data.forEach(todo => {
          const cardColor = todo.completed ? "bg-success" : "bg-danger";
          const todoCard = `
           <div class="col-lg-3 col-md-6 col-12 mb-3">
              <div class="card todo-card ${cardColor}">
                <div class="card-body">
                  <h5 class="card-title text-center">Todo</h5>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">userId: ${todo.userId}</li>
                    <li class="list-group-item">id: ${todo.id}</li>
                    <li class="list-group-item">title: ${todo.title}</li>
                    <li class="list-group-item">completed: ${todo.completed ? "Completed!" : "Compleden't!"}</li>
                  </ul>
                </div>
              </div>
              <a href="detail.html"?id=${todo.id} class="btn btn-outline-warning">Detail</a>
          
            </div>
            
          `;
          todoLists.innerHTML += todoCard;
        });
      })
      .catch(error => console.error('Error:', error));
  }
  

  document.getElementById('searchButton').addEventListener('click', () => {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const todoCards = document.querySelectorAll('.todo-card');
    todoCards.forEach(card => {
      const title = card.querySelector('.list-group-item:nth-child(3)').textContent.toLowerCase(); öğesi (title)
      if (title.includes(searchInput)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
  
 
  document.getElementById('showAllButton').addEventListener('click', () => {
    const todoCards = document.querySelectorAll('.todo-card');
    todoCards.forEach(card => {
      card.style.display = 'block';
    });
  });
  
 
  document.getElementById('sortSelect').addEventListener('change', () => {
    const sortValue = document.getElementById('sortSelect').value;
    const todoList = document.getElementById('todoList');
    const todoCards = Array.from(todoList.children);
    
    todoCards.sort((a, b) => {
      const titleA = a.querySelector('.list-group-item:nth-child(3)').textContent.toLowerCase();
      const titleB = b.querySelector('.list-group-item:nth-child(3)').textContent.toLowerCase();
      if (sortValue === 'AZ') {
        return titleA.localeCompare(titleB);
      } else {
        return titleB.localeCompare(titleA);
      }
    });
  
    todoList.innerHTML = ""; 
    todoCards.forEach(card => {
      todoList.appendChild(card);
    });
  });
  

  document.getElementById('filterSelect').addEventListener('change', () => {
    const filterValue = document.getElementById('filterSelect').value;
    const todoCards = document.querySelectorAll('.todo-card');
    
    todoCards.forEach(card => {
      const completedText = card.querySelector('.list-group-item:nth-child(4)').textContent;
      if (filterValue === 'all' || (filterValue === 'completed' && completedText.includes('Completed')) || (filterValue === 'pending' && completedText.includes("Compleden't"))) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
  
 
  window.onload = () => {
    fetchData();
  };
