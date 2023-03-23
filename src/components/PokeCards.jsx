import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import { pokemonData } from "../constants/pokemonData";

const PokeCards = () => {
	const [pokemons, setPokemons] = useState(pokemonData);

	return (
		<div className="mt-10">
			<h1 className="text-center text-3xl font-sans">PokeCards</h1>
			<div className="flex flex-wrap justify-around mt-10">
				{pokemons.map((poke) => (
					<div
						key={poke.id}
						className="m-4  p-2 text-center text-xl border-2 border-blue-200"
					>
						<h1>{poke.name}</h1>
						<img
							src={poke.imgSrc}
							alt=""
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default PokeCards;
