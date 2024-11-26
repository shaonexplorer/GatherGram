import { useState } from "react";
import ai from "./../assets/How/ai-black.png";
import robot from "./../assets/How/robot.gif";
import scan from "./../assets/How/scan.png";
import juice from "./../assets/How/juice.png";
import qr from "./../assets/How/qr-scan.gif";
import toast from "./../assets/How/toast.gif";
import elipse01 from "./../assets/How/Ellipse 18.png";
import elipse02 from "./../assets/How/Ellipse 19.png";
import highlight01 from "./../assets/How/Highlight 01.png";
import highlight02 from "./../assets/How/Highlight 02.png";
import highlight03 from "./../assets/How/Highlight 03.png";
import highlight04 from "./../assets/How/Highlight 04.png";
import highlight05 from "./../assets/How/Highlight 05.png";
import highlight06 from "./../assets/How/Highlight 06.png";

function How() {
  const [index, setIndex] = useState(1);
  return (
    <div className="w-[390px] sm:w-[1728px] h-[1183px] mx-auto bg-[#EB87AB] flex flex-col relative">
      <div className="w-full sm:w-[1485px] sm:mx-[122px] mt-[120px] px-[16px] sm:px-[250px] flex flex-col gap-[40px] text-white">
        <p className="font-mauline text-[40px] sm:text-[80px] leading-[40px] sm:leading-[104px] text-center">
          Celebrate With Ease
        </p>
        <p className="font-maiandra text-[16px] sm:text-[32px] leading-[24px] sm:leading-[40px] tracking-[2%] text-center">
          From setup to celebration, here’s how we make your wedding day
          hassle-free
        </p>
      </div>

      {/* card container */}
      <div className="mt-[120px] sm:w-[1482px] sm:h-[500px] sm:mx-[122px] flex flex-col sm:flex-row gap-[16px] sm:gap-[32px] z-30">
        {/* card 01 */}
        <div
          onClick={() => setIndex(1)}
          className={`overflow-hidden mx-auto sm:mx-0 sm:h-[500px] transition-all duration-700 relative ${
            index === 1
              ? "bg-white h-[445px] rounded-[24px] sm:rounded-[50px] w-[358px] sm:w-[1158px] shadow-[0px_0px_20px_0px_#00000040]"
              : "w-[358px] h-[60px]  rounded-[32px] sm:w-[130px] sm:rounded-[100px] bg-[#FFFFFF99] bg-opacity-60 cursor-pointer"
          }`}
        >
          {index !== 1 && (
            <div className="flex items-center sm:items-start h-[60px] sm:h-full ">
              <div className=" flex w-[80px] h-[76px] rounded-[50px] bg-none sm:bg-white sm:mt-[25px] sm:mx-[25px] justify-center items-center">
                <img
                  src={ai}
                  className="w-[22px] sm:w-[45.71px] h-[23px] sm:h-[45.04px] absolute sm:relative sm:top-0 sm:left-0 top-[19px] left-[19px]"
                ></img>
              </div>
              <p className="sm:hidden font-mauline text-xl text-[#ea6e9b] leading-[32px]  ">
                Create Your Celebration Hub
              </p>
            </div>
          )}

          {index === 1 && (
            <div
              className={`flex flex-col-reverse sm:flex-row items-center gap-[24px] p-[24px] relative `}
            >
              {/* column 01 */}
              <div className="flex flex-col gap-[24px] sm:gap-[29px]">
                <div className="w-[22px] sm:w-[45.71px] h-[23px] sm:h-[46.22px] sm:mt-[40px] sm:ml-[42px] absolute   top-[19px] left-[19px] sm:top-0 sm:left-0">
                  <img src={ai}></img>
                </div>
                <div className="flex flex-col gap-[24px] sm:gap-[32px] sm:w-[756px] sm:mt-[108px] sm:ml-[24px]">
                  <p className="font-mauline text-[24px] sm:text-[48px] text-[#D81159] leading-[32px] sm:leading-[64px]">
                    Create Your Celebration Hub
                  </p>
                  <p className="font-maiandra text-[16px] sm:text-[24px] text-[#0D0D0D] leading-[24px] sm:leading-[32px]">
                    Start by signing up and setting up your wedding day details.
                  </p>
                  <p className="font-maiandra text-[16px] sm:text-[24px] text-[#0D0D0D] leading-[24px] sm:leading-[32px]">
                    Easily fill in everything—from your event itinerary and
                    trivia questions to your gift list and love story, with AI
                    assistance making it even easier to share your journey!
                  </p>
                </div>
              </div>
              {/* column 02 */}
              <div className="w-[150px] sm:w-[290.73px] h-[120px] sm:h-[317.15px] rounded-[120px] sm:rotate-[45deg] sm:mt-20">
                <img src={robot} className="mix-blend-multiply"></img>
              </div>
            </div>
          )}
        </div>

        {/* card 02 */}

        <div
          onClick={() => setIndex(2)}
          className={`overflow-hidden sm:h-[500px] mx-auto sm:mx-0 transition-all duration-700 relative ${
            index === 2
              ? "bg-white h-[421px] rounded-[24px] sm:rounded-[50px] w-[358px] sm:w-[1158px] shadow-[0px_0px_20px_0px_#00000040]"
              : "w-[358px] h-[60px] rounded-[32px] sm:w-[130px] sm:rounded-[100px] bg-[#FFFFFF99] bg-opacity-60 cursor-pointer"
          }`}
        >
          {index !== 2 && (
            <div className="flex items-center sm:items-start h-[60px] sm:h-full ">
              <div className=" flex w-[80px] h-[76px] rounded-[50px] bg-none sm:bg-white sm:mt-[25px] sm:mx-[25px] justify-center items-center">
                <img
                  src={scan}
                  className="w-[22px] sm:w-[45.71px] h-[23px] sm:h-[45.04px] absolute sm:relative sm:top-0 sm:left-0 top-[19px] left-[19px]"
                ></img>
              </div>
              <p className="sm:hidden font-mauline text-xl text-[#ea6e9b] leading-[32px]  ">
                Share with a Single QR Code
              </p>
            </div>
          )}

          {index === 2 && (
            <div
              className={`flex flex-col-reverse sm:flex-row items-center gap-[24px] p-[24px] relative `}
            >
              {/* column 01 */}
              <div className="flex flex-col gap-[24px] sm:gap-[29px]">
                <div className="w-[22px] sm:w-[45.71px] h-[23px] sm:h-[46.22px] sm:mt-[40px] sm:ml-[42px] absolute  sm:top-0 sm:left-0 top-[19px] left-[19px]">
                  <img src={scan}></img>
                </div>
                <div className="flex flex-col gap-[24px] sm:gap-[32px] sm:w-[756px] sm:mt-[108px] sm:ml-[24px]">
                  <p className="font-mauline text-[24px] sm:text-[48px] text-[#D81159] leading-[32px] sm:leading-[64px]">
                    Share with a Single QR Code
                  </p>
                  <p className="font-maiandra text-[16px] sm:text-[24px] text-[#0D0D0D] leading-[24px] sm:leading-[32px]">
                    Once your hub is complete, receive a unique, shareable QR
                    code and guest list link.
                  </p>
                  <p className="font-maiandra text-[16px] sm:text-[24px] text-[#0D0D0D] leading-[24px] sm:leading-[32px]">
                    Simply send it to your guests, who can quickly register with
                    just their phone number to access everything your
                    celebration offers.
                  </p>
                </div>
              </div>
              {/* column 02 */}
              <div className="w-[150px] sm:w-[290.73px] h-[120px] sm:h-[317.15px] rounded-[120px] sm:rotate-[45deg] sm:mt-20">
                <img src={qr} className="mix-blend-multiply"></img>
              </div>
            </div>
          )}
        </div>
        {/* card 03 */}

        <div
          onClick={() => setIndex(3)}
          className={`overflow-hidden sm:h-[500px] mx-auto sm:mx-0  transition-all duration-700 relative ${
            index === 3
              ? "bg-white h-[493px] rounded-[24px] sm:rounded-[50px] w-[358px] sm:w-[1158px] shadow-[0px_0px_20px_0px_#00000040]"
              : "w-[358px] h-[60px] rounded-[32px] sm:w-[130px] sm:rounded-[100px] bg-[#FFFFFF99] bg-opacity-60 cursor-pointer"
          }`}
        >
          {index !== 3 && (
            <div className="flex items-center sm:items-start h-[60px] sm:h-full ">
              <div className=" flex w-[80px] h-[76px] rounded-[50px] bg-none sm:bg-white sm:mt-[25px] sm:mx-[25px] justify-center items-center">
                <img
                  src={juice}
                  className="w-[22px] sm:w-[45.71px] h-[23px] sm:h-[45.04px] absolute sm:relative sm:top-0 sm:left-0 top-[19px] left-[19px]"
                ></img>
              </div>
              <p className="sm:hidden font-mauline text-xl text-[#ea6e9b] leading-[32px]  ">
                Let the Celebration Begin!
              </p>
            </div>
          )}

          {index === 3 && (
            <div
              className={`flex flex-col-reverse sm:flex-row items-center gap-[24px] p-[24px] relative `}
            >
              {/* column 01 */}
              <div className="flex flex-col gap-[24px] sm:justify-center sm:items-center sm:gap-[29px]">
                <div className="w-[22px] sm:w-[45.71px] h-[23px] sm:h-[46.22px] sm:mt-[40px] sm:ml-[42px] absolute sm:top-0 sm:left-0 top-[19px] left-[19px]">
                  <img src={juice}></img>
                </div>
                <div className="flex flex-col gap-[24px] sm:gap-[32px] sm:w-[756px] sm:mt-[108px] sm:ml-[24px]">
                  <p className="font-mauline text-[24px] sm:text-[48px] text-[#D81159] leading-[32px] sm:leading-[64px]">
                    Let the Celebration Begin!
                  </p>
                  <p className="font-maiandra text-[16px] sm:text-[24px] text-[#0D0D0D] leading-[24px] sm:leading-[32px]">
                    Guests can now fully interact with your wedding day! They
                    can message, contribute gifts, play trivia games, share
                    photos and videos, and view all event details.
                  </p>
                  <p className="font-maiandra text-[16px] sm:text-[24px] text-[#0D0D0D] leading-[24px] sm:leading-[32px]">
                    After the event, everything remains accessible, including a
                    personalized photo album and high-quality downloads for all
                    to relive the day’s magic.
                  </p>
                </div>
              </div>
              {/* column 02 */}
              <div className="w-[150px] sm:w-[290.73px] h-[120px] sm:h-[317.15px] rounded-[120px] sm:rotate-[45deg] sm:mt-20">
                <img src={toast} className="mix-blend-multiply"></img>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* icons */}
      <div className="hidden sm:block">
        <div className="w-[726px] h-[770px] mix-blend-multiply absolute top-[414px] left-0">
          <img src={elipse01} className="w-full h-full"></img>
        </div>

        <div className="w-[203px] h-[197px] mix-blend-multiply absolute top-0 left-[1525px]">
          <img src={elipse02}></img>
        </div>

        <img
          src={highlight01}
          className="w-[158.49px] h-[175.49px] absolute top-[70px] left-[320px]"
        ></img>

        <img
          src={highlight02}
          className="w-[81.31px] h-[154.66px] absolute top-[87.17px] right-[330px]"
        ></img>

        <img
          src={highlight03}
          className="absolute top-[106px] left-[78px] w-[57.44px] h-[60.72px]"
        ></img>

        <img
          src={highlight04}
          className="absolute top-[175px] right-[52px] w-[166.84px] h-[119.7px]"
        ></img>

        <img
          src={highlight05}
          className="absolute bottom-[44px] left-[138px] w-[190px] h-[140px]"
        ></img>

        <img
          src={highlight06}
          className="absolute bottom-[19px] right-[33px] w-[111.15px] h-[117.5px]"
        ></img>
      </div>
    </div>
  );
}

export default How;
