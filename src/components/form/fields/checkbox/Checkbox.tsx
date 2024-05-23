import React, { forwardRef } from "react";
import clsx from "clsx";
import type { FieldError } from "react-hook-form";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
import { cn } from "@/lib/utils";

interface CheckboxProps {
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
  defaultValue?: string[];
  options?: string[];
  register: any;
}

export const Checkbox = forwardRef(
  (props: CheckboxProps, ref?: React.Ref<HTMLDivElement>) => {
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
      <div className={cn(className, "space-y-2")} style={style}>
        {label ? (
          <label
            className={clsx(
              "block text-lg font-semibold tracking-wide text-white",
              labelClassName
            )}
            htmlFor={inputId}
          >
            {label}
            {required ? <span className="text-red-500"> *</span> : null}
          </label>
        ) : null}

        <div className="relative mt-1 flex flex-wrap gap-2 flex-col px-2">
          {options.map((value, index) => (
            <label className="flex items-center" key={value}>
              <input
                defaultChecked={false}
                disabled={disabled}
                required={required}
                type="checkbox"
                value={value}
                {...register(`${inputId}[${index}]`)}
                className="w-fit scale-150"
              />
              <span className="ml-5">{value}</span>
            </label>
          ))}
        </div>

        {error ? (
          <div className="flex items-center mt-1">
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
            <span className="text-sm text-red-600 ml-2">{error.message}</span>
          </div>
        ) : null}

        {description ? (
          <div>
            <span className="text-sm text-gray-500">{description}</span>
          </div>
        ) : null}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
