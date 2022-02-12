import FirstPage from "./components/firstPage";
import bg from "./assets/bg.png";
import "./App.css";
import SecondPage from "./components/secondPage/secondPage";
import { useGlobalState } from "./context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ThirdPage from "./components/thirdPage/ThirdPage.jsx";
import FourthPage from "./components/fourthPage/FourthPage.jsx";
import FifthPage from "./components/fifthPage/FifthPage.jsx";
import SixthPage from "./components/sixthPage/SixthPage.jsx";
import Finished from "./components/Finished.jsx";

function App() {
    const { user } = useGlobalState();

    return (
        <div className="App">
            <div className={user.name ? "circle left" : "circle"}>
                <img src={bg} alt="bg" className="bg-image" aria-hidden />
            </div>
            <Router>
                <Routes>
                    <Route path="/" element={<FirstPage />} />
                    <Route exact path="/about" element={<SecondPage />} />
                    <Route exact path="/about_2" element={<ThirdPage />} />
                    <Route exact path="/about_3" element={<FourthPage />} />
                    <Route exact path="/about_4" element={<FifthPage />} />
                    <Route exact path="/about_5" element={<SixthPage />} />
                    <Route exact path="/finished" element={<Finished />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
