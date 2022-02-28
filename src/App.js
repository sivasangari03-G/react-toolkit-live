import './App.css';
import { Counter } from './features/counter/Counter';
import { Todos } from './features/todos/Todos';

function App() {
  return (
    <div className="App">
      <Counter />
      <Todos />
    </div>
  );
}

export default App;
