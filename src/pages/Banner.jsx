import text01 from "./../assets/joyful.png";
import text02 from "./../assets/tailored just for you.png";
import text03 from "./../assets/hassle free.png";
import text04 from "./../assets/Memorable.png";
import text05 from "./../assets/effortless.png";
import group01 from "./../assets/Group.png";
import group02 from "./../assets/Group01.png";
import group03 from "./../assets/Group 77.png";

import group05 from "./../assets/Group 1.png";

function Banner({ setShow, setShowContactMob }) {
  return (
    <div className="w-[390px] h-[1003px] md:w-[1728px] relative mx-auto">
      <div className="absolute top-[174px] left-[16px] md:left-[122px] md:w-[1485px] h-[532px] flex flex-col items-center gap-[120px]">
        <div className="flex flex-col w-[358px] md:w-[1485px] md:px-[250px]  gap-[40px]">
          <p className="font-mauline text-[40px] md:text-[80px] leading-[40px] md:leading-[104px] text-center text-black md:w-[985px]">
            Be Part of the Experience With<br></br>
            <span className="text-[#D81159]">Our Exclusive Free Access!</span>
          </p>
          <p className="text-[16px] md:text-[32px] text-center leading-[24px] md:leading-[40px] tracking-[2%] text-black font-maiandra md:w-[985px]">
            Join GatherGram’s exclusive Free Access and explore everything our
            platform has to offer
          </p>
        </div>
        {/* register button */}
        <button
          onClick={() => {
            setShow(true);
          }}
          className="hidden md:block md:w-[480px] md:h-[84px] rounded-[50px] px-[24px] py-[16px] bg-[#D81159] shadow-[-8px_8px_0px_0px_#000000] font-maiandra text-[16px] md:text-[24px] leading-[32px] text-center text-[#FAFAFA]"
        >
          Register for Free Access
        </button>
        <button
          onClick={() => {
            setShowContactMob(true);
          }}
          className="md:hidden md:w-[480px] md:h-[84px] rounded-[50px] px-[24px] py-[16px] bg-[#D81159] shadow-[-8px_8px_0px_0px_#000000] font-maiandra text-[16px] md:text-[24px] leading-[32px] text-center text-[#FAFAFA]"
        >
          Register for Free Access
        </button>
      </div>

      <div className="hidden md:block">
        {/* images */}

        <div className="absolute top-[254px] left-[27px] w-[220px] h-[220px] bg-img01 bg-cover bg-center rounded-full shadow-[0px_0px_20px_0px_#00000040]"></div>

        <div className="absolute top-[40px] left-[1431px] w-[220px] h-[220px] bg-img02 bg-cover bg-center rounded-full shadow-[0px_0px_20px_0px_#00000040]"></div>

        <div className="absolute top-[735px] left-[213px] w-[220px] h-[220px] bg-img03 bg-cover bg-center rounded-full shadow-[0px_0px_20px_0px_#00000040]"></div>

        <div className="absolute top-[625px] left-[1247px] w-[220px] h-[220px] bg-img04 bg-cover bg-center rounded-full shadow-[0px_0px_20px_0px_#00000040]"></div>

        {/* texts */}

        <div className="absolute top-[178px] left-[145px] w-[75px] h-[40px]">
          <img src={text01}></img>
        </div>

        <div className="absolute top-[670px] left-[203px] w-[264px] h-[40px]">
          <img src={text02}></img>
        </div>

        <div className="absolute top-[888px] left-[895px] w-[159px] h-[40px]">
          <img src={text03}></img>
        </div>

        <div className="absolute top-[620.5px] left-[1526px] w-[143px] h-[40px]">
          <img src={text04}></img>
        </div>

        <div className="absolute top-[296.5px] left-[1461px] w-[159px] h-[40px]">
          <img src={text05}></img>
        </div>

        {/* group */}
        <div className="absolute top-[171.31px] left-[392px] w-[167px] h-[54.31px] -translate-x-40 -translate-y-14">
          <img src={group01}></img>
        </div>

        <div className="absolute top-[604.81px] left-[1416px] w-[167px] h-[54.31px] -translate-y-12">
          <img src={group02}></img>
        </div>

        <div className="absolute top-[771.72px] left-[919.26px] w-[124.68px] h-[123.87px] -translate-x-32 -translate-y-5">
          <img src={group03}></img>
        </div>

        <div className="absolute top-[234.82px] left-[1397.9px] w-[124.68px] h-[123.87px]  -translate-x-24 translate-y-5 rotate-[-45deg]">
          <img src={group03}></img>
        </div>

        <div className="absolute top-[559.16px] left-[539.48px] w-[198.39px] h-[79.99px]  -translate-x-48 -translate-y-16">
          <img src={group05}></img>
        </div>
      </div>
    </div>
  );
}

export default Banner;
