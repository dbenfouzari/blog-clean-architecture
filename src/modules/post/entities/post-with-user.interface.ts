import type { PostEntity } from "@/modules/post/entities/post.entity";
import type { UserEntity } from "@/modules/user/entities/user.entity";

export interface PostWithUserInterface extends PostEntity {
  user: UserEntity;
}
