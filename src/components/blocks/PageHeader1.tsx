import BreadCrumbs from "../BreadCrumbs";
import Edges from "../Edges";
import SideIn from "../SideIn";
import parse from "html-react-parser";

const PageHeader1 = ({ title, content }) => {
  return (
    <div className=" py-[65px] overflow-x-hidden">
      <Edges size="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-[30px]">
          <SideIn right={false} className="flex flex-col ">
            <BreadCrumbs />
            {title && (
              <h1 className="heroHeadline mb-[30px] md:mb-0">{title}</h1>
            )}
          </SideIn>
          <SideIn className=" py-2 mt-auto relative">
            {content && <div>{parse(content)}</div>}
          </SideIn>
        </div>
      </Edges>
    </div>
  );
};

export default PageHeader1;
