import React from "react"
import ReactDOM from "react-dom"
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeesList from './Components/list';
import DisplayInfo from './Components/displaySelectedUsers';
import Home from './Components/home';
import { useDispatch } from 'react-redux'
import Checkbox from "./Components/checkbox";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Home />}>
          </Route>
          <Route path="/allusers" element={<EmployeesList />}>
          </Route>
          <Route path="/selected" element={<DisplayInfo />}>
          </Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
