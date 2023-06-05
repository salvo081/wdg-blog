import Home from './pages/Home';
import StudentProfile from './pages/StudentProfile';
import './styles.css';
import { Route, Routes } from 'react-router';

export default function App() {
  const students = [
    {
      id: 1,
      name: 'John Doe',
      age: 35,
      role: 'the one whos name was mentioned most',
      hobbies: 'be absent',
      beforeBootcamp: 'secret agent',
      finalWords: 'I will be back!',
      github: 'xyz',
    },
    {
      id: 2,
      name: 'Betty Doe',
      age: 25,
      role: 'another fake student',
      hobbies: 'implement authentication',
      beforeBootcamp: 'another secret agent',
      finalWords: 'I will also be back!',
      github: 'xyz',
    },
    {
      id: 3,
      name: 'Tom Doe',
      age: 25,
      role: 'another fake student',
      hobbies: 'implement authentication',
      beforeBootcamp: 'another secret agent',
      finalWords: 'I will also be back!',
      github: 'xyz',
    },
  ];
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home students={students} />} />
        <Route
          path="/students/:id"
          element={<StudentProfile students={students} />}
        />
      </Routes>
    </div>
  );
}
