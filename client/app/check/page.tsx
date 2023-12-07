"use client";
import React, { useState } from "react";
import "./check.css";
import Input from "@/components/Input/Input";
import Loader from "@/components/Loader/Loader";
import axios from "axios";
import { toast } from "react-toastify";
import Result from "@/components/Result/Result";
import { useStore } from "@/Context/Store";

const MainPage = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [year, setYear] = useState("");
  const [select, setSelect] = useState("poetry");
  const [data, setData] = useState({
    name: "default",
    image: "/default",
    yop: 0,
  });
  const { display, setDisplay } = useStore();
  const [loading, setLoading] = useState(false);

  async function submitResponse(e: any) {
    e.preventDefault();
    setLoading(true);
    try {
      const data = {
        name,
        age:
          +age > 100 || +age <= 0
            ? (function () {
                throw new Error("Age is not in range");
              })()
            : +age,
        yop:
          +year > 2099 || 1990 > +year
            ? (function () {
                throw new Error("Year is not in range");
              })()
            : +year,
        catagory: select,
      };

      const response = await axios.post(
        "https://matchbookbackend.onrender.com/api/check",
        data
      );

      if (response.status === 201) {
        let newData = {
          name: response.data.data.name,
          yop: response.data.data.yop,
          image: response.data.data.image,
        };
        setData(newData);
        setDisplay(-1);
      }
    } catch (error: any) {
      console.log(`error`, error.message);
      toast.error(error.message);
    } finally {
      //   setName("");
      //   setAge("");
      //   setYear("");
      //   setSelect("poetry");
      setLoading(false);
    }
  }

  return loading ? (
    <Loader />
  ) : (
    <>
      <div
        className="mainPage"
        style={display === 1 ? { display: "" } : { display: "none" }}
      >
        <h2>Provide Details</h2>
        <Input name={"Name"} type={"text"} value={name} setValue={setName} />
        <Input
          name={"Age(1-100)"}
          type={"number"}
          value={age}
          setValue={setAge}
        />
        <Input
          name={
            "Mention the year during which you experienced the highest level of productivity(1990-2099)"
          }
          type={"number"}
          value={year}
          setValue={setYear}
          min={"1900"}
          max={"2099"}
        />
        <div className="select">
          <label htmlFor="option">Select your genre</label>
          <select
            value={select}
            onChange={(e) => {
              setSelect(e.target.value);
            }}
          >
            <option value="poetry">Poetry</option>
            <option value="history">History</option>
            <option value="businessAndeconomics">Business and Economics</option>
            <option value="science">Science</option>
          </select>
        </div>

        <button
          className="mbutton"
          onClick={(e: any) => {
            submitResponse(e);
          }}
        >
          Submit Response
        </button>
      </div>
      <Result data={data} />
    </>
  );
};

export default MainPage;
