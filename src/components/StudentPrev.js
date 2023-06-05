import { Link } from 'react-router-dom';

export default function StudentPrev({ student }) {
  console.log('student', student);
  return (
    <div className="student-prev-container">
      <h2>{student.name}</h2>
      <p>{student.age} years old</p>
      <Link to={`/students/${student.id}`}>
        <button>show student profile</button>
      </Link>
    </div>
  );
}
