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
Object.defineProperty(exports, "__esModule", { value: true });
const whitelist = __importStar(require("./whitelist.json"));
const createdAt = async (context) => {
    context.data.date = Date.now();
    return context;
};
const linkToId = async (context) => {
    const storyId = context.params.route.storyId;
    context.data.storyId = storyId;
    return context;
};
const filterHandle = async (context) => {
    if (!context.data.handle) {
        context.data.handle = '';
    }
    return context;
};
const pick = (xs) => {
    const index = Math.floor(Math.random() * xs.length);
    return xs[index];
};
const randomStory = async (context) => {
    context.result = [...new Array(3)].map(() => pick(context.result));
    return context;
};
const error = async (context) => {
    console.log(context.error);
    return context;
};
const filterByStory = async (context) => {
    const storyId = context.params.route.storyId;
    context.params.query = { storyId };
    return context;
};
function createWhiteList(comment) {
    const whiteWords = whitelist.words;
    const storyWords = comment.split(' ');
    const whiteList = whiteWords.filter((w) => storyWords.includes(w));
    return whiteList;
}
const addWhiteList = async (context) => {
    const story = context.result;
    story.whiteList = createWhiteList(story.content);
    console.log(story);
};
const addWhitelists = async (context) => {
    const stories = context.result.map((story) => {
        const whiteList = createWhiteList(story.content);
        return { whiteList, ...story };
    });
    context.result = stories;
    return context;
};
const mergeCount = async (context) => {
    let result = context.result;
    let counts = {};
    result.forEach((item) => {
        if (item.reaction in counts) {
            counts[item.reaction]++;
        }
        else {
            counts[item.reaction] = 1;
        }
    });
    context.result = counts;
    console.log(counts);
    return context;
};
const addReactions = async (context) => {
    return context;
};
const storyHook = {
    before: {
        create: [createdAt, filterHandle],
    },
    after: {
        // One story
        get: [addWhiteList, addReactions],
        // All stories
        find: [addWhitelists, addReactions],
    },
};
const highlightHook = {
    after: {
        find: [randomStory],
    },
    error: {
        all: [error],
    },
};
const reactionsHook = {
    before: {
        create: [createdAt, linkToId],
        find: [filterByStory],
    },
};
const reactionsCountHook = {
    before: {
        create: [createdAt, linkToId],
        find: [filterByStory],
    },
    after: {
        find: [mergeCount],
    }
};
const commentsHook = {
    before: {
        create: [createdAt, linkToId],
        find: [filterByStory],
    },
};
exports.default = {
    story: storyHook,
    highlighted: highlightHook,
    reactions: reactionsHook,
    reactionsCount: reactionsCountHook,
    comments: commentsHook,
};
