import Link from "next/link";
import React from "react";
import Image from "./Image";

function GameCard({ title, image, href }) {
  return (
    <div className="bg-white w-fit rounded-lg shadow  hover:shadow-xl transition-all">
      <Link href={href}>
        <Image
          width="320"
          height="180"
          src={image}
          className="rounded-none rounded-t-lg"
        />
        <h2 className="py-1 text-center font-semibold text-lg">{title}</h2>
      </Link>
    </div>
  );
}

export default GameCard;
