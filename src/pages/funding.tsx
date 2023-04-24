import dots from ".././assets/dots.png";
export default function funding() {
  return (
    <div className=" relative flex h-screen   flex-1  flex-col  overflow-hidden      text-accent">
      <div className=" left-0 top-0	 flex basis-1/4   flex-col justify-center p-4 ">
        <h3 className=" font-Raleway text-6xl font-bold text-offWhite">
          Duration
        </h3>
        <h3 className=" font-Raleway text-6xl font-bold text-accent">
          & Funding
        </h3>
      </div>
      <p className=" font-regular  px-4 pr-[40%] font-Raleway text-xl text-offWhite lg:pr-[66%]">
        The project is an ongoing collaboration between six different
        universities across four countries, which started in Feb 2021 and is
        funded until July 2024 by the NEH/AHRC New Directions for Digital
        Scholarship in Cultural Institutions Call (see announcement here) via
        the support of the Arts and Humanities Research Council (UK) and the
        National Endowment for the Humanities (USA).
      </p>
      <img
        className="absolute right-0 top-0 hidden h-screen lg:block"
        src={dots}
        alt="dots"
      />
    </div>
  );
}
