import { useRef, useState } from "react";
import { type ChangeEvent, type DragEvent } from "react";

interface DragSpaceProps {
  onFileSelect: (file: File) => void;
}

function DragSpace({ onFileSelect }: DragSpaceProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null); //accesat DOM input direct
  const [isDragging, setIsDragging] = useState(false);

  const handleClick = () => {
    console.log("Button clicked");
    fileInputRef.current?.click();
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);

    const files = event.dataTransfer.files;
    if (files && files.length > 0 && fileInputRef.current) {
      fileInputRef.current.value = "";

      fileInputRef.current.files = files;

      const changeEvent = new Event("change", { bubbles: true });
      fileInputRef.current.dispatchEvent(changeEvent);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const newFile = event.target.files[0];
      onFileSelect(newFile);
      console.log("File selected:", newFile);
    }
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`mt-8 w-full max-w-lg border-4 border-dashed rounded-xl
       p-10 flex flex-col justify-center items-center ${
         isDragging ? "border-cyan-800 bg-cyan-50" : "border-cyan-600  bg-white"
       }`}
    >
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
      <input
        type="file"
        accept=".pdf"
        className="hidden"
        onChange={handleChange}
        ref={fileInputRef}
      />
    </div>
  );
}
export default DragSpace;
