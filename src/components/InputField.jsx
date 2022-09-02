export default function InputField({ setup, state, onChange }) {
  const { type, placeholder, id, autoFocus, required } = setup;

  return (
    <input
      type={type}
      placeholder={placeholder}
      className="emailInput"
      value={state}
      id={id}
      autoFocus={autoFocus}
      onChange={onChange}
      required={required}
    />
  );
}
