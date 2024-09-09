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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userAuth_1 = require("../../../zod/userAuth");
// Replace with your actual secret key
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Validate the incoming request data
        const data_ = userAuth_1.userLogin.parse(req.body);
        // Find the user by email
        const user = yield prisma_config_1.default.user.findFirst({
            where: { email: data_.email },
        });
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        // Compare the provided password with the stored hashed password
        const isMatch = yield bcrypt_1.default.compare(data_.password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        // Generate a JWT token
        const token = jsonwebtoken_1.default.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: "1h" });
        // Send the token in the response
        res.status(200).json({
            message: "Login successful user",
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
            },
        });
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
exports.default = login;
//# sourceMappingURL=userLogin.js.map