"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const winstion_1 = __importDefault(require("../config/winstion"));
const mainRoute_1 = __importDefault(require("./mainRoute"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = 3001;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api/v1", mainRoute_1.default);
app.listen(PORT, () => {
    winstion_1.default.info("SERVER STARTED ");
});
//# sourceMappingURL=server.js.map