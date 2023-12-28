import { CheckCircleIcon } from "@heroicons/react/20/solid";

export default function Success({ children }: { children?: string }) {
  return (
    <div className="rounded-md bg-green-50 p-2 my-24 ">
      <div className="flex justify-center items-center">
        <div className="flex-shrink-0">
          <CheckCircleIcon
            aria-hidden="true"
            className="h-8 w-8 text-lightGreen"
          />
        </div>
        <div className="ml-3 ">
          {children ? (
            <p
              className=" text-[20px] font-medium text-lightGreen break-all"
              dangerouslySetInnerHTML={{ __html: children }}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
