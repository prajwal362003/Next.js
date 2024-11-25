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

      {/* Using fonts directly from Google Fonts makes the app send extra requests 
          to Google's servers, which can slow it down. */}
      {/* 
      <h1 style={{ fontFamily: "Roboto", fontWeight: 100 }}>
        Fonts loaded directly from Google
      </h1> 
      */}

      {/* Next.js font optimization downloads the font and serves it locally:
          - No extra requests to Google, making the app faster.
          - The font is saved (cached) in the browser, so it doesn’t need to download again on the next visit. */}
      <h1 className={roboto.className}>Font with Next.js font feature</h1>
    </div>
  );
};

export default FontOpt;
