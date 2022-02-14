import React from "react";
import bg from "./assets/bg.png";
import "./App.css";
import { useGlobalState } from "./context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import FirstPage from "./components/firstPage";
// import SecondPage from "./components/secondPage/secondPage";
// import ThirdPage from "./components/thirdPage/ThirdPage.jsx";
// import FourthPage from "./components/fourthPage/FourthPage.jsx";
// import FifthPage from "./components/fifthPage/FifthPage.jsx";
// import SixthPage from "./components/sixthPage/SixthPage.jsx";
// import Finished from "./components/Finished.jsx";
import ResultFront from "./components/ResultFront";
import Result from "./components/Result";

function App() {
    const { user } = useGlobalState();

    return (
        <div className="App">
            <div className={user.name ? "circle left" : "circle"}>
                <img src={bg} alt="bg" className="bg-image" aria-hidden />
            </div>
            <Router>
                <Routes>
                    {/* <Route path="/" element={<FirstPage />} />
                    <Route exact path="/about" element={<SecondPage />} />
                    <Route exact path="/about_2" element={<ThirdPage />} />
                    <Route exact path="/about_3" element={<FourthPage />} />
                    <Route exact path="/about_4" element={<FifthPage />} />
                    <Route exact path="/about_5" element={<SixthPage />} />
                    <Route exact path="/finished" element={<Finished />} />
                    <Route exact path="/match/:id" element={<Finished />} /> */}
                    <Route path="/" element={<ResultFront />} />
                    <Route path="/:id" element={<Result />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
