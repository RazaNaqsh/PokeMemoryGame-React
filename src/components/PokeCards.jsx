const cardStyle =
	"m-4  p-2 text-center text-xl border-2 border-blue-200 hover:scale-95 active:scale-90 cursor-pointer transition-all duration-200 ease-in-out";

const PokeCards = ({ pokemons, score, highScore, handleGame }) => {
	return (
		<>
			<header className="flex justify-center gap-5">
				<h2 className="text-3xl">Score: {score}</h2>
				<h2 className="text-3xl">BestScore: {highScore}</h2>
			</header>
			<div className="flex flex-wrap justify-around mt-10">
				{pokemons.map((poke) => (
					<div
						key={poke.id}
						className={cardStyle}
						onClick={() => handleGame(poke.id)}
					>
						<h1 className="text-[#22d3ee]">{poke.name}</h1>
						<img
							src={poke.imgSrc}
							alt=""
						/>
					</div>
				))}
			</div>
		</>
	);
};

export default PokeCards;
