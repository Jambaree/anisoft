import BreadCrumbs from "../BreadCrumbs";
import Edges from "../Edges";
import FadeInUp from "../FadeInUp";

export function PageHeader2({ title, text }) {
  return (
    <div className="thirdRadialBg  py-[80px]">
      <Edges size="lg">
        <div className="flex flex-col justify-center items-center gap-4">
          <FadeInUp className="flex flex-col w-full justify-center max-w-[555px] mx-auto text-center">
            <BreadCrumbs className="text-white text-center mx-auto " />
            {title ? (
              <h1 className="justify-center w-full  text-white heroHeadline">
                {typeof title === "string" ? title : title?.rendered}
              </h1>
            ) : null}
          </FadeInUp>
          <FadeInUp className=" w-full max-w-[585px] mx-auto flex justify-center">
            {text ? (
              <span className="text-[1.125rem] text-white px-2 text-center font-mukta font-light">
                {text}
              </span>
            ) : null}
          </FadeInUp>
        </div>
      </Edges>
    </div>
  );
}
