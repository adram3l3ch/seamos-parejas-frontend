import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [id, setId] = useState("");
    return (
        <AppContext.Provider value={{ user, setUser, id, setId }}>
            {children}
        </AppContext.Provider>
    );
};

const useGlobalState = () => {
    return useContext(AppContext);
};

export { AppProvider, useGlobalState };
