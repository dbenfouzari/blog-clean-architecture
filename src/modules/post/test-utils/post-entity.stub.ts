import type { PostEntity } from "@/modules/post/entities/post.entity";

export const postEntityStub: PostEntity = {
  id: "post-1",
  title: "Hello Post",
  content: "I'm a single post with all necessary data",
  user_id: "user-1",
};
