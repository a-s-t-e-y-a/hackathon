"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const eventInitZod = zod_1.z.object({
    eventName: zod_1.z.string().min(1, "Event name is required"), // Ensure non-empty event name
    ticketNo: zod_1.z.number().int().positive(), // Ensure ticket number is a positive integer
    about: zod_1.z.string().min(1, "About field cannot be empty"), // Ensure non-empty about field
    price: zod_1.z.number(),
    image: zod_1.z.string(),
});
exports.default = eventInitZod;
//# sourceMappingURL=eventInit.js.map