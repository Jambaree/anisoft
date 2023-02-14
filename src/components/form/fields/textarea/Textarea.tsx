import React, { forwardRef } from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';

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
	error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;

	required?: boolean;
	description?: string;
	defaultValue?: string;
	displayName?: string;
	Textarea?: any;
}

const Textarea = forwardRef(
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
		ref: React.Ref<HTMLTextAreaElement>
	) => {
		return (
			<div className={className}>
				{label && (
					<label
						htmlFor={id || name}
						className={clsx(
							'block text-[16px] text-black  tracking-wide',
							labelClassName
						)}
					>
						{label}
						{required && <span className='text-red-500'> *</span>}
					</label>
				)}

				<div className='mt-1 relative'>
					<textarea
						ref={ref}
						id={id}
						name={name}
						type={type}
						className={clsx(
							' appearance-none block w-full px-3 py-8 border-b-[1px] border-l-[1px] border-black text-black',
							' shadow-sm placeholder-gray-400 focus:outline-none',
							'focus:ring-light focus:border-light ',
							disabled && 'opacity-50',
							error &&
								'block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 rounded-md',
							inputClassName
						)}
						placeholder={placeholder}
						defaultValue={defaultValue}
						aria-invalid={error && 'true'}
						aria-describedby={
							error ? `${id}-error` : description && `${id}-description`
						}
						required={required}
						disabled={disabled}
						{...rest}
					/>

					{error && (
						<div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
							<ExclamationCircleIcon
								className='h-5 w-5 text-red-500'
								ariaHidden='true'
							/>
						</div>
					)}
				</div>

				{error && (
					<div>
						<span
							className='mt-2  text-red-600'
							id={`${id}-error`}
						>
							{error.message || 'This field is required'}
						</span>
					</div>
				)}

				{description && (
					<div>
						<span
							className='mt-2  text-gray-500'
							id={`${id}-description`}
						>
							{description}
						</span>
					</div>
				)}
			</div>
		);
	}
);
Textarea.displayName = 'Textarea';

export default Textarea;
