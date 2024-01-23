import React from "react";
import "./AppButton.css";

const AppButton = ({ label, onClick }) => {
    return (
        <button
            className="button"
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default AppButton