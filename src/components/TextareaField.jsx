function TextareaField({ label, value, onChange }) {
  return (
    <div className="mb-4">
      <label className="block font-bold mb-4">{label}</label>
      <textarea
        className="w-full border p-2 rounded"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="พิมพ์ความคิดเห็นของคุณที่นี่..."
      ></textarea>
    </div>
  );
}

export default TextareaField;
