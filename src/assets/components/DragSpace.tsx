function DragSpace() {
  const handleClick = () => {
    console.log("Button clicked");
  };
  return (
    <div className="mt-8 w-full max-w-lg border-4 border-dashed border-cyan-600 rounded-xl bg-white p-10 flex flex-col justify-center items-center">
      <p className="text-gray-500 mb-4">
        Trageți fișierul aici sau faceți click pe buton
      </p>
      <button
        className="m-4 px-6 py-3 bg-cyan-600
     text-white text-lg font-medium rounded-xl shadow-md hover:bg-cyan-700 transition"
        onClick={handleClick}
      >
        Încarcă PDF
      </button>
      <input type="file" accept=".pdf" />
    </div>
  );
}
export default DragSpace;
