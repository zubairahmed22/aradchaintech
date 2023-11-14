
import './App.css';

import Header from './Component/header';
import Profile from './profile';
import Home from "./home"
import Login from './login';
import SignUp from './signUp';
import {Routes, Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/sginUp" element={<SignUp/>}/>

      
     </Routes>
    </div>
  );
}

export default App;
