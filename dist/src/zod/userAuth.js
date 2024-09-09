"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLogin = exports.userAuthZod = void 0;
const zod_1 = require("zod");
const userAuthZod = zod_1.z.object({
    name: zod_1.z.string(),
    email: zod_1.z.string(),
    password: zod_1.z.string(),
});
exports.userAuthZod = userAuthZod;
const userLogin = zod_1.z.object({
    email: zod_1.z.string(),
    password: zod_1.z.string(),
});
exports.userLogin = userLogin;
//# sourceMappingURL=userAuth.js.map