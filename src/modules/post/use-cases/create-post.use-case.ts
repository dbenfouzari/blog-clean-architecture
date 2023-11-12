import { CreatePostDto } from "@/modules/post/dto/create-post.dto";
import type { PostWriteRepositoryInterface } from "@/modules/post/interfaces/repositories/post-write.repository.interface";
import type { CreatePostCommand } from "@/modules/post/use-cases/create-post.command";

export class CreatePostUseCase {
  private readonly postWriteRepository: PostWriteRepositoryInterface;

  constructor(postWriteRepository: PostWriteRepositoryInterface) {
    this.postWriteRepository = postWriteRepository;
  }

  async execute(command: CreatePostCommand) {
    const dto = new CreatePostDto(command.title, command.content, command.user_id);
    await this.postWriteRepository.create(dto);
  }
}
