import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const IntroThree = () => {
  return (
    <div className="h-full w-full relative">
      <Link to="/introscreen2" className="absolute top-6 left-6">
        <button className="hover:scale-105">
          <img src="/src/assets/backbtn.png" alt="back" className="h-[90px]" />
        </button>
      </Link>
      <div className="absolute bottom-14 left-[40%]  animate-bounce ">
        <img
          src="/src/assets/dialog/dialogueThree.png"
          alt="speech3"
          className="h-40 w-auto  absolute -top-28 -right-32 "
        />
        <img
          src="/src/assets/monkeyAsset.png"
          alt="monkey"
          className="h-[24rem] w-auto left-4 animate-bounce bandar"
        />
      </div>
      <Link to="/instructions" className="absolute bottom-6 right-6">
        <button className="hover:scale-105">
          <img src="/src/assets/yesbtn.png" alt="yes" className="h-[90px]" />
        </button>
      </Link>
    </div>
  );
};

export default IntroThree;
