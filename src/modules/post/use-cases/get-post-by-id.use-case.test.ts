import { PostNotFoundException } from "@/modules/post/exceptions/post-not-found.exception";
import type { PostReadRepositoryInterface } from "@/modules/post/interfaces/repositories/post-read.repository.interface";
import { postReadRepositoryStub } from "@/modules/post/test-utils/post-read.repository.stub";
import { GetPostByIdUseCase } from "@/modules/post/use-cases/get-post-by-id.use-case";

describe("Get Post by ID use case", () => {
  let postReadRepository: PostReadRepositoryInterface;
  let getPostByIdUseCase: GetPostByIdUseCase;

  beforeEach(() => {
    postReadRepository = postReadRepositoryStub;
    getPostByIdUseCase = new GetPostByIdUseCase(postReadRepository);
  });

  it("should return post with correct id", () => {
    expect(getPostByIdUseCase.execute({ postId: "post-1" })).resolves.toEqual({
      id: "post-1",
      title: "Hello Post",
      content: "I'm a single post with all necessary data",
      user_id: "user-1",
    });
  });

  it("should call `getById` repository method", async () => {
    const getByIdSpy = vi.spyOn(postReadRepository, "getById");

    await getPostByIdUseCase.execute({ postId: "post-1" });

    expect(getByIdSpy).toHaveBeenNthCalledWith(1, "post-1");
  });

  it("should throw an error when post not found", () => {
    vi.spyOn(postReadRepository, "getById").mockResolvedValueOnce(null);

    expect(getPostByIdUseCase.execute({ postId: "post-1" })).rejects.toThrowError(
      PostNotFoundException,
    );
  });
});
