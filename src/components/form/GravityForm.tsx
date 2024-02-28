import clsx from "clsx";
import Form from "./Form";

type GravityFormProps = {
  formId: string | number;
  variant?: "landing-page" | undefined;
  className?: string;
};

async function GravityForm({ formId, variant, className }: GravityFormProps) {
  const form = await getForm(formId);

  return (
    <div className={clsx("max-w-[620px] mx-auto", className)}>
      {form ? <Form form={form} variant={variant} /> : null}
    </div>
  );
}
export default GravityForm;

export async function getForm(id: string | number) {
  if (!id) {
    return null;
  }
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WP_URL}/wp-json/gf/v2/forms/${id}`,
    {
      headers: {
        Authorization: `Basic ${btoa(process.env.WP_APPLICATION_PASSWORD!)}`,
      },
    }
  );
  if (!res.ok) {
    return null;
  }
  const form = await res.json();
  return form;
}
