import './App.css'
import "tailwindcss";
import MovieSurveyForm from './components/MovieSurveyForm';

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <MovieSurveyForm />
    </div>
  );
}