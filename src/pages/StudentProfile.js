import { useParams, Link } from 'react-router-dom';

export default function StudentProfile({ students }) {
  const { id } = useParams();

  const thisStudent = students.find((student) => student.id == id);

  console.log('thisStudent', thisStudent);

  return (
    <div>
      <h1>{thisStudent.name}</h1>
      <p>{thisStudent.age} years old</p>
      <p>{thisStudent.role}</p>
      <p>{thisStudent.hobbies}</p> <p>{thisStudent.beforeBootcamp}</p>
      <p>{thisStudent.finalWords}</p>
      <p>{thisStudent.github}</p>
      <Link to="/">
        <button>all students</button>
      </Link>
    </div>
  );
}
