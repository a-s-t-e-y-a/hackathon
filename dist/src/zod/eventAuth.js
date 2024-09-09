"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const evenOraganizerZod = zod_1.z.object({
    name: zod_1.z.string(),
    email: zod_1.z.string(),
    password: zod_1.z.string(),
});
exports.default = evenOraganizerZod;
//# sourceMappingURL=eventAuth.js.map