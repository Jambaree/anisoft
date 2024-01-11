// @ts-nocheck
import React, { forwardRef } from "react";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
// import { InputProps } from "./InputTypes";
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
  //   fullWidth?: boolean
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: any;

  required?: boolean;
  description?: string;
  defaultValue?: string;
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
      ...rest
    }: InputProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    return (
      <div className={className}>
        {label ? (
          <label
            className={clsx("p-details", labelClassName)}
            htmlFor={id || name}
          >
            {label}
            {required ? <span className="text-red-500"> *</span> : null}
          </label>
        ) : null}

        <div className="mt-1 relative ">
          <input
            aria-describedby={
              error ? `${id}-error` : description && `${id}-description`
            }
            className={clsx(
              "forminput",
              "rounded-0 appearance-none block w-full px-3 py-2 border-b-[1px] border-l-[1px] text-black active:border-lightGreen ",
              " shadow-sm placeholder-gray-400 focus:outline-none",
              " focus:border-lightGreen ",
              disabled && "opacity-50",
              error &&
                "block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 ",
              inputClassName
            )}
            defaultValue={defaultValue}
            disabled={disabled}
            id={id}
            name={name}
            placeholder={placeholder}
            ref={ref}
            required={required}
            type={type}
            {...rest}
          />

          {error ? (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <ExclamationCircleIcon
                aria-hidden="true"
                className="h-5 w-5 text-red-500"
              />
            </div>
          ) : null}
        </div>

        {error?.message ? (
          <div>
            <span className="mt-2  text-red-600" id={`${id}-error`}>
              {error.message}
            </span>
          </div>
        ) : null}

        {description ? (
          <div>
            <span className="mt-2  text-gray-500" id={`${id}-description`}>
              {description}
            </span>
          </div>
        ) : null}
      </div>
    );
  }
);
Input.displayName = "Input";

export default Input;
