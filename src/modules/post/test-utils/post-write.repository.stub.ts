import type {
  PostWriteRepositoryInterface,
  UpdatePostEntityInterface,
} from "@/modules/post/interfaces/repositories/post-write.repository.interface";
import { postEntityStub } from "@/modules/post/test-utils/post-entity.stub";

export const postWriteRepositoryStub: PostWriteRepositoryInterface = {
  create(data) {
    return {
      id: "post-999",
      ...data,
    };
  },

  update(postId: string, data: UpdatePostEntityInterface) {
    return {
      ...postEntityStub,
      id: postId,
      ...data,
    };
  },
};
