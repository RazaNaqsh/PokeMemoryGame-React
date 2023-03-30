import React, { useState } from "react";
import Confetti from "react-confetti";
import { pokemonData } from "../constants/pokemonData";
import GameOver from "./GameOver";
import PokeCards from "./PokeCards";

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

const Game = () => {
	const [pokemons, setPokemons] = useState(pokemonData);
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(0);
	const [gameOver, setGameOver] = useState(false);

	const handleGame = (id) => {
		pokemons.forEach((poke) => {
			if (poke.id === id) {
				if (poke.isClicked === false) {
					setPokemons((prevPokemons) =>
						prevPokemons.map((pokemon) =>
							pokemon.id === id ? { ...pokemon, isClicked: true } : pokemon
						)
					);
					if (score < 11) {
						setScore((prevScore) => prevScore + 1);
						setPokemons((prevPokemons) => shuffle(prevPokemons));
					} else {
						setGameOver(true);
					}
				} else {
					if (score > highScore) setHighScore(score);
					setScore(0);
					setPokemons(pokemonData);
				}
			}
		});
		/* when the card is clicked, then check if that card was already clicked or not
		if not then set the click property to true and increase score by 1
		and if the card was already clicked then set score to 0 and reset pokemon data */
	};

	const handleResetClick = () => {
		setGameOver(false);
		setScore(0);
		setHighScore(0);
		setPokemons(pokemonData);
	};

	return (
		<section className="game">
			{gameOver === false ? (
				<PokeCards
					pokemons={pokemons}
					score={score}
					highScore={highScore}
					handleGame={handleGame}
				/>
			) : (
				<GameOver handleClick={handleResetClick} />
			)}
			{gameOver && <Confetti />}
		</section>
	);
};

export default Game;
