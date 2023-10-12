import Title from "@/components/Title";
import GameCard from "@/components/GameCard";
import { getFeaturedReview } from "@/lib/reviews";


export default async function HomePage() {
  const featuredReview = await getFeaturedReview();
  return (
    <div>
      <Title>Gaming City</Title>
      <p className="pb-2">Only the best indie games, reviewed for you.</p>
      <GameCard {...featuredReview} />
    </div>
  );
}
