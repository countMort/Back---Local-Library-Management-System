import { ErrorRequestHandler } from "express";

// export const ResponseWrapper: ErrorRequestHandler = (data, req, res, next) => {
//     const response = {
//         results: data,
//         status: 200,
//         page: 1
//     }
//     res.json(response)
// }

export const ErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
    const errStatus = err.statusCode || 500;
    const errMsg = err.message || 'Something went wrong';
    res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMsg,
        stack: process.env.NODE_ENV === 'development' ? err.stack : {}
    })
}