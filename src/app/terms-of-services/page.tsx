import { Nav } from "@/components/Nav";
import PageContainer from "@/components/PageContainer";
import RenderMDX from "@/components/RenderMDX";
import { getTermsOfServices } from "../blog/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Services",
  description:
    "This is the terms of services page of carneiro.dev by Luiz Carneiro",
};

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
