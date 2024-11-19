import Link from "next/link";
import "./about.css";

const Layout = ({ children }) => {
  return (
    <div>
      <h1>Common Layout for About Pages</h1>

      {/* Navbar for all the about pages */}
      <ul className="abt-nav">
        <li>
          <h4>About Navbar</h4>
        </li>
        <li>
          <Link href="/about">About Main</Link>
        </li>
        <li>
          <Link href="/about/abtstudent">About Student</Link>
        </li>
        <li>
          <Link href="/about/abtcollege">About College</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};
export default Layout;
