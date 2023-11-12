import type { PostEntity } from "@/modules/post/entities/post.entity";
import type { MaybePromise } from "@/types";

export interface CreatePostEntityInterface {
  title: string;
  content: string;
  user_id: string;
}

export type UpdatePostEntityInterface = Partial<PostEntity>;

export interface PostWriteRepositoryInterface {
  create(data: CreatePostEntityInterface): MaybePromise<PostEntity>;
  update(postId: string, data: UpdatePostEntityInterface): MaybePromise<PostEntity>;
}
