import React from 'react';
import './Data.css';
function DataDisplay({ registrations, handleEdit, handleDelete }) {
  return (
    <div>
      <h2>Registrations</h2>
      <ul>
        {registrations.map((registration, index) => (
          <li key={index}>
            {registration.firstName} {registration.lastName} ({registration.study})
            <button type="button" onClick={() => handleEdit(index)}>Edit</button>
            <button type="button" onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataDisplay;
