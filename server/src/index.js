"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = __importStar(require("dotenv"));
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var helmet_1 = __importDefault(require("helmet"));
dotenv.config();
// Global vars
if (!process.env.PORT) {
    process.exit(1);
}
var PORT = parseInt(process.env.PORT, 10);
var app = express_1.default();
// Config
app.use(helmet_1.default());
app.use(cors_1.default());
app.use(express_1.default.json());
// Start server
console.log('prout prout prout');
var server = app.listen(PORT, function () {
    console.log("Listening on port " + PORT);
});
