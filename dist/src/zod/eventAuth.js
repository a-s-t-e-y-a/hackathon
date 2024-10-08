"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventLoginZod = exports.evenOraganizerZod = void 0;
const zod_1 = require("zod");
const evenOraganizerZod = zod_1.z.object({
    name: zod_1.z.string(),
    email: zod_1.z.string(),
    password: zod_1.z.string(),
});
exports.evenOraganizerZod = evenOraganizerZod;
const eventLoginZod = zod_1.z.object({
    email: zod_1.z.string(),
    password: zod_1.z.string(),
});
exports.eventLoginZod = eventLoginZod;
//# sourceMappingURL=eventAuth.js.map