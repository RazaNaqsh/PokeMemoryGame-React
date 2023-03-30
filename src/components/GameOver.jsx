import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const GameOver = ({ handleClick }) => {
	return (
		<motion.section
			className="font-sans font-light h-[600px] flex flex-col justify-center items-center gap-5"
			initial={{ opacity: 0, y: -50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3 }}
		>
			<h1 className="text-shadow text-xl md:text-5xl">
				Congrats! You reached Max score.
			</h1>
			<h2 className="text-shadow text-2xl md:text-4xl">You Won!</h2>

			<div>
				<button
					className="transparent-bg text-shadow font-sans font-bold  px-5 py-3 hover:scale-95 active:scale-90 transition-all ease-out "
					onClick={handleClick}
				>
					Restart Game
				</button>
				<Link to="/">
					<button className="transparent-bg text-shadow font-sans font-bold  px-5 py-3 hover:scale-95 active:scale-90 transition-all ease-out ">
						Home
					</button>
				</Link>
			</div>
		</motion.section>
	);
};

export default GameOver;
