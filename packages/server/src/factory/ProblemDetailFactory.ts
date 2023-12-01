import ProblemDetails from '../utils/ProblemDetails';
import { ValidationError } from 'sequelize';

export default class ProblemDetail {
  buildProblemDetail(err: ValidationError, status: number, detail: string, helpUrl: string) {
    const errors = err.errors.map((item) => ({
      field: item.path ?? '',
      message: item.message,
    }));

    const currentDate = new Date();

    return new ProblemDetails(detail, status, helpUrl, currentDate.toISOString(), [...errors]);
  }
}
