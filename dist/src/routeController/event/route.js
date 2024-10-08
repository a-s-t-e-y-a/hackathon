"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const post_1 = __importDefault(require("./controller/post"));
const eventLogin_1 = __importDefault(require("./controller/eventLogin"));
const eventRoute = express_1.default.Router();
eventRoute.post("/signup", post_1.default);
eventRoute.post("/login", eventLogin_1.default);
exports.default = eventRoute;
//# sourceMappingURL=route.js.map