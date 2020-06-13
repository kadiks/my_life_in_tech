"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const feathers_nedb_1 = __importDefault(require("feathers-nedb"));
const nedb_1 = __importDefault(require("nedb"));
const storiesDB = new nedb_1.default({
    filename: './db/stories',
    autoload: true,
});
const reactionsDB = new nedb_1.default({
    filename: './db/reactions',
    autoload: true,
});
const whitelistDB = new nedb_1.default({
    filename: './db/whitelist',
    autoload: true,
});
const storiesService = feathers_nedb_1.default({
    Model: storiesDB,
});
const highlightedService = feathers_nedb_1.default({
    Model: storiesDB,
});
const reactionService = feathers_nedb_1.default({
    Model: reactionsDB,
});
const whitelistService = feathers_nedb_1.default({
    Model: whitelistDB,
});
exports.default = {
    stories: storiesService,
    highlighted: highlightedService,
    reactions: reactionService,
    whitelist: whitelistService,
};
