import { useState } from "react";
import Header from "./Header";
import InputField from "./InputField";
import TextareaField from "./TextareaField";
import MovieList from "./MovieList";
import SurveyResult from "./SurveyResult";

function MovieSurveyForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    movie: "",
    comment: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "โปรดใส่ชื่อของคุณ";
    if (!formData.email.trim()) newErrors.email = "โปรดใส่อีเมลของคุณ";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "รูปแบบอีเมลไม่ถูกต้อง";
    if (!formData.movie) newErrors.movie = "กรุณาเลือกหนังที่คุณชอบ";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", movie: "", comment: "" });
    setErrors({});
    setSubmitted(false);
  };

  if (submitted) {
    return <SurveyResult formData={formData} handleReset={handleReset} />;
  }

  return (
    <div className="w-lg mt-10 bg-white shadow-2xl">
      <Header />
      
      <form onSubmit={handleSubmit} className="p-8">
        <InputField
          label="ชื่อ *"
          value={formData.name}
          onChange={(val) => setFormData({ ...formData, name: val })}
          error={errors.name}
          placeholder="กรุณากรอกชื่อของคุณ" 
        />
        <InputField
          label="อีเมล *"
          type="email"
          value={formData.email}
          onChange={(val) => setFormData({ ...formData, email: val })}
          error={errors.email}
          placeholder="example@email.com"
        />
        <MovieList
          selectedMovie={formData.movie}
          onSelectMovie={(movie) => setFormData({ ...formData, movie })}
          error={errors.movie}
        />
        <TextareaField
          label="ความคิดเห็นเกี่ยวกับภาพยนตร์"
          value={formData.comment}
          onChange={(val) => setFormData({ ...formData, comment: val })}
        />
        <div className="flex justify-between">
          <button
            type="button"
            className="bg-gray-500 text-white px-4 py-2 rounded-lg"
            onClick={handleReset}
          >
            รีเซ็ต
          </button>
          <button
            type="submit"
            className="bg-purple-600 text-white px-4 py-2 rounded-lg"
          >
            ส่งแบบสำรวจ
          </button>
        </div>
      </form>
    </div>
  );
}

export default MovieSurveyForm;
