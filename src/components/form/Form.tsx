// @ts-nocheck
"use client";
import { forwardRef } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { gql, request } from "graphql-request";

import Input from "./fields/input/Input";
import Textarea from "./fields/textarea/Textarea";
import Radio from "./fields/radio/Radio";
import Upload from "./fields/upload/Upload";
import Button from "../Button";
import Error from "./alert/error";
import Success from "./alert/success";
import classNames from "classnames";

// const submitFormQueryDocument = gql`
//   mutation submitForm($formId: ID!, $fieldValues: [FormFieldValuesInput]!) {
//     submitGfForm(input: { fieldValues: $fieldValues, id: $formId }) {
//       confirmation {
//         message
//       }
//       clientMutationId
//       errors {
//         id
//         message
//       }
//     }
//   }
// `;

export default function Form({ form }) {
  console.log({ form });
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();

  const {
    mutate: submitForm,
    data,
    isLoading,
    // isError,
    // isSuccess,
    error,
  } = useMutation(({ formData, formJson }: any) => {
    console.log({ formData, formJson });

    console.log({ ["input_1"]: formData.get("input_1") });

    const request = fetch(
      `${process.env.NEXT_PUBLIC_NEW_WP_URL}/wp-json/gf/v2/forms/${form.databaseId}/submissions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formJson),
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
        // body: formData,
      }
    );

    return request;

    // return request({
    //   url: process.env.NEXT_PUBLIC_WP_URL,
    //   variables,
    //   document: submitFormQueryDocument,
    // });

    // console.log({ res });

    // if (res?.submitGfForm?.errors?.length) {
    //   throw new Error(res.submitGfForm.errors[0].message);
    // }

    // return res;
  });

  const onSubmit = (formValues: any) => {
    const { formData, formJson } = formatData(formValues);

    submitForm({ formData, formJson });
  };

  const fields = form?.formFields?.nodes;

  const isError = !!data?.submitGfForm?.errors?.length;
  const errorMessage = data?.submitGfForm?.errors?.[0]?.message;
  const gfErrors = data?.submitGfForm?.errors;

  const isSuccess = !!data?.submitGfForm?.confirmation?.message;
  const successMessage = data?.submitGfForm?.confirmation?.message;
  return (
    <>
      {isError && <Error errors={gfErrors}></Error>}

      {isSuccess && <Success>{successMessage}</Success>}

      {!isSuccess && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-wrap justify-between items-center "
        >
          {fields?.map?.((field, index) => {
            const inputId = `${field.type}_${field.id}`;
            const error = errors?.[inputId];

            return (
              <div
                key={field.id}
                className={classNames(
                  "mb-[50px]",
                  `${field.size === "MEDIUM" ? "w-full md:w-[48%]" : "w-full "}`
                )}
              >
                <FormField
                  field={field}
                  {...register(inputId, { required: field.required })}
                  error={error}
                />
              </div>
            );
          })}

          <Button
            disabled={isLoading}
            type="submit"
            variant="large"
            className="ml-auto"
          >
            {isLoading ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </span>
            ) : (
              `Submit`
            )}
          </Button>
        </form>
      )}
    </>
  );
}
const FormField = forwardRef(({ field, error, ...rest }, ref) => {
  const inputProps = {
    ...field,
    required: !!field.isRequired,
    error,
    ...rest,
    ref,
  };

  switch (field.type) {
    case "EMAIL":
      return <Input {...inputProps} />;
    case "TEXTAREA":
      return <Textarea {...inputProps} rows="4" />;
    case "TEXT":
      return <Input {...inputProps} />;
    case "PHONE":
      return <Input {...inputProps} />;
    case "RADIO":
      return <Radio {...inputProps} />;
    case "FILEUPLOAD":
      return <Upload {...inputProps} />;
    default:
      return <Input {...inputProps} />;
  }
});
FormField.displayName = "FormField";

const formatData = (data) => {
  const formData = new FormData();

  const formJson = {};

  Object.entries(data).map(([key, value]) => {
    const fieldType = key.split("_")[0];
    const fieldId = key.split("_")[1];

    // const fieldData = {
    //   id: Number(fieldId),
    // };

    switch (fieldType) {
      //   case "EMAIL":
      //     fieldData.emailValues = { value };
      //     break;

      //   case "TEXT":
      //     formData.append(`input_${fieldId}`, value.replace(/(<([^>]+)>)/gi, ""));

      //     break;

      default:
        formJson[`input_${fieldId}`] = value;
        formData.append(`input_${fieldId}`, value);

        break;
    }

    // if (data.formData[formField]) {
    //   if (o.type === "text") {
    //     // Strip out HTML tags
    //     data.formData[formField] = data.formData[formField].replace(
    //       /(<([^>]+)>)/gi,
    //       ""
    //     );
    //   }

    //   if (o.type === "consent") {
    //     data.formData[`${formField}_1`] = data.formData[formField]
    //       ? "yes"
    //       : "no";
    //     delete data.formData[formField];
    //   }

    //   if (o.type === "checkbox") {
    //     if (data.formData[formField] && data.formData[formField].length > 0) {
    //       JSON.parse(o.choices).map((p, i) => {
    //         if (data.formData[formField].includes(p.value)) {
    //           data.formData[`${formField}_${i + 1}`] = p.value;
    //         }

    //         return data;
    //       });

    //       delete data.formData[formField];
    //     }
    //   }

    //   if (o.type === "list") {
    //     if (data.formData[formField].length > 0) {
    //       let array = [];
    //       // Loop trough entries of list field
    //       // eslint-disable-next-line
    //       data.formData[formField].map((p) => {
    //         // loop trough columns of list field
    //         return o.choices.map((q) => array.push(p[q.value]));
    //       });
    //       data.formData[formField] = array;
    //     }
    //   }
    // }
  });

  return { formData, formJson };
};
