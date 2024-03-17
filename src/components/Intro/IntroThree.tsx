import { Link } from "react-router-dom";
import backbtn from "/src/assets/backbtn.png";
import dialogue3 from "/src/assets/dialog/dialogueThree.png";
import monkey from "/src/assets/monkeyAsset.png";
import yesbtn from "/src/assets/yesbtn.png";

const IntroThree = () => {
  return (
    <div className="h-full w-full relative">
      <Link to="/introscreen2" className="absolute top-6 left-6">
        <button className="hover:scale-105">
          <img src={backbtn} alt="back" className="h-[90px]" />
        </button>
      </Link>
      <div className="absolute bottom-14 left-[40%]  animate-bounce ">
        <img
          src={dialogue3}
          alt="speech3"
          className="h-40 w-auto  absolute -top-28 -right-32 "
        />
        <img
          src={monkey}
          alt="monkey"
          className="h-[24rem] w-auto left-4 animate-bounce bandar"
        />
      </div>
      <Link to="/instructions" className="absolute bottom-6 right-6">
        <button className="hover:scale-105">
          <img src={yesbtn} alt="yes" className="h-[90px]" />
        </button>
      </Link>
    </div>
  );
};

export default IntroThree;
