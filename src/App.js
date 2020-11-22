import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
    </div>
  
  );
}

export default App;
