"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route_1 = __importDefault(require("./routeController/event/route"));
const route_2 = __importDefault(require("./routeController/user/route"));
const route_3 = __importDefault(require("./routeController/initEvent/route"));
const route_4 = __importDefault(require("./routeController/upload/route"));
const mainRouter = express_1.default.Router();
mainRouter.use("/eventAuth", route_1.default);
mainRouter.use("/userAuth", route_2.default);
mainRouter.use("/evenInit", route_3.default);
mainRouter.use("/upload", route_4.default);
exports.default = mainRouter;
//# sourceMappingURL=mainRoute.js.map