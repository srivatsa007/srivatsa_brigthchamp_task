import loaderFull from "../images/loader-full.svg";
import greyBanana from "../../assets/bananainActive.png";
import ripeBanana from "../../assets/bananaActive.png";
import halfBanana from "../../assets/bananaHalf.png";
import { useState, useEffect } from "react";

type Props = { bananas?: number };

const ProgressBar = ({ bananas }: Props) => {
  const [ripeState, setRipeState] = useState(greyBanana);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (bananas) {
      const newWidth = Math.floor((bananas / 6) * 100);
      setWidth(newWidth);
      if (newWidth > 0 && newWidth < 100) {
        setRipeState(halfBanana);
      } else {
        setWidth(100);
        setRipeState(ripeBanana);
      }
    } else {
      setWidth(5);
      setRipeState(greyBanana);
    }
  }, [bananas]);

  return (
    <div className="w-96 h-8 p-1 z-10 flex items-center fixed top-10 left-0 right-0 mx-auto rounded-full bg-gray-50 ">
      <div className="relative h-full w-full flex rounded-full ">
        <div
          className="bg-gradient-to-r from-[#FFCF25] to-[#FFCF2575] rounded-full transition-all ease-in-out duration-1000"
          style={{ width: `${width}%` }}
        ></div>
        <img src={ripeState} className="h-20 w-24 -ml-12 -mt-6 " alt="banana" />
      </div>
    </div>
  );
};

export default ProgressBar;
