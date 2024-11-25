import logo from "./../assets/logo.png";

function HamMenu({ showMenu, setShowMenu, setShowContactMob }) {
  return (
    <div
      className={`z-50 fixed inset-0 w-[390px]  bg-[#FFD6E4]  backdrop-blur-[20px] transition-all duration-[1000ms] overflow-hidden ${
        showMenu
          ? "visible opacity-100  h-[850px] "
          : "invisible opacity-0  h-0 "
      }`}
    >
      {/* header */}
      <div
        className={`mt-[44px] h-[60px] flex justify-between items-center px-[16px]   `}
      >
        <div className="flex gap-[5px]">
          <img className="w-[32px] h-[32px]" src={logo}></img>
          <p className="font-mauline text-[24px] text-[#D81159]">GatherGram</p>
        </div>
        <div className="w-[24px] h-[24px]">
          <button
            onClick={() => {
              setShowMenu(false);
            }}
            className="sm:hidden w-[24px] h-[24px] bg-transparent flex flex-col gap-[11px] justify-center items-center"
          >
            <div
              className={`w-[18px] h-[2px] bg-[#D81159] transition-all duration-[1000ms] ${
                showMenu
                  ? "rotate-45 translate-y-[6.5px]"
                  : "rotate-0 translate-y-0"
              }`}
            ></div>
            <div
              className={`w-[18px] h-[2px] bg-[#D81159] transition-all duration-[1000ms] ${
                showMenu
                  ? "-rotate-45 -translate-y-[6.5px]"
                  : "rotate-0 translate-y-0"
              }`}
            ></div>
          </button>
        </div>
      </div>
      {/* menu */}

      <div
        className={`w-[390px] h-[746px] px-[16px] pb-[40px] transition-all duration-[1000ms]  `}
      >
        <div
          className={`w-[358px] py-[40px] flex flex-col gap-[24px] transition-all duration-[2000ms]  `}
        >
          <p className="font-mauline text-[24px] leading-[40px] text-[#D81159]">
            Home
          </p>
          <p className="font-mauline text-[24px] leading-[40px] text-[#D81159]">
            Features
          </p>
          <p className="font-mauline text-[24px] leading-[40px] text-[#D81159]">
            How it Works
          </p>
          <p className="font-mauline text-[24px] leading-[40px] text-[#D81159]">
            FAQ’s
          </p>
          <p className="font-mauline text-[24px] leading-[40px] text-[#D81159]">
            Contact
          </p>
        </div>
        {/* button */}

        <button
          onClick={() => {
            setShowMenu(false);
            setShowContactMob(true);
          }}
          className={`mt-[282px] w-[358px] h-[48px] rounded-[50px] px-[24px] py-[16px] bg-[#D81159] shadow-[-4px_4px_0px_0px_#000000] font-maiandra text-[14px] text-white leading-[20px]  `}
        >
          Register for Free Access
        </button>
      </div>
    </div>
  );
}

export default HamMenu;
