import type { PostWithUserInterface } from "@/modules/post/entities/post-with-user.interface";
import { postEntityStub } from "@/modules/post/test-utils/post-entity.stub";
import { userEntityStub } from "@/modules/post/test-utils/user.entity.stub";

export const postWithUserEntityStub: PostWithUserInterface = {
  ...postEntityStub,
  user: userEntityStub,
};
