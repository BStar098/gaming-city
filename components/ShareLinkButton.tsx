"use client";

import { useState } from "react";
import { LinkIcon } from "@heroicons/react/20/solid";

function ShareLinkButton() {
  const [linkCopied, setLinkCopied] = useState(false);
  const handleClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setLinkCopied((linkCopied) => !linkCopied);
    setTimeout(() => {
      setLinkCopied((linkCopied) => !linkCopied);
    }, 1500);
  };
  return (
    <div
      onClick={handleClick}
      className="flex items-center gap-1 border px-2 py-1 rounded-md text-slate-500 text-l hover:bg-orange-100  hover:text-slate-700 hover:cursor-pointer w-fit transition-all"
    >
      <LinkIcon className="h-4 w-4" />
      {linkCopied ? "Link copied!" : "Share"}
    </div>
  );
}

export default ShareLinkButton;
