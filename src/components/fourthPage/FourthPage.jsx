import React, { useEffect, useState } from "react";
import { useGlobalState } from "../../context";
import RadioButton from "../radioBtn/RadioButton";
import { useNavigate } from "react-router-dom";
import CheckBox from "../checkBox/CheckBox";

const FourthPage = () => {
	const { user, setUser } = useGlobalState();
	const [bio, setBio] = useState("");

	const navigate = useNavigate();

	useEffect(() => {
		if (!user.name) {
			navigate("/");
		}
	});

	return (
		<div className="third-page">
			<h1>About you</h1>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					setUser((user) => ({ ...user, bio }));
					navigate("/about_4");
				}}
			>
				<div className="left">
					<div className="single-form-input-container">
						<h3>Would You Describe your self as an</h3>
						<RadioButton name="vert" label="introvert" />
						<RadioButton name="vert" label="extrovert" />
						<RadioButton name="vert" label="ambivert" />
					</div>
					<div className="single-form-input-container">
						<h3>Do You Drink</h3>
						<RadioButton name="drink" label="yes" />
						<RadioButton name="drink" label="no" />
						<RadioButton name="drink" label="occasionally" />
					</div>
					<div className="single-form-input-container">
						<h3>Do You Smoke</h3>
						<RadioButton name="smoke" label="yes" />
						<RadioButton name="smoke" label="no" />
						<RadioButton name="smoke" label="occasionally" />
					</div>
				</div>
				<div className="right">
					<div className="single-form-input-container">
						<h3>Food Preferences</h3>
						<CheckBox name="food" label="Arabic" />
						<CheckBox name="food" label="Chinese" />
						<CheckBox name="food" label="Italian" />
						<CheckBox name="food" label="North Indian" />
						<CheckBox name="food" label="Western" />
						<CheckBox name="food" label="Nadan" />
						<CheckBox name="food" label="I will eat anything" />
					</div>

					<textarea
						placeholder="Got anything else to say about you?"
						value={bio}
						onChange={(e) => setBio(e.target.value)}
					/>
				</div>
				<div className="btns">
					<button
						className="back"
						onClick={(e) => {
							e.preventDefault();
							navigate("/about_2");
						}}
					>
						Back
					</button>
					<button>Next</button>
				</div>
			</form>
		</div>
	);
};

export default FourthPage;
