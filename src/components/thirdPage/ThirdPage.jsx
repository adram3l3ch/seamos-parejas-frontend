import React, { useEffect } from "react";
import RadioButton from "../radioBtn/RadioButton";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../../context";
import CheckBox from "../checkBox/CheckBox";

const ThirdPage = () => {
	const { user } = useGlobalState();
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
					navigate("/about_3");
				}}
			>
				<div className="single-form-input-container">
					<h3>Are you a night owl or an early bird</h3>
					<RadioButton name="night" label="Night Owl" />
					<RadioButton name="night" label="Early Bird" />
				</div>
				<div className="single-form-input-container">
					<h3>What kind of dress you prefer</h3>
					<RadioButton name="dress" label="Modern" />
					<RadioButton name="dress" label="Traditional" />
					<RadioButton name="dress" label="Both" />
				</div>
				<div className="single-form-input-container">
					<h3>What kind of song genre are you interested in</h3>
					<CheckBox name="music" label="Pop" />
					<CheckBox name="music" label="Rock" />
					<CheckBox name="music" label="Melody" />
					<CheckBox name="music" label="Hip-Hop" />
					<CheckBox name="music" label="Folk" />
				</div>
				<div className="single-form-input-container">
					<h3>If you could have a superpower what would you chose </h3>
					<RadioButton name="superpower" label="To be able to fly" />
					<RadioButton name="superpower" label="To be able to read minds" />
					<RadioButton name="superpower" label="To be Invisible" />
					<RadioButton name="superpower" label="Super strength" />
					<RadioButton name="superpower" label="X-Ray vision" />
				</div>
				<div className="btns">
					<button
						className="back"
						onClick={(e) => {
							e.preventDefault();
							navigate("/about");
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

export default ThirdPage;
