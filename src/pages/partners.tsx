import sja from ".././assets/sja.png";

export default function partners() {
  return (
    <div className=" relative flex h-screen   flex-1  flex-col  overflow-hidden      text-accent">
      <div className=" left-0 top-0	 flex basis-1/4   flex-col justify-center p-4 ">
        <h3 className=" font-Raleway text-6xl font-bold text-offWhite">Our</h3>
        <h3 className=" font-Raleway text-6xl font-bold text-accent">
          Partners
        </h3>
      </div>
      <div className="flex basis-3/4 items-center justify-center self-center">
        <img
          className=" w-64 drop-shadow-md    md:w-96"
          src={sja}
          alt="person"
        />
      </div>
    </div>
  );
}
