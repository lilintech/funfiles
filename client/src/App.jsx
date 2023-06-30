import './App.css';
import Login from './components/Login';
import { Route, Routes} from "react-router-dom"
import Create from './components/Create';
import Home from './components/Home';

function App() {
  return (
    <div>
     <Routes>
      <Route path='/login' element={ <Login></Login>} ></Route>
      <Route path='/create' element={<Create></Create>} ></Route>
      <Route path='/home' element= {<Home></Home>}></Route>
      <Route path='/' element= {<Home></Home>}></Route>

      
     </Routes>
    
    </div>
  );
}

export default App;
