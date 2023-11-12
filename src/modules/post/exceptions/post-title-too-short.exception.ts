import { PostException } from "@/modules/post/exceptions/post.exception";

export class PostTitleTooShortException extends PostException {
  constructor() {
    super("Post title must be greater than 0 characters");
  }
}
