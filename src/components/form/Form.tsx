"use client";
import { forwardRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import classNames from "classnames";
import Button from "../Button";
import Input from "./fields/input/Input";
import Textarea from "./fields/textarea/Textarea";
import Radio from "./fields/radio/Radio";
import Upload from "./fields/upload/Upload";
import Error from "./alert/error";
import Success from "./alert/success";

export default function Form({ form, variant }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const values = watch();

  const [result, setResult] = useState();

  const {
    mutate: submitForm,
    isLoading,
    isSuccess,
    isError,
  } = useMutation(({ formdata }: any) => {
    const request = fetch(
      `${process.env.NEXT_PUBLIC_WP_URL}/wp-json/gf/v2/forms/${form.id}/submissions`,
      {
        method: "POST",
        body: formdata,
      }
    )
      .then((response) => response.text())
      .then((result) => {
        setResult(JSON.parse(result));
      })
      .catch((error) => {
        console.log("error", error);
      });

    return request;
  });

  const onSubmit = (formValues: any) => {
    const { formdata } = formatData(formValues);

    submitForm({ formdata });
  };

  const fields = form?.fields;

  return (
    <>
      {result?.is_valid === false && (
        <Error errors={result.validation_messages} />
      )}

      {result?.is_valid === true && (
        <Success>{result.confirmation_message}</Success>
      )}

      {!result?.is_valid && (
        <form
          className="flex flex-wrap justify-between items-center "
          onSubmit={handleSubmit(onSubmit)}
        >
          {fields?.map?.((field, index) => {
            const inputId = `${field.type}_${field.id}`;
            const error = result?.validation_messages[field.id];

            return (
              <div
                className={classNames(
                  `${field.size === "MEDIUM" ? "w-full md:w-[48%]" : "w-full "}`
                )}
                key={index}
              >
                <FormField
                  field={field}
                  {...register(inputId, { required: field.required })}
                  error={error}
                />
              </div>
            );
          })}

          {variant === "landing-page" && (
            <button
              className="relative cursor-pointer bg-[#2cc2c6] w-full py-3 text-white font-semibold text-[1.125rem] rounded-[5px] hover:bg-[#22b4b8] transition-colors duration-300 ease-in-out uppercase text-center flex items-center justify-center"
              disabled={isLoading}
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
        </form>
      )}
    </>
  );
}
const FormField = forwardRef(({ field, error, ...rest }, ref) => {
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
    case "email":
      return <Input {...inputProps} />;
    case "textarea":
      return <Textarea {...inputProps} rows="4" />;
    case "text":
      return <Input {...inputProps} />;
    case "phone":
      return <Input {...inputProps} />;
    case "radio":
      return <Radio {...inputProps} />;
    case "fileupload":
      return <Upload {...inputProps} />;
    // case "select":
    //   return <Select {...inputProps} />;
    default:
      return <Input {...inputProps} />;
  }
});
FormField.displayName = "FormField";

const formatData = (data) => {
  const formdata = new FormData();

  Object.entries(data).map(([key, value]) => {
    const fieldType = key.split("_")[0];
    const fieldId = key.split("_")[1];

    switch (fieldType) {
      case "fileupload":
        formdata.append(`input_${fieldId}`, value[0]);
        break;

      default:
        formdata.append(`input_${fieldId}`, value);
        break;
    }
  });

  return { formdata };
};
