import Navbar from "./assets/components/Navbar";
import DragDrop from "./assets/components/DragDrop";
import FileDetails from "./assets/components/FileDetails";
import { useState } from "react";

function App() {
  const [file, setFile] = useState<File | null>(null);
  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-50 to-cyan-100">
      <Navbar />
      <DragDrop onFileSelect={setFile} />
      {file && <FileDetails file={file} />}
    </div>
  );
}

export default App;
