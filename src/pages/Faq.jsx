import { useState } from "react";
import icon from "./../assets/Faq/icon.png";
import icon01 from "./../assets/Faq/Subtract.png";
import icon02 from "./../assets/Faq/Subtract 01.png";
import union from "./../assets/Faq/Union 01.png";

function Faq() {
  const [index, setIndex] = useState(0);
  return (
    <div className="w-[390px] sm:w-[1728px] mx-auto py-[160px] sm:px-[290px] bg-[#FFD6E4] flex flex-col items-center relative overflow-hidden ">
      {/* title section */}
      <div className="sm:mx-[120px] flex flex-col gap-[40px] text-center z-10 ">
        <p className="font-mauline text-[40px] sm:text-[80px] leading-[40px] sm:leading-[104px] text-black w-[988px]">
          Got Questions? <br></br>We’ve Got
          <span className="text-[#D81159]"> Answers</span>
        </p>
        <p className="font-maiandra text-black text-[16px] sm:text-[32px] leading-[24px] sm:leading-[40px] tracking-[2%] ">
          Find quick answers to the most common questions
        </p>
      </div>
      {/* faq section */}
      <div className="mt-[126px] sm:w-[1228px] flex flex-col gap-[32px] z-10">
        {/* row 01 */}
        <div
          onClick={() => {
            setIndex(index === 1 ? 0 : 1);
          }}
          className={` mx-auto sm:w-full rounded-[32px] bg-[#FFFFFF99] py-[8px] sm:py-[32px] px-[16px] sm:px-[56px] flex gap-[8px] cursor-pointer transition-all duration-500 overflow-hidden ${
            index === 1
              ? "h-[320px] sm:h-[232px] shadow-[0px_0px_20px_0px_#00000040] bg-white"
              : "h-[97px] sm:h-[120px]"
          }`}
        >
          <div className="w-[24px] h-[24px] my-[16px] sm:my-0 sm:w-[56px] sm:h-[56px] flex items-center justify-center">
            <img
              src={icon}
              className={`w-[10px] h-[5px] sm:w-[23.33px] sm:h-[11.67px] transition-all duration-700 ${
                index === 1 ? "rotate-180" : ""
              }`}
            ></img>
          </div>
          <div className="w-[294px] my-[16px] sm:my-0 flex flex-col gap-[32px] sm:w-[1052px]">
            <p className="font-mauline text-[16px] sm:text-[32px] text-black leading-[24px] sm:leading-[40px]">
              How secure are financial contributions made through GatherGram?
            </p>

            {index === 1 && (
              <p
                className={`font-maiandra text-[16px] sm:text-[24px] leading-[24px] sm:leading-[32px] text-[#6B6B6B]`}
              >
                GatherGram prioritizes security for all transactions. We use
                encrypted payment gateways to ensure that all monetary gifts are
                processed safely and reach you directly. Your guests can
                contribute with confidence, knowing their information is fully
                protected.
              </p>
            )}
          </div>
        </div>
        {/* row 02 */}
        <div
          onClick={() => {
            setIndex(index === 2 ? 0 : 2);
          }}
          className={` mx-auto sm:w-full rounded-[32px] bg-[#FFFFFF99] py-[8px] sm:py-[32px] px-[16px] sm:px-[56px] flex gap-[8px] cursor-pointer transition-all duration-500 overflow-hidden ${
            index === 2
              ? "h-[320px] sm:h-[232px] shadow-[0px_0px_20px_0px_#00000040] bg-white"
              : "h-[97px] sm:h-[120px]"
          }`}
        >
          <div className="w-[24px] h-[24px] my-[16px] sm:my-0 sm:w-[56px] sm:h-[56px] flex items-center justify-center">
            <img
              src={icon}
              className={`w-[10px] h-[5px] sm:w-[23.33px] sm:h-[11.67px] transition-all duration-700 ${
                index === 2 ? "rotate-180" : ""
              }`}
            ></img>
          </div>
          <div className="w-[294px] my-[16px] sm:my-0 flex flex-col gap-[32px] sm:w-[1052px]">
            <p className="font-mauline text-[16px] sm:text-[32px] text-black leading-[24px] sm:leading-[40px]">
              Can guests access GatherGram without downloading an app?
            </p>

            {index === 2 && (
              <p
                className={`font-maiandra text-[16px] sm:text-[24px] leading-[24px] sm:leading-[32px] text-[#6B6B6B]`}
              >
                GatherGram prioritizes security for all transactions. We use
                encrypted payment gateways to ensure that all monetary gifts are
                processed safely and reach you directly. Your guests can
                contribute with confidence, knowing their information is fully
                protected.
              </p>
            )}
          </div>
        </div>

        {/* row 03 */}

        <div
          onClick={() => {
            setIndex(index === 3 ? 0 : 3);
          }}
          className={` mx-auto sm:w-full rounded-[32px] bg-[#FFFFFF99] py-[8px] sm:py-[32px] px-[16px] sm:px-[56px] flex gap-[8px] cursor-pointer transition-all duration-500 overflow-hidden ${
            index === 3
              ? "h-[320px] sm:h-[232px] shadow-[0px_0px_20px_0px_#00000040] bg-white"
              : "h-[97px] sm:h-[120px]"
          }`}
        >
          <div className="w-[24px] h-[24px] my-[16px] sm:my-0 sm:w-[56px] sm:h-[56px] flex items-center justify-center">
            <img
              src={icon}
              className={`w-[10px] h-[5px] sm:w-[23.33px] sm:h-[11.67px] transition-all duration-700 ${
                index === 3 ? "rotate-180" : ""
              }`}
            ></img>
          </div>
          <div className="w-[294px] my-[16px] sm:my-0 flex flex-col gap-[32px] sm:w-[1052px]">
            <p className="font-mauline text-[16px] sm:text-[32px] text-black leading-[24px] sm:leading-[40px]">
              Can I customize the trivia questions and love story on GatherGram?
            </p>

            {index === 3 && (
              <p
                className={`font-maiandra text-[16px] sm:text-[24px] leading-[24px] sm:leading-[32px] text-[#6B6B6B]`}
              >
                GatherGram prioritizes security for all transactions. We use
                encrypted payment gateways to ensure that all monetary gifts are
                processed safely and reach you directly. Your guests can
                contribute with confidence, knowing their information is fully
                protected.
              </p>
            )}
          </div>
        </div>

        {/* row 04 */}

        <div
          onClick={() => {
            setIndex(index === 4 ? 0 : 4);
          }}
          className={` mx-auto sm:w-full rounded-[32px] bg-[#FFFFFF99] py-[8px] sm:py-[32px] px-[16px] sm:px-[56px] flex gap-[8px] cursor-pointer transition-all duration-500 overflow-hidden ${
            index === 4
              ? "h-[320px] sm:h-[232px] shadow-[0px_0px_20px_0px_#00000040] bg-white"
              : "h-[97px] sm:h-[120px]"
          }`}
        >
          <div className="w-[24px] h-[24px] my-[16px] sm:my-0 sm:w-[56px] sm:h-[56px] flex items-center justify-center">
            <img
              src={icon}
              className={`w-[10px] h-[5px] sm:w-[23.33px] sm:h-[11.67px] transition-all duration-700 ${
                index === 4 ? "rotate-180" : ""
              }`}
            ></img>
          </div>
          <div className="w-[294px] my-[16px] sm:my-0 flex flex-col gap-[32px] sm:w-[1052px]">
            <p className="font-mauline text-[16px] sm:text-[32px] text-black leading-[24px] sm:leading-[40px]">
              What happens to our photos and videos after the wedding?
            </p>

            {index === 4 && (
              <p
                className={`font-maiandra text-[16px] sm:text-[24px] leading-[24px] sm:leading-[32px] text-[#6B6B6B]`}
              >
                GatherGram prioritizes security for all transactions. We use
                encrypted payment gateways to ensure that all monetary gifts are
                processed safely and reach you directly. Your guests can
                contribute with confidence, knowing their information is fully
                protected.
              </p>
            )}
          </div>
        </div>

        {/* ------------ */}
      </div>

      {/* register button */}

      <button className="z-10 font-maiandra text-white text-[14px]  sm:text-[24px] leading-[32px] text-center mt-[126px] w-[358px] sm:w-[600px] sm:h-[84px] rounded-[50px] py-[16px] px-[24px] bg-[#D81159] shadow-[-8px_8px_0px_0px_#000000]">
        View More FAQ’s
      </button>

      {/* icons */}
      <div className="invisible sm:visible">
        <img
          src={icon01}
          className="absolute top-[61px] left-[143px] w-[152.58px] h-[189.94px]"
        ></img>

        <img
          src={icon02}
          className="absolute top-[83px] right-[46px] w-[286.27px] h-[356.35px]"
        ></img>

        <img
          src={icon02}
          className="absolute top-[288px] right-[267px] w-[152.58px] h-[189.94px]"
        ></img>

        <img
          src={union}
          className="absolute top-0 w-[1807.57px] left-0 h-[1630.33px] mix-blend-screen z-0"
        ></img>
      </div>
    </div>
  );
}

export default Faq;
