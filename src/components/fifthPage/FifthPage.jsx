import React, { useEffect } from "react";
import RadioButton from "../radioBtn/RadioButton";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../../context";
import CheckBox from "../checkBox/CheckBox";

const FifthPage = () => {
    const { user } = useGlobalState();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user.name) {
            navigate("/");
        }
    });
    return (
        <div className="third-page">
            <h1>Partner Preference</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    navigate("/about_5");
                }}
            >
                <div className="single-form-input-container">
                    <h3>Preferably Studying in</h3>
                    <CheckBox name="part_class" label="1st Year" />
                    <CheckBox name="part_class" label="2nd Year" />
                    <CheckBox name="part_class" label="3rd Year" />
                    <CheckBox name="part_class" label="4th Year" />
                </div>
                <div className="single-form-input-container">
                    <h3>Looking For</h3>
                    <RadioButton name="relationship" label="Serious Relationship" />
                    <RadioButton name="relationship" label="Somewhat Serious" />
                    <RadioButton name="relationship" label="Need Just a friend" />
                    <RadioButton name="relationship" label="Friend With Benefits" />
                    <RadioButton name="relationship" label="Not Sure" />
                </div>
                <div className="single-form-input-container">
                    <h3>Qualities Looking For</h3>
                    <CheckBox name="qualities" label="Introvert" />
                    <CheckBox name="qualities" label="Extrovert" />
                    <CheckBox name="qualities" label="Non-Smoker" />
                    <CheckBox name="qualities" label="Smoker" />
                    <CheckBox name="qualities" label="Non-Drinker" />
                    <CheckBox name="qualities" label="Drinker" />
                </div>
                <div className="single-form-input-container">
                    <h3>
                        How much drama do you like in your lil journey with your partner
                    </h3>
                    <RadioButton name="drama" label="No Drama, Only Peace and Love" />
                    <RadioButton
                        name="drama"
                        label="A little drama won't hurt.. keeps the relationship spicy"
                    />
                    <RadioButton
                        name="drama"
                        label="Lots of drama, i love a dramatic wild relationship..."
                    />
                </div>
                <div className="btns">
                    <button
                        className="back"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate("/about_4");
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

export default FifthPage;
