"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Replace these with your actual secret keys or use environment variables
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";
const authenticate = (req, res, next) => {
    var _a, _b;
    try {
        // Extract tokens from headers
        const userToken = (_a = req.headers["authorization-user-token"]) === null || _a === void 0 ? void 0 : _a.toString().replace("Bearer ", "");
        const eventOrganiserToken = (_b = req.headers["authorization-event-organiser-token"]) === null || _b === void 0 ? void 0 : _b.toString().replace("Bearer ", "");
        if (userToken != "Bearer") {
            console.log(true);
            // Verify and decode user token
            const userPayload = jsonwebtoken_1.default.verify(userToken, JWT_SECRET);
            req.userId = userPayload.id;
        }
        if (eventOrganiserToken != "Bearer") {
            // Verify and decode event organiser token
            const eventOrganiserPayload = jsonwebtoken_1.default.verify(eventOrganiserToken, JWT_SECRET);
            console.log(eventOrganiserPayload);
            req.eventOrganiserId = eventOrganiserPayload.userId;
        }
        next();
    }
    catch (error) {
        console.error("Authentication error:", error);
        res.status(401).json({ message: "Unauthorized" });
    }
};
exports.default = authenticate;
//# sourceMappingURL=auth.js.map