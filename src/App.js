
import './App.css';
import {v4 as uuidv4} from 'uuid';
import Employee from './components/Employee'
import { useState } from 'react';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import Header from './components/Header';
import Employees from './pages/Employees';
//encloses all files under the header tag and returns
function App() {
  return(
    <Header>
      <Employees/> 
    </Header>
  )
  
}

export default App;  