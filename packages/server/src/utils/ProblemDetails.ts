interface ErrorDescription {
  field: string;
  message: string;
}

export default class ProblemDetails {
  constructor(
    private detail: string,
    private status: number,
    private helpUrl: string,
    private date: string,
    private errors: ErrorDescription[],
  ) {}
}
