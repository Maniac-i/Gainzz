
import './App.css';
import Navbar from "./components/Navbar"; 
import SpecificExerciseContainer from './components/SpecificExercise/Container/Container';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <SpecificExerciseContainer/>

        
      </header>
    </div>
  );
}

export default App;
