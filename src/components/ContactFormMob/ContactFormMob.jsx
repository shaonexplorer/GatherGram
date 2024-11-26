import { useState } from "react";
import logo from "./../../assets/logo.png";

function ContactFormMob({
  showContactMob,
  setShowContactMob,

  setShowMessageMob,
}) {
  const [index, setIndex] = useState(1);
  return (
    <div
      className={`z-40 fixed inset-0 w-[390px] h-[100%] bg-[#D81159] transition-all duration-1000 overflow-scroll ${
        showContactMob
          ? "visible opacity-100 translate-y-0 "
          : "invisible opacity-0  translate-y-[100%]"
      }`}
    >
      {/* header */}
      <div
        className={`  h-[60px] flex justify-between items-center px-[16px]   `}
      >
        <div className="flex gap-[5px]">
          <img className="w-[32px] h-[32px]" src={logo}></img>
          <p className="font-mauline text-[24px] text-[#D81159]">GatherGram</p>
        </div>
        <div className="w-[24px] h-[24px]">
          <button
            onClick={() => {
              setShowContactMob(false);
            }}
            className="sm:hidden w-[24px] h-[24px] bg-transparent flex flex-col gap-[11px] justify-center items-center"
          >
            <div
              className={`w-[18px] h-[2px] bg-white rotate-45 translate-y-[6.5px]   `}
            ></div>
            <div
              className={`w-[18px] h-[2px] bg-white -rotate-45 -translate-y-[6.5px]`}
            ></div>
          </button>
        </div>
      </div>

      {/* main section */}

      <div className="flex flex-col justify-center items-center gap-[30px] py-[24px] px-[16px]">
        <div className="flex flex-col gap-[16px] w-full">
          <p className="font-mauline text-[20px] leading-[24px] text-[#FAFAFACC] ">
            Let’s Connect and Get You Started
          </p>
          <p className="font-mauline text-[32px] leading-[40px] text-white">
            Simply share a few details with us
          </p>
          <p className="font-mauline text-[20px] leading-[24px] text-[#FAFAFACC] ">
            And we’ll personally reach out to guide you through all that
            GatherGram has to offer!
          </p>
        </div>

        <div className="w-[358px]">
          <p className="mb-[16px] font-maiandra text-[16px] leading-[24px] text-white">
            I am the..
          </p>
          <div className="flex flex-col gap-[16px]">
            <div className="flex gap-[16px]">
              <button
                onClick={() => {
                  setIndex(1);
                }}
                className={` ${
                  index === 1
                    ? "bg-white text-[#D81159]"
                    : "bg-transparent border-[2px] border-[#FAFAFACC] text-[#FAFAFACC]"
                } rounded-[50px] px-[24px]   font-maiandra text-[16px] leading-[24px] h-[48px] w-fit border-[2px] `}
              >
                Bride
              </button>

              <button
                onClick={() => {
                  setIndex(2);
                }}
                className={` ${
                  index === 2
                    ? "bg-white text-[#D81159]"
                    : "bg-transparent border-[2px] border-[#FAFAFACC] text-[#FAFAFACC]"
                } rounded-[50px] px-[24px]   font-maiandra text-[16px] leading-[24px] h-[48px] w-fit border-[2px] `}
              >
                Groom
              </button>
            </div>
            <div className="flex gap-[16px]">
              <button
                onClick={() => {
                  setIndex(3);
                }}
                className={` ${
                  index === 3
                    ? "bg-white text-[#D81159]"
                    : "bg-transparent border-[2px] border-[#FAFAFACC] text-[#FAFAFACC]"
                } rounded-[50px] px-[24px]   font-maiandra text-[16px] leading-[24px] h-[48px] w-fit border-[2px] `}
              >
                Event Planner
              </button>

              <button
                onClick={() => {
                  setIndex(4);
                }}
                className={` ${
                  index === 4
                    ? "bg-white text-[#D81159]"
                    : "bg-transparent border-[2px] border-[#FAFAFACC] text-[#FAFAFACC]"
                } rounded-[50px] px-[24px]   font-maiandra text-[16px] leading-[24px] h-[48px] w-fit border-[2px] `}
              >
                Other
              </button>
            </div>
          </div>
        </div>

        {/* form */}
        <div className=" w-full flex flex-col gap-[40px]">
          <input
            type="text"
            className="w-full  border-b-white border-b-[3px] bg-transparent focus:outline-none text-white text-[16px] font-maiandra placeholder:text-[#EB87AB]"
            placeholder="Name"
          ></input>

          <input
            type="text"
            className="w-full  border-b-white border-b-[3px] bg-transparent focus:outline-none text-white text-[16px] font-maiandra placeholder:text-[#EB87AB]"
            placeholder="Email"
          ></input>

          <input
            type="text"
            className="w-full  border-b-white border-b-[3px] bg-transparent focus:outline-none text-white text-[16px] font-maiandra placeholder:text-[#EB87AB]"
            placeholder="Phone Number"
          ></input>

          <input
            type="text"
            className="w-full  border-b-white border-b-[3px] bg-transparent focus:outline-none text-white text-[16px] font-maiandra placeholder:text-[#EB87AB]"
            placeholder="Your message"
          ></input>
        </div>

        <button
          onClick={() => {
            setShowContactMob(false);
            setShowMessageMob(true);
          }}
          className="h-[48px]   rounded-[50px] bg-white   px-[40px] font-maiandra text-[16px] text-[#D81159]"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default ContactFormMob;
