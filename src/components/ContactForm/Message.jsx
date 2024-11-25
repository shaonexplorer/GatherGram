import image from "./../../assets/Contact form/message.gif";
import close from "./../../assets/Contact form/close icon.png";

function Message({ showMessage, setShowMessage }) {
  return (
    <div
      onClick={() => {}}
      className={`z-50 inset-0 fixed bg-stone-800/75 transition-all duration-700 ${
        showMessage ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div
        className={`w-[871px] h-[670px] rounded-[32px] bg-[#FFD6E4] ml-[25%] mt-[9%] relative transition-all duration-700 ${
          showMessage
            ? "visible opacity-100 scale-100"
            : "invisible opacity-0 scale-150"
        }`}
      >
        {/* close button */}
        <button
          onClick={() => {
            setShowMessage(false);
          }}
          className="flex justify-center items-center bg-[#D81159] rounded-[50px] w-[48px] h-[48px] absolute top-[40px] right-[40px]"
        >
          <img src={close} className="w-[24px] h-[24px]"></img>
        </button>
        {/* main section */}
        <div className="w-[773px] h-full mt-[50px] ml-[50px] flex flex-col items-center justify-center gap-[80px]">
          <div className="flex flex-col items-center gap-[8px] ">
            <img
              src={image}
              className="w-[209px] h-[209px] rounded-[104.5px] mix-blend-multiply"
            ></img>
            <div className="flex flex-col gap-[24px]">
              <p className="font-mauline text-[64px] leading-[64px] text-[#D81159] text-center">
                We’ve Received Your Request
              </p>
              <p className="font-maiandra text-[32px] leading-[40px] tracking-[2%] text-[#EB87AB] text-center w-[773px]">
                We’ll be in touch very soon<br></br> Exciting wedding planning
                awaits!
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              setShowMessage(false);
            }}
            className="w-[250px] h-[80px] rounded-[50px] py-[24px] px-[64px] bg-[#D81159] font-maiandra text-white text-[24px] leading-[32px]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Message;
