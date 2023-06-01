import BreadCrumbs from "../BreadCrumbs";
import Edges from "../Edges";
import FadeInUp from "../FadeInUp";
import RichTextComponents from "../RichTextComponents";

const PageHeader2 = ({ title, text }) => {
  return (
    <div className="thirdRadialBg  py-[80px]">
      <Edges size="lg">
        <div className="flex flex-col justify-center items-center gap-4">
          <FadeInUp className="flex flex-col w-full justify-center max-w-[555px] mx-auto text-center">
            <BreadCrumbs className="text-white text-center mx-auto " />
            {title && (
              <h1 className="justify-center w-full  text-white ">{title}</h1>
            )}
          </FadeInUp>
          <FadeInUp className=" w-full max-w-[555px] mx-auto flex justify-center">
            {text && (
              <span className="text-[1.125rem] text-white px-2 text-center font-mukta font-light">
                {text}
              </span>
            )}
          </FadeInUp>
        </div>
      </Edges>
    </div>
  );
};

export default PageHeader2;
