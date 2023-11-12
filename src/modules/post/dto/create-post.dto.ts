import assert from "assert";
import { PostTitleTooLongException } from "@/modules/post/exceptions/post-title-too-long.exception";
import { PostTitleTooShortException } from "@/modules/post/exceptions/post-title-too-short.exception";

export class CreatePostDto {
  constructor(
    readonly title: string,
    readonly content: string,
    readonly user_id: string,
  ) {
    this.validateTitleLength();
  }

  private validateTitleLength(maxAuthorizedLength = 25) {
    assert(this.title.length > 0, new PostTitleTooShortException());
    assert(this.title.length < maxAuthorizedLength, new PostTitleTooLongException());
  }
}
