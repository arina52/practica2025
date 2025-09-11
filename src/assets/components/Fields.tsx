import { type FieldList } from "./FileDetails";
interface FieldsProps {
  fieldList: FieldList;
}

function Fields({ fieldList }: FieldsProps) {
  if (!fieldList || fieldList.length === 0) return null;

  return (
    <div>
      <h2>PDF fields</h2>
      {fieldList.map((field, index) => (
        <div key={index}>
          <strong>{field.name}:</strong> {field.value}
        </div>
      ))}
    </div>
  );
}
export default Fields;
