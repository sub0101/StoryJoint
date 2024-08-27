// src/types/express/index.d.ts
import { IJwtPayload } from ".";

declare module 'express-serve-static-core' {
  interface Request {
    user:  IJwtPayload;
  }
}
