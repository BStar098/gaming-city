import { getReviews } from "@/lib/reviews";
import Image from "./Image";
import Title from "./Title";
import ShareLinkButton from "./ShareLinkButton";

function GameReview({ title, date, image, body }) {
  return (
    <div>
      <Title>{title}</Title>
      <div className="flex gap-2 align-middle items-baseline mb-2">
        <p className="italic pb-2 font-bold">{date}</p>
        <ShareLinkButton />
      </div>

      <Image src={image} alt="stardew-valley-game" />
      <article
        className="prose prose-slate"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </div>
  );
}

export default GameReview;
