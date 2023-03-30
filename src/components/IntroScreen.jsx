import { Link } from "react-router-dom";

const IntroScreen = () => {
	return (
		<div className="flex flex-col h-[100vh] items-center pt-20">
			<header className="mb-[20vh]">
				<h1 className="text-shadow text-6xl font-extrabold  text-[#fff]">
					Welcome to PokeMatch
				</h1>
				<p className="text-shadow text-right">Gotta Catch 'em All !!</p>
			</header>
			<main className="flex flex-col items-center">
				<div className="text-center mb-3">
					<h2 className="text-4xl text-shadow">A Pokemon Memory Game</h2>
					<h3 className="text-shadow text-xl">
						Click the Pokemon you haven't catched yet!
					</h3>
				</div>
				<div>
					<Link to="/game">
						<button className="game-btn text-shadow  bg-indigo-500 hover:bg-indigo-600">
							Play
						</button>
					</Link>
					<Link to="/rule">
						<button className="game-btn text-shadow bg-yellow-400 hover:bg-yellow-500">
							Rules
						</button>
					</Link>
					<Link to="https://github.com/RazaNaqsh">
						<button className="game-btn text-shadow bg-slate-700 hover:bg-slate-800">
							Github
						</button>
					</Link>
				</div>
			</main>
		</div>
	);
};

export default IntroScreen;
