import Image from "next/image";
import DemoImg from "../../public/vercel.svg";
const Images = () => {
  return (
    <div>
      <h1>Image Optimization in Next.js</h1>
      {/* Using <Image/> in next.js instead of img like html optimizes the image*/}
      <Image src={DemoImg} alt="Vercel Image" width={500} height={500} />

      {/* If we want to use the image whose link is taken from any site , then add
      that link to next.config.js file */}
      <Image
        src="https://images.assettype.com/thequint/2017-10/29e9cb67-4483-4a74-8e18-c8e92b654941/Virat-century.jpg"
        alt="Virat Kohli Image"
        width={500}
        height={500}
      />
    </div>
  );
};

export default Images;
