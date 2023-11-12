import type { PostWithUserInterface } from "@/modules/post/entities/post-with-user.interface";
import type { PostEntity } from "@/modules/post/entities/post.entity";
import type { PostReadRepositoryInterface } from "@/modules/post/interfaces/repositories/post-read.repository.interface";
import { postEntityStub } from "@/modules/post/test-utils/post-entity.stub";
import { userEntityStub } from "@/modules/post/test-utils/user.entity.stub";

export const postReadRepositoryStub: PostReadRepositoryInterface = {
  getById(postId: string): PostEntity {
    return { ...postEntityStub, id: postId };
  },
  getByIdWithUser(postId: string): PostWithUserInterface {
    return {
      ...postEntityStub,
      id: postId,
      user: userEntityStub,
    };
  },
};
