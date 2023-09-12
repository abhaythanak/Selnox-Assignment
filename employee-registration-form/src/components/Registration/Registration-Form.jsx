import React, { useState } from 'react';
import './Registration.css';

function RegistrationForm({ addRegistration }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    study: '',
    startDate: '',
    endDate: '',
    currentSalary: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    if (!formData.firstName || !formData.lastName || !formData.dateOfBirth || !formData.study) {
      alert('Please fill in all required fields');
      return;
    }

    const newRegistration = { ...formData };
    addRegistration(newRegistration);

    setFormData({
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      study: '',
      startDate: '',
      endDate: '',
      currentSalary: '',
      description: '',
    });
  };

  const handleCancel = () => {
    setFormData({
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      study: '',
      startDate: '',
      endDate: '',
      currentSalary: '',
      description: '',
    });
  };

  return (
    <div className='container'>
      <h2>Employee  Registration  Form</h2>
      <div className="main">
      <form>
         <div>
          <div className="name-container">
          <div className="name">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          </div> 
        </div>
        <div>
          <div className="name">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          </div>
        </div>
        </div>
        <div className='Birthday'>
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
          />
        </div>
        <div className='study'>
          <label htmlFor="study">Study:</label>
          <input
            type="text"
            id="study"
            name="study"
            value={formData.study}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <div className="">
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleInputChange}
          />
          </div>
        </div>
        <div>
          <div className="">
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleInputChange}
          />
          </div>         
        </div>
        <div className='salary'>
          <label htmlFor="currentSalary">Current Salary:</label>
          <input
            type="number"
            id="currentSalary"
            name="currentSalary"
            value={formData.currentSalary}
            onChange={handleInputChange}
          />
        </div>
        <div className='description'>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="">
        <button type="button" onClick={handleSave}>
          Save
        </button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
