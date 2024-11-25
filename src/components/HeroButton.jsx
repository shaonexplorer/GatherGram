import arrow from "./../assets/Vector 8.png";

function HeroButton({ banner }) {
  return (
    <div
      onClick={() => {
        // setShowContactMob(true);
        banner?.current.scrollIntoView({ behavior: "smooth" });
      }}
      className="absolute top-[728px] sm:top-[989.8px] left-[139.5px] sm:left-[678px] sm:w-[371px]  sm:h-[127.2px] flex flex-col items-center gap-[8px] cursor-pointer"
    >
      <div className="text-[16px] sm:text-[32px] text-center text-white font-maiandra tracking-[2%] leading-[40px]">
        Register for free
      </div>
      <div className="w-[23px] h-[21px] sm:w-[41.24px] sm:h-[37.79px]">
        <img src={arrow}></img>
      </div>
    </div>
  );
}

export default HeroButton;
