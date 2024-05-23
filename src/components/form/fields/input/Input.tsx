// @ts-nocheck
import React, { forwardRef } from "react";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

interface InputProps {
  className?: string;
  inputClassName?: string;
  labelClassName?: string;

  id: string;
  label?: string;
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  hiddenLabel?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: any;

  required?: boolean;
  description?: string;
  defaultValue?: string;
  checked?: boolean; // added for checkbox
}

const Input = forwardRef(
  (
    {
      id,
      name,
      type,
      required = false,
      defaultValue,
      placeholder,
      label,
      error,
      className,
      inputClassName,
      labelClassName,
      description,
      disabled,
      checked, // added for checkbox
      ...rest
    }: InputProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    const isCheckbox = type === "checkbox"; // Determine if the input type is checkbox

    return (
      <div className={clsx("flex flex-col space-y-2", className)}>
        <div className="flex items-center space-x-2">
          <input
            aria-describedby={
              error ? `${id}-error` : description && `${id}-description`
            }
            checked={checked}
            className={clsx(
              "forminput",
              isCheckbox
                ? "form-checkbox h-4 w-4 text-indigo-600"
                : "rounded-0 appearance-none block w-full px-3 py-2 border-b-[1px] border-l-[1px] text-black active:border-lightGreen shadow-sm placeholder-gray-400 focus:outline-none focus:border-lightGreen",
              disabled && "opacity-50",
              error &&
                !isCheckbox &&
                "pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500",
              inputClassName
            )}
            defaultValue={defaultValue}
            disabled={disabled}
            id={id}
            name={name}
            placeholder={placeholder}
            ref={ref}
            required={required ? !isCheckbox : null}
            type={type}
            {...rest}
          />
          {label ? (
            <label
              className={clsx("p-details", labelClassName)}
              htmlFor={id || name}
            >
              {label}
              {required && isCheckbox ? (
                <span className="text-red-500"> *</span>
              ) : null}
            </label>
          ) : null}
        </div>

        {error?.message ? (
          <span className="text-red-600" id={`${id}-error`}>
            {error.message}
          </span>
        ) : null}

        {description ? (
          <p className="text-sm text-gray-500" id={`${id}-description`}>
            {description}
          </p>
        ) : null}
      </div>
    );
  }
);
Input.displayName = "Input";

export default Input;
