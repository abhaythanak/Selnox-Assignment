import React, { useState } from 'react';
import RegistrationForm from './components/Registration/Registration-Form';
import DataDisplay from './components/Display-Data/DataDisplay';
import EditPage from './components/Edit-Page/EditPage';
import './App.css';
function App() {
  const [registrations, setRegistrations] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const addRegistration = (newRegistration) => {
    if (editIndex === -1) {
      setRegistrations([...registrations, newRegistration]);
    } else {
      const updatedRegistrations = [...registrations];
      updatedRegistrations[editIndex] = newRegistration;
      setRegistrations(updatedRegistrations);
      setEditIndex(-1);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const cancelEdit = () => {
    setEditIndex(-1);
  };

  const updateRegistration = (updatedRegistration) => {
    if (editIndex !== -1) {
      const updatedRegistrations = [...registrations];
      updatedRegistrations[editIndex] = updatedRegistration;
      setRegistrations(updatedRegistrations);
      setEditIndex(-1);
    }
  };

  const handleDelete = (index) => {
    const updatedRegistrations = [...registrations];
    updatedRegistrations.splice(index, 1);
    setRegistrations(updatedRegistrations);

    if (editIndex === index) {
      setEditIndex(-1);
    } else if (editIndex > index) {
      setEditIndex(editIndex - 1);
    }
  };

  return (
    <div>
      <RegistrationForm
        addRegistration={addRegistration}
        editIndex={editIndex}
        registrationToEdit={registrations[editIndex]}
        cancelEdit={cancelEdit}
      />
      {/* <DataDisplay registrations={registrations} handleEdit={handleEdit} handleDelete={handleDelete} />
      {editIndex !== -1 && (
        <EditPage
          registrationToEdit={registrations[editIndex]}
          updateRegistration={updateRegistration}
          cancelEdit={cancelEdit}
        />
      )} */}
    </div>
  );
}

export default App;
