import logo from './logo.svg';
import './App.css';
import {  BrowserRouter as Router,
  Routes,
  Route,
  } from "react-router-dom";

import Homescreen from './app/homescreen/homescreen';
import Loadupscreen from './app/loadup/loadup';
var newImg = new Image;
newImg.src = './assets/pxfuel.jpg'
function App(){
return(
<Router>
       <div className="App">
        <Routes>
          <Route exact path='/' element={<Loadupscreen/>} />
          <Route exact path='/HomeScreen' element={<Homescreen/>} />
          
         
          

        </Routes>
        </div>

    </Router>
)
}
export default App;
