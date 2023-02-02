import getPostdata from "./getPostData";
import { notFound } from "next/navigation";

export default async function DefaultPostTemplate({
  uri,
  asPreview,
  jwtAuthToken,
}) {
  const postData = await getPostdata({ uri, asPreview, jwtAuthToken });

  if (!postData) {
    notFound();
  }
  const { title } = postData;
  return (
    <div>
      <h1>Default Post Template for {title} </h1>
    </div>
  );
}
