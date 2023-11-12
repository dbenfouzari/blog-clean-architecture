import { PostException } from "./post.exception";

export class PostTitleTooLongException extends PostException {
  constructor() {
    super("[Create action] - Title length must be 25 character or less.");
  }
}
