import { useEffect, useState, lazy, Suspense } from "react";
import { MyDataContext } from "../../context/DataContext";
import { SiNasa } from "react-icons/si";
import satelite from "../../../public/muhold_compress.mp4";
import SubscribeConsole from "../../components/consoles/Subscribeconsole/SubscribeConsole";
import { AnimatePresence } from "framer-motion";

// Fluorescent Shield lazy loading
const StatusIndicator = lazy(() => import("./components/StatusIndicator"));
const NotificationButton = lazy(() =>
  import("./components/NotificationButton")
);
const BrowserObjectButton = lazy(() =>
  import("./components/BrowserObjectButton")
);
const Home = () => {
  const { setSettings, settingsOpen, subscribeToggle, setSubscribeToggle } =
    MyDataContext();
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    setSettings("Navigation");
    const timeoutId = setTimeout(() => {
      setVideoLoaded(true);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [setSettings]);

  const handleSubscribe = () => {
    setSubscribeToggle((prevState) => !prevState);
    console.log("hozéééééééééééééééééééééééééééééééééééé");
  };

  return (
    <div
      className={`border-0  border-red-500 w-full z-40    ${
        settingsOpen ? "opacity-20 " : ""
      } `}
    >
      <div
        className={` flex flex-col md:flex-row border-0 border-red-400 w-full   
          z-50  relative   ${settingsOpen ? "opacity-20 " : ""} `}
      >
        <div
          className="flex flex-col lg:flex h-screen  w-full md:w-1/2
              justify-center items-center  
             z-50 border-0
             border-orange-500  lg:bg-gradien opacity-70 "
        >
          <header className="lg:flex items-center justify-center px-6 relative  border-0 border-pink-400">
            <div className="flex flex-col justify-start items-center  relative px-2 ">
              <div className="border-0  m-0 p-0 ">
                <SiNasa className="text-9xl lg:text-9xl px-0 text-red-500" />
              </div>
              {/*English name in future: Earth Impact Monitoring */}
              <p className="-mt-[20px] text-xl text-center text-primary font-bold">
                Aszteroida-vészjelző rendszer
              </p>
            </div>
          </header>
          <Suspense fallback={<div>Töltés...</div>}>
            <StatusIndicator color="#27ae60" />
          </Suspense>
          <Suspense fallback={<div>Töltés...</div>}>
            <NotificationButton handleSubscribe={handleSubscribe} />
          </Suspense>
          <Suspense fallback={<div>Töltés...</div>}>
            <BrowserObjectButton />
          </Suspense>
        </div>
        <div className="border-0 border-sky-400  w-full md:w-1/2 ">
          <AnimatePresence>
            <SubscribeConsole
              subscribeToggle={subscribeToggle}
            ></SubscribeConsole>
          </AnimatePresence>
        </div>
      </div>
      {/*Delay video loading for improved initial paint performance */}
      {videoLoaded && (
        <video
          src={satelite}
          className="background-video border-0 border-red-400  opacity-100"
          autoPlay
          loop
          muted
        />
      )}
    </div>
  );
};

export default Home;
