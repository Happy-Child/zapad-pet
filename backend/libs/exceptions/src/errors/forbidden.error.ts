import { ForbiddenException } from '@nestjs/common';
import { IAbstractError, TExceptionValidationError } from '@libs/exceptions';
import { getDefaultExceptionErrors } from '../helpers/get-default-errors.helper';

const defaultErrors = getDefaultExceptionErrors('Forbidden');

class ForbiddenError extends ForbiddenException implements IAbstractError {
  constructor(
    public readonly errors: TExceptionValidationError[] = defaultErrors,
  ) {
    super();
  }
}

export { ForbiddenError };
