export default function Metadata() {
  return (
    <div>
      <h1>Generate Metadata for the website dynamically</h1>
    </div>
  );
}

// Metadata means info about the website like title , meta tags, etc.
// With this function we can change the title create next app but only this route will have the title as given below
// For eg. all the other routes will have the title
// We can also change the meta tags dynamically.
export function generateMetadata() {
  return {
    title: "Metadata Page",
    description: "Metadata Page description",
  };
}
