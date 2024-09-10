"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const prisma_config_1 = __importDefault(require("../../../../config/prisma.config"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const eventAuth_1 = require("../../../zod/eventAuth");
const postEventAuth = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data_ = eventAuth_1.evenOraganizerZod.parse(req.body);
        const salt = yield bcrypt_1.default.genSalt(10);
        const hashedPassword = yield bcrypt_1.default.hash(data_.password, salt);
        const data = yield prisma_config_1.default.eventOrganiser.create({
            data: {
                name: data_.name,
                email: data_.email,
                password: hashedPassword,
            },
        });
        res.status(200).json({ message: "Validation successful", data });
    }
    catch (err) {
        if (err instanceof zod_1.ZodError) {
            res
                .status(400)
                .json({ message: "Validation failed", errors: err.errors });
        }
        else {
            res
                .status(500)
                .json({ message: "Internal server error", error: err.message });
        }
    }
});
exports.default = postEventAuth;
//# sourceMappingURL=post.js.map