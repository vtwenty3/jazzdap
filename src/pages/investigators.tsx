import Person from "./../components/person";
import p1 from ".././assets/1.png";
import p2 from ".././assets/2.png";
import p3 from ".././assets/3.png";
import p4 from ".././assets/4.png";
import p5 from ".././assets/5.png";
import p6 from ".././assets/6.png";

export default function investigators() {
  return (
    <div className=" relative flex h-screen   flex-1  flex-col  overflow-hidden      text-accent">
      <div className=" left-0 top-0	 flex basis-1/4   flex-col justify-center p-4 ">
        <h3 className=" font-Raleway text-6xl font-bold text-offWhite">Our</h3>
        <h3 className=" font-Raleway text-6xl font-bold text-accent">
          Partners
        </h3>
      </div>

      <div className=" grid  basis-3/4   grid-cols-2 place-items-center  align-middle   md:grid-cols-3 md:px-16 md:py-12 lg:px-[20%]  lg:py-10">
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
          name="Simon Dixon "
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
  );
}
