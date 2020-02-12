"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const porta = 8080;
app.get("/", (req, res) => {
    res.send("Oi! ^^");
});
app.listen(porta, () => {
    // tslint:disable-next-line:no-console
    console.log(`servidor iniciado em: http://localhost:${porta}`);
});
//# sourceMappingURL=index.js.map