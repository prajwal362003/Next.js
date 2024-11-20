import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h2>This Page is not available for this about route</h2>
      <h3>Click here to go to the home page</h3>
      <Link href="/">Click here</Link>
    </div>
  );
};

export default NotFound;
