/* eslint-disable eqeqeq */
export default function Input(props) {
  const { label, inputType, inputId, inputName, inputValues } = props;

  if (inputType != "radio") {
    return (
      <div className="form-group w-75">
        <label htmlFor={inputId}>
          <b>{label}</b>
        </label>
        <input
          type={inputType}
          className="form-control"
          id={inputId}
          name={inputName}
          required
        />
      </div>
    );
  } else {
    return (
      <div className="form-group w-75">
        <label htmlFor={inputId}>
          <b>{label}</b>
        </label>
        <div className="d-flex gap-3">
          {inputValues.map(renderRadioButtons)}
        </div>
      </div>
    );
  }

  function renderRadioButtons(value) {
    return (
      <div className="" key={value}>
        <input
          type="radio"
          id={inputId}
          name={inputName}
          value={value}
          required
        />
        <label htmlFor={inputId}>{value}</label>
      </div>
    );
  }
}
