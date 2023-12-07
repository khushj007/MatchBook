"use client";
import React from "react";
import "./Navbar.css";
import Link from "next/link";
import { useStore } from "@/Context/Store";
const Navbar = () => {
  const { display, setDisplay } = useStore();
  return (
    <div className="navbar">
      <h2>BookApp</h2>
      <div className="sides">
        <Link href={"/"}>MainPage</Link>
        <Link
          href={"/check"}
          onClick={() => {
            setDisplay(1);
          }}
        >
          Form
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
