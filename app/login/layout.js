import Link from "next/link";
import "./login.css";

const Layout = ({ children }) => {
  return (
    <div>
      <h1>Common Layout for Login Page</h1>

      <ul className="login-menu">
        <li>
          <h4>Login Navbar</h4>
        </li>
        <li>
          <Link href="/login">Login Main</Link>
        </li>

        <li>
          <Link href="/login/loginstudent">Login Student</Link>
        </li>

        <li>
          <Link href="/login/loginteachers">Login Teachers</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default Layout;
