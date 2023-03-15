import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";

const PokeCards = () => {
	const [pokemons, setPokemons] = useState([]);

	useEffect(() => {
		async function populatePokemons() {
			for (let i = 1; i <= 5; i++) {
				const randomNum = Math.ceil(Math.random() * (500 - 400) + 400);
				const res = await fetch(
					`https://pokeapi.co/api/v2/pokemon/${randomNum}/`
				);
				const data = await res.json();
				if (!pokemons.includes(data)) setPokemons((prev) => [...prev, data]);
			}
		}
		populatePokemons();
		return () => {
			setPokemons([]);
		};
	}, []);
	console.log(pokemons);

	const pokeElements =
		pokemons.length === 5 ? (
			pokemons.map((poke) => (
				<div key={nanoid()}>
					<h4>{poke.name}</h4>
					<img
						src={poke.sprites.front_default}
						alt=""
					/>
				</div>
			))
		) : (
			<div>Loading...</div>
		);

	return (
		<div>
			<h1>PokeCard</h1>
			<div style={{ display: "flex", flexWrap: "wrap", maxWidth: "50vw" }}>
				{pokeElements}
			</div>
		</div>
	);
};

export default PokeCards;
