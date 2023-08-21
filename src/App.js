
import './App.css';
import Employee from './components/Employee'
import { useState } from 'react';
function App() {
  const showEmployees = true;
  const [role, setRole] = useState('dev');
  return (
    <div className='App'>
      {
        showEmployees ?(
          <>
          <input
          type = 'text'
          onChange={(e) => setRole(e.target.value)}
          />
          <Employee name = "Caleb" role = {role}/>
          <Employee name = "Valerie" role = 'nurse'/>
          </>
        )
      :(
        <p>Hi</p>
      )}
    </div>
  );
}

export default App;  