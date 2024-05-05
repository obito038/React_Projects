import React from "react";

const DropdownItem = ({ timezone, onClick }) => {
    return (
      <div className="dropdown-item" onClick={onClick}>
        {timezone}
      </div>
    );
  };

// const DropdownItem = ({ children }) => {
//     return <div className="dropdown-item">{children}</div>;
//   };
// export default DropdownItem;