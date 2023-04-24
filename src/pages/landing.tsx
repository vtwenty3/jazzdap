import bg_land from "./../assets/bg-land.png";

export default function landing() {
  return (
    <div className="  ">
      <div className="relative">
        <img
          className="bot-0   h-[90dvh] w-screen object-cover object-bottom"
          src={bg_land}
        />
      </div>
      <div className="  absolute top-0  flex h-[100dvh]  flex-col justify-center  px-4 ">
        <h2 className=" font-Raleway text-4xl  font-medium text-accent md:text-6xl lg:text-7xl">
          Welcome to
        </h2>
        <h1 className="  -my-2 font-Raleway  text-8xl font-black  text-offWhite md:-my-4 md:text-[10.5rem] lg:-my-6 lg:text-[14rem]  ">
          JAZZDAP
        </h1>
        <p className=" max-w-xs font-Raleway  text-sm  font-light  text-offWhite md:max-w-sm md:text-lg   lg:max-w-md lg:text-xl">
          New Directions in Digital Jazz Studies: Music Information Retrieval
          and AI Support for Jazz Scholarship in Digital Archives.
        </p>
      </div>
    </div>
  );
}
