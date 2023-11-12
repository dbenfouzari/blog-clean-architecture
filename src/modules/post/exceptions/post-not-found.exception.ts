import { PostException } from "./post.exception";

export class PostNotFoundException extends PostException {
  constructor({ postId }: { postId: string }) {
    super(`Cannot find Post with ID ${postId}`);
  }
}
