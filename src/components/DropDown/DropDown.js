import React, { useState } from "react";
import "./DropDown.css";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const options = [
    "Select",
    "Concept cards",
    "Interview Questions",
    "Practice Questions",
    "Quizzes",
  ];

  return (
    <>
      <div className="dropdown">
        <div className="dropdown-text">Choose a section</div>
        <button
          className="dropdown-toggle"
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(!isOpen);
          }}
        >
          {selectedOption || "Select"}
          <span className={`arrow ${isOpen ? "open" : ""}`}></span>
        </button>
        {isOpen && (
          <ul className="dropdown-menu">
            {options.map((option, index) => (
              <li
                key={index}
                className={`dropdown-item ${
                  selectedOption === option ? "selected" : ""
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default DropDown;
