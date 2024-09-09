"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const post_1 = __importDefault(require("./controller/post"));
const eventRoute = express_1.default.Router();
eventRoute.post("/", post_1.default);
exports.default = eventRoute;
//# sourceMappingURL=route.js.map