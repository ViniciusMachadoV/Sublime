import { useState } from "react";

export function useForm(defaultValues = {}) {
  const [formData, setFormData] = useState(defaultValues);

  function register(keyName) {
    if (!Object.keys(formData).includes(keyName)) return;

    function onChange(event) {
      setFormData((oldFormData) => ({
        ...oldFormData,
        [keyName]: event.target.value,
      }));
    }

    return {
      value: formData[keyName],
      onChange,
    };
  }

  function onFormSubmit(onSuccess) {
    return (event) => {
      event.preventDefault();

      onSuccess && onSuccess(formData);
    };
  }

  return { formData, registerInput: register, onFormSubmit };
}
