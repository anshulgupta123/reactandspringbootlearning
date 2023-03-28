import './App.css';
import LearningComponent from './Components/learning-example/LearningComponent';
import CounterButton from './Components/counter/Counter';
import Counter from './Components/counter/Counter';
import TodoApp from './Components/todo/TodoApp';

function App() {
  return (
    <div className="App">
      <TodoApp></TodoApp>
    </div>
  );
}

function PlayingWithPops(properties){
  console.log(properties);
  console.log(properties.property1)
  console.log(properties.property2)
  return (
    <div>PropsDemo</div>
  );
}

export default App;
