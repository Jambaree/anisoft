import { getData } from "@jambaree/next-wordpress";
import FooterTopperCTA from "../../components/FooterTopperCTA";
import QuickFacts from "../../components/QuickFacts";
import PageHeader from "../../components/PageHeader";
import TextInfo from "../../components/blocks/TextInfo";

export default async function DefaultPostTemplate({ uri }) {
  const { post, themeOptions } = await getData({ variables: { uri }, query });
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
  query PostQuery($uri: ID!) {
    post(id: $uri, idType: URI) {
      id
      title
      content
      quickFacts {
        text1
        text2
        facts {
          description
          factIcon
          title
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
