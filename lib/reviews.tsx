import { readdir } from "fs/promises";
import { readFile } from "fs/promises";
import matter from "gray-matter";
import { marked } from "marked";

export const getReviewContent = async (slug: String) => {
  const text = await readFile(`./content/reviews/${slug}.md`, "utf-8");
  const {
    content,
    data: { title, date, image },
  } = matter(text);
  const body = marked(content);
  return { href: `/reviews/${slug}`, title, date, image, body };
};

export const getReviews = async () => {
  const slugs = await getSlugs();
  const reviews = [];
  for (const slug of slugs) {
    const review = await getReviewContent(slug);
    reviews.push(review);
  }
  return reviews.sort(({ date: firstDate }, { date: secondDate }) => {
    return firstDate.localeCompare(secondDate);
  });
};

export const getSlugs = async () => {
  const files = await readdir("./content/reviews");
  return files
    .filter((review) => review.endsWith(".md"))
    .map((review) => review.slice(0, -".md".length));
};

export const getFeaturedReview = async () => {
  let featuredReview = await getReviews();

  return featuredReview[0];
};
