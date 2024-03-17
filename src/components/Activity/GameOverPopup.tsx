import popup from "../../assets/resultscreen.png";
import yaybtn from "../../assets/YayOkayBtn.png";
import { Link } from "react-router-dom";
type Props = {
  attempts: number;
  isVisible: boolean;
};

function GameOverPopup({ attempts, isVisible }: Props) {
  return (
    <>
      {isVisible && (
        <div className=" fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="relative h-[90vh] mx-auto -top-5 ">
            <div className="p-6 rounded-lg absolute z-10 bottom-2 mx-auto ml-[10rem] w-fit align-middle flex flex-col items-center">
              <h2 className="text-2xl font-bold mb-4">Game Over!</h2>
              <p className="mb-4">
                You completed the game in {attempts} attempts.
              </p>
              <Link to="/instructions">
                <img
                  src={yaybtn}
                  alt=""
                  className="hover:scale-[0.85] scale-75 "
                />
              </Link>
            </div>
            <img src={popup} alt="popup" className="h-[100vh] -mt-16" />
          </div>
        </div>
      )}
    </>
  );
}

export default GameOverPopup;
