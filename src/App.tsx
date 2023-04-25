import "./App.css";
import Navbar from "./components/navbar";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import Landing from "./pages/landing";
import Investigators from "./pages/investigators";
import Partners from "./pages/partners";
import Funding from "./pages/funding";
import About from "./pages/about";
import Search from "./pages/search";

import Login from "./components/login";
import { useRef, useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  const invest = useRef<null | HTMLDivElement>(null);
  const about = useRef<null | HTMLDivElement>(null);
  const partners = useRef<null | HTMLDivElement>(null);
  const funding = useRef<null | HTMLDivElement>(null);
  const landing = useRef<null | HTMLDivElement>(null);
  const search = useRef<null | HTMLDivElement>(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  function scrollTo(ref: React.RefObject<HTMLDivElement>) {
    ref.current!.scrollIntoView({
      behavior: "smooth",
    });
  }
  return (
    <div className=" overflow-hidden">
      <ModalUnstyled open={open} onClose={handleClose}>
        <Login onClose={handleClose}></Login>
      </ModalUnstyled>
      <Navbar
        onLanding={() => scrollTo(landing)}
        onInvest={() => scrollTo(invest)}
        onAbout={() => scrollTo(about)}
        onPartner={() => scrollTo(partners)}
        onFunding={() => scrollTo(funding)}
        onLogin={handleOpen}
      />
      <div className="scroll-mt-20 " ref={landing}>
        <Landing onClick={() => scrollTo(search)} />
      </div>
      <div
        className=" -my-[40vh]  h-[550vh]  pt-[40vh] "
        style={{
          background:
            "linear-gradient(122deg, rgba(2,3,12,1) 5%, rgba(42,45,78,1) 28%, rgba(33,29,56,1) 76%, rgba(80,111,127,1) 100%)",
        }}
      >
        <div className="scroll-mt-10" ref={search}>
          <Search />
        </div>
        <div className="scroll-mt-10" ref={invest}>
          <Investigators />
        </div>
        <div className="scroll-mt-10" ref={about}>
          <About />
        </div>
        <div className="scroll-mt-10" ref={partners}>
          <Partners />
        </div>
        <div className="scroll-mt-10" ref={funding}>
          <Funding />
        </div>
      </div>
    </div>
  );
}

export default App;
