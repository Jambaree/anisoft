import DefaultPageTemplate from "./page/default";
import ContactPageTemplate from "./page/contact";
import QuotePageTemplate from "./page/quote";
import BlankPageTemplate from "./page/blank";
import ServicePageTemplate from "./page/service";
import DefaultPostTemplate from "./post/default";

const templates = {
  page: {
    default: DefaultPageTemplate,
    "wp-custom-template-contact": ContactPageTemplate,
    "wp-custom-template-quote": QuotePageTemplate,
    "wp-custom-template-service": ServicePageTemplate,
    blank: BlankPageTemplate,
  },
  post: {
    default: DefaultPostTemplate,
  },
};

export default templates;
