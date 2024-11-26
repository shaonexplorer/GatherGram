import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import image01 from "./../../../assets/swiper/01.jpeg";
import image02 from "./../../../assets/swiper/02.jpeg";
import image03 from "./../../../assets/swiper/03.jpeg";
import image04 from "./../../../assets/swiper/04.jpeg";
import image05 from "./../../../assets/swiper/05.jpeg";
import image06 from "./../../../assets/swiper/06.jpeg";
import image07 from "./../../../assets/swiper/07.jpeg";

function Swipe() {
  return (
    <>
      <div className="bg-[#EB87AB] sm:hidden w-[390px] mx-auto">
        <div className="flex flex-col bg-[#EB87AB] pt-[160px] pb-[10px]  gap-[40px] px-[16px] mx-auto w-[358px]">
          <p className="text-[40px] leading-[40px] text-white font-mauline text-center">
            Designed with You and Your Guests
            <span className="text-[#D81159]"> in Mind</span>
          </p>
          <p className="text-[16px] leading-[24px] text-white font-maiandra text-center">
            Explore the features that will bring your big day to life, making
            your wedding celebration unforgettable
          </p>
        </div>

        <Swiper
          spaceBetween={8}
          slidesPerView={1.2}
          navigation={false}
          modules={[Navigation]}
          centeredSlides={true}
          loop={true}
          className="transition-all duration-700  h-[850px] bg-[#EB87AB] w-[390px]"
        >
          <SwiperSlide>
            {({ isActive }) => (
              <div>
                <div
                  className={`overflow-hidden z-20 rounded-[32px] relative transition-all duration-500 bg-[#0000001A] bg-blend-multiply bg-gradient-to-b from-[#00000000] to-[#000000] ${
                    isActive
                      ? "h-[538px] my-[130px] shadow-[0px_0px_10px_0px_#0000004D]"
                      : "h-[424px] my-[200px]"
                  }`}
                >
                  <img
                    src={image01}
                    className="w-full h-full mix-blend-multiply"
                  ></img>
                  <div className=" absolute top-[418px] left-[16px] w-[292px] flex flex-col gap-[12px]">
                    <p className="font-mauline text-[24px] leading-[32px] text-white">
                      Capture Every Precious Moment
                    </p>
                    <p className="font-maiandra text-[14px] leading-[20px] text-[#FFFFFFB2]">
                      Your Guests, Your Memories
                    </p>
                  </div>
                </div>

                <div
                  className={`z-0 absolute rounded-br-[32px] rounded-bl-[32px] bottom-[5px] px-[16px] pt-20 h-[240px] w-fit bg-[#FFD6E4] transition duration-1000 ${
                    isActive
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-[200%] opacity-0"
                  }`}
                >
                  <p className="text-[16px] leading-[24px] font-maiandra text-black">
                    Invite guests to share their favorite snapshots and videos
                    of your big day<br></br>
                    <p className="mt-[10px]">
                      Relive every heartfelt moment with high-quality downloads,
                      preserving memories that last a lifetime
                    </p>
                  </p>
                </div>
              </div>
            )}
          </SwiperSlide>
          {/* slide 02 */}
          <SwiperSlide>
            {({ isActive }) => (
              <div>
                <div
                  className={`overflow-hidden z-20 rounded-[32px] relative transition-all duration-500 bg-[#0000001A] bg-blend-multiply bg-gradient-to-b from-[#00000000] to-[#000000] ${
                    isActive
                      ? "h-[538px] my-[130px] shadow-[0px_0px_10px_0px_#0000004D]"
                      : "h-[424px] my-[200px]"
                  }`}
                >
                  <img
                    src={image02}
                    className="w-full h-full object-cover mix-blend-multiply"
                  ></img>
                  <div className=" absolute top-[418px] left-[16px] w-[292px] flex flex-col gap-[12px]">
                    <p className="font-mauline text-[24px] leading-[32px] text-white">
                      Virtual Guestbook
                    </p>
                    <p className="font-maiandra text-[14px] leading-[20px] text-[#FFFFFFB2]">
                      A Digital Keepsake of Love & Laughter
                    </p>
                  </div>
                </div>

                <div
                  className={`z-0 absolute rounded-br-[32px] rounded-bl-[32px] bottom-[5px] px-[16px] pt-20 h-[240px] w-fit bg-[#FFD6E4] transition duration-1000 ${
                    isActive
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-[200%] opacity-0"
                  }`}
                >
                  <p className="text-[16px] leading-[24px] font-maiandra text-black">
                    With our easy-to-use digital guestbook, guests can leave
                    heartfelt notes with the help of AI to craft the perfect
                    words, making each message unique and memorable
                  </p>
                </div>
              </div>
            )}
          </SwiperSlide>
          {/* slide 03 */}
          <SwiperSlide>
            {({ isActive }) => (
              <div>
                <div
                  className={`overflow-hidden z-20 rounded-[32px] relative transition-all duration-500 bg-[#0000001A] bg-blend-multiply bg-gradient-to-b from-[#00000000] to-[#000000] ${
                    isActive
                      ? "h-[538px] my-[130px] shadow-[0px_0px_10px_0px_#0000004D]"
                      : "h-[424px] my-[200px]"
                  }`}
                >
                  <img
                    src={image03}
                    className="w-full h-full object-cover mix-blend-multiply"
                  ></img>
                  <div className=" absolute top-[418px] left-[16px] w-[292px] flex flex-col gap-[12px]">
                    <p className="font-mauline text-[24px] leading-[32px] text-white">
                      Your Personalized Love Story, Beautifully Told
                    </p>
                    <p className="font-maiandra text-[14px] leading-[20px] text-[#FFFFFFB2]">
                      A Journey Worth Sharing
                    </p>
                  </div>
                </div>

                <div
                  className={`z-0 absolute rounded-br-[32px] rounded-bl-[32px] bottom-[5px] px-[16px] pt-20 h-[240px] w-fit bg-[#FFD6E4] transition duration-1000 ${
                    isActive
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-[200%] opacity-0"
                  }`}
                >
                  <p className="text-[16px] leading-[24px] font-maiandra text-black">
                    Share your unique story with a personalized profile that
                    reflects your journey together, from your first date to the
                    big day Let your guests feel the magic that brought you here
                  </p>
                </div>
              </div>
            )}
          </SwiperSlide>
          {/* slide 04 */}
          <SwiperSlide>
            {({ isActive }) => (
              <div>
                <div
                  className={`overflow-hidden z-20 rounded-[32px] relative transition-all duration-500 bg-[#0000001A] bg-blend-multiply bg-gradient-to-b from-[#00000000] to-[#000000] ${
                    isActive
                      ? "h-[538px] my-[130px] shadow-[0px_0px_10px_0px_#0000004D]"
                      : "h-[424px] my-[200px]"
                  }`}
                >
                  <img
                    src={image04}
                    className="w-full h-full object-cover mix-blend-multiply"
                  ></img>
                  <div className=" absolute top-[418px] left-[16px] w-[292px] flex flex-col gap-[12px]">
                    <p className="font-mauline text-[24px] leading-[32px] text-white">
                      Event Details & Itinerary
                    </p>
                    <p className="font-maiandra text-[14px] leading-[20px] text-[#FFFFFFB2]">
                      Every Detail in One Place
                    </p>
                  </div>
                </div>

                <div
                  className={`z-0 absolute rounded-br-[32px] rounded-bl-[32px] bottom-[5px] px-[16px] pt-20 h-[240px] w-fit bg-[#FFD6E4] transition duration-1000 ${
                    isActive
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-[200%] opacity-0"
                  }`}
                >
                  <p className="text-[16px] leading-[24px] font-maiandra text-black">
                    Guests can access a beautifully organized event schedule and
                    venue information, from ceremony timings to reception
                    details, ensuring they’re informed and on time throughout
                    the day
                  </p>
                </div>
              </div>
            )}
          </SwiperSlide>
          {/* slide 05 */}
          <SwiperSlide>
            {({ isActive }) => (
              <div>
                <div
                  className={`overflow-hidden z-20 rounded-[32px] relative transition-all duration-500 bg-[#0000001A] bg-blend-multiply bg-gradient-to-b from-[#00000000] to-[#000000] ${
                    isActive
                      ? "h-[538px] my-[130px] shadow-[0px_0px_10px_0px_#0000004D]"
                      : "h-[424px] my-[200px]"
                  }`}
                >
                  <img
                    src={image05}
                    className="w-full h-full object-cover mix-blend-multiply"
                  ></img>
                  <div className=" absolute top-[418px] left-[16px] w-[292px] flex flex-col gap-[12px]">
                    <p className="font-mauline text-[24px] leading-[32px] text-white">
                      Fun & Laughter with Couple Trivia
                    </p>
                    <p className="font-maiandra text-[14px] leading-[20px] text-[#FFFFFFB2]">
                      Engage Your Guests Like Never Before
                    </p>
                  </div>
                </div>

                <div
                  className={`z-0 absolute rounded-br-[32px] rounded-bl-[32px] bottom-[5px] px-[16px] pt-20 h-[240px] w-fit bg-[#FFD6E4] transition duration-1000 ${
                    isActive
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-[200%] opacity-0"
                  }`}
                >
                  <p className="text-[16px] leading-[24px] font-maiandra text-black">
                    Our interactive trivia invites friends and family to test
                    their knowledge about the couple and engage in a
                    lighthearted way
                  </p>
                </div>
              </div>
            )}
          </SwiperSlide>
          {/* slide 06 */}
          <SwiperSlide>
            {({ isActive }) => (
              <div>
                <div
                  className={`overflow-hidden z-20 rounded-[32px] relative transition-all duration-500 bg-[#0000001A] bg-blend-multiply bg-gradient-to-b from-[#00000000] to-[#000000] ${
                    isActive
                      ? "h-[538px] my-[130px] shadow-[0px_0px_10px_0px_#0000004D]"
                      : "h-[424px] my-[200px]"
                  }`}
                >
                  <img
                    src={image06}
                    className="w-full h-full object-cover mix-blend-multiply"
                  ></img>
                  <div className=" absolute top-[418px] left-[16px] w-[292px] flex flex-col gap-[12px]">
                    <p className="font-mauline text-[24px] leading-[32px] text-white">
                      Personalized Photo Album
                    </p>
                    <p className="font-maiandra text-[14px] leading-[20px] text-[#FFFFFFB2]">
                      Where Your Wedding Moments Live On
                    </p>
                  </div>
                </div>

                <div
                  className={`z-0 absolute rounded-br-[32px] rounded-bl-[32px] bottom-[5px] px-[16px] pt-20 h-[240px] w-fit bg-[#FFD6E4] transition duration-1000 ${
                    isActive
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-[200%] opacity-0"
                  }`}
                >
                  <p className="text-[16px] leading-[24px] font-maiandra text-black">
                    With facial recognition, guests effortlessly receive every
                    photo they’re part of—whether shared in the event feed or
                    captured by the photographer
                  </p>
                </div>
              </div>
            )}
          </SwiperSlide>
          {/* slide 07 */}
          <SwiperSlide>
            {({ isActive }) => (
              <div>
                <div
                  className={`overflow-hidden z-20 rounded-[32px] relative transition-all duration-500 bg-[#0000001A] bg-blend-multiply bg-gradient-to-b from-[#00000000] to-[#000000] ${
                    isActive
                      ? "h-[538px] my-[130px] shadow-[0px_0px_10px_0px_#0000004D]"
                      : "h-[424px] my-[200px]"
                  }`}
                >
                  <img
                    src={image07}
                    className="w-full h-full object-cover mix-blend-multiply"
                  ></img>
                  <div className=" absolute top-[418px] left-[16px] w-[292px] flex flex-col gap-[12px]">
                    <p className="font-mauline text-[24px] leading-[32px] text-white">
                      Gifts from the Heart, Sent Securely
                    </p>
                    <p className="font-maiandra text-[14px] leading-[20px] text-[#FFFFFFB2]">
                      Easy Contributions, Lasting Gratitude
                    </p>
                  </div>
                </div>

                <div
                  className={`z-0 absolute rounded-br-[32px] rounded-bl-[32px] bottom-[5px] px-[16px] pt-20 h-[240px] w-fit bg-[#FFD6E4] transition duration-1000 ${
                    isActive
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-[200%] opacity-0"
                  }`}
                >
                  <p className="text-[16px] leading-[24px] font-maiandra text-black">
                    From secure financial contributions to curated gift lists,
                    we offer thoughtful ways for guests to give, no awkward
                    hand-offs or gift tables required
                  </p>
                </div>
              </div>
            )}
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
export default Swipe;
