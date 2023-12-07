import React from "react";
import "./Result.css";
import Image from "next/image";
import { useStore } from "@/Context/Store";

interface PROPS {
  data: { name: string; image: string; yop: number };
}
const Result = ({ data }: PROPS) => {
  const { display, setDisplay } = useStore();
  return (
    <div
      className="result"
      style={display === -1 ? { display: "" } : { display: "none" }}
    >
      <div className="showBox">
        <h1>Book Aligns with Personality</h1>
        <Image src={data.image} alt={data.name} height={150} width={150} />
        <h2>{data.name}</h2>
        <p>{`Year Of Publication ${data.yop} `}</p>
        <button
          className="mbutton"
          onClick={() => {
            setDisplay(1);
          }}
        >
          GO BACK
        </button>
      </div>
    </div>
  );
};

export default Result;
