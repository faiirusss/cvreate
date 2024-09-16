export function TextArea({ label, id, value, onInputChange, inputClass, rows, placeholder }) {
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <textarea
        name={id}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onInputChange}
        className={inputClass}
        rows={rows}
      />
    </>
  )
}