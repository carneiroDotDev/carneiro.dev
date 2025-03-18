import { Nav } from "@/components/Nav";
import PageContainer from "@/components/PageContainer";
import RenderMDX from "@/components/RenderMDX";
import { getPrivacyPolicy } from "../blog/utils";

export default function TermsOfServices() {
  const post = getPrivacyPolicy().find(
    (post) => post.slug === "privacy-policy"
  );
  return (
    <PageContainer>
      <>
        <Nav />
        {post && (
          <article className="prose">
            <RenderMDX source={post.content} />
          </article>
        )}
      </>
    </PageContainer>
  );
}
