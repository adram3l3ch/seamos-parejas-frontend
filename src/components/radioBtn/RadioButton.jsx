import React from "react";
import { useGlobalState } from "../../context";
import "./radioButton.css";

const RadioButton = ({ label, name }) => {
    const { user, setUser } = useGlobalState();
    return (
        <div className="radio">
            <input
                type="radio"
                name={name}
                id={label + name}
                checked={user[name] === label}
                required
                onChange={() => setUser({ ...user, [name]: label })}
            />
            <label htmlFor={label + name}>{label}</label>
        </div>
    );
};

export default RadioButton;
