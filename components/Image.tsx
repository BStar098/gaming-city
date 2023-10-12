import React from "react";

function Image({
  src = "/images/notfound.png",
  width = "640",
  height = "360",
  className = "",
  alt = "",
}) {
  return (
    <img
      src={src}
      width={width}
      height={height}
      className={`rounded-xl ${className}`}
      alt={alt}
    />
  );
}

export default Image;
