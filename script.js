// Task Manager: using ES6+ class syntax with prototypes, closure, and JSON handling

// Task class with prototype methods
class Task {
    constructor(name) {
      this.name = name;
      this.completed = false;
    }
  
    // Toggle task completion
    toggleCompletion() {
      this.completed = !this.completed;
    }
  }
  
  // TaskManager class to manage tasks
  class TaskManager {
    constructor() {
      this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    }
  
    // Add a new task
    addTask(taskName) {
      const newTask = new Task(taskName);
      this.tasks.push(newTask);
      this.saveTasks();
    }
  
    // Remove a task
    removeTask(index) {
      this.tasks.splice(index, 1);
      this.saveTasks();
    }
  
    // Toggle task completion
    toggleTask(index) {
      const task = this.tasks[index];
      task.toggleCompletion();
      this.saveTasks();
    }
  
    // Save tasks to LocalStorage
    saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }
  
  // Initialize TaskManager
  const taskManager = new TaskManager();
  renderTasks();
  
  // Event loop demonstration with asynchronous behavior
  function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = ''; // Clear the existing tasks
  
    taskManager.tasks.forEach((task, index) => {
      const taskDiv = document.createElement('div');
      taskDiv.className = 'task-item' + (task.completed ? ' complete' : '');
      taskDiv.innerHTML = `
        <span>${task.name}</span>
        <button onclick="toggleTask(${index})">Toggle</button>
        <button onclick="removeTask(${index})">Remove</button>
      `;
      taskList.appendChild(taskDiv);
    });
  }
  
  // Add task function
  function addTask() {
    const taskName = document.getElementById('task-name').value;
    if (!taskName) {
      alert("Task name can't be empty!");
      return;
    }
    
    // Demonstrating implicit vs. explicit type comparison
    if (taskName == "Test" && taskName !== "test") { // loose and strict comparison
      alert("Type comparison: 'Test' is loosely equal to 'test' but strictly different.");
    }
  
    taskManager.addTask(taskName);
    renderTasks();
    document.getElementById('task-name').value = ''; // Clear input
  }
  
  // Toggle task completion
  function toggleTask(index) {
    taskManager.toggleTask(index);
    renderTasks();
  }
  
  // Remove task function
  function removeTask(index) {
    taskManager.removeTask(index);
    renderTasks();
  }
  
  // Closures and Scopes
  function closureExample() {
    const x = 10;
    return function() {
      console.log("Closure example, x =", x);
    };
  }
  const closure = closureExample();
  closure(); // Demonstrates closure
  
  // Demonstrate call stack and memory management
  console.log("JavaScript runtime and call stack example");
  setTimeout(() => console.log("First callback (Macro task)"), 0);
  Promise.resolve().then(() => console.log("Microtask: Promise resolved"));
  
  console.log("Synchronous code end");
  