"use client";

import Script from "next/script";

const Location = () => {
  return (
    <div>
      <h1>Next.js Script tag</h1>

      {/*The script of html loads for entire project making the app slow*/}
      {/* So this Script tag in next.js ensures that location.js should be loaded
      only for the scriptinnext route and not for the other routes */}
      <Script
        src="/location.js"
        onLoad={() => console.log("Location got from location.js")}
      />
    </div>
  );
};

export default Location;
