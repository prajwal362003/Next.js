"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const handleClick = (destination) => {
    router.push("login" + destination);
  };
  return (
    <>
      <div>
        <h1>Login Page</h1>
        <Link href="/">Go to home page</Link>
      </div>

      <div>
        <button onClick={() => handleClick("/loginstudent")}>
          Go to Login Student
        </button>

        <br />
        <button onClick={() => handleClick("/loginteachers")}>
          Go to Login Teacher
        </button>
      </div>
    </>
  );
};

export default page;
