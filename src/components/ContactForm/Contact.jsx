import { useState } from "react";
import close from "./../../assets/Contact form/close.png";
import envelop from "./../../assets/Contact form/EnvelopeFill.png";
import facebook from "./../../assets/Contact form/Icon awesome-facebook.png";

function Contact({ setShow, show, setShowMessage }) {
  const [index, setIndex] = useState(1);

  return (
    <div
      onClick={() => {
        setShow(false);
      }}
      className={`z-50 inset-0 fixed bg-stone-800/75 transition-all duration-1000 ${
        show ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      {/* form */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-[1440px] h-[1024px] rounded-[32px] bg-[#FFD6E4] ml-[12%] relative flex  z-50 transition-all duration-1000 ${
          show ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <img
          src={facebook}
          className="w-[29.34px] h-[29.34px] absolute bottom-[64px] left-[64px]"
        ></img>
        {/* close button */}
        <div
          onClick={() => {
            setShow(false);
          }}
          className="z-20 flex justify-center items-center bg-[#D81159] w-[48px] h-[48px] rounded-[50px] cursor-pointer absolute top-[40px] right-[40px]"
        >
          <img src={close} className="w-[24px] h-[24px]"></img>
        </div>

        {/* main section  */}
        {/* row 01 */}
        <div className="flex flex-col w-[561px] mt-[64px] ml-[64px] gap-[75px]">
          <div className="flex flex-col gap-[24px]">
            <p className="font-mauline text-[32px] text-[#EB87AB] leading-[40px]">
              Let’s Connect and Get You Started
            </p>
            <p className="font-mauline text-[64px] text-[#D81159] leading-[64px]">
              Simply share a few details with us
            </p>

            <p className="font-maiandra text-[24px] text-[#EB87AB] leading-[32px]">
              And we’ll personally reach out to guide you through all that
              GatherGram has to offer!
            </p>
          </div>
          <div className="flex gap-[8px] items-center">
            <img src={envelop} className="w-[24px] h-[24px]"></img>
            <p className="font-maiandra text-[24px] underline underline-offset-[5px] text-[#D81159]">
              info@gathergram.app
            </p>
          </div>
        </div>

        {/* col 02 */}

        <div className="w-[700px] mt-[64px] ml-[51px] h-[896px] bg-[#FAFAFACC] rounded-[24px] relative ">
          <p className="absolute top-[307px] left-[30px] font-maiandra text-[24px] text-[#D81159]">
            *
          </p>
          <p className="absolute top-[411px] left-[30px] font-maiandra text-[24px] text-[#D81159]">
            *
          </p>
          <div className="w-[604px] flex flex-col gap-[106px] mt-[48px] ml-[48px]">
            <div className="flex flex-col gap-[64px] ">
              <div className="flex flex-col gap-[24px]">
                <p className="font-maiandra text-[#D81159] text-[24px] leading-[32px]">
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
                          ? "bg-[#D81159] text-white"
                          : "bg-[#FAFAFACC] border-[2px] border-[#EB87AB] text-[#EB87AB]"
                      } rounded-[50px] px-[40px] py-[16px] font-maiandra text-[24px] leading-[32px] h-[64px] w-fit border-[2px] `}
                    >
                      Bride
                    </button>

                    <button
                      onClick={() => {
                        setIndex(2);
                      }}
                      className={` ${
                        index === 2
                          ? "bg-[#D81159] text-white"
                          : "bg-[#FAFAFACC] border-[2px] border-[#EB87AB] text-[#EB87AB] "
                      } rounded-[50px] px-[40px] py-[16px] font-maiandra text-[24px] leading-[32px] h-[64px] w-fit border-[2px] flex`}
                    >
                      Groom
                    </button>

                    <button
                      onClick={() => {
                        setIndex(3);
                      }}
                      className={` ${
                        index === 3
                          ? "bg-[#D81159] text-white"
                          : "bg-[#FAFAFACC] border-[2px] border-[#EB87AB] text-[#EB87AB]"
                      } rounded-[50px] px-[40px] py-[16px] font-maiandra text-[24px] leading-[32px] h-[64px] w-fit border-[2px] flex`}
                    >
                      Event Planner
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      setIndex(4);
                    }}
                    className={` ${
                      index === 4
                        ? "bg-[rgb(216,17,89)] text-white"
                        : "bg-[#FAFAFACC] border-[2px] border-[#EB87AB] text-[#EB87AB]"
                    } rounded-[50px] px-[40px] py-[16px] font-maiandra text-[24px] leading-[32px] h-[64px] w-fit border-[2px] flex`}
                  >
                    Other
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-[64px]">
                <input
                  type="text"
                  className="w-[604px] border-b-[#D81159] border-b-[3px] bg-[#FAFAFACC] focus:outline-none text-[#D81159] text-[24px] font-maiandra placeholder:text-[#EB87AB]"
                  placeholder="Name"
                ></input>

                <input
                  type="text"
                  className="w-[604px] border-b-[#D81159] border-b-[3px] bg-[#FAFAFACC] focus:outline-none text-[#D81159] text-[24px] font-maiandra placeholder:text-[#EB87AB]"
                  placeholder="Email"
                ></input>

                <input
                  type="text"
                  className="w-[604px] border-b-[#D81159] border-b-[3px] bg-[#FAFAFACC] focus:outline-none text-[#D81159] text-[24px] font-maiandra placeholder:text-[#EB87AB]"
                  placeholder="Phone Number"
                ></input>

                <input
                  type="text"
                  className="w-[604px] border-b-[#D81159] border-b-[3px] bg-[#FAFAFACC] focus:outline-none text-[#D81159] text-[24px] font-maiandra placeholder:text-[#EB87AB]"
                  placeholder="Your Message"
                ></input>
              </div>
            </div>
            <button
              onClick={() => {
                setShow(false);
                setShowMessage(true);
              }}
              className="w-[250px] rounded-[50px] px-[64px] py-[24px] bg-[#D81159] font-maiandra text-[24px] leading-[32px] text-white"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
