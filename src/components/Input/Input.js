import "./style.css";

const Input = ({
  type,
  name,
  placeholder,
  className,
  value,
  label,
  required,
}) => {
  const fieldId = `id_${name}`;

  let labelDiv;

  if (label) {
    labelDiv = <label htmlFor={fieldId}>{label}: </label>;
  }

  return (
    <div className="input-component">
      {labelDiv}
      <input
        className={className}
        id={fieldId}
        type={type}
        name={name}
        placeholder={placeholder}
        defaultValue={value}
        required={required}
      />
    </div>
  );
};

export default Input;
