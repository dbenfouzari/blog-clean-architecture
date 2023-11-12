import assert from "assert";
import { PostTitleTooLongException } from "@/modules/post/exceptions/post-title-too-long.exception";
import { PostTitleTooShortException } from "@/modules/post/exceptions/post-title-too-short.exception";

type UpdatePostConstructor = {
  title?: string;
  content?: string;
};

export class UpdatePostDto {
  title?: string;
  content?: string;

  constructor({ title, content }: UpdatePostConstructor) {
    this.title = title;
    this.content = content;

    this.validateTitleLength();
  }

  private validateTitleLength() {
    if (typeof this.title === "string") {
      assert(this.title.length > 0, new PostTitleTooShortException());
      assert(this.title.length < 25, new PostTitleTooLongException());
    }
  }
}
