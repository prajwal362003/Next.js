// Catch all the segments of the route

"use client";
import { use } from "react";
// const Lectures = ({ params }) => {
//   const resolvedParams = use(params);
//   console.log(resolvedParams);

//   return (
//     <div>
//       <h1>Day no: {resolvedParams.lectures[0]}</h1>
//       <h1>Day no: {resolvedParams.lectures[1]}</h1>
//     </div>
//   );
// };

// If there are multiple paths like (/day67/lecture9/sir4), in a single route then mapping it over an array proves useful
const Lectures = ({ params }) => {
  const resolvedParams = use(params);
  const { lectures } = resolvedParams; // Destructure lectures from params

  console.log("Params:", params);
  console.log("Lectures:", lectures);

  return (
    <div>
      <h1>Dynamic Routes</h1>
      {lectures.length > 0 ? (
        <ul>
          {lectures.map((lecture, index) => (
            <li key={index}>
              Segment {index + 1}: {lecture}
            </li>
          ))}
        </ul>
      ) : (
        <p>No route parameters found</p>
      )}
    </div>
  );
};

export default Lectures;
