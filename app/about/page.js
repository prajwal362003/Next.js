"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  return (
    <div>
      <h1>About Us Page</h1>
      <Link href="/">Go to Home Page</Link>

      {/* Navigation through a button  */}
      <button className="navbtn" onClick={() => router.push("/")}>
        Go to the home page
      </button>
    </div>
  );
};

export default About;
