import React from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../context";

const ResultFront = () => {
    const { id, setId } = useGlobalState();
    const navigate = useNavigate();
    return (
        <div className="container">
            <header className="App-header">
                <h1>
                    Seamos parejas <span>find your valentine</span>
                </h1>
            </header>
            <main className="App-body">
                <form
                    className="firstpage-form"
                    onSubmit={() => {
                        if (id) navigate(`/${id}`);
                    }}
                >
                    <input
                        type="text"
                        placeholder="Enter your unique ID"
                        value={id}
                        className="firstpage-input"
                        onChange={(e) => setId(e.target.value)}
                        required
                    />
                    <button>Continue</button>
                </form>
            </main>
        </div>
    );
};

export default ResultFront;
