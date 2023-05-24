import React from "react";

const Button = ({disabled, onClick}) => {

    return (
          <button
            type="button"
            className="btn btn-primary mx-2"
            disabled={disabled}
            onClick={onClick}
            style={{color: "#fff", cursor: "pointer"}}
          >
            Search
          </button>
    );
};

export default Button;