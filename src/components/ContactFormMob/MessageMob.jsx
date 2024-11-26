import close from "./../../assets/Contact form/close icon.png";
import message from "./../../assets/Contact form/message.gif";

function MessageMob({ showMessageMob, setShowMessageMob }) {
  return (
    <div
      className={`z-40 fixed inset-0   bg-stone-500/50 backdrop-blur-sm transiton duration-[2000ms] ${
        showMessageMob ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div
        className={`w-[322px] h-[444px] rounded-[24px] bg-[#FFE5E3] flex flex-col relative top-[25%] left-[9%] transition-all duration-[2000ms] ${
          showMessageMob ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <button
          onClick={() => {
            setShowMessageMob(false);
          }}
          className="w-[32px] h-[32px] bg-[#D81159] rounded-[50px] flex justify-center items-center absolute -top-[12px] -right-[12px]"
        >
          <img src={close} className="w-[12px] h-[12px]"></img>
        </button>
        <div className="my-[44px] mx-[16px] w-[290px] h-[356px] flex flex-col items-center gap-[48px] text-center">
          <div className="flex flex-col items-center gap-[8px]">
            <img
              className="w-[100px] h-[100px] mix-blend-multiply"
              src={message}
            ></img>
            {/* text */}
            <div className="flex flex-col gap-[24px]">
              <p className="font-mauline text-[32px] leading-[40px] text-[#4F0D25]">
                We’ve <span className="text-[#D81159]">Received</span> Your
                Request
              </p>
              <p className="font-maiandra text-[16px] leading-[24px] text-[#4F0D25]">
                We’ll be in touch very soon Exciting wedding planning awaits!
              </p>
            </div>
          </div>
          {/* image */}

          <button
            onClick={() => {
              setShowMessageMob(false);
            }}
            className="h-[48px] px-[64px] bg-[#D81159] font-maiandra text-[16px] text-white rounded-[50px]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default MessageMob;
