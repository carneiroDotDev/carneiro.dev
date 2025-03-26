import { Nav } from "@/components/Nav";
import PageContainer from "@/components/PageContainer";
import RenderMDX from "@/components/RenderMDX";
import { getPrivacyPolicy } from "../blog/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "This is the privacy policy page of carneiro.dev by Luiz Carneiro",
};

export default function PrivacyPolicy() {
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
