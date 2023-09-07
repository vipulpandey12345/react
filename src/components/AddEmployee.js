import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddEmployee(props) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  
  const [img, setImg] = useState('');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <button onClick={handleShow} 
    className="block max-auto m-2 bg-slate-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      + Add Employee
    
    </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add an employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form
            onSubmit={(e) => {
                handleClose();
                e.preventDefault();
                setName('');
                setRole('');
                setImg('');
                props.newEmployee(name, role, Image);
            }}
        id='editmodal' className="w-full max-w-sm">
        <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="name">
                Full Name
            </label>
            </div>
            <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
            id="name"
            placeholder='John Smith'
            type="text" 
            value={name}
            onChange = {(value) => {
                setName(value.target.value)}}
            />
            </div>
        </div>
        <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="Role">
                Role
            </label>
            </div>
            <div className="md:w-2/3">
            <input 
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                id="img"
                placeholder='Bank Teller'
                type="text" 
                value={role}
                onChange = {(value) => {
                setRole(value.target.value)}}
                />
            </div>
        </div> 
        <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for=
            "img">
                Image URL
            </label>
            </div>
            <div className="md:w-2/3">
            <input 
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                id="img" 
                type="text" 
                placeholder='some url image'
                value={img}
                onChange = {(value) => {
                setImg(value.target.value)}}
                />
            </div>
        </div>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button
          onClick = {props.updateEmployee} 
          class="bg-slate-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
          form='editmodal'>Add</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddEmployee;