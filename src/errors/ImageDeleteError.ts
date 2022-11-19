export class ImageDeleteError extends Error {

  constructor(message: string) {
    super(`Failed to delete a image: ${message}`);
  }

}
