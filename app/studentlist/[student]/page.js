// const Student = ({ params }) => {
//   return (
//     <div>
//       <h1>Student</h1>
//       <h3>Name : {params.student}</h3>
//     </div>
//   );
// };

const StudentDetails = ({ params }) => {
  const { student } = params;
  return (
    <div>
      <h1>Student Details</h1>
      <h3>Name : {student}</h3>
      <p>Additional Details about {student} can go here</p>
    </div>
  );
};

export default StudentDetails;
