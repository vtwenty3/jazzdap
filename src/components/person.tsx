type Props = {
  img_src: string;
  name: string;
  role: string;
};

export default function Person(props: Props) {
  return (
    <div className="  flex   max-w-[150px] flex-col items-center justify-center text-center text-sm  md:text-base">
      <img
        className=" w-24 drop-shadow-md  md:w-28 "
        src={props.img_src}
        alt="person"
      />
      <span className="font-regular font-bold text-offWhite ">
        {props.name}
      </span>
      <span className="font-Raleway font-thin text-offWhite ">
        {props.role}
      </span>
    </div>
  );
}
