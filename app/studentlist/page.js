import Link from "next/link";

// const StudentList = () => {
//   return (
//     <div>
//       <h3>Dynamic Routing</h3>
//       <ul className="abt-nav">
//         <li>
//           <Link href="/studentlist/anil">Anil</Link>
//         </li>
//         <li>
//           <Link href="/studentlist/parag">Parag</Link>
//         </li>
//         <li>
//           <Link href="/studentlist/pramod">Pramod</Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// Now using dynamically using map and array
const StudentList = () => {
  const students = ["Anil", "Parag", "Pramod"]; // Dynamic Student List
  return (
    <div>
      {students.map((student) => (
        <li key={student}>
          <Link href={`/studentlist/${student}`}>{student}</Link>
        </li>
      ))}
    </div>
  );
};

export default StudentList;
