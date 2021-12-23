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
          {inputValues.map((value) => {
            return (
              <div className="">
                <input
                  type="radio"
                  id={inputId}
                  name={inputName}
                  value={value}
                />
                <label for={inputId}>{value}</label>
              </div>
            );
          })}
        </div>

        {/* <div>
          <input type="radio" id="dewey" name="drone" value="dewey" />
          <label for="dewey">Dewey</label>
        </div>
        <label htmlFor={inputId}>
          <b>{label}</b>
        </label>
        <input
          type={inputType}
          className="form-control"
          id={inputId}
          name={inputName}
        /> */}
      </div>
    );
  }
}
