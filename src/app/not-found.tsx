import React from "react";
import Image from "next/image";
import { getOptionsPage } from "@jambaree/next-wordpress";
import Button from "@/components/Button";

export default async function NotFound() {
  const options = await getOptionsPage({
    slug: "theme-options",
  });

  return (
    <div className="grid min-h-full grid-cols-1 grid-rows-[1fr,auto,1fr] bg-white lg:grid-cols-[max(50%,36rem),1fr]">
      <main className="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:px-8">
        <div className="max-w-lg">
          <p className="text-lightBlue">404</p>
          <h1>Page not found</h1>
          <p className="mt-6">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10">
            <Button href="/" variant="xlarge">
              Back to home
            </Button>
          </div>
        </div>
      </main>

      <div className="hidden lg:relative lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:block">
        {options["404_image"]?.url ? (
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            fill
            src={options["404_image"]?.url}
          />
        ) : null}
      </div>
    </div>
  );
}
