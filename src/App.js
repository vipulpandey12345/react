
import './App.css';
import {v4 as uuidv4} from 'uuid';
import Employee from './components/Employee'
import { useState } from 'react';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
function App() {
  const showEmployees = true;
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState(
    [
    {   id:1,
        name: 'Caleb',
        role: 'Youtube Sensation',
        img: 'https://images.pexels.com/photos/17993439/pexels-photo-17993439/free-photo-of-wood-bench-light-city.jpeg'
    },
    {
        id:2,
        name: 'Valerie',
        role: 'Developer',
        img: 'https://images.pexels.com/photos/17993439/pexels-photo-17993439/free-photo-of-wood-bench-light-city.jpeg'
    },
    {
      id:3,
      name: 'Jane',
      role: 'Stay at home mom',
      img: 'https://images.pexels.com/photos/17993439/pexels-photo-17993439/free-photo-of-wood-bench-light-city.jpeg'
    }
    ]
  );

    function updateEmployee(id,newName,newRole){
      const updateEmployees = employees.map((employee) => {
        if(id == employee.id){
          return {... employee, name: newName, role:newRole} //new object
        }
      });
      setEmployees(updateEmployees);
    }


  return (
    <div className='App bg-red-300'>
      {
        showEmployees ?(
          <>
          <input
          type = 'text'
          onChange={(e) => setRole(e.target.value)}
          />
          <div className='flex flex-wrap'>
            {employees.map((employee) => {
              return(<Employee
                id = {employee.id}
                name = {employee.name} 
                role = {employee.role} 
                img = {employee.img}
                updateEmployee = {updateEmployee}
                />
                );
            })}
          </div>
          <Employee/>
          <AddEmployee/>
          </>
        )
      :(
        <p>Hi</p>
      )}
    </div>
  );
}

export default App;  