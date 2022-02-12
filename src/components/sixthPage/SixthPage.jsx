import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../../context";
import CheckBox from "../checkBox/CheckBox";
import RadioButton from "../radioBtn/RadioButton";
import axios from "axios";

const SixthPage = () => {
    const navigate = useNavigate();
    const { user } = useGlobalState();
    useEffect(() => {
        if (!user.name) {
            navigate("/");
        }
    });
    return (
        <div className="fifth-page">
            <h1>Partner Preference</h1>
            <form
                onSubmit={async (e) => {
                    e.preventDefault();
                    try {
                        await axios.post("http://localhost:5000/api/v1/user", user);
                        navigate("/finished");
                    } catch (error) {
                        alert(error.message);
                    }
                }}
            >
                <div className="single-form-input-container">
                    <h3>
                        The type of conversations you'd like to have with your partner?
                    </h3>
                    <CheckBox name="conversation" label="Gaming" />
                    <CheckBox name="conversation" label="Current Affairs" />
                    <CheckBox
                        name="conversation"
                        label="Entertainment(movies, music, series)"
                    />
                    <CheckBox name="conversation" label="Personal Hobbies" />
                    <CheckBox name="conversation" label="Business/Startups" />
                    <CheckBox name="conversation" label="romantic Talks" />
                    <CheckBox name="conversation" label="Adult conversations" />
                    <CheckBox name="conversation" label="Controversies of world" />
                    <CheckBox
                        name="conversation"
                        label="Gossips about friends and relatives"
                    />
                    <CheckBox name="conversation" label="Experiences and traumas" />
                </div>
                <div className="single-form-input-container">
                    <h3>Your expectations on your partner behaving towards you</h3>
                    <RadioButton
                        name="part_behav"
                        label="Listens to you and doesn't question your decisions"
                    />
                    <RadioButton
                        name="part_behav"
                        label="Takes decisions only on mutual  understandings"
                    />
                    <RadioButton
                        name="part_behav"
                        label="Takes decisions by herself/himself unless your intervention is necessary"
                    />
                    <RadioButton
                        name="part_behav"
                        label="Takes decisions by themselves and not be bothered about your opinion"
                    />
                    <RadioButton
                        name="part_behav"
                        label="Doesn't really matter, partner should feel comfortable and free with their choices"
                    />
                </div>
                <div className="btns">
                    <button
                        className="back"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate("/about_5");
                        }}
                    >
                        Back
                    </button>
                    <button>Finish</button>
                </div>
            </form>
        </div>
    );
};

export default SixthPage;
