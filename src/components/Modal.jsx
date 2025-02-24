import React, { useState } from "react";
import './Modal.css'
export default function Modal({ isModalOpen, onClose }) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
<div className={`custom-modal-backdrop ${isModalOpen ? "show" : "d-none"}`}>
      <div className="custom-modal">
        <div className="custom-modal-header">
          <h5 className="custom-modal-title">
            {isSubmitted ? "Success" : "Apply for the Course"}
          </h5>
          <button className="custom-close-btn" onClick={onClose}>✖</button>
        </div>

        <div className="custom-modal-body">
          {isSubmitted ? (
            <p>Form submitted successfully!</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="custom-form-group">
                <label htmlFor="name" className="custom-form-label">Name</label>
                <input type="text" id="name" className="custom-form-control" required />
              </div>
              <div className="custom-form-group">
                <label htmlFor="phone" className="custom-form-label">Phone Number</label>
                <input type="tel" id="phone" className="custom-form-control" pattern="[0-9]{10}" required />
              </div>
              <div className="custom-form-group">
                <label htmlFor="course" className="custom-form-label">Course</label>
                <select id="course" name="course" className="custom-form-control" required>
                  <option value="">Select</option>
                  <option value="Web Development">Web Development</option>
                  <option value="MERN Stack">MERN Stack</option>
                  <option value="App Development">App Development</option>
                  <option value="ReactJs/Native Development">ReactJs/Native Development</option>
                  <option value="Graphic Designing">Graphic Designing</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                </select>
              </div>
              <button type="submit" className="custom-submit-btn">Submit</button>
            </form>
          )}
        </div>

        {!isSubmitted && (
          <div className="custom-modal-footer">
            <button className="custom-close-btn close-btn" onClick={onClose}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
}


