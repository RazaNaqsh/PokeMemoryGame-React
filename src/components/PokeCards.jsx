import { Link } from "react-router-dom";

const cardStyle =
	"transparent-bg m-4 p-2 text-center text-xl border-4 rounded-lg  border-slate-600 hover:scale-95 active:scale-90 cursor-pointer transition-all duration-200 ease-in-out";

const PokeCards = ({ pokemons, score, highScore, handleGame }) => {
	return (
		<>
			<header className="text-shadow pt-10 flex justify-center gap-5 relative">
				<div className="flex items-center  gap-4">
					<h2 className="text-2xl md:text-4xl">Score: {score}</h2>
					<h2 className="text-2xl md:text-4xl">BestScore: {highScore}</h2>
				</div>
				<div className="absolute right-5 top-[25%]">
					<Link to="/">
						<button className="transparent-bg shadow-lg px-[2rem] py-[1rem]  rounded-xl m-4 text-xl font-sans font-bold hover:scale-95 transition-all ease-in-out duration-200">
							Give Up
						</button>
					</Link>
				</div>
			</header>
			<div className="flex flex-wrap justify-around md:mt-10 ">
				{pokemons.map((poke) => (
					<div
						key={poke.id}
						className={cardStyle}
						onClick={() => handleGame(poke.id)}
					>
						<h1 className="text-[#fff] text-shadow text-sm md:text-xl">
							{poke.name}
						</h1>
						<img
							src={poke.imgSrc}
							alt=""
							className="h-[50px] w-[70px] sm:h-[80px] sm:w-[100px] object-contain md:h-auto md:w-auto"
						/>
					</div>
				))}
			</div>
		</>
	);
};

export default PokeCards;
