// import QuickFacts from "../../components/QuickFacts";
import { getData } from "@jambaree/next-wordpress";
import FooterTopperCTA from "../../components/FooterTopperCTA";
import QuickFacts from "../../components/QuickFacts";
import PageHeader from "../../components/PageHeader";

export default async function DefaultPostTemplate({ uri }) {
  const { post } = await getData({ uri, query });

  return (
    <div>
      <PageHeader data={post} />
      <QuickFacts data={post?.template?.quickFacts} />
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
          quickFacts {
            text1
            text2
            facts {
              description
              factIcon
              title
            }
          }
        }
      }
    }
  }`;
