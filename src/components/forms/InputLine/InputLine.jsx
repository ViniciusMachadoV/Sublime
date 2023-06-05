import React from "react";

export function InputLine(props) {
  const inputType = props.type ?? "text";

  const inputProps = {
    id: props.id,
    type: inputType,
    value: props.value,
    onChange: props.onChange,
    required: props.required ?? false,
  };

  // Clonando o componente passado no Children para que ele receba as props de `id`, `type`, `value` e `onChange`
  const childrenWithProps = props.children
    ? React.cloneElement(props.children, inputProps)
    : null;

  return (
    <div className={`col-md-${props?.cols ?? 6} mb-3`}>
      <label htmlFor={props.id} className="form-label">
        {props.label}
      </label>

      <div className="input-group">
        {inputType === "email" ? (
          <span className="input-group-text">@</span>
        ) : null}

        {props.children ? (
          childrenWithProps
        ) : (
          <input className="form-control" {...inputProps} />
        )}
      </div>

      {props.description ? <small>{props.description}</small> : null}
    </div>
  );
}
