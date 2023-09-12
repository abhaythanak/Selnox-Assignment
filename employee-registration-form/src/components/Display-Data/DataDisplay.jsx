import React from 'react';
import './Data.css';
function DataDisplay({ registrations, handleEdit, handleDelete }) {
  return (
      <>
        <div className="table-wrapper">
            <div className="table-title">
                <h1>Employe List</h1>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>firstName</th>
                        <th>lastName</th>
                        <th>dateOfBirth</th>
                        <th>study</th>
                        <th>startDate</th>
                        <th>endDate</th>
                        <th>currentSalary</th>
                        <th>description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    { registrations.map((registration, index)=>{
                        return (
                            <tr key={index}>
                                <td>{registration.firstName}</td>
                                <td>{registration.lastName}</td>
                                <td>{registration.dateOfBirth}</td>
                                <td>{registration.study}</td>
                                <td>{registration.startDate}</td>
                                <td>{registration.endDate}</td>
                                <td>{registration.currentSalary}</td>
                                <td>{registration.description}</td>
                                <td><button type="button" onClick={() => handleEdit(index)}>Edit</button></td>
                                <td><button type="button" onClick={() => handleDelete(index)}>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </>
   // </div>
  );
}

export default DataDisplay;
