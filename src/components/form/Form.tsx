"use client";
import { useState, forwardRef } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import Button from "../Button";
import Input from "./fields/input/Input";
import Textarea from "./fields/textarea/Textarea";
import Radio from "./fields/radio/Radio";
import Upload from "./fields/upload/Upload";
import { Checkbox } from "./fields/checkbox/Checkbox";
import { Select } from "./fields/select";

export default function Form({
  form,
  variant,
  consentText,
}: {
  form: any;
  variant: string;
}) {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState<any>();

  const { mutate: submitForm, isLoading } = useMutation(
    async ({ formdata, recaptchaToken, formId }: any) => {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        body: formdata,
        headers: {
          "recaptcha-token": recaptchaToken,
          "form-id": formId,
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }
      return response.json();
    },
    {
      onSuccess: (data) => {
        if (data.is_valid && [1, 9, 7, 8, 6].includes(form.id)) {
          router.push("/thank-you"); // Redirect to the thank-you page if the form ID matches
        } else {
          setResult(data); // Handle errors or other scenarios
        }
      },
      onError: (error) => {
        console.error("Form submission failed:", error);
      },
    }
  );

  const onSubmit = async (formValues: any) => {
    try {
      // Execute reCAPTCHA v3 and get the token
      const recaptchaToken = await grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        { action: "submit" }
      );

      const submitData = () => {
        const { formdata } = formatData(formValues);
        submitForm({ formdata, recaptchaToken, formId: form.id });
      };

      submitData();
    } catch (error) {
      alert("reCAPTCHA validation failed. Please try again.");
      console.error("reCAPTCHA error:", error);
    }
  };

  const fields = form?.fields;
  const excludedFormIds = [9, 7, 8, 6]; // Define the excluded form IDs at the top for clarity

  return (
    <>
      {!result?.is_valid && (
        <form
          className="flex flex-wrap justify-between items-center "
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Honeypot Field */}
          {/* <input
            className="hidden"
            name="honeypot"
            style={{ display: "none" }}
            type="text"
            {...register("honeypot")}
          /> */}

          {fields?.map?.((field, index) => {
            const inputId = `${field.type}_${field.id}`;
            const error = result?.validation_messages?.[field.id];

            return (
              <div
                className={classNames(
                  field.size === "MEDIUM" ? "w-full md:w-[48%]" : "w-full "
                )}
                key={index}
              >
                <FormField
                  error={error}
                  field={field}
                  inputId={inputId}
                  register={register}
                />
              </div>
            );
          })}

          {variant === "landing-page" && (
            <button
              className="relative cursor-pointer bg-lightGreen w-full py-3 text-white font-semibold text-[1.125rem] rounded-[5px] hover:bg-lightGreen/90 transition-colors duration-300 ease-in-out uppercase text-center flex items-center justify-center"
              disabled={isLoading}
              type="submit"
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      fill="currentColor"
                    />
                  </svg>{" "}
                </span>
              ) : (
                <>{form?.button.text || "Submit"}</>
              )}
            </button>
          )}

          {variant !== "landing-page" && (
            <Button
              className="ml-auto"
              disabled={isLoading}
              type="submit"
              variant="large"
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      fill="currentColor"
                    />
                  </svg>
                  Processing...
                </span>
              ) : (
                <>{form?.button?.text || "Submit"}</>
              )}
            </Button>
          )}

          {consentText ? (
            <p className="text-sm text-white mt-[20px] text-center">
              {consentText}
            </p>
          ) : null}
        </form>
      )}
    </>
  );
}

const FormField = forwardRef(
  ({ field, error, inputId, register, ...rest }, ref) => {
    const inputProps = {
      className: "gf-formfield",
      ...field,
      required: Boolean(field.isRequired),
      error,
      ...rest,
      ref,
    };

    if (field?.labelPlacement === "hidden_label") {
      delete inputProps.label;
    }

    switch (field.type) {
      case "select":
        return (
          <Select
            {...inputProps}
            inputId={inputId}
            options={field.choices.map((choice) => choice.value)}
            register={register}
          />
        );
      case "email":
        return (
          <Input
            {...inputProps}
            {...register(inputId, { required: field.isRequired })}
          />
        );
      case "textarea":
        return (
          <Textarea
            {...inputProps}
            rows="4"
            {...register(inputId, { required: field.isRequired })}
          />
        );
      case "text":
        return (
          <Input
            {...inputProps}
            {...register(inputId, { required: field.isRequired })}
          />
        );
      case "phone":
        return (
          <Input
            {...inputProps}
            {...register(inputId, { required: field.isRequired })}
          />
        );
      case "radio":
        return (
          <Radio
            {...inputProps}
            {...register(inputId, { required: field.isRequired })}
          />
        );
      case "fileupload":
        return (
          <Upload
            {...inputProps}
            {...register(inputId, { required: field.isRequired })}
          />
        );

      case "checkbox":
        return (
          <Checkbox
            inputId={inputId}
            options={field.choices.map((choice) => choice.value)}
            {...inputProps}
            register={register}
          />
        );

      default:
        return (
          <Input
            {...inputProps}
            {...register(inputId, { required: field.isRequired })}
          />
        );
    }
  }
);
FormField.displayName = "FormField";

const formatData = (data: any) => {
  const formdata = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    const fieldType = key.split("_")[0];
    const fieldId = key.split("_")[1];

    switch (fieldType) {
      case "fileupload":
        if (value.length > 0) {
          formdata.append(`input_${fieldId}`, value[0]);
        }
        break;
      case "checkbox":
        if (Array.isArray(value)) {
          value.forEach((val, index) => {
            if (val) {
              const checkboxId = `${fieldId}_${index + 1}`;
              const checkboxValue = typeof val === "boolean" ? "Selected" : val;
              formdata.append(`input_${checkboxId}`, checkboxValue);
            }
          });
        }
        break;
      default:
        formdata.append(`input_${fieldId}`, value);
        break;
    }
  });

  return { formdata };
};
