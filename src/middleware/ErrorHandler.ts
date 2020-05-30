import { Request, Response, NextFunction } from 'express';

import { ResponseCodes, BadRequest, NotFound, Unauthorized, Conflict } from '../utils';

class ErrorHandler {
  public parse = () => (error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof BadRequest) {
      return res.status(ResponseCodes.BAD_REQUEST).json({
        error: error.message
      });
    }
    if (error instanceof NotFound) {
      return res.status(ResponseCodes.NOT_FOUND).json({
        error: error.message
      });
    }
    if (error instanceof Unauthorized) {
      return res.status(ResponseCodes.UNAUTHORIZED).json({
        error: error.message
      });
    }
    if (error instanceof Conflict) {
      return res.status(ResponseCodes.CONFLICT).json({
        error: error.message
      });
    }

    return res.status(ResponseCodes.INTERNAL_ERROR).json({
      error: error.message || 'Internal server error, try again later'
    });
  };
}

export default new ErrorHandler();
