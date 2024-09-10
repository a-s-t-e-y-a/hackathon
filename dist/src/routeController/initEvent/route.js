"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postEvent_1 = __importDefault(require("./controller/postEvent"));
const getEvent_1 = require("./controller/getEvent");
const auth_1 = __importDefault(require("../../middleware/auth"));
const eventInitRoute = express_1.default.Router();
eventInitRoute.post("/", auth_1.default, postEvent_1.default);
eventInitRoute.get("/", getEvent_1.eventGet);
eventInitRoute.get("/:id", getEvent_1.eventGetId);
exports.default = eventInitRoute;
//# sourceMappingURL=route.js.map