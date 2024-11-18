"use client";
import User from "@/components/User";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [cnt, setCnt] = useState(0);

  // Function for navigation
  const handleNav = (navLocation) => {
    router.push(navLocation);
  };

  const handleClick = () => {
    setCnt(cnt + 1);
    alert("Cnt Updated");
  };
  return (
    <>
      <div className="container">
        <button onClick={handleClick} className="btn">
          Click Me
        </button>

        <h1>{cnt}</h1>

        {/* Linking in Next.js */}
        <Link href="login">Go to Login Page</Link>
        <Link href="about">Go to about us Page</Link>

        {/* Navigation in Next.js */}
        <button className="navbtn" onClick={() => router.push("login")}>
          Click to go to login page
        </button>

        {/* Using function */}
        <button className="navbtn" onClick={() => handleNav("about")}>
          Click here to go the about page
        </button>
      </div>
    </>
  );
}
