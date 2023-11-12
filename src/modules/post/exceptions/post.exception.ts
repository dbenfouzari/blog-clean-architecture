export class PostException extends Error {
  constructor(message: string) {
    super(`[Post] - ${message}`);
  }
}
