import { getData } from "@jambaree/next-wordpress";
import FooterTopperCTA from "../../components/FooterTopperCTA";
import QuickFacts from "../../components/QuickFacts";
import PageHeader from "../../components/PageHeader";

export default async function DefaultPostTemplate({ uri }) {
  const { post } = await getData({ uri, query });

  return (
    <div>
      <PageHeader data={post} />
      <QuickFacts data={post?.quickFacts} />
      <FooterTopperCTA data={post?.template?.footerTopperCta} />
    </div>
  );
}

const query = `
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
      template {
        ... on DefaultTemplate {
          templateName
          footerTopperCta {
            text1
            text2
            button {
              title
              url
            }
          }

        }
      }
    }
  }`;
