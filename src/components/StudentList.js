import StudentPrev from './StudentPrev';

export default function StudentList({ students }) {
  return (
    <div>
      {students.length &&
        students.map((student) => <StudentPrev student={student} />)}
    </div>
  );
}
