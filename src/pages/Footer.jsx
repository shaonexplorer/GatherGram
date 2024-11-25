import line from "./../assets/Footer/Line 2.png";
import logo from "./../assets/logo.png";
import icon from "./../assets/Footer/Icon facebook.png";
import mail from "./../assets/Footer/mail.png";
import copyright from "./../assets/Footer/copyright.png";

function Footer() {
  return (
    <div className="mx-auto w-[390px] h-full sm:w-[1728px] sm:h-[612px] bg-[#0D0D0D] flex flex-col">
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-[738px] mx-8 sm:mx-0">
        <div className="mt-[34.5px] sm:ml-[120px] flex flex-col items-center sm:items-start">
          <p className="font-mauline text-[32px] text-white leading-[40px]">
            Join Our Newsletter
          </p>
          <p className="font-maiandra text-[14px] text-[#FAFAFA99] leading-[20px]">
            Keep up to date with our latest news
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-[8px] sm:mt-[54.5px]">
          <input
            type="text"
            placeholder="Enter your email"
            className="text-center sm:text-start placeholder:text-[#667085] placeholder:font-inter placeholder:text-[16px] placeholder:leading-[24px] sm:w-[352px] h-[44px] rounded-[50px] border-[1px] border-[#D0D5DD] py-[10px] px-[24px] bg-[#FAFAFACC] shadow-[0px_1px_2px_0px_#1018280D] focus:outline-none "
          ></input>

          <button className="sm:w-[148px] h-[44px] rounded-[50px] px-[48px] bg-[#D81159] text-white font-maiandra text-[14px] leading-[20px]">
            Subscribe
          </button>
        </div>
      </div>

      <img
        src={line}
        className="sm:w-[1488px] w-[350px] mx-auto mt-[54px]"
      ></img>

      {/* logo and main footer section */}

      <div className=" flex flex-col sm:flex-row sm:gap-[546px] ">
        {/* col 01 */}
        <div className="mt-[54.66px] sm:ml-[120px] flex flex-col gap-[32px] sm:w-[339px] mx-8 items-center sm:items-start ">
          <div className="flex gap-[16px] items-center">
            <img src={logo} className="w-[56px] h-[56px]"></img>
            <p className="font-mauline text-[40px] leading-[80px] text-white">
              GatherGram
            </p>
          </div>

          <p className="font-maiandra text-[14px] leading-[20px] text-[#FAFAFA99] text-center sm:text-start">
            We bring all your wedding essentials into one hassle-free, secure,
            and budget-friendly platform designed to make your day as seamless
            as it is unforgettable.
          </p>
          <img src={icon} className="w-[29.34px] h-[29.34px]"></img>
        </div>
        {/* col 02 */}
        <div className="sm:w-[603px] flex flex-col gap-8 sm:flex-row sm:gap-[88px] mt-8 sm:mt-[80px] mx-auto">
          {/* 01 */}
          <div className="flex flex-col gap-[31px] items-center sm:items-start">
            <p className="font-maiandra text-[20px] leading-[24px] text-[#FFFFFF]">
              Platform
            </p>
            <div className="flex flex-col gap-[24px] items-center sm:items-start">
              <p className="font-maiandra text-[#FAFAFA99] text-[14px] leading-[20px]">
                Home
              </p>
              <p className="font-maiandra text-[#FAFAFA99] text-[14px] leading-[20px]">
                Register
              </p>
              <p className="font-maiandra text-[#FAFAFA99] text-[14px] leading-[20px]">
                Features
              </p>
              <p className="font-maiandra text-[#FAFAFA99] text-[14px] leading-[20px]">
                How It Works
              </p>
              <p className="font-maiandra text-[#FAFAFA99] text-[14px] leading-[20px]">
                FAQs
              </p>
            </div>
          </div>
          {/* 02 */}
          <div className="flex flex-col gap-[31px] items-center sm:items-start">
            <p className="font-maiandra text-[20px] leading-[24px] text-[#FFFFFF]">
              Company
            </p>
            <div className="flex flex-col gap-[24px] items-center sm:items-start">
              <p className="font-maiandra text-[#FAFAFA99] text-[14px] leading-[20px]">
                About
              </p>
              <p className="font-maiandra text-[#FAFAFA99] text-[14px] leading-[20px]">
                Careers
              </p>
              <div className="flex flex-col gap-[4px] items-center sm:items-start">
                <p className="font-maiandra text-[#FAFAFA99] text-[14px] leading-[20px]">
                  Contact Us
                </p>
                <div className="flex gap-[4px] items-center">
                  <img src={mail} className="w-[16px] h-[16px]"></img>
                  <a
                    href=""
                    className="text-[#FAFAFA4D] font-maiandra text-[14px] leading-[20px] underline"
                  >
                    info@gathergram.app
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* 03 */}
          <div className="flex flex-col gap-[31px] items-center sm:items-start">
            <p className="font-maiandra text-[20px] leading-[24px] text-[#FFFFFF]">
              Legal
            </p>
            <div className="flex flex-col gap-[24px] items-center sm:items-start">
              <p className="font-maiandra text-[#FAFAFA99] text-[14px] leading-[20px]">
                Privacy Policy
              </p>
              <p className="font-maiandra text-[#FAFAFA99] text-[14px] leading-[20px]">
                Terms of Service
              </p>
              <p className="font-maiandra text-[#FAFAFA99] text-[14px] leading-[20px]">
                Cookies
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* line 02*/}
      <img
        src={line}
        className="sm:w-[1488px] w-[350px] mx-auto mt-[54px]"
      ></img>

      <div className="my-[31px] sm:mt-[31px] sm:ml-[128px] mx-auto sm:mx-0 flex gap-[2px] items-center">
        <img src={copyright} className="w-[16px] h-[16px]"></img>
        <p className="font-maiandra text-[14px] leading-[20px] text-[#FAFAFA99]">
          2024 GatherGram, all rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
