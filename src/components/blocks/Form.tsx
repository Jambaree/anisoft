import Edges from "../Edges";
import GravityForm from "../form/GravityForm";

function Form({ formId }: { formId?: string }) {
  return (
    <div className="my-[65px]">
      <Edges className="formblock" size="md">
        {formId ? <GravityForm formId={formId} /> : null}
      </Edges>
    </div>
  );
}

export default Form;
