interface FieldsProps {
  file: File;
}

function Fields({ file }: FieldsProps) {
  return (
    <div>
      <h2>PDF fields</h2>
      <p>{file.name}</p>
    </div>
  );
}
export default Fields;
