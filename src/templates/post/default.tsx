import { getData } from "@jambaree/next-wordpress";
import FooterTopperCTA from "../../components/FooterTopperCTA";
import QuickFacts from "../../components/QuickFacts";
import PageHeader from "../../components/PageHeader";
import TextInfo from "../../components/blocks/TextInfo";

export default async function DefaultPostTemplate({ uri }) {
  const { post } = await getData({ variables: { uri }, query });

  return (
    <div>
      <PageHeader data={post} />
      <QuickFacts data={post?.quickFacts} />
      <TextInfo {...post?.textInfo} />
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
