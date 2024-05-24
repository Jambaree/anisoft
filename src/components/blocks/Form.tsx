import Edges from "../Edges";
import GravityForm from "../form/GravityForm";

export function Form({
  formId,
  form_consent_text,
}: {
  formId?: string;
  form_consent_text?: string;
}) {
  return (
    <div className="my-[65px]">
      <Edges className="formblock" size="md">
        {formId ? (
          <GravityForm consentText={form_consent_text} formId={formId} />
        ) : null}
      </Edges>
    </div>
  );
}
