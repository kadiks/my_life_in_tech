"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
const feathers_1 = __importDefault(require("@feathersjs/feathers"));
require("@feathersjs/transport-commons");
const express_1 = __importDefault(require("@feathersjs/express"));
const mongoose = require('mongoose');
const service = require('feathers-mongoose');
const story_1 = __importDefault(require("./models/story"));
const word_1 = __importDefault(require("./models/word"));
const reaction_1 = __importDefault(require("./models/reaction"));
const comment_1 = __importDefault(require("./models/comment"));
mongoose.Promise = global.Promise;
const hooks_1 = __importDefault(require("./hooks"));
const cors_1 = __importDefault(require("cors"));
// Environment Variables Get, Check & Assign
dotenv.config();
['PORT', 'DBUSER', 'DBPSWD', 'DBNAME', 'DBNAME_DEV'].forEach(envKey => {
    if (!process.env[envKey]) {
        console.log(`No ${envKey} in .env`);
        process.exit(1);
    }
});
const PORT = parseInt(process.env.PORT, 10);
let { DBUSER, DBPSWD, DBNAME, DBNAME_DEV, NODE_ENV } = process.env;
DBNAME = NODE_ENV === 'production' ? DBNAME : DBNAME_DEV;
// DB Connect
const dburi = `mongodb+srv://${DBUSER}:${DBPSWD}@cluster0-ofiq6.mongodb.net/${DBNAME}?retryWrites=true&w=majority`;
const dbConnectOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
mongoose.connect(dburi, dbConnectOptions);
const app = express_1.default(feathers_1.default());
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// STATIC FOLDER
app.use('/', express_1.default.static('public'));
// REST API
app.configure(express_1.default.rest());
// Services registration
//   Stories
app.use('/stories/highlighted', service({ Model: story_1.default }));
app.service('stories/highlighted').hooks(hooks_1.default.highlighted);
app.use('/stories', service({ Model: story_1.default }));
app.service('stories').hooks(hooks_1.default.story);
// Whitelist
app.use('/whitelist', service({ Model: word_1.default }));
// Reaction Count
app.use('/stories/:storyId/reactions/count', service({ Model: reaction_1.default }));
app.service('stories/:storyId/reactions/count').hooks(hooks_1.default.reactionsCount);
//  Reaction
app.use('/stories/:storyId/reactions', service({ Model: reaction_1.default }));
app.service('stories/:storyId/reactions').hooks(hooks_1.default.reactions);
// Comments
app.use('/stories/:storyId/comments', service({ Model: comment_1.default }));
app.service('stories/:storyId/comments').hooks(hooks_1.default.comments);
// Express midlleware / Neat error handler
app.use(express_1.default.errorHandler());
// Start the server
const server = app
    .listen(PORT)
    .on('listening', () => console.log(`Feathers server listening on localhost:${PORT}`));
if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => server.close());
}
