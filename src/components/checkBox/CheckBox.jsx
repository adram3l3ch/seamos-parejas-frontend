import React from "react";
import { useGlobalState } from "../../context";
import "./checkBox.css";

const CheckBox = ({ label, name }) => {
	const { setUser, user } = useGlobalState();

	const add = (value) => {
		setUser({
			...user,
			[name]: user[name] ? [...user[name], value] : [value],
		});
	};
	const remove = (value) => {
		setUser({
			...user,
			[name]: [...user[name].filter((item) => item !== value)],
		});
	};

	return (
		<div className="checkBox">
			<input
				type="checkbox"
				id={label}
				checked={user[name] && user[name].includes(label)}
				onChange={(e) => {
					if (e.target.checked) add(label);
					else remove(label);
				}}
			/>
			<label htmlFor={label}>{label}</label>
		</div>
	);
};

export default CheckBox;
