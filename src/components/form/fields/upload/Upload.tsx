// @ts-nocheck
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
	fileUploadValues?: any;
	//   fullWidth?: boolean
	disabled?: boolean;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	error?: any;

	required?: boolean;
	description?: string;
	defaultValue?: string;
}

const Upload = forwardRef(
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
			fileUploadValues,
			onChange,
			disabled,
			...rest
		}: InputProps,
		ref: React.Ref<HTMLInputElement>
	) => {
		return (
			<div className={className}>
				{label && (
					<label
						htmlFor={'file-input'}
						className={clsx('p-details', labelClassName)}
					>
						{label}
						{required && <span className='text-red-500'> *</span>}
					</label>
				)}

				<div className='mt-1 relative '>
					<input
						ref={ref}
						id={id}
						name={name}
						type={'file'}
						className={clsx(
							'appearance-none block w-full px-3 py-2  text-black  ',

							disabled && 'opacity-50',
							error &&
								'block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500  rounded-md',
							inputClassName
						)}
						required={required}
						disabled={disabled}
						fileUploadValues={fileUploadValues}
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
Upload.displayName = 'Upload';

export default Upload;
