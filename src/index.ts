import express from "express";
const app = express();
const porta = 8080;

app.get( "/", ( req, res ) => {
    res.send( "Oi! ^^" );
} );

app.listen( porta, () => {
    // tslint:disable-next-line:no-console
    console.log( `servidor iniciado em: http://localhost:${ porta }` );
} );