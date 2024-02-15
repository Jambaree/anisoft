import DefaultPageTemplate from "./page/default";
import ContactPageTemplate from "./page/contact";
import QuotePageTemplate from "./page/quote";
import BlankPageTemplate from "./page/blank";
import ServicePageTemplate from "./page/service";
import { DefaultPostTemplate } from "./post/default";
import { PostArchive } from "./archive/blog";
import { SolutionsAndProductsTemplate } from "./solutions-products/default";

const templates = {
  page: {
    default: DefaultPageTemplate,
    contact: ContactPageTemplate,
    quote: QuotePageTemplate,
    service: ServicePageTemplate,
    blank: BlankPageTemplate,
  },
  post: {
    default: DefaultPostTemplate,
  },
  "solutions-products": {
    default: SolutionsAndProductsTemplate,
  },
  archive: {
    posts: PostArchive,
  },
};

export default templates;
