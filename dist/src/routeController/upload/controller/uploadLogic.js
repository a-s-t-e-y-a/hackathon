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
const supabase_1 = __importDefault(require("../../../middleware/supabase"));
const winstion_1 = __importDefault(require("../../../../config/winstion"));
const uuidv4_1 = require("uuidv4");
const getUploads = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('Request file:', req.file); // Debugging log
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }
        const { buffer } = req.file;
        const { data, error } = yield supabase_1.default.storage
            .from('evc') // Replace with your bucket name
            .upload((0, uuidv4_1.uuid)(), buffer, {
            contentType: req.file.mimetype,
        });
        if (error) {
            winstion_1.default.error(error);
            throw error;
        }
        res.status(200).json({
            message: 'File uploaded successfully',
            fileUrl: process.env.BASE_URL + data.path
        });
    }
    catch (err) {
        res.status(500).json({ message: 'Upload failed', error: err.message });
    }
});
exports.default = getUploads;
//# sourceMappingURL=uploadLogic.js.map