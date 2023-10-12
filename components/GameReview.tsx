import { getReviews } from "@/lib/reviews";
import Image from "./Image";
import Title from "./Title";

function GameReview({ title, date, image, body }) {
  return (
    <div>
      <Title>{title}</Title>
      <p className="italic pb-2">{date}</p>
      <Image src={image} alt="stardew-valley-game" />
      <article
        className="prose prose-slate"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </div>
  );
}

export default GameReview;
