import React, { useState } from 'react';

function RegistrationForm() {
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

  const [registrations, setRegistrations] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (!formData.firstName || !formData.lastName || !formData.dateOfBirth || !formData.study) {
      alert('Please fill in all required fields');
      return;
    }

  
    const newRegistration = { ...formData };
    setRegistrations([...registrations, newRegistration]);

   
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
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </div>
       
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>
       
        <div>
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
          />
        </div>
        
        <div>
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
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleInputChange}
          />
        </div>
       
        <div>
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleInputChange}
          />
        </div>
        
        <div>
          <label htmlFor="currentSalary">Current Salary:</label>
          <input
            type="number"
            id="currentSalary"
            name="currentSalary"
            value={formData.currentSalary}
            onChange={handleInputChange}
          />
        </div>
       
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
      </form>

    </div>
  );
}

export default RegistrationForm;
