import Title from "@/components/Title";
import GameCard from "@/components/GameCard";
import { getReviews } from "@/lib/reviews";

async function ReviewsPage() {
  const reviews = await getReviews();
  return (
    <>
      <Title className={"text-center py-5"}>Reviews</Title>
      <ul className="flex flex-wrap gap-5 justify-center">
        {reviews.map((reviewContent) => (
          <GameCard key={reviewContent.title} {...reviewContent} />
        ))}
      </ul>
    </>
  );
}

export default ReviewsPage;
