import type { WpPage } from "@nextwp/core";
import React from "react";
import PageHeader from "../../components/PageHeader";
import ServiceCards from "../../components/servicecards";

export default function ServicePageTemplate({ data }: { data: WpPage }) {
  return (
    <div>
      <PageHeader content={data.content.rendered} title={data.title.rendered} />

      <ServiceCards services={data.acf?.services} />
    </div>
  );
}
