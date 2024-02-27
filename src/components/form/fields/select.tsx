import React, { forwardRef } from "react";
import clsx from "clsx";
import type { FieldError } from "react-hook-form";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
import { cn } from "@/lib/utils";

interface SelectProps {
  className?: string;
  labelClassName?: string;
  inputId: string;
  id: string;
  label?: string;
  name?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  error?: FieldError;
  required?: boolean;
  description?: string;
  defaultValue?: string;
  options?: string[];
  register: any;
}

export const Select = forwardRef(
  (props: SelectProps, ref?: React.Ref<HTMLSelectElement>) => {
    const {
      id,
      inputId,
      name,
      required = false,
      defaultValue,
      label,
      error,
      className,
      style,
      labelClassName,
      description,
      disabled,
      options,
      register,
    } = props;

    if (!options || options.length <= 0) {
      return null;
    }

    return (
      <div className={className} style={style}>
        {label ? (
          <label
            className={clsx("p-details", labelClassName)}
            htmlFor={id || name}
          >
            {label}
            {required ? <span className="text-red-500"> *</span> : null}
          </label>
        ) : null}

        <div className="relative mt-1">
          <select
            className={cn(
              "forminput",
              "rounded-0 appearance-none block w-full px-3 py-2 border-b-[1px] border-l-[1px] text-black active:border-lightGreen ",
              " shadow-sm placeholder-gray-400 focus:outline-none",
              " focus:border-lightGreen ",
              disabled && "opacity-50",
              error &&
                "block w-full border-b-2 border-red-300 pr-10 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none focus:ring-red-500 sm:text-sm"
            )}
            defaultValue={defaultValue}
            disabled={disabled}
            id={id}
            name={name}
            ref={ref}
            required={required}
            {...register(inputId, { required })}
          >
            {options.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>

          {error && id ? (
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
            </div>
          ) : null}
        </div>

        {error?.message ? (
          <div>
            <span className="mt-2 text-sm text-red-600" id={`${id}-error`}>
              {error.message}
            </span>
          </div>
        ) : null}

        {description ? (
          <div>
            <span
              className="mt-2 text-sm text-gray-500"
              id={`${id}-description`}
            >
              {description}
            </span>
          </div>
        ) : null}
      </div>
    );
  }
);

Select.displayName = "Select";
