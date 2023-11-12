import type { PostWithUserInterface } from "@/modules/post/entities/post-with-user.interface";
import { PostNotFoundException } from "@/modules/post/exceptions/post-not-found.exception";
import type { PostReadRepositoryInterface } from "@/modules/post/interfaces/repositories/post-read.repository.interface";
import type { GetPostByIdWithUserCommand } from "@/modules/post/use-cases/get-post-by-id-with-user.command";

export class GetPostByIdWithUserUseCase {
  constructor(private readonly postReadRepository: PostReadRepositoryInterface) {}

  async execute(command: GetPostByIdWithUserCommand): Promise<PostWithUserInterface> {
    const post = await this.postReadRepository.getByIdWithUser(command.postId);

    if (!post) {
      throw new PostNotFoundException({ postId: command.postId });
    }

    return post;
  }
}
