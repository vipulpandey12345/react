
import '../App.css';
import {v4 as uuidv4} from 'uuid';
import Employee from '../components/Employee'
import { useState } from 'react';
import AddEmployee from '../components/AddEmployee';
import EditEmployee from '../components/EditEmployee';
import Header from '../components/Header';
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


    function newEmployee(name, role, image){
      const newEmployee ={
        id: uuidv4(),
        name: name,
        role:role,
        image: image,
      }
      setEmployees([... employees, newEmployee])

    }


  return (
    <div className='App bg-gray-300 min-h-screen'>
      {
        showEmployees ?(
          <>
          {/* <input
          type = 'text'
          onChange={(e) => setRole(e.target.value)}
          /> */}
          <div className='flex flex-wrap'>
            {employees.map((employee) => {
              const editEmployee = (<EditEmployee 
              id = {employee.id}
              name={employee.name} 
              role = {employee.role} 
              updateEmployee = {updateEmployee}
              />
            );
              return(<Employee
                id = {employee.id}
                name = {employee.name} 
                role = {employee.role} 
                img = {employee.img}
                editEmployee = {editEmployee}//will call edit employee from this function jsx function
                />
                );
            })}
          </div>
          <AddEmployee newEmployee = {newEmployee}/>
          </>
        )
      :(
        <p>Hi</p>
      )}
    </div>
  );
}

export default App;  
