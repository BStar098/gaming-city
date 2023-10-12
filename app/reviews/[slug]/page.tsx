import GameReview from "@/components/GameReview";
import { getReviewContent, getSlugs } from "@/lib/reviews";

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export const generateMetadata = async ({ params: { slug } }) => {
  let reviewContent = await getReviewContent(slug);
  return {
    title: reviewContent.title,
  };
};

async function GameReviewPage({ params: { slug } }) {
  let reviewContent = await getReviewContent(slug);

  return <GameReview {...reviewContent} />;
}

export default GameReviewPage;
