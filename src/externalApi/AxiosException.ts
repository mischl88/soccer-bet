export class AxiosException extends Error {
  public name: string;
  public statusCode?: number;
  public message: string;

  constructor(message: string, statusCode?: number) {
    super(message);
    this.name = 'AxiosException';
    this.statusCode = statusCode;
    this.message = message;
  }
}
