import './App.css';
import { Home } from './Components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { About } from './Components/About';
import { MySkills } from './Components/MySkills';
import { Contact } from './Components/Contact';
import { Projects } from './Components/Projects';

function App() {
  return (
    <Router>
    <div>
      <Routes>
      <Route exact path='/' element={<Home title="MyPortfolio"/>}></Route>
      <Route exact path='/about' element={<About/>}></Route>
      <Route exact path='/myskills' element={<MySkills/>}></Route>
      <Route exact path='/contact' element={<Contact/>}></Route>
      <Route exact path='/projects' element={<Projects/>}></Route>
      
      </Routes>
     
    </div>
    </Router>
  );
}

export default App;
