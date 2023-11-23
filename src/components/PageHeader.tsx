import BreadCrumbs from "./BreadCrumbs";
import Edges from "./Edges";
import SideIn from "./SideIn";

function PageHeader({ title, content }: { title?: string; content?: string }) {
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
          <SideIn className=" py-2 mt-auto relative">
            {content ? (
              <div dangerouslySetInnerHTML={{ __html: content }} />
            ) : null}
          </SideIn>
        </div>
      </Edges>
    </div>
  );
}

export default PageHeader;
