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
exports.eventGetId = exports.eventGet = void 0;
const prisma_config_1 = __importDefault(require("../../../../config/prisma.config"));
const eventGet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const info = yield prisma_config_1.default.event.findMany({});
        res.status(200).json({
            info,
        });
    }
    catch (err) {
        res.status(404).json({
            message: "Error occured",
        });
    }
});
exports.eventGet = eventGet;
const eventGetId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const info = yield prisma_config_1.default.event.findUnique({
            where: {
                id: id,
            },
        });
        res.status(200).json({
            info,
        });
    }
    catch (err) {
        res.status(404).json({
            message: "Some error occured",
        });
    }
});
exports.eventGetId = eventGetId;
//# sourceMappingURL=getEvent.js.map