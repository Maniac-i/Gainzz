
import './App.css';
import Navbar from "./components/Navbar"; 
import ExerciseDetails from './pages/ExerciseDetails/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <ExerciseDetails/>
        
      </header>
    </div>
  );
}

export default App;
