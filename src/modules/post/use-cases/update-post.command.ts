import type { PostEntity } from "@/modules/post/entities/post.entity";

export interface UpdatePostCommand {
  postId: string;
  data: Partial<PostEntity>;
}
