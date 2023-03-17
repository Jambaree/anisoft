// import { XCircleIcon } from "@heroicons/react/20/solid";

export default function Error({ errors }) {
  return (
    <div className="rounded-md bg-red-50 py-4">
      <div className="flex">
        <div className="flex-shrink-0">
          {/* <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" /> */}
        </div>
        <div>
          <h3 className=" font-medium text-red-700">Error</h3>
          <div className="mt-2  text-red-700">
            <ul role="list" className="list-disc space-y-1 pl-5">
              {Object.keys(errors).map((key, index) => {
                return (
                  <li key={index} className="text-[16px]">
                    {errors[key]}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
