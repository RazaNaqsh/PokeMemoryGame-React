import { Link } from "react-router-dom";

const Rules = () => {
	return (
		<div className="p-20 flex flex-col items-center">
			<section className="transparent-bg p-4 w-2/5">
				<h1 className="text-shadow text-3xl text-center">Rules</h1>
				<div className="text-[#fff]  text-xl p-8 space-y-5 font-sans font-medium">
					<p>
						1. Select a Pokémon you haven't selected before. You get 1 point per
						such Pokémon.
					</p>
					<p>
						2. If you select a Pokémon you that you've already selected before,
						your score gets resets to 0.
					</p>
					<p>
						3. If your score gets reset, you lose. You can select all Pokémon
						again and start from scratch.
					</p>
					<p>
						4. Max Points that can be reached is 12. If you Score 12 You Win!
					</p>
				</div>
			</section>
			<Link to="/">
				<button className="transparent-bg text-shadow font-bold">
					Go Back
				</button>
			</Link>
		</div>
	);
};

export default Rules;
