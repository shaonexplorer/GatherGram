import { useState } from "react";
import sketch01 from "./../assets/Features/sketch01.png";
import sketch02 from "./../assets/Features/sketch02.png";
import sketch03 from "./../assets/Features/sketch03.png";
import sketch04 from "./../assets/Features/sketch04.png";
import e2 from "./../assets/Features/E2.png";
import e3 from "./../assets/Features/E3.png";
import e4 from "./../assets/Features/E4.png";
import e5 from "./../assets/Features/E5.png";
import union from "./../assets/Features/union.png";
import leaf from "./../assets/Features/leaf.png";
import leaf01 from "./../assets/Features/leaf01.png";
import worm from "./../assets/Features/worm.png";
import ai from "./../assets/Features/ai.png";

function Features() {
  const [index, setIndex] = useState(0);
  return (
    <div className="hidden sm:block mx-auto w-[1728px] py-[160px] relative">
      {/* texts */}
      <div className="mt-[160px] w-[1,488px] h-[328px] px-[250px] flex flex-col items-center gap-[40px] text-center">
        <p className="w-[988px] font-mauline text-[80px] leading-[104px]">
          Designed with You and Your Guests{" "}
          <span className="text-[#D81159]">in Mind</span>
        </p>

        <p className="w-[988px] font-maiandra text-[32px] leading-[40px] tracking-[2%]">
          Explore the features that will bring your big day to life, making your
          wedding celebration unforgettable
        </p>
      </div>

      {/* images */}

      <div className="mt-[120px] w-[1,488px] mx-auto h-[2,536px] flex gap-[24px] items-center justify-center">
        {/* column 01 */}
        <div className="w-[732px] h-[2,536px] flex flex-col gap-[24px]">
          <div
            onMouseEnter={() => {
              setIndex(1);
            }}
            onMouseLeave={() => {
              setIndex(0);
            }}
            className="overflow-hidden w-[732px] h-[828px] rounded-[32px] bg-feature01 hover:bg-none bg-cover bg-center bg-blend-multiply bg-[#00000033] shadow-[0px_0px_10px_0px_#00000040] flex flex-col gap-[588px] "
          >
            {index !== 1 && (
              <>
                <p className="font-mauline text-white text-[48px] leading-[64px] mt-[56px] mx-[56px] drop-shadow-[0px_0px_10px_0px_#00000040]">
                  Capture Every Precious Moment
                </p>

                <p className="  mx-[56px] text-[32px] font-maiandra leading-[40px] tracking-[2%] drop-shadow-[0px_0px_10px_0px_#00000040] text-white/70">
                  Your Guests, Your Memories
                </p>
              </>
            )}
            {index === 1 && (
              <div className="relative px-[88px] w-full h-full bg-[#FFD6E4]  font-maiandra text-[32px] leading-[40px] tracking-tight text-center flex flex-col justify-center items-center gap-5">
                <p>
                  Invite guests to share their favorite snapshots and videos of
                  your big day
                </p>
                <p>
                  Relive every heartfelt moment with high-quality downloads,
                  preserving memories that last a lifetime
                </p>

                <div className="absolute left-0 bottom-0 w-[285px] h-[285px] ">
                  <img
                    src={e2}
                    className="w-full h-full mix-blend-hard-light"
                  ></img>
                </div>

                <div className="absolute top-0 right-0 w-[285px] h-[285px] ">
                  <img
                    src={e2}
                    className="w-full h-full mix-blend-hard-light rotate-180"
                  ></img>
                </div>
              </div>
            )}
          </div>

          <div
            onMouseEnter={() => {
              setIndex(5);
            }}
            onMouseLeave={() => setIndex(0)}
            className="overflow-hidden w-[732px] h-[404px] rounded-[32px] bg-feature02 bg-cover bg-center bg-blend-multiply bg-[#00000033] shadow-[0px_0px_10px_0px_#00000040] flex flex-col gap-[164px]"
          >
            {index !== 5 && (
              <>
                <p className="text-[48px] font-mauline leading-[64px] drop-shadow-[0px_0px_10px_0px_#00000040] mt-[56px] mx-[56px] text-white">
                  Event Details & Itinerary
                </p>

                <p className="text-[32px] font-maiandra leading-[40px] tracking-[2%] drop-shadow-[0px_0px_10px_0px_#00000040] mx-[56px] text-white/80">
                  Every Detail in One Place
                </p>
              </>
            )}
            {index === 5 && (
              <div className="relative px-[88px] w-full h-full bg-[#FFD6E4]  font-maiandra text-[32px] leading-[40px] tracking-tighter text-center flex flex-col justify-center items-center gap-5">
                <p className="z-10">
                  Guests can access a beautifully organized event schedule and
                  venue information, from ceremony timings to reception details,
                  ensuring they’re informed and on time throughout the day
                </p>

                <div className="absolute left-0 bottom-0 w-[223px] h-[223px]">
                  <img
                    src={union}
                    className="w-full h-full mix-blend-hard-light"
                  ></img>
                </div>

                <div className="absolute right-0 top-0 w-[223px] h-[223px]">
                  <img
                    src={union}
                    className="w-full h-full mix-blend-hard-light rotate-180"
                  ></img>
                </div>
              </div>
            )}
          </div>

          <div
            onMouseEnter={() => {
              setIndex(7);
            }}
            onMouseLeave={() => setIndex(0)}
            className="overflow-hidden w-[732px] h-[828px] rounded-[32px] bg-feature03 bg-cover bg-center bg-blend-multiply bg-[#00000033] shadow-[0px_0px_10px_0px_#00000040] flex flex-col gap-[524px]"
          >
            {index !== 7 && (
              <>
                <p className="text-[48px] font-mauline leading-[64px] drop-shadow-[0px_0px_10px_0px_#00000040] mt-[56px] mx-[56px] text-white">
                  Gifts from the Heart,<br></br> Sent Securely
                </p>

                <p className="text-[32px] font-maiandra leading-[40px] tracking-[2%] drop-shadow-[0px_0px_10px_0px_#00000040] mx-[56px] text-white/80">
                  Easy Contributions, Lasting Gratitude
                </p>
              </>
            )}
            {index === 7 && (
              <div className="relative px-[88px] w-full h-full bg-[#FFD6E4]  font-maiandra text-[32px] leading-[40px] tracking-tighter text-center flex flex-col justify-center items-center gap-5">
                <p className="z-10">
                  From secure financial contributions to curated gift lists, we
                  offer thoughtful ways for guests to give, no awkward hand-offs
                  or gift tables required
                </p>

                <div className="absolute left-[234] top-0 w-[359.19px] h-[238.47px]">
                  <img
                    src={worm}
                    className="w-full h-full mix-blend-hard-light"
                  ></img>
                </div>

                <div className="absolute left-[234] bottom-0 w-[359.19px] h-[238.47px]">
                  <img
                    src={worm}
                    className="w-full h-full mix-blend-hard-light rotate-180"
                  ></img>
                </div>
              </div>
            )}
          </div>

          <div
            onMouseEnter={() => {
              setIndex(6);
            }}
            onMouseLeave={() => {
              setIndex(0);
            }}
            className="overflow-hidden w-[732px] h-[404px] rounded-[32px] bg-feature04 bg-cover bg-center bg-blend-multiply bg-[#00000033] shadow-[0px_0px_10px_0px_#00000040] flex flex-col  "
          >
            {index !== 6 && (
              <>
                <p className="text-[48px] font-mauline leading-[64px] drop-shadow-[0px_0px_10px_0px_#00000040] mt-[127px] mx-[56px] text-white">
                  Fun & Laughter with Couple Trivia
                </p>

                <p className=" mb-[80px] text-[32px] font-maiandra leading-[40px] tracking-[2%] drop-shadow-[0px_0px_10px_0px_#00000040] mx-[56px] text-white/80">
                  Engage Your Guests Like Never Before
                </p>
              </>
            )}
            {index === 6 && (
              <div className="relative px-[88px] w-full h-full bg-[#FFD6E4]  font-maiandra text-[32px] leading-[40px] tracking-tighter text-center flex flex-col justify-center items-center gap-5">
                <p className="z-10">
                  Our interactive trivia invites friends and family to test
                  their knowledge about the couple and engage in a lighthearted
                  way
                </p>

                <div className="absolute left-0 top-[108px] w-[94px] h-[188px]">
                  <img
                    src={leaf}
                    className="w-full h-full mix-blend-hard-light"
                  ></img>
                </div>

                <div className="absolute right-0 top-[108px] w-[94px] h-[188px]">
                  <img
                    src={leaf}
                    className="w-full h-full mix-blend-hard-light rotate-180"
                  ></img>
                </div>

                <div className="absolute left-[37.5%] top-0 w-[188px] h-[94px]">
                  <img
                    src={leaf01}
                    className="w-full h-full mix-blend-hard-light"
                  ></img>
                </div>

                <div className="absolute left-[37.5%] bottom-0 w-[188px] h-[94px]">
                  <img
                    src={leaf01}
                    className="w-full h-full mix-blend-hard-light rotate-180"
                  ></img>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* column 02 */}
        <div className="w-[732px] h-[2,536px] flex flex-col gap-[24px]">
          <div
            onMouseEnter={() => {
              setIndex(3);
            }}
            onMouseLeave={() => {
              setIndex(0);
            }}
            className="overflow-hidden w-[732px] h-[404px] rounded-[32px] bg-feature05 hover:bg-none bg-cover bg-blend-multiply bg-[#00000033] shadow-[0px_0px_10px_0px_#00000040] flex flex-col gap-[93px]"
          >
            {index !== 3 && (
              <>
                <div className="mt-[56px] flex flex-col text-white mx-[56px] gap-[12px]">
                  <div className="flex items-center">
                    <img
                      src={ai}
                      className="w-[59px] h-[59px] mix-blend-screen"
                    ></img>
                    <p className="text-[32px] font-maiandra leading-[40px] tracking-[2%] drop-shadow-[0px_0px_10px_0px_#00000040] text-white/80">
                      AI Assisted
                    </p>
                  </div>
                  <p className="text-[48px] font-mauline leading-[64px] drop-shadow-[0px_0px_10px_0px_#00000040] text-white">
                    Virtual Guestbook
                  </p>
                </div>

                <p className="text-[32px] font-maiandra leading-[40px] tracking-[2%] drop-shadow-[0px_0px_10px_0px_#00000040] mx-[56px] text-white/80">
                  A Digital Keepsake of Love & Laughter
                </p>
              </>
            )}
            {index === 3 && (
              <div className="relative px-[88px] w-full h-full bg-[#FFD6E4]  font-maiandra text-[32px] leading-[40px] -tracking-normal text-center flex flex-col justify-center items-center gap-5">
                <p>
                  With our easy-to-use digital guestbook, guests can leave
                  heartfelt notes with the help of AI to craft the perfect
                  words, making each message unique and memorable
                </p>

                <div className="absolute left-0 top-0 w-[122px] h-[153px] mix-blend-hard-light ">
                  <img
                    src={e4}
                    className="w-full h-full mix-blend-hard-light"
                  ></img>
                </div>

                <div className="absolute right-0 bottom-0 w-[202.44px] h-[252px] mix-blend-hard-light ">
                  <img
                    src={e4}
                    className="w-full h-full mix-blend-hard-light"
                  ></img>
                </div>
              </div>
            )}
          </div>

          <div
            onMouseEnter={() => setIndex(4)}
            onMouseLeave={() => setIndex(0)}
            className="overflow-hidden w-[732px] h-[1254px] rounded-[32px] bg-feature06 bg-cover bg-center bg-blend-multiply bg-[#00000033] shadow-[0px_0px_10px_0px_#00000040] flex flex-col gap-[879px]"
          >
            {index !== 4 && (
              <>
                <div className="mt-[56px] flex flex-col text-white mx-[56px] gap-[12px]">
                  <div className="flex items-center">
                    <img
                      src={ai}
                      className="w-[59px] h-[59px] mix-blend-screen"
                    ></img>
                    <p className="text-[32px] font-maiandra leading-[40px] tracking-[2%] drop-shadow-[0px_0px_10px_0px_#00000040] text-white/80">
                      AI Assisted
                    </p>
                  </div>
                  <p className="text-[48px] font-mauline leading-[64px] drop-shadow-[0px_0px_10px_0px_#00000040] text-white">
                    Your Personalized Love Story, Beautifully Told
                  </p>
                </div>

                <p className="text-[32px] font-maiandra leading-[40px] tracking-[2%] drop-shadow-[0px_0px_10px_0px_#00000040] mx-[56px] text-white/80">
                  A Journey Worth Sharing
                </p>
              </>
            )}
            {index === 4 && (
              <div className="overflow-hidden relative px-[88px] w-full h-full bg-[#FFD6E4]  font-maiandra text-[32px] leading-[40px] tracking-normal text-center flex flex-col justify-center items-center gap-5">
                <div className="flex flex-col gap-5">
                  <p>
                    Share your unique story with a personalized profile that
                    reflects your journey together, from your first date to the
                    big day
                  </p>
                  <p> Let your guests feel the magic that brought you here</p>
                </div>

                <div className="absolute top-[135px] left-[160px] w-[366.96px] h-[193.47px] ">
                  <img
                    src={e5}
                    className="w-full h-full mix-blend-hard-light"
                  ></img>
                </div>

                <div className="absolute bottom-[135px] left-[160px] w-[366.96px] h-[193.47px]">
                  <img
                    src={e5}
                    className="w-full h-full mix-blend-hard-light rotate-180"
                  ></img>
                </div>
              </div>
            )}
          </div>

          <div
            onMouseEnter={() => {
              setIndex(2);
            }}
            onMouseLeave={() => {
              setIndex(0);
            }}
            className="overflow-hidden w-[732px] h-[828px] rounded-[32px] bg-feature07 bg-cover bg-center bg-blend-multiply bg-[#00000033] shadow-[0px_0px_10px_0px_#00000040] flex flex-col gap-[588px]"
          >
            {index !== 2 && (
              <>
                <p className="mt-[56px] mx-[56px] font-mauline text-[48px] leading-[64px] drop-shadow-[0px_0px_10px_0px_#00000040] text-[white]">
                  Personalized Photo Album
                </p>
                <p className=" mx-[56px] font-maiandra text-[32px] leading-[40px] tracking-[2%] text-white/80 drop-shadow-[0px_0px_10px_0px_#00000040] text-[white]">
                  Where Your Wedding Moments Live On
                </p>
              </>
            )}
            {index === 2 && (
              <div className="relative px-[88px] w-full h-full bg-[#FFD6E4]  font-maiandra text-[32px] leading-[40px] tracking-tighter">
                {/* <img src={text02} className="w-[652px]"></img> */}

                <div className="w-full h-full flex justify-center items-center">
                  <p className="text-center z-10">
                    With facial recognition, guests effortlessly receive every
                    photo they’re part of—whether shared in the event feed or
                    captured by the photographer
                  </p>
                </div>
                <div className="absolute top-[240px] left-0 w-full ">
                  <img
                    src={e3}
                    className="w-full h-full mix-blend-hard-light"
                  ></img>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* icons */}
      <div className="absolute top-[450px] left-[3px] w-[174px] h-[174px] translate-y-52 translate-x-10">
        <img src={sketch01}></img>
      </div>

      <div className="absolute top-[933px] left-[1519px] w-[227px] h-[227px] translate-y-40">
        <img src={sketch02}></img>
      </div>

      <div className="absolute top-[1745px] w-[227px] h-[227px] translate-y-40">
        <img src={sketch03}></img>
      </div>

      <div className="absolute top-[2556px] -right-7 w-[251px] h-[251px] translate-y-80">
        <img src={sketch04}></img>
      </div>
    </div>
  );
}

export default Features;
