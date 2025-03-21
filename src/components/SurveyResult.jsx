import Header from "./Header";

function SurveyResult({ formData, handleReset }) {
  return (
    <div className="w-lg mt-10 bg-white shadow-2xl ">
      <Header />
      <div className="p-6 py-6">
        <div class="rounded-lg bg-green-50 p-4 border border-green-200">
          <h2 className="text-xl font-bold text-green-700 mb-4 ">
            ส่งแบบสำรวจสำเร็จ!
          </h2>
          <p>
            <strong>ชื่อ:</strong> {formData.name}
          </p>
          <p>
            <strong>อีเมล:</strong> {formData.email}
          </p>
          <p>
            <strong>ภาพยนตร์ที่เลือก:</strong> {formData.movie}
          </p>
          {formData.comment && (
            <p>
              <strong>ความคิดเห็น:</strong> {formData.comment}
            </p>
          )}
        </div>

        <div className="flex justify-center w-full">
          <button
            className="flex justify-center mt-6 w-full bg-black text-white px-4 py-2 rounded-lg  hover:bg-purple-700 transition"
            onClick={handleReset}
          >
            ทำแบบสำรวจใหม่
          </button>
        </div>
      </div>
    </div>
  );
}

export default SurveyResult;
