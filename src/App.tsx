import "./App.css";
import Navbar from "./components/navbar";
import Landing from "./pages/landing";
import Investigators from "./pages/investigators";
import Partners from "./pages/partners";
import Funding from "./pages/funding";
import About from "./pages/about";

function App() {
  return (
    <div className=" ">
      <Navbar />
      <Landing />

      <div
        className="-my-[40vh] h-[450vh]    pt-[40vh]"
        style={{
          background:
            "linear-gradient(162deg, rgba(2,3,12,1) 5%, rgba(42,45,78,1) 28%, rgba(33,29,56,1) 76%, rgba(80,111,127,1) 100%)",
        }}
      >
        <Investigators />
        <About />
        <Partners />
        <Funding />
      </div>
    </div>
  );
}

export default App;

/*

JAZZDAP.
Our
Investigators
About the
Project
Our
Partners
A NEH-AHRC New
Directions for Digital
Scholarship in Cultural
Institutions project
New Directions in Digital Jazz Studies
uses state of the art music information
retrieval and artificial intelligence
algorithms for the analysis of jazz
recordings and linked data to enable
novel approaches to co-creative use of
materials in the archival collections of
the Institute of Jazz Studies and
Scottish Jazz Archive. This
New Directions in Digital Jazz Studies: Music
Information Retrieval and AI Support for Jazz
Scholarship in Digital Archives.
*/
