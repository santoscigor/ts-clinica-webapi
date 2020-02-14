"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const shift_1 = __importDefault(require("./routes/shift"));
const db_1 = require("./services/db");
db_1.db.checkDb();
const app = express_1.default();
const port = process.env.PORT || 8080;
app.use(express_1.default.json());
app.use("/shifts", shift_1.default);
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map