import React, { useEffect, useState } from "react";
import { useGlobalState } from "../context";
import { useNavigate } from "react-router-dom";

const FirstPage = () => {
    const [name, setName] = useState("");
    const [instaUserName, setInstaUserName] = useState("");
    const [regNo, setRegNo] = useState("");
    const { setUser, user } = useGlobalState();
    const navigate = useNavigate();

    const handler = (e) => {
        e.preventDefault();
        if (!regNo.toLowerCase().startsWith("prn")) {
            alert("Oops, Should be from College of Engineering Perumon");
            return;
        }
        setUser({ name, instaUserName, regNo });
        navigate("/about");
    };

    useEffect(() => {
        if (user.name) navigate("/about");
    });

    return (
        <div className="container">
            <header className="App-header">
                <h1>
                    Seamos parejas <span>find your valentine</span>
                </h1>
            </header>
            <main className="App-body">
                <form className="firstpage-form" onSubmit={handler}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        className="firstpage-input"
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="KTU Registration Number"
                        value={regNo}
                        className="firstpage-input"
                        onChange={(e) => setRegNo(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Instagram Username"
                        value={instaUserName}
                        className="firstpage-input"
                        onChange={(e) => setInstaUserName(e.target.value)}
                    />
                    <button>Continue</button>
                </form>
            </main>
        </div>
    );
};

export default FirstPage;
