"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const post_1 = __importDefault(require("./controller/post"));
const userLogin_1 = __importDefault(require("./controller/userLogin"));
const userRoute = express_1.default.Router();
userRoute.post("/signup", post_1.default);
userRoute.post("/login", userLogin_1.default);
exports.default = userRoute;
//# sourceMappingURL=route.js.map