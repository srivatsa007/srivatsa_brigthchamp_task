import React, { useEffect } from "react";
import ProgressBar from "./ProgressBar";
import {
  cardApple,
  cardBanana,
  cardCherry,
  cardLemon,
  cardWatermelon,
  cardMango,
} from "./index"; //barrel export
import ConfettiExplosion from "react-confetti-explosion";

type randomDataType = {
  id: string;
  icon: string;
  letter: string;
}[];

const Game = () => {
  const gameDataLeft = [
    { id: "apple", icon: cardApple, letter: "A" },
    { id: "banana", icon: cardBanana, letter: "B" },
    { id: "cherry", icon: cardCherry, letter: "C" },
    { id: "lemon", icon: cardLemon, letter: "L" },
    { id: "watermelon", icon: cardWatermelon, letter: "W" },
    { id: "mango", icon: cardMango, letter: "M" },
  ];
  const gameDataRight = [
    { id: "watermelon", icon: cardWatermelon, letter: "W" },
    { id: "apple", icon: cardApple, letter: "A" },
    { id: "mango", icon: cardMango, letter: "M" },
    { id: "cherry", icon: cardCherry, letter: "C" },
    { id: "lemon", icon: cardLemon, letter: "L" },
    { id: "banana", icon: cardBanana, letter: "B" },
  ];

  const [attempt, setAttempt] = React.useState(0);
  const [selected, setSelected] = React.useState<string[]>([]);
  const [match, setMatch] = React.useState(0);
  const [toggle, setToggle] = React.useState(false);
  const [isGameOver, setIsGameOver] = React.useState(false);
  const [isWinner, setIsWinner] = React.useState(false);

  const [randomleftData, setRandomleftData] = React.useState<randomDataType>(
    []
  );
  const [randomrightData, setRandomrightData] = React.useState<randomDataType>(
    []
  );

  useEffect(() => {
    const randomleftData1 = gameDataLeft.sort(() => Math.random() - 0.5);
    setRandomleftData(randomleftData1);
  }, []);
  useEffect(() => {
    if (match == 6) {
      setIsWinner(true);
    }
  }, [match]);

  useEffect(() => {
    const randomrightData2 = gameDataRight.sort(() => Math.random() - 0.5);
    setRandomrightData(randomrightData2);
  }, []);
  // console.log(selected, "from outside");

  // const handleCardClick = (id: string) => {
  //   if (selected.includes(id)) {
  //     setMatch((prev) => prev + 1);
  //     setSelected([]);
  //     setToggle((prev) => !prev);
  //     if (match === 6) {
  //       setIsGameOver(true);
  //       return;
  //     }
  //     console.log(selected, "sexy");
  //     return;
  //   }

  //   setSelected([...selected, id]);
  //   if (selected.length > 1) {
  //     console.log(selected.length, "dekho");
  //     setSelected([]);
  //     setToggle((prev) => !prev);
  //     setAttempt(attempt + 1);
  //     return;
  //   }

  //   setToggle(!toggle);
  // };
  console.log(selected);

  const handleCardClick = (id: string) => {
    if (selected.includes(id)) {
      console.log("blah", selected.includes(id));
      setToggle((prev) => !prev);
      setMatch((prev) => prev + 1);
      setAttempt((prev) => prev + 1);

      setSelected([]);
    } else {
      console.log("no");
      setToggle((prev) => !prev);
      setSelected([]);
    }

    setToggle(!toggle);
  };

  return (
    <div className="h-screen w-full relative flex item-center justify-center">
      {isWinner && <ConfettiExplosion />}
      <div>
        <ProgressBar bananas={match} />
      </div>

      <div className="h-fit w-auto flex gap-16 p-40">
        <div className="grid grid-cols-3 grid-rows-2 gap-4">
          {randomleftData.map((cardData) => (
            <div
              key={cardData.id}
              className="h-24 w-24 bg-black"
              onClick={() => setSelected((prev) => [...prev, cardData.id])}
            >
              <img src={cardData.icon} alt="" />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 grid-rows-2 gap-4">
          {randomrightData.map((cardData) => (
            <div
              key={cardData.id}
              className="h-24 w-24 bg-black "
              onClick={() => handleCardClick(cardData.id)}
            >
              <h1 className="text-white ">{cardData.letter}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Game;
