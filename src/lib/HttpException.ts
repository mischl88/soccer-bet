export class HttpException extends Error {
  public name: string;
  public statusCode?: number;
  public message: string;

  constructor(message: string, statusCode?: number) {
    super(message);
    this.name = 'HttpException';
    this.statusCode = statusCode;
    this.message = message;
  }
}
