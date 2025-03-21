function InputField({ label, type = "text", value, onChange, error, placeholder }) {
  return (
    <div className="mb-4 ">
      <label className="block font-bold mb-4">{label}</label>
      <input 
        type={type}  
        value={value} 
        onChange={(e) => onChange(e.target.value)} 
        placeholder={placeholder}
        className={`w-full p-2 border rounded-lg focus:outline-none
          ${error ? "border-red-500" : "border-gray-300"}`} 
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}

export default InputField;
