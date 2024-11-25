function Banner01({ setShow, setShowContactMob }) {
  return (
    <div className="mx-auto w-[390px] sm:w-[1728px] h-[893px] py-[160px] sm:px-[120px] flex flex-col gap-[88px] bg-banner01 bg-center bg-cover bg-[#00000033] bg-blend-color">
      {/* text */}
      <div className="flex flex-col gap-[40px] w-full mx-auto sm:mx-0 sm:w-[781px] text-white">
        <p className="font-mauline text-[40px] sm:text-[80px] leading-[40px] sm:leading-[104px] text-center sm:text-start">
          Ready for an <span className="text-[#FFD6E4]">Unforgettable</span>
          Wedding?
        </p>
        <p className="font-maiandra text-[16px] sm:text-[32px] leading-[24px] sm:leading-[40px] tracking-[2%] text-center sm:text-start">
          Begin your journey to a stress-free, beautifully organized celebration
          today with GatherGram
        </p>
      </div>

      {/* button */}
      <button
        onClick={() => {
          setShow(true);
        }}
        className="w-[358px] hidden sm:block mx-auto sm:mx-0 sm:w-[393px] sm:h-[84px] rounded-[50px] py-[16px] px-[24px] shadow-[-8px_8px_0px_0px_#000000] font-maiandra text-[16px] sm:text-[24px] leading-[24px] sm:leading-[32px] text-center text-[#D81159] bg-white"
      >
        Let’s get started!
      </button>
      <button
        onClick={() => {
          setShowContactMob(true);
        }}
        className="w-[358px] sm:invisible mx-auto sm:mx-0 sm:w-[393px] sm:h-[84px] rounded-[50px] py-[16px] px-[24px] shadow-[-8px_8px_0px_0px_#000000] font-maiandra text-[16px] sm:text-[24px] leading-[24px] sm:leading-[32px] text-center text-[#D81159] bg-white"
      >
        Let’s get started!
      </button>
    </div>
  );
}

export default Banner01;
