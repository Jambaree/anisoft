// import parse from "html-react-parser";
import BreadCrumbs from "../BreadCrumbs";
import Edges from "../Edges";
import SideIn from "../SideIn";

export function PageHeader1({
  title,
  content,
}: {
  title?: string;
  content?: string;
}) {
  return (
    <div className=" py-[65px] overflow-x-hidden">
      <Edges size="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-[30px]">
          <SideIn className="flex flex-col " right={false}>
            <BreadCrumbs />
            {title ? (
              <h1 className="heroHeadline mb-[30px] md:mb-0">{title}</h1>
            ) : null}
          </SideIn>
          <SideIn
            className=" py-2 mt-auto relative"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </Edges>
    </div>
  );
}
