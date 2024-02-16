import BreadCrumbs from "./BreadCrumbs";
import Edges from "./Edges";
import SideIn from "./SideIn";

function PageHeader({
  title,
  content,
  breadcrumbs,
}: {
  title?: string;
  content?: string;
  breadcrumbs?: {
    basePath: string;
  };
}) {
  return (
    <div className=" py-[65px] overflow-x-hidden">
      <Edges size="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-[30px]">
          <SideIn className="flex flex-col " right={false}>
            <BreadCrumbs basePath={breadcrumbs?.basePath} />
            {title ? (
              <h1
                className="heroHeadline mb-[30px] md:mb-0"
                dangerouslySetInnerHTML={{ __html: title }}
              />
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
