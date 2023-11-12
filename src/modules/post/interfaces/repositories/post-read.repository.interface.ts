import type { PostWithUserInterface } from "@/modules/post/entities/post-with-user.interface";
import type { PostEntity } from "@/modules/post/entities/post.entity";
import type { MaybePromise } from "@/types";

export interface PostReadRepositoryInterface {
  getById(postId: string): MaybePromise<PostEntity | null>;
  getByIdWithUser(postId: string): MaybePromise<PostWithUserInterface | null>;
}
