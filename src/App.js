import React from "react";
import bg from "./assets/bg.png";
import "./App.css";
import { useGlobalState } from "./context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FirstPage from "./components/firstPage";
import SecondPage from "./components/secondPage/secondPage";
import ThirdPage from "./components/thirdPage/ThirdPage.jsx";
import FourthPage from "./components/fourthPage/FourthPage.jsx";
import FifthPage from "./components/fifthPage/FifthPage.jsx";
import SixthPage from "./components/sixthPage/SixthPage.jsx";
import Finished from "./components/Finished.jsx";
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
					<Route path="/about" element={<SecondPage />} />
					<Route path="/about_2" element={<ThirdPage />} />
					<Route path="/about_3" element={<FourthPage />} />
					<Route path="/about_4" element={<FifthPage />} />
					<Route path="/about_5" element={<SixthPage />} />
					<Route path="/finished" element={<Finished />} />
					<Route path="/match/:id" element={<Finished />} /> */}
					<Route path="/" element={<ResultFront />} />
					<Route path="/:id" element={<Result />} />
					{/* <Route
                        path="/"
                        element={
                            <h1 style={{ textAlign: "center" }}>
                                Dei Nirthipode, valentines day okke kazhinjille
                            </h1>
                        }
                    />
                    <Route
                        path="/:id"
                        element={
                            <h1 style={{ textAlign: "center" }}>
                                Dei Nirthipode, valentines day okke kazhinjille
                            </h1>
                        }
                    /> */}
				</Routes>
			</Router>
		</div>
	);
}

export default App;
