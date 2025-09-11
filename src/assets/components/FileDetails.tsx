import Fields from "./Fields";
import { useState } from "react";
interface FileDetailsProps {
  file: File;
}

interface Field {
  name: string;
  value: string;
}

function FileDetails({ file }: FileDetailsProps) {
  const [fieldList, setFields] = useState<Field[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const handleUpload = async () => {
    if (!file) return;
    try {
      const res = await fetch("api/upload", {
        method: "POST",
        headers: {
          "Content-Type": file.type,
          "X-Filename": file.name,
        },
        body: file,
      });
      const data = await res.json();
      setResult("Câmpuri extrase cu succes");
      setFields(
        data.message.map((field: Field) => ({
          name: field.name,
          value: field.value,
        }))
      );
    } catch (error) {
      console.error("Error uploading file:", error);
      setResult("Eroare la extragerea câmpurilor");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-10 p-6 bg-white rounded-lg shadow-md m-2 w-full md:w-3/4 mx-auto">
      <h2 className="text-2xl font-extrabold mb-4 text-center text-gray-800">
        {file.name}
      </h2>
      <p className="text-gray-600">
        Dimensiune: {(file.size / 1024).toFixed(2)} KB
      </p>
      <p className="text-gray-600">Tip: {file.type || "Necunoscut"}</p>
      <p className="text-gray-600">
        Ultima modificare:{" "}
        {file.lastModified
          ? new Date(file.lastModified).toLocaleString()
          : "Necunoscut"}
      </p>
      <button
        className="mt-3 px-3 py-1 bg-cyan-600
     text-white text-md font-medium rounded-xl shadow-md hover:bg-cyan-700 transition"
        onClick={handleUpload}
      >
        Extrage câmpuri
      </button>
      {result && <p className="text-gray-600">{result}</p>}
      <Fields fieldList={fieldList} />
    </div>
  );
}
export type FieldList = Field[];
export default FileDetails;
