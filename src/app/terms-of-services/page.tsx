import { Nav } from "@/components/Nav";
import PageContainer from "@/components/PageContainer";
import RenderMDX from "@/components/RenderMDX";
import { getTermsOfServices } from "../blog/utils";

export default function TermsOfServices() {
  const post = getTermsOfServices().find(
    (post) => post.slug === "terms-of-services"
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
