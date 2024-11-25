import logo from "./../assets/logo.png";

import HeroButton from "./HeroButton";
import HeroText from "./HeroText";

function Header({ setShow, setShowMenu, setShowContactMob, banner, feature }) {
  return (
    <div className="relative flex flex-col w-[390px] sm:w-[1728px] h-full sm:h-[1255px] bg-bg bg-cover bg-center sm:mx-auto bg-blend-overlay bg-black/20 ">
      <div className="sm:hidden block backdrop-blur-[20px]"></div>
      <div className="sm:mx-auto mt-[44px] sm:mt-0 w-[390px] sm:w-[1728px] h-[60px] sm:h-[160px] px-[16px] sm:px-[120px] sm:py-[40px]  flex justify-between items-center backdrop-blur-[20px] ">
        <div className="flex justify-between items-center gap-[5px] sm:gap-[16px] sm:w-[270px] sm:h-[80px]">
          <img
            src={logo}
            className="w-[32px] h-[32px] sm:w-[56px] sm:h-[56px]"
          ></img>
          <p className="text-[24px] sm:text-[40px] text-white font-mauline">
            GatherGram
          </p>
        </div>

        <div className="hidden  sm:flex justify-between items-center gap-[24px] w-[609px] h-[80px] px-[24px]">
          <div
            className="font-maiandra text-[24px] text-white cursor-pointer"
            onClick={() => {
              feature?.current.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <p>Features</p>
          </div>

          <div className="font-maiandra text-[24px] text-white cursor-pointer">
            <p>How it works</p>
          </div>

          <div className="font-maiandra text-[24px] text-white cursor-pointer">
            <p>FAQ&apos;s</p>
          </div>

          <div className="font-maiandra text-[24px] text-white cursor-pointer">
            <p>Contacts</p>
          </div>
        </div>

        <button
          onClick={() => {
            setShow(true);
          }}
          className="hidden sm:flex bg-[#D81159] font-maiandra text-[24px] text-white px-[48px] py-[24px] rounded-[50px]"
        >
          Get Started
        </button>
        <button
          onClick={() => {
            setShowMenu(true);
          }}
          className="sm:hidden w-[24px] h-[24px] bg-transparent flex flex-col gap-[11px] justify-center items-center"
        >
          <div className="w-[18px] h-[2px] bg-white "></div>
          <div className="w-[18px] h-[2px] bg-white"></div>
        </button>
      </div>

      <HeroText />
      <HeroButton setShowContactMob={setShowContactMob} banner={banner} />
    </div>
  );
}

export default Header;
