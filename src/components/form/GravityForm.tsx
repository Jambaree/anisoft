import Edges from "../Edges";
import Form from "./Form";

type GravityFormProps = {
  formId: string;
};

const GravityForm: React.FC<GravityFormProps> = async ({
  formId,
}: GravityFormProps) => {
  const form = await getForm(formId);

  return (
    <div className="my-[65px]">
      <Edges size="md">
        <div className="max-w-[620px] mx-auto">
          <Form form={form} />
        </div>
      </Edges>
    </div>
  );
};
export default GravityForm;

async function getForm(id: string) {
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_WP_URL}/wp-json/gf/v2/forms/${id}`,
    {
      headers: {
        Authorization: `Basic ${btoa(process.env.WP_APPLICATION_PASSWORD)}`,
      },
    }
  );
  const form = await req.json();
  return form;
}
