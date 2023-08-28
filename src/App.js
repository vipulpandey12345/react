
import './App.css';
import {v4 as uuidv4} from 'uuid';
import Employee from './components/Employee'
import { useState } from 'react';
function App() {
  const showEmployees = true;
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState(
    [
    {name: 'Caleb',
    role: 'Youtube Sensation',
    img: 'https://images.pexels.com/photos/17993439/pexels-photo-17993439/free-photo-of-wood-bench-light-city.jpeg'
    },
    {
    name: 'Valerie',
    role: 'Developer',
    img: 'https://images.pexels.com/photos/17993439/pexels-photo-17993439/free-photo-of-wood-bench-light-city.jpeg'
    },
    {
      name: 'Jane',
      role: 'Stay at home mom',
      img: 'https://images.pexels.com/photos/17993439/pexels-photo-17993439/free-photo-of-wood-bench-light-city.jpeg'
    }
    ]
  );
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
              console.log(uuidv4())
              return(<Employee
                key = {uuidv4()}
                name = {employee.name} 
                role = {employee.role} 
                img = {employee.img}/>
                );
            })}
          </div>
          </>
        )
      :(
        <p>Hi</p>
      )}
    </div>
  );
}

export default App;  