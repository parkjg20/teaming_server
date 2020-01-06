"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./router/router"));
const app = express_1.default();
app.use("/router", router_1.default);
app.get('/', (req, res, next) => {
    res.send("Hello");
});
app.listen(8000, () => {
    console.log("hi");
});
