import { CreatePostUseCase } from "./create-post.use-case";
import { PostTitleTooLongException } from "@/modules/post/exceptions/post-title-too-long.exception";
import { PostTitleTooShortException } from "@/modules/post/exceptions/post-title-too-short.exception";
import type { PostWriteRepositoryInterface } from "@/modules/post/interfaces/repositories/post-write.repository.interface";
import { postWriteRepositoryStub } from "@/modules/post/test-utils/post-write.repository.stub";

describe("Create Post", () => {
  let postWriteRepository: PostWriteRepositoryInterface;
  let createPostUseCase: CreatePostUseCase;

  beforeEach(() => {
    postWriteRepository = postWriteRepositoryStub;
    createPostUseCase = new CreatePostUseCase(postWriteRepository);
  });

  describe("throws an error", () => {
    it("when title is too short", () => {
      expect(
        createPostUseCase.execute({
          title: "",
          content: "A content",
          user_id: "user-1",
        }),
      ).rejects.toThrowError(PostTitleTooShortException);
    });

    it("when title length is greater than 25 characters", () => {
      expect(
        createPostUseCase.execute({
          title: "I'm a title with much than 25 characters",
          content: "A content",
          user_id: "user-1",
        }),
      ).rejects.toThrowError(PostTitleTooLongException);
    });
  });

  describe("is successful", () => {
    it("when title length is lesser than 25 characters", () => {
      expect(
        createPostUseCase.execute({
          title: "I'm a short title",
          content: "A content",
          user_id: "user-1",
        }),
      ).resolves.toBeUndefined();
    });
  });
});
