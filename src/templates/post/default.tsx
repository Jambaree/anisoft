import { getData } from "@jambaree/next-wordpress";
import FooterTopperCTA from "../../components/FooterTopperCTA";
import QuickFacts from "../../components/QuickFacts";
import PageHeader from "../../components/PageHeader";
import TextInfo from "../../components/blocks/TextInfo";

export default async function DefaultPostTemplate({
  uri,
  isPreview,
  searchParams,
}) {
  const { post, themeOptions } = await getData({
    variables: { id: uri, idType: "URI" },
    query,
    isPreview,
    searchParams,
  });
  const {
    options: { footerTopperCta },
  } = themeOptions;

  return (
    <div>
      <PageHeader data={post} />

      {post?.quickFacts?.facts && <QuickFacts data={post?.quickFacts} />}
      <TextInfo {...post?.textInfo} />
      <FooterTopperCTA data={footerTopperCta} />
    </div>
  );
}

const query = /* GraphQL */ `
  query PostQuery($id: ID!, $idType: PostIdType) {
    post(id: $id, idType: $idType) {
      id
      title
      content
      quickFacts {
        text1
        text2
        facts {
          description

          title
          icon {
            sourceUrl
            altText
          }
        }
      }
      textInfo {
        tag
        headline
        button1 {
          title
          url
          target
        }
        button2 {
          title
          url
          target
        }
        image {
          sourceUrl
          altText
        }
        backgroundGradient
        text
      }
    }
    themeOptions {
      options {
        footerTopperCta {
          text1
          text2
          button {
            target
            title
            url
          }
        }
      }
    }
  }
`;
