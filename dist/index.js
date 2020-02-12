"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const app = express_1.default();
const porta = 8080;
fs_1.default.readFile("./data.json", "utf8", (err, data) => {
    if (err) {
        // tslint:disable-next-line:no-console
        return console.log("Erro ao ler arquivo");
    }
    const jsonData = JSON.parse(data);
});
app.get("/", (req, res) => {
    res.status(200).send({
        title: "TS-CLINICA-WEBAPI",
        version: "1.0.0"
    });
    res.status(400).send("Oi! Houve um erro ^^");
});
app.listen(porta, () => {
    // tslint:disable-next-line:no-console
    console.log(`servidor iniciado em: http://localhost:${porta}`);
});
//# sourceMappingURL=index.js.map