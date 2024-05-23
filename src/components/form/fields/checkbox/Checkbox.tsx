import React, { forwardRef } from "react";
import classNames from "classnames";

interface CheckboxProps {
  inputId: string;
  label?: string;
  error?: any;
  required?: boolean;
  description?: string;
  register: Function;
  className?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { inputId, label, error, required, description, register, className },
    ref
  ) => {
    return (
      <div className={classNames("flex flex-col space-y-2", className)}>
        <div className="flex items-center">
          <input
            aria-describedby={
              error
                ? `${inputId}-error`
                : description && `${inputId}-description`
            }
            className="form-checkbox h-4 w-4 text-indigo-600"
            id={inputId}
            ref={register}
            required={required}
            type="checkbox"
          />
          <label
            className="ml-2 text-sm font-medium text-white"
            htmlFor={inputId}
          >
            {label}
            {required ? <span className="text-red-500">*</span> : null}
          </label>
        </div>
        {error ? (
          <p className="text-red-600" id={`${inputId}-error`}>
            {error.message}
          </p>
        ) : null}
        {/* {description ? (
          <p className="text-sm text-white" id={`${inputId}-description`}>
            {description}
          </p>
        ) : null} */}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
