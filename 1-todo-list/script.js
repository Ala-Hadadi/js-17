function todoList(todos) {
  // Write your code here...

  const div = document.getElementById("content");
  const ul = document.createElement("ul");
  todos.forEach((todoObj) => {
    const li = document.createElement("li");
    li.textContent = todoObj.todo;  

    li.addEventListener("click", () => {
      if (li.style.textDecoration === "line-through") {
        li.style.textDecoration = "none"; 
      } else {
        li.style.textDecoration = "line-through";  
      }
    });

    ul.appendChild(li);
  });
  div.appendChild(ul);
}


const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);