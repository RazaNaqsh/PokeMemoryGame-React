const GameOver = ({ handleClick }) => {
	return (
		<section className="font-sans font-light h-[600px] flex flex-col justify-center items-center gap-5">
			<h1 className="text-5xl">Congrats! You reached Max score.</h1>
			<h2 className="text-4xl">You Won!</h2>

			<button
				className="border-2 px-4 py-2 hover:scale-95 active:scale-90 transition-all ease-out border-amber-300"
				onClick={handleClick}
			>
				Restart Game
			</button>
		</section>
	);
};

export default GameOver;
