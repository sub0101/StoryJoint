"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const server = app_1.app.listen(process.env.PORT, () => {
    console.log("server is running");
});
