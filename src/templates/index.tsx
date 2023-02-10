import DefaultPageTemplate from "./page/default";
import DefaultPostTemplate from "./post/default";
import ContactPageTemplate from "./page/contact";
import CareersPageTemplate from "./page/careers";
import QuotePageTemplate from "./page/quote";
import ServicePageTemplate from "./page/service";

const templates = {
  page: {
    default: DefaultPageTemplate,
    contact: ContactPageTemplate,
    careers: CareersPageTemplate,
    quote: QuotePageTemplate,
    service: ServicePageTemplate,
  },
  post: {
    default: DefaultPostTemplate,
  },
};

export default templates;
