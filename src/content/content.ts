import { z, defineCollection, reference } from "astro:content";

const booksCollection = defineCollection({
  type: "content",
  schema: {
    title: z.string(),
    author: reference("author"),
    shortContent: z.string(),
    image: z.string(),
  },
});

const authorsCollection = defineCollection({
  type: "content",
  schema: {
    name: z.string(),
    nickname: z.string(),
  },
});

export const collections = {
  books: booksCollection,
  authors: authorsCollection,
};
