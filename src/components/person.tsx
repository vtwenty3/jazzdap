import React from "react";

type Props = {
  img_src: string;
  name: string;
  role: string;
};

export default function Person(props: Props) {
  return (
    <div className=" max-w-[150px]  flex-col items-center justify-center text-center">
      <img className="w-40 drop-shadow-md" src={props.img_src} alt="person" />
      <span className="font-regular font-bold text-offWhite">{props.name}</span>
      <span className="font-Raleway font-thin text-offWhite">{props.role}</span>
    </div>
  );
}
