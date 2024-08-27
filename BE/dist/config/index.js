"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = __importDefault(require("zod"));
const envSchema = zod_1.default.object({
    PORT: zod_1.default.string().default("8000"),
    DATABASE_URL: zod_1.default.string().url(),
});
const env = envSchema.parse(process.env);
exports.default = env;
