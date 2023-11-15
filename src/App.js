
import './App.css';

import HeaderComponent from './Component/header';
import Profile from './profile';
import Home from "./home"
import Login from './login';
import SignUp from './signUp';
import {Routes, Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
     <HeaderComponent/>
     <Routes>
     
      <Route path="/" element={<Profile/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/sginUp" element={<SignUp/>}/>

      
     </Routes>
    </div>
  );
}

export default App;
