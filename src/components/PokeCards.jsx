import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import { pokemonData } from "../constants/pokemonData";

const cardStyle =
	"m-4  p-2 text-center text-xl border-2 border-blue-200 hover:scale-95 active:scale-90 cursor-pointer transition-all duration-200 ease-in-out";

function shuffle(array) {
	let currentIndex = array.length,
		randomIndex;
	// While there remain elements to shuffle.
	while (currentIndex != 0) {
		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}

	return array;
}

const PokeCards = () => {
	const [pokemons, setPokemons] = useState(pokemonData);
	const [score, setScore] = useState(0);

	const handleGame = (id) => {
		console.log(pokemons);
		pokemons.forEach((poke) => {
			if (poke.id === id) {
				if (poke.isClicked === false) {
					setPokemons((prevPokemons) =>
						prevPokemons.map((pokemon) =>
							pokemon.id === id ? { ...pokemon, isClicked: true } : pokemon
						)
					);
					setScore((prevScore) => prevScore + 1);

					setPokemons((prevPokemons) => shuffle(prevPokemons));
				} else {
					setScore(0);
					setPokemons(pokemonData);
				}
			}
		});
		/* when the card is clicked, then check if that card was already clicked or not
		if not then set the click property to true and increase score by 1
		and if the card was already clicked then set score to 0 and display game over */
	};

	return (
		<section className="mt-10">
			<header className="flex justify-end w-[90%] m-auto">
				<h2 className="text-3xl ml-auto">Score: {score}</h2>
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
		</section>
	);
};

export default PokeCards;
