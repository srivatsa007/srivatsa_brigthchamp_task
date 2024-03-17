import { Link } from "react-router-dom";
import startbtn from "/src/assets/startbtn.png";
import dialogue1 from "/src/assets/dialog/dialogueOne.png";
import monkey from "/src/assets/monkeyAsset.png";

const IntroOne = () => {
  return (
    <div className="h-full w-full relative">
      <div className="absolute bottom-14 left-[50%] -translate-x-1/2">
        <img
          src={dialogue1}
          alt="speech1"
          className="h-40 w-auto  absolute -top-28 -right-32"
        />
        <img src={monkey} alt="monkey" className="h-[22rem] w-auto left-4" />
      </div>
      <Link to="/introscreen2" className="absolute bottom-6 right-6">
        <button className="hover:scale-105 ">
          <img src={startbtn} alt="start" className="h-[90px]" />
        </button>
      </Link>
    </div>
  );
};

export default IntroOne;
