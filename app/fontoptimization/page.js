import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const FontOpt = () => {
  return (
    <div>
      <h1>Font Optimization in Next.js</h1>

      {/* Using fonts directly from Google Fonts sends additional network requests, 
          which can slow down the app. */}
      {/* 
      <h1 style={{ fontFamily: "Roboto", fontWeight: 100 }}>
        Sentence with fonts fetched directly from Google Fonts API
      </h1> 
      */}

      {/* Using the Next.js font optimization feature, fonts are preloaded and served 
          efficiently without additional network requests, improving performance. */}
      <h1 className={roboto.className}>Font with Next.js font feature</h1>
    </div>
  );
};

export default FontOpt;
