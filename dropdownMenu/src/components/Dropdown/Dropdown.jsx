import React, { useState } from "react";
import DropdownButton from "../DropdownButton/DropdownButton";
import DropdownContent from "../DropdownContent/DropdownContent";
import "./Dropdown.css"
const Dropdown = ({buttonText,content}) => {
    
    const [open, setOpen] = useState(false);
    const toggleDropdown = () => {
        setOpen((open) => !open);
    }

    return (
    <div className="dropdown">
        <DropdownButton 
        toggle ={toggleDropdown}
        open={open}>
            {buttonText}
        </DropdownButton>
        <DropdownContent open={open}>
            {content}
        </DropdownContent>
    </div>)
};

// const Dropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="dropdown">
//       <DropdownButton onClick={toggleDropdown} />
//       {isOpen && <DropdownContent />}
//     </div>
//   );
// };

export default Dropdown;