import React, { useEffect } from "react";
import { useGlobalState } from "../../context";
import RadioButton from "../radioBtn/RadioButton";
import "./secondPage.css";
import { useNavigate } from "react-router-dom";

const SecondPage = () => {
    const { user } = useGlobalState();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user.name) {
            navigate("/");
        }
    });
    return (
        <div className="second-page">
            <h1>Hi {user.name?.split(" ")[0]}, tell us more about you</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    navigate("/about_2");
                }}
            >
                <div className="second-page-container">
                    <div className="single-form-input-container">
                        <h3>Gender</h3>
                        <RadioButton name="gender" label="male" />
                        <RadioButton name="gender" label="female" />
                    </div>
                    <div className="single-form-input-container">
                        <h3>Looking For</h3>
                        <RadioButton name="looking for" label="men" />
                        <RadioButton name="looking for" label="women" />
                    </div>
                    <div className="single-form-input-container">
                        <h3>Currently Studying On</h3>
                        <RadioButton name="currently studying on" label="1st Year" />
                        <RadioButton name="currently studying on" label="2nd Year" />
                        <RadioButton name="currently studying on" label="3rd Year" />
                        <RadioButton name="currently studying on" label="4th Year" />
                    </div>
                    <div className="single-form-input-container">
                        <h3>You views on sex before marriage</h3>
                        <RadioButton name="sex" label="Absolutely wrong" />
                        <RadioButton name="sex" label="Depends on me and my partner" />
                        <RadioButton name="sex" label="Sex isn't a promise" />
                        <RadioButton name="sex" label="Must have a sexual relationship" />
                    </div>
                    <div className="single-form-input-container">
                        <h3>Film Genre Interests</h3>
                        <RadioButton name="film" label="horror" />
                        <RadioButton name="film" label="rom-com" />
                        <RadioButton name="film" label="romantic" />
                        <RadioButton name="film" label="science-fiction" />
                    </div>
                    <div className="single-form-input-container">
                        <h3>Political Views</h3>
                        <RadioButton name="politics" label="Right Wing" />
                        <RadioButton name="politics" label="Left Wing" />
                        <RadioButton name="politics" label="Centre Left" />
                        <RadioButton name="politics" label="Centre Right" />
                    </div>
                </div>
                <button>Next</button>
            </form>
        </div>
    );
};

export default SecondPage;
