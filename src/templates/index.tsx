import DefaultPageTemplate from "./page/default";
import ContactPageTemplate from "./page/contact";
import QuotePageTemplate from "./page/quote";
import BlankPageTemplate from "./page/blank";
import ServicePageTemplate from "./page/service";
import DefaultPostTemplate from "./post/default";
import { PostArchive } from "./archive/blog";

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
  archive: {
    posts: PostArchive,
  },
};

export default templates;
