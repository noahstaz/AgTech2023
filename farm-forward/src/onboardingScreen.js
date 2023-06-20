import React, { useState } from 'react';
import './onboardingScreen.css';

const OnboardingScreen = () => {
  const [formIndex, setFormIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    role: '',
    grants: false,
    tutorial: false,
    equipment: false,
    newsletter: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };

  const handleBack = () => {
    setFormIndex(0);
    setFormData({
      name: '',
      phone: '',
      email: '',
      password: '',
      role: '',
      grants: false,
      tutorial: false,
      equipment: false,
      newsletter: false,
    });
  };

  const handleNext = () => {
    if (formIndex === 0 && isFormFilled()) {
      setFormIndex(1);
    }
  };

  const isFormFilled = () => {
    return (
      formData.name !== '' &&
      formData.phone !== '' &&
      formData.email !== '' &&
      formData.password !== ''
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    // You can access the form data from the `formData` state object
    // and perform any necessary actions (e.g., API calls, data processing)

    // After form submission, you can navigate to the next step or perform any desired actions
    setFormIndex(2);
  };

  const renderForm = () => {
    switch (formIndex) {
      case 0:
        return (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
            />
            <button type="button" onClick={handleNext}>
              Next
            </button>
          </form>
        );
      case 1:
        return (
          <form onSubmit={handleSubmit}>
            <h2>I am...</h2>
            <div>
              <label>
                <input
                  type="radio"
                  name="role"
                  value="farmer"
                  checked={formData.role === 'farmer'}
                  onChange={handleInputChange}
                />
                A farmer
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="role"
                  value="interested"
                  checked={formData.role === 'interested'}
                  onChange={handleInputChange}
                />
                Interested in farming
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="role"
                  value="exploring"
                  checked={formData.role === 'exploring'}
                  onChange={handleInputChange}
                />
                Exploring
              </label>
            </div>
            <div>
              <button type="button" onClick={handleBack}>
                Back
              </button>
              <button type="submit">Next</button>
            </div>
          </form>
        );
        case 2:
          return (
            <form onSubmit={handleSubmit}>
              <h2>I'm interested in...</h2>
              <div>
                <label>
                  <input
                    type="checkbox"
                    name="grants"
                    checked={formData.grants}
                    onChange={handleInputChange}
                  />
                  Grants
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    name="tutorial"
                    checked={formData.tutorial}
                    onChange={handleInputChange}
                  />
                  Tutorial
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    name="equipment"
                    checked={formData.equipment}
                    onChange={handleInputChange}
                  />
                  Equipment
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleInputChange}
                  />
                  Sign up for newsletter
                </label>
              </div>
              <div>
                <button type="button" onClick={handleBack}>
                  Back
                </button>
                <button type="submit">Finish</button>
              </div>
            </form>
          );
      default:
        return null;
    }
  };
  

  return (
    <div className="centered-box">
      <div className={`slide-container ${formIndex > 0 ? 'slide-left' : ''}`}>
        {renderForm()}
      </div>
    </div>
  );
};

export default OnboardingScreen;
