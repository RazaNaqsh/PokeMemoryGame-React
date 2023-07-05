import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const cardStyle =
  "transparent-bg m-4 p-2 text-center text-xl border-4 rounded-lg  border-slate-600 hover:scale-95 active:scale-90 cursor-pointer transition-all duration-200 ease-in-out";

const cardVariants = {
  initial: {
    opacity: 0,
  },
  view: {
    opacity: 1,

    transition: {
      duration: 0.4,
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.05,
    },
  },
  tap: {
    scale: 0.9,
    transition: {
      duration: 0.02,
    },
  },
};

const PokeCards = ({ pokemons, score, highScore, handleGame }) => {
  return (
    <>
      <motion.header
        className="text-shadow pt-10 flex justify-center gap-5 relative"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.4,
        }}
      >
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
      </motion.header>
      <motion.div
        className="flex flex-wrap justify-around md:mt-10 "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.4,
        }}
      >
        {pokemons.map((poke) => (
          <motion.div
            key={poke.id}
            className={cardStyle}
            onClick={() => handleGame(poke.id)}
            variants={cardVariants}
            initial="initial"
            whileInView="view"
            whileHover="hover"
            whileTap="tap"
          >
            <h1 className="text-[#fff] text-shadow text-sm md:text-xl">
              {poke.name}
            </h1>
            <img
              src={poke.imgSrc}
              alt=""
              className="h-[50px] w-[70px] sm:h-[80px] sm:w-[100px]  object-contain md:h-[200px] md:w-[200px]"
            />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default PokeCards;
