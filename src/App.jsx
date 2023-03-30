import Game from "./components/Game";
import pokeBg from "./assets/bgLive/pokemon-emerald-waterfall-pixel-moewalls.com.mp4";
import IntroScreen from "./components/IntroScreen";
import { Route, Routes, useLocation } from "react-router-dom";
import Rules from "./components/Rules";
import { AnimatePresence } from "framer-motion";

function App() {
	const location = useLocation();
	return (
		<div className="App">
			<video
				className="videoBg"
				autoPlay
				loop
				muted
			>
				<source
					src={pokeBg}
					type="video/mp4"
				/>
			</video>
			<AnimatePresence location={location}>
				<Routes>
					<Route
						path="/"
						element={<IntroScreen />}
					/>
					<Route
						path="/game"
						element={<Game />}
					/>
					<Route
						path="/rules"
						element={<Rules />}
					/>
				</Routes>
			</AnimatePresence>
		</div>
	);
}

export default App;
