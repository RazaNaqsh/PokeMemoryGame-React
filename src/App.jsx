import Game from "./components/Game";
import pokeBg from "./assets/bgLive/pokemon-emerald-waterfall-pixel-moewalls.com.mp4";
import IntroScreen from "./components/IntroScreen";
import { Route, Routes } from "react-router-dom";

function App() {
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
			<Routes>
				<Route
					path="/"
					element={<IntroScreen />}
				/>
				<Route
					path="/game"
					element={<Game />}
				/>
			</Routes>
		</div>
	);
}

export default App;
