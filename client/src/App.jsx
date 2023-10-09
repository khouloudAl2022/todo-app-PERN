import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

function App() {
  return (
    <div className="text-center mt-5">
      <InputTodo style={{width:"50%"}}/>
      <ListTodos/>
    </div>
  );
}

export default App;
