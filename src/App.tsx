import "./App.scss";
import { TodoList } from "./modules/TodoList/TodoList";
import { UserSummary } from "./modules/UserSummary/UserSummary";

function App() {
  return (
    <div className="container">
      <h2>1. Auto Delete Todo List</h2>
      <TodoList />
      <h2>2. Create data from API (OPTIONAL)</h2>
      <UserSummary />
    </div>
  );
}

export default App;
