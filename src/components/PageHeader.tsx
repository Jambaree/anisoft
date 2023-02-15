import BreadCrumbs from "./BreadCrumbs";
import Edges from "./Edges";
import SideIn from "./SideIn";
import parse from "html-react-parser";

const PageHeader = ({ data }) => {
  const { title, content } = data;

  return (
    <div className=" py-[90px] overflow-x-hidden">
      <Edges size="lg">
        <div className="flex flex-wrap md:justify-between">
          <SideIn right={false} className="flex flex-col md:w-[30%]">
            <BreadCrumbs />
            {title && (
              <h1 className="heroHeadline mb-[30px] md:mb-0">{title}</h1>
            )}
          </SideIn>
          <SideIn className="md:w-[70%] py-2">
            {content && <div>{parse(content)}</div>}
          </SideIn>
        </div>
      </Edges>
    </div>
  );
};

export default PageHeader;
