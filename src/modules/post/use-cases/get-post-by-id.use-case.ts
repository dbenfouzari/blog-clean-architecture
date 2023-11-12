import type { PostEntity } from "@/modules/post/entities/post.entity";
import { PostNotFoundException } from "@/modules/post/exceptions/post-not-found.exception";
import type { PostReadRepositoryInterface } from "@/modules/post/interfaces/repositories/post-read.repository.interface";
import type { GetPostByIdCommand } from "@/modules/post/use-cases/get-post-by-id.command";

export class GetPostByIdUseCase {
  constructor(private readonly postReadRepository: PostReadRepositoryInterface) {}

  async execute(command: GetPostByIdCommand): Promise<PostEntity> {
    const post = await this.postReadRepository.getById(command.postId);

    if (!post) {
      throw new PostNotFoundException({ postId: command.postId });
    }

    return post;
  }
}
