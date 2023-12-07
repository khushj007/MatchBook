import React from "react";
import "./Result.css";
import Image from "next/image";

interface PROPS {
  disp: number;
  setValue: any;
  data: { name: string; image: string; yop: number };
}
const Result = ({ disp, setValue, data }: PROPS) => {
  console.log(`child`, data);
  return (
    <div
      className="result"
      style={disp === -1 ? { display: "" } : { display: "none" }}
    >
      <div className="showBox">
        <h1>Book Aligns with Personality</h1>
        <Image src={data.image} alt={data.name} height={150} width={150} />
        <h2>{data.name}</h2>
        <p>{`Year Of Publication ${data.yop} `}</p>
        <button
          className="mbutton"
          onClick={() => {
            setValue(1);
          }}
        >
          GO BACK
        </button>
      </div>
    </div>
  );
};

export default Result;
