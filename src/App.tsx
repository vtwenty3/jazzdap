import "./App.css";
import Navbar from "./components/navbar";
import Person from "./components/person";

import bg_land from "./assets/bg-land.png";
import p1 from "./assets/1.png";
import p2 from "./assets/2.png";
import p3 from "./assets/3.png";
import p4 from "./assets/4.png";
import p5 from "./assets/5.png";
import p6 from "./assets/6.png";

function App() {
  return (
    <div className=" ">
      <Navbar />

      {/* Landing page */}
      <div>
        <div className="relative z-0 ">
          <img
            className="bot-0  h-[92dvh]  object-cover object-bottom"
            src={bg_land}
          />
        </div>
        <div className="  absolute top-0  flex h-[100dvh]  flex-col justify-center  px-4 ">
          <h2 className=" font-Raleway text-4xl font-medium text-accent ">
            Welcome to
          </h2>
          <h1 className=" font-Raleway text-8xl font-black text-offWhite ">
            JAZZDAP
          </h1>
          <p className=" max-w-xs font-Raleway text-xs  font-light  text-offWhite">
            New Directions in Digital Jazz Studies: Music Information Retrieval
            and AI Support for Jazz Scholarship in Digital Archives.
          </p>
        </div>
      </div>

      {/* Gradient Background */}
      <div
        className="-my-[40vh] h-[450vh]    pt-[40vh]"
        style={{
          background:
            "linear-gradient(162deg, rgba(2,3,12,1) 5%, rgba(42,45,78,1) 28%, rgba(33,29,56,1) 76%, rgba(80,111,127,1) 100%)",
        }}
      >
        {/* About Us Screen */}

        <div className="flex h-screen items-center  justify-center  text-offWhite">
          <div className="grid  gap-x-20 gap-y-4  sm:grid-cols-2 lg:grid-cols-3">
            <Person
              img_src={p1}
              name="Gabriel Solis "
              role="(PI US), University of Illinois Champaign Urbana USA"
            />
            <Person
              img_src={p2}
              name="Tillman Weyde "
              role="(PI UK), City University of London UK"
            />
            <Person
              img_src={p3}
              name="Simon Dixon"
              role="Queen Mary University of London UK"
            />
            <Person
              img_src={p4}
              name="Haftor Medboe "
              role="Edinburgh Napier University UK"
            />
            <Person
              img_src={p5}
              name="Adriana Cuervo "
              role="Rutgers University USA"
            />
            <Person
              img_src={p6}
              name="Pedro Cravinho "
              role="Birmingham City University UK"
            />
          </div>
        </div>

        <div className=" flex h-screen  flex-col gap-5 px-4">
          <div>
            <h3 className=" font-Raleway text-6xl font-bold text-offWhite">
              About the
            </h3>
            <h3 className=" font-Raleway text-6xl font-bold text-accent">
              Project
            </h3>
          </div>
          <div className="columns-3 text-offWhite   sm:columns-1">
            <p className=" font-regular font-Raleway text-2xl ">
              <p className=" font-Raleway text-3xl font-bold">
                A NEH-AHRC New Directions for Digital Scholarship in Cultural
                Institutions project
              </p>
              New Directions in Digital Jazz Studies uses state of the art music
              information retrieval and artificial intelligence algorithms for
              the analysis of jazz recordings and linked data to enable novel
              approaches to co-creative use of materials in the archival
              collections of the Institute of Jazz Studies and Scottish Jazz
              Archive.
            </p>
            <p className=" font-regular font-Raleway text-2xl ">
              This trans-Atlantic collaboration between jazz historians,
              technologists, and jazz archivists will expand access to unique
              materials held in archives and illuminate their musical
              relationships to more widely studied recordings. This project will
              create, analyse, and visualize relationships between audio and
              other materials and create rich research work knows to be shared
              within the scholarly community as a novel way to support
              co-creation with cultural institutions. We envision a disciplinary
              transformation through the discovery of new models for jazz
              historiography, and a broader, interdisciplinary transformation in
              methodology for digital humanities
            </p>
            <div></div>
          </div>
        </div>
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
