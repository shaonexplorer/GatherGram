import { useRef, useState } from "react";
import Header from "../components/Header";
import Banner from "./Banner";
import Banner01 from "./Banner01";
import Faq from "./Faq";
import Features from "./Features";
import Footer from "./Footer";
import How from "./How";
import Contact from "../components/ContactForm/Contact";
import Message from "../components/ContactForm/Message";
import HamMenu from "../components/HamMenu";
import ContactFormMob from "../components/ContactFormMob/ContactFormMob";
import MessageMob from "../components/ContactFormMob/MessageMob";
import Swipe from "../components/ContactForm/Swiper/Swipe";

function Home() {
  const [show, setShow] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showMessageMob, setShowMessageMob] = useState(false);

  const [showMenu, setShowMenu] = useState(false);
  const [showContactMob, setShowContactMob] = useState(false);

  const banner = useRef();
  const feature = useRef();

  return (
    <>
      <Header
        setShow={setShow}
        setShowMenu={setShowMenu}
        setShowContactMob={setShowContactMob}
        banner={banner}
        feature={feature}
      />
      <div ref={banner}>
        <Banner setShow={setShow} setShowContactMob={setShowContactMob} />
      </div>

      <div className="sm:hidden">
        <Swipe />
      </div>
      <div ref={feature}>
        <Features />
      </div>

      <How />
      <Faq />
      <Banner01 setShow={setShow} setShowContactMob={setShowContactMob} />
      <Footer />
      <Contact setShow={setShow} show={show} setShowMessage={setShowMessage} />
      <Message showMessage={showMessage} setShowMessage={setShowMessage} />

      <HamMenu
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        setShowContactMob={setShowContactMob}
      />
      <ContactFormMob
        showContactMob={showContactMob}
        setShowContactMob={setShowContactMob}
        setShowMenu={setShowMenu}
        setShowMessageMob={setShowMessageMob}
      />

      <MessageMob
        showMessageMob={showMessageMob}
        setShowMessageMob={setShowMessageMob}
      />
    </>
  );
}

export default Home;
