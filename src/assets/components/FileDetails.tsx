import Fields from "./Fields";

interface FileDetailsProps {
  file: File;
}
function FileDetails({ file }: FileDetailsProps) {
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
      >
        Extrage câmpuri
      </button>
      <Fields file={file} />
    </div>
  );
}

export default FileDetails;
