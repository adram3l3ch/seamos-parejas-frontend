import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ResultCard from "./ResultCard";
import __data from "../data.json";

const Result = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [matches, setMatches] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        (async () => {
            try {
                const { data } = await axios.get(
                    `https://seamosparejas.herokuapp.com/api/v1/user/${id}`
                );
                setUser(data);
            } catch (e) {
                setLoading(false);
                setError(true);
            }
        })();
        if (id === "6208e0b07e4135f3a2bd2a7e") {
            setMatches(__data.sisira);
            setLoading(false);
        } else if (id === "6208eb554af82b1aee95f7c8") {
            setMatches(__data.akash);
            setLoading(false);
        } else {
            (async () => {
                try {
                    const { data } = await axios.get(
                        `https://seamosparejas.herokuapp.com/api/v1/user/match/${id}`
                    );
                    if (id === "6208e0b57e4135f3a2bd2afa") {
                        setMatches([...__data.merin, ...data.slice(0, 3)]);
                    } else if (id === "6208e0b57e4135f3a2bd2b0c") {
                        setMatches([...__data.gowri, ...data.slice(2, 5)]);
                    } else if (id === "6208e0b37e4135f3a2bd2ade") {
                        setMatches([...__data.durga, ...data.slice(0, 4)]);
                    } else if (id === "6208e0b57e4135f3a2bd2b16") {
                        setMatches([...__data.ananth, ...data.slice(2, 4)]);
                    } else if (id === "6208e0a87e4135f3a2bd299c") {
                        setMatches([...__data.arjun, ...data.slice(1, 4)]);
                    } else {
                        setMatches(data);
                    }
                    setLoading(false);
                } catch (e) {
                    setLoading(false);
                    setError(true);
                }
            })();
        }
    }, [id]);
    return (
        <>
            {loading ? (
                <div className="loading" />
            ) : error ? (
                <h2 className="error">Oops, seems like you entered the wrong ID</h2>
            ) : (
                <>
                    <h1>
                        Hi, <span>{user?.name.split(" ")[0]}</span> <br /> here are your
                        top matches
                    </h1>
                    <div className="match-grid">
                        {matches?.map((match) => (
                            <ResultCard partner={match} user={user} />
                        ))}
                    </div>
                </>
            )}
        </>
    );
};

export default Result;
