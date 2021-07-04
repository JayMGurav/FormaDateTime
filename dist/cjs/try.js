"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
const PublishedOn = new index_1.default("Published on {DD} {MMMM} {YYYY}");
console.log(PublishedOn.render(new Date()));
//# sourceMappingURL=try.js.map