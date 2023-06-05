import Hero from '../components/Hero';
import StudentList from '../components/StudentList';

export default function Home({ students }) {
  return (
    <div>
      <h1>WDG#010 Blog</h1>
      <Hero />
      <StudentList students={students} />
    </div>
  );
}
