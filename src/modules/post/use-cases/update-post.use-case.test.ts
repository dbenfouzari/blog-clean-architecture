import { PostNotFoundException } from "@/modules/post/exceptions/post-not-found.exception";
import { PostTitleTooLongException } from "@/modules/post/exceptions/post-title-too-long.exception";
import { PostTitleTooShortException } from "@/modules/post/exceptions/post-title-too-short.exception";
import type { PostReadRepositoryInterface } from "@/modules/post/interfaces/repositories/post-read.repository.interface";
import type { PostWriteRepositoryInterface } from "@/modules/post/interfaces/repositories/post-write.repository.interface";
import { postReadRepositoryStub } from "@/modules/post/test-utils/post-read.repository.stub";
import { postWriteRepositoryStub } from "@/modules/post/test-utils/post-write.repository.stub";
import { UpdatePostUseCase } from "@/modules/post/use-cases/update-post.use-case";

describe("Update Post", () => {
  let postReadRepository: PostReadRepositoryInterface;
  let postWriteRepository: PostWriteRepositoryInterface;
  let updatePostUseCase: UpdatePostUseCase;

  beforeEach(() => {
    postReadRepository = postReadRepositoryStub;
    postWriteRepository = postWriteRepositoryStub;
    updatePostUseCase = new UpdatePostUseCase(postReadRepository, postWriteRepository);
  });

  it("should throw an error when title is longer than 25 characters", () => {
    expect(
      updatePostUseCase.execute({
        postId: "post-1",
        data: {
          title: "This is a really long title that makes more than 25 characters",
        },
      }),
    ).rejects.toThrow(PostTitleTooLongException);
  });

  it("should throw an error if title is too short", () => {
    expect(
      updatePostUseCase.execute({
        postId: "post-1",
        data: {
          title: "",
        },
      }),
    ).rejects.toThrow(PostTitleTooShortException);
  });

  it("should throw an error when post could not be find", () => {
    vi.spyOn(postReadRepository, "getById").mockResolvedValueOnce(null);

    expect(
      updatePostUseCase.execute({
        postId: "post-1",
        data: {
          title: "Short title",
        },
      }),
    ).rejects.toThrow(PostNotFoundException);
  });

  it("should be successful when title it lower than 25 characters and post exists", () => {
    expect(
      updatePostUseCase.execute({
        postId: "post-1",
        data: {
          title: "Short title",
        },
      }),
    ).resolves.toBeUndefined();
  });

  it("should call repository update method", async () => {
    const updateSpy = vi.spyOn(postWriteRepository, "update");

    await updatePostUseCase.execute({
      postId: "post-1",
      data: {
        title: "Short title",
      },
    });

    expect(updateSpy).toHaveBeenCalledOnce();
  });
});
