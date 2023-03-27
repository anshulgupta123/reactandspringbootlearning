import './App.css';
import Counter from './Components/counter/Counter';
import LearningComponent from './Components/learning-example/LearningComponent';

function App() {
  return (
    <div className="App">
      <PlayingWithPops property1="p1" property2="p2"></PlayingWithPops>
      <Counter by={1}></Counter>  
      <Counter by={2}></Counter>   
      <Counter by={3}></Counter>    
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
