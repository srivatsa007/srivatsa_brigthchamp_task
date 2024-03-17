import { useEffect, useState } from "react";
import ReactFlipCard from "reactjs-flip-card";
import ProgressBar from "./ProgressBar";
import {
  cardApple,
  cardBanana,
  cardCherry,
  cardLemon,
  cardWatermelon,
  cardMango,
  leftCardFront,
  rightCardFront,
  leftCardBack,
  rightCardBack,
} from "./index"; //barrel export
import ConfettiExplosion from "react-confetti-explosion";
import { Link } from "react-router-dom";
import GameOverPopup from "./GameOverPopup";

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

  const [attempt, setAttempt] = useState(0);
  const [selected, setSelected] = useState<string[]>([]);
  const [match, setMatch] = useState(0);
  const [toggle, setToggle] = useState(false);

  const [isWinner, setIsWinner] = useState(false);

  const [randomleftData, setRandomleftData] = useState<randomDataType>([]);
  const [randomrightData, setRandomrightData] = useState<randomDataType>([]);
  const [toResetCard, setToResetCard] = useState(false);
  const [disabledCards, setDisabledCards] = useState<string[]>([]);
  const [resetCard, setresetCard] = useState(false);
  useEffect(() => {
    const randomleftData1 = gameDataLeft.sort(() => Math.random() - 0.5);
    setRandomleftData(randomleftData1);
  }, []);

  useEffect(() => {
    if (match === 6) {
      setIsWinner(true);
    }
  }, [match]);

  useEffect(() => {
    Promise.resolve()
      .then(() => {
        resetCards();
      })
      .then(() => {
        setTimeout(() => {
          resetCards();
        }, 800);
      });
  }, [resetCard]);
  console.log("toggle", toggle);
  useEffect(() => {
    const randomrightData2 = gameDataRight.sort(() => Math.random() - 0.5);
    setRandomrightData(randomrightData2);
  }, []);

  const handleCardClick = (id: string) => {
    if (disabledCards.includes(id)) return; // If the card is already disabled, return early
    if (selected.includes(id)) {
      setToggle((prev) => !prev);
      setMatch((prev) => prev + 1);
      setAttempt((prev) => prev + 2);
      setSelected([]);
      setTimeout(() => {
        setDisabledCards((prev) => [...prev, id]);
      }, 800);
      setToggle(false);

      return;
    } else {
      setToggle((prev) => !prev);
      setSelected([]);
    }
    setAttempt((prev) => prev + 2);
    console.log("toggle from handleCardClick", toggle);
    setresetCard((prev) => !prev);
    setToggle(false);
  };

  const resetCards = () => {
    console.log("toggle from resetCard", toggle);
    setSelected([]);
    setToggle((prev) => !prev);
    setToResetCard((prev) => !prev);
    setToggle(false);
  };

  return (
    <div className="h-screen w-screen relative flex item-center justify-center">
      {isWinner && <ConfettiExplosion />}
      <GameOverPopup attempts={attempt} isVisible={isWinner} />
      <Link to="/instructions" className="absolute top-6 left-6">
        <button
          className="hover:scale-105"
          onClick={() => alert("You are about to quit your game!!☠️")}
        >
          <img src="/src/assets/backbtn.png" alt="back" className="h-[90px]" />
        </button>
      </Link>
      <div>
        <ProgressBar bananas={match} />
      </div>
      <div className="h-fit w-auto flex justify-between my-32 gap-24">
        <div className="grid grid-cols-3 grid-rows-2 gap-8">
          {randomleftData.map((cardData) => (
            <button
              disabled={toggle}
              key={cardData.id}
              className="relative h-[200px] w-[150px] "
              onClick={() => {
                setSelected((prev) => [...prev, cardData.id]);
                setToggle(true);
              }}
            >
              {!disabledCards.includes(cardData.id) && (
                <ReactFlipCard
                  flipByProp={toResetCard}
                  flipTrigger="onClick"
                  frontComponent={
                    <div className="relative h-[200px] w-[150px]">
                      <img
                        src={leftCardFront}
                        alt=""
                        className="absolute inset-0  h-[200px] w-[150px] "
                      />
                    </div>
                  }
                  backComponent={
                    <div className="relative h-[200px] w-[150px] flex align-middle justify-center items-center ">
                      <img
                        src={cardData.icon}
                        alt=""
                        className=" z-10 h-[100px] w-auto"
                      />
                      <img
                        src={leftCardBack}
                        alt=""
                        className="absolute inset-0 w-[150px] h-[200px] "
                      />
                    </div>
                  }
                />
              )}
            </button>
          ))}
        </div>

        <div className=" grid grid-cols-3 grid-rows-2 gap-8">
          {randomrightData.map((cardData) => (
            <button
              key={cardData.id}
              className="relative h-[200px] w-[150px] "
              onClick={() => handleCardClick(cardData.id)}
              disabled={!toggle}
            >
              {!disabledCards.includes(cardData.id) && (
                <ReactFlipCard
                  flipByProp={toResetCard}
                  flipTrigger={"onClick"}
                  frontComponent={
                    <div className="relative h-[200px] w-[150px]">
                      <img
                        src={rightCardFront}
                        alt=""
                        className=" h-[200px] w-[150px]"
                      />
                    </div>
                  }
                  backComponent={
                    <div className="relative h-[200px] w-[150px] flex align-middle justify-center items-center ">
                      <h1 className=" font-extrabold text-5xl">
                        {cardData.letter}
                      </h1>
                      <img
                        src={rightCardBack}
                        alt=""
                        className="absolute inset-0 h-full w-full "
                      />
                    </div>
                  }
                />
              )}
            </button>
          ))}
        </div>
      </div>
      {}
    </div>
  );
};

export default Game;
