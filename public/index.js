import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

// var correctpass = false;

// function passcheck(req, res, next) {
//     const password = req.body["password"];
//     if (password === "ILoveProgramming") {
//         correctpass = true;
//     }
//     next();
// }

// app.use(passcheck);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    if (req.body["password"] === "ILoveProgramming") {
        res.sendFile(__dirname + "/public/secret.html");
    }
    else {
        res.sendFile(__dirname + "/public/index.html");
    }
});

app.listen(port, () => {
    console.log(`server is running on the port${port}.`);
});
