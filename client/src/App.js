
import './App.css';
import Navbar from "./components/Navbar"; 
import ExerciseDetailsPage from './components/ExerciseDetailsPage/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <ExerciseDetailsPage/>
        
      </header>
    </div>
  );
}

export default App;
