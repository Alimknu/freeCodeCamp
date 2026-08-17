const notFoundHandler = (req, res, next) => {
  const error = new Error(req.originalUrl);
  error.status = 404;
  next(error);
};

const finalErrorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  console.error(err);
  res.status(status).json({ 
    error: true, 
    status: status, 
    message: err.message || "Internal Server Error (Check Server Logs)" 
  });
};

export { notFoundHandler, finalErrorHandler };
