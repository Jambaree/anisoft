"use client";
import { forwardRef, useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import classNames from "classnames";
import ReCAPTCHA from "react-google-recaptcha";
import { useRouter } from "next/navigation";
import Button from "../Button";
import Input from "./fields/input/Input";
import Textarea from "./fields/textarea/Textarea";
import Radio from "./fields/radio/Radio";
import Upload from "./fields/upload/Upload";
import Checkbox from "./fields/checkbox/Checkbox";
// import Error from "./alert/error";
// import Success from "./alert/success";
import { Select } from "./fields/select";

export default function Form({
  form,
  variant,
}: {
  form: any;
  variant: string;
}) {
  const router = useRouter();
  const [captchaValue, setCaptchaValue] = useState(null);
  const recaptchaRef = useRef(null); // Reference to the reCAPTCHA component

  const { register, handleSubmit } = useForm();

  const [result, setResult] = useState();

  const { mutate: submitForm, isLoading } = useMutation(({ formdata }: any) => {
    const request = fetch(
      `${process.env.NEXT_PUBLIC_WP_URL}/wp-json/gf/v2/forms/${form.id}/submissions`,
      {
        method: "POST",
        body: formdata,
      }
    )
      .then((response) => response.text())
      .then((result) => {
        const parsedResult = JSON.parse(result);
        setResult(parsedResult);

        if (parsedResult.is_valid && [9, 7, 8, 6].includes(form.id)) {
          router.push("/thank-you"); // Redirect to the thank-you page if the form ID matches
        }
      })
      .catch((error) => {
        console.log("error", error);
      });

    return request;
  });

  const onSubmit = async (formValues: any) => {
    // Function to handle the actual form data submission
    const submitData = () => {
      const { formdata } = formatData(formValues);
      submitForm({ formdata });
      setCaptchaValue(null); // Reset captcha value after submission
      console.log(formdata);
    };
    if (!captchaValue) {
      // Execute reCAPTCHA when the form is submitted and captchaValue is not set
      recaptchaRef.current.execute();
    } else {
      // If captchaValue is already set, proceed to submit data
      submitData();
    }
  };
  const onCaptchaChange = (value) => {
    setCaptchaValue(value);
    if (value) {
      handleSubmit(onSubmit)(); // Automatically resubmit the form when reCAPTCHA is validated
    }
  };

  useEffect(() => {
    if (captchaValue) {
      handleSubmit(onSubmit)();
    }
  }, [captchaValue]);

  const fields = form?.fields;
  const excludedFormIds = [9, 7, 8, 6]; // Define the excluded form IDs at the top for clarity

  return (
    <>
      {/* {result?.is_valid === false && (
        <Error errors={result.validation_messages} />
      )}

      {result?.is_valid === true && !excludedFormIds.includes(form.id) && (
        <Success>{result.confirmation_message}</Success>
      )} */}
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
                  field.size === "MEDIUM" ? "w-full md:w-[48%]" : "w-full "
                )}
                key={index}
              >
                <FormField
                  field={field}
                  inputId={inputId}
                  register={register}
                  // {...register(inputId, { required: field.required })}
                  error={error}
                />
              </div>
            );
          })}

          {process.env.NEXT_PUBLIC_FORM_RECAPTCHA ? (
            <ReCAPTCHA
              badge="bottomleft"
              onChange={onCaptchaChange}
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_FORM_RECAPTCHA}
              size="invisible"
            />
          ) : null}

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
          {form.id === 7 && (
            <p className="text-sm text-white mt-[20px] text-center">
              We hate spam. We will never share your information with anyone.
              View our Privacy Policy for more information
            </p>
          )}
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
    console.log(field.type);
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
            {...inputProps}
            {...register(inputId, { required: field.isRequired })}
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
