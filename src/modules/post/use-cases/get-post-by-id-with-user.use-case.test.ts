import { PostNotFoundException } from "@/modules/post/exceptions/post-not-found.exception";
import type { PostReadRepositoryInterface } from "@/modules/post/interfaces/repositories/post-read.repository.interface";
import { postReadRepositoryStub } from "@/modules/post/test-utils/post-read.repository.stub";
import { postWithUserEntityStub } from "@/modules/post/test-utils/post-with-user.entity.stub";
import { GetPostByIdWithUserUseCase } from "@/modules/post/use-cases/get-post-by-id-with-user.use-case";

describe("Get Post by ID with User", () => {
  let postReadRepository: PostReadRepositoryInterface;
  let getPostByIdWithUserUseCase: GetPostByIdWithUserUseCase;

  beforeEach(() => {
    postReadRepository = postReadRepositoryStub;
    getPostByIdWithUserUseCase = new GetPostByIdWithUserUseCase(postReadRepository);
  });

  it("should throw an error if post cannot be find", () => {
    vi.spyOn(postReadRepository, "getByIdWithUser").mockResolvedValueOnce(null);

    expect(getPostByIdWithUserUseCase.execute({ postId: "post-1" })).rejects.toThrow(
      new PostNotFoundException({ postId: "post-1" }),
    );
  });

  it("should return post with user", () => {
    expect(getPostByIdWithUserUseCase.execute({ postId: "post-1" })).resolves.toEqual(
      postWithUserEntityStub,
    );
  });
});
