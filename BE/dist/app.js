"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./app/routes"));
const ApiError_1 = __importDefault(require("./Error/ApiError"));
exports.app = (0, express_1.default)();
console.log("app");
exports.app.use("/api/v1", routes_1.default);
exports.app.use((err, req, res, next) => {
    if (err instanceof ApiError_1.default) {
        return res.status(err.statusCode).json({ success: false, message: err.message });
    }
    else {
        return res.status(404).json({ success: false, message: "something went Wrong" });
    }
});
