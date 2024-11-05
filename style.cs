* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f9;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}

header {
  background-color: #333;
  color: white;
  padding: 15px;
  width: 100%;
  text-align: center;
}

h1 {
  margin: 0;
}

#task-input {
  margin: 20px;
}

#task-name {
  padding: 10px;
  font-size: 1em;
}

button {
  padding: 10px 15px;
  font-size: 1em;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #0056b3;
}

#task-list {
  width: 300px;
}

.task-item {
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.complete {
  text-decoration: line-through;
  color: #888;
}
