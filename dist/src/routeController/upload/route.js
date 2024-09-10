"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const uploadLogic_1 = __importDefault(require("./controller/uploadLogic"));
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({ storage: storage });
const uploadRoute = express_1.default.Router();
uploadRoute.post("/", upload.single("image"), uploadLogic_1.default);
exports.default = uploadRoute;
//# sourceMappingURL=route.js.map