import { UpdatePostDto } from "@/modules/post/dto/update-post.dto";
import { PostNotFoundException } from "@/modules/post/exceptions/post-not-found.exception";
import type { PostReadRepositoryInterface } from "@/modules/post/interfaces/repositories/post-read.repository.interface";
import type { PostWriteRepositoryInterface } from "@/modules/post/interfaces/repositories/post-write.repository.interface";
import type { UpdatePostCommand } from "@/modules/post/use-cases/update-post.command";

export class UpdatePostUseCase {
  constructor(
    private readonly postReadRepository: PostReadRepositoryInterface,
    private readonly postWriteRepository: PostWriteRepositoryInterface,
  ) {}

  async execute(command: UpdatePostCommand) {
    const post = await this.postReadRepository.getById(command.postId);

    if (!post) {
      throw new PostNotFoundException({ postId: command.postId });
    }

    const dto = new UpdatePostDto(command.data);

    await this.postWriteRepository.update(command.postId, dto);
  }
}
