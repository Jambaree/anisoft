import { preview } from "@nextwp/core";

const previewOptions = {
  toolbar: true,
};

const previewHandler = preview(previewOptions);

export { previewHandler as GET };
