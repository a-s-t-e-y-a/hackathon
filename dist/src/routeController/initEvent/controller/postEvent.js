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
const eventInit_1 = __importDefault(require("../../../zod/eventInit"));
const eventInit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data_ = eventInit_1.default.parse(req.body);
        const info = yield prisma_config_1.default.event.create({
            data: {
                eventName: data_.eventName,
                ticketNo: data_.ticketNo,
                about: data_.about,
                price: data_.price,
                image: data_.image,
                eventOrganiser: { connect: { id: req.eventOrganiserId } },
            },
        });
        res.status(201).json({
            message: "Event created successfully",
            info,
        });
    }
    catch (err) {
        if (err instanceof zod_1.ZodError) {
            res.status(400).json({
                message: "Validation failed",
                errors: err.errors,
            });
        }
        else if (err.name === "PrismaClientKnownRequestError") {
            res.status(400).json({
                message: "Database error",
                error: err.message,
            });
        }
        else {
            // Handle unexpected errors
            console.log(err);
            res.status(500).send(err);
        }
    }
});
exports.default = eventInit;
//# sourceMappingURL=postEvent.js.map