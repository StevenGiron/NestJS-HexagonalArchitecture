import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from "@nestjs/common";
import { AppLogger } from '../configuracion/logger.service';
import { Request, Response } from "express";
import { Message } from "./message";



@Catch(Error)
export class FiltroExcepcionesDeNegocio implements ExceptionFilter {

    constructor(private readonly logger: AppLogger) {
        
    }

    catch(error: Error, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();

        const statusCode = HttpStatus.BAD_REQUEST;

        const message: Message = {
            statusCode,
            timestamp: new Date().toISOString(),
            path: request.url,
            message: error.message,
        };

        this.logger.customError(error);
        response.status(statusCode).json(message);
    }
}