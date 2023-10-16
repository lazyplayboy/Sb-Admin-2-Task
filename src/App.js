import logo from './logo.svg';
import './App.css';

import {Routes,Route} from "react-router-dom";
import Tables from './Components/Tables';
import Board from './Components/Board';
import Charts from './Components/Charts';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';
import Forgot from './Components/Pages/Forgot';
import Page from './Components/Pages/404pages';
import Blankpage from './Components/Pages/Blankpage';
import Colors from './Components/Utilities/Colors';
import Borders from './Components/Utilities/Borders';
import Others from './Components/Utilities/Others';
import Buttons from './Components/Component/Buttons';
import Cards from './Components/Component/Cards';
import Animation from './Components/Utilities/Animation'


function App() {
  return (
  
 <>

  <Routes>
 
 <Route path="/" Component={Board}/>
 <Route path="/Tables" Component={Tables}/>
 <Route path='/Charts' Component={Charts}/>
 <Route path='/Page' Component={Page}/>
 <Route path='/Blankpage' Component={Blankpage}/>
 <Route path='/Colors' Component={Colors}/>
 <Route path='/Borders' Component={Borders}/>
 <Route path='/Animations' Component={Animation}/>
 <Route path='/Others' Component={Others}/>
 <Route path='/Buttons' Component={Buttons}/>
 <Route path='/Cards' Component={Cards}/>
 <Route path='/Login' Component={Login}/>
 <Route path='/Register' Component={Register}/>
 <Route path='/Forgot' Component={Forgot}/>

 
 
  </Routes>

  

  

  
</>





  );
}

export default App;