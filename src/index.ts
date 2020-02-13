import express from "express";
import fs from "fs";

const app = express();
const porta = 8080;

fs.readFile("./data.json", "utf8", (err, data) => {
    if(err){
        // tslint:disable-next-line:no-console
        return console.log("Erro ao ler arquivo!");
    }

    const jsonData = JSON.parse(data);
  });

app.get( "/", ( req, res ) => {
    res.status(200).send({
        title: "TS-CLINICA-WEBAPI",
        version: "1.0.0"
    });
    res.status(400).send( "Oi! Houve um erro com a API ^^'" );
} );

app.listen( porta, () => {
    // tslint:disable-next-line:no-console
    console.log( `servidor iniciado em: http://localhost:${ porta }` );
} );