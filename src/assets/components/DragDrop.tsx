import DragSpace from "./DragSpace";
function DragDrop() {
  return (
    <div className="flex flex-col justify-center items-center text-center mt-20">
      <h1 className="text-4xl font-extrabold text-gray-800">
        Extrage câmpurile completate din PDF
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Încărcați fișierul și primiți instant datele.
      </p>
      <DragSpace></DragSpace>
    </div>
  );
}
export default DragDrop;
