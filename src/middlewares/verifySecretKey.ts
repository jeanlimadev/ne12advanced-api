import { NextFunction, Request, Response } from "express";


export async function verifySecretKey(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { secret } = request.headers;

  if (secret != process.env.SECRET_KEY) {
    return response.json({ error: "Invalid secret key!" });
  }

  next();
} 