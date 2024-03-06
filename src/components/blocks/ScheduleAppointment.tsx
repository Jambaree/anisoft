import clsx from "clsx";
import Image from "next/image";
import type { WpImage } from "@nextwp/core";
import Edges from "../Edges";
import GravityForm, { getForm } from "../form/GravityForm";

interface Benefit {
  headline?: string;
  subline?: string;
  icon?: "screen" | "heart" | "badge";
}
interface ScheduleAppointmentProps {
  headline: string;
  benefits: Benefit[];
  uri: string;
  form_id?: number;
  form_logo?: WpImage;
}

export async function ScheduleAppointment({
  headline,
  benefits,
  form_id,
  form_logo,
}: ScheduleAppointmentProps) {
  if (!form_id) {
    return null;
  }

  const form = await getForm(form_id);

  return (
    <div className="py-[25px] md:py-[50px]">
      <Edges>
        <div className="flex flex-col md:flex-row">
          <div>
            {headline ? (
              <div className="flex">
                <h1 className="heroHeadline text-[2rem]  sm:text-[3rem] mb-5">
                  {headline}
                </h1>
              </div>
            ) : null}

            <div className="px-10 py-5">
              {benefits.map(
                ({ headline = "", subline = "", icon = "screen" }, index) => (
                  // eslint-disable-next-line react/no-array-index-key -- we don't have a unique id
                  <div className="mb-10 flex" key={index}>
                    <div className="text-lightGreen">
                      <Icon className="w-10 h-10 mr-5" icon={icon} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{headline}</h4>
                      <p>{subline}</p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {form ? (
            <div className="relative z-20 bg-[#234F63] py-6 px-5 text-white md:-mt-32 md:w-2/6 min-w-[300px] flex-shrink-0">
              <div className="text-center mb-5">
                <div className="flex items-center justify-center">
                  {form_logo?.url ? (
                    <div className="relative w-[180px] h-[120px] mx-3">
                      <Image
                        alt={form_logo.alt || ""}
                        className="object-contain"
                        fill
                        src={form_logo.url}
                      />
                    </div>
                  ) : null}
                  {form?.title ? <h3 className="mb-5">{form.title}</h3> : null}
                </div>
                {form?.description ? <p>{form.description}</p> : null}
              </div>

              {form_id ? (
                <GravityForm
                  className="appointmentform"
                  formId={form_id}
                  variant="landing-page"
                />
              ) : null}
            </div>
          ) : null}
        </div>
      </Edges>
    </div>
  );
}

function Icon({
  icon,
  className,
}: {
  icon: "screen" | "heart" | "badge";
  className?: string;
}) {
  switch (icon) {
    case "screen":
      return (
        <svg
          className={clsx("lucide lucide-monitor", className)}
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect height="14" rx="2" width="20" x="2" y="3" />
          <line x1="8" x2="16" y1="21" y2="21" />
          <line x1="12" x2="12" y1="17" y2="21" />
        </svg>
      );
    case "heart":
      return (
        <svg
          className={clsx("lucide lucide-heart", className)}
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      );
    case "badge":
      return (
        <svg
          className={clsx("lucide lucide-award", className)}
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      );
    default:
      return null;
  }
}
