import React, { useEffect, useState } from "react";

const PokeCards = () => {
	const [pokemons, setPokemons] = useState([]);

	useEffect(() => {
		// console.log(randomNum);
		// fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}/`)
		// 	.then((res) => res.json())
		// 	.then((data) => setPokemons(data));
		for (let i = 0; i < 6; i++) {
			const randomNum = Math.ceil(Math.random() * 50);
			fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}/`)
				.then((res) => res.json())
				.then((data) => setPokemons((prevData) => [...prevData, data]));
		}
	}, []);
	console.log(pokemons);

	return <div>PokeCards</div>;
};

export default PokeCards;
