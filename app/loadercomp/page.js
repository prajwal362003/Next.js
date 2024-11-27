import "./loader.css";

const todo = async () => {
  const data = await fetch("https://dummyjson.com/todos");
  const response = await data.json();
  return response.todos;
};

const Loader = async () => {
  let todos = await todo();
  console.log(todos);
  return (
    <div>
      <h1>Understand Loading till the api gets fetched</h1>
      <ul>
        {todos.map((task) => (
          <li key={task.id}>
            Task {task.id} :- {task.todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Loader;
