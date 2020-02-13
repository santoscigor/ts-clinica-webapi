import * as express from "express";

export const register = ( app: express.Application ) => {

    app.get( `/api/rules/all`, async ( req: any, res ) => {
        try {
            // const userId = req.userContext.userinfo.sub;
            // const rules = await db.any( `
            //     SELECT
            //         id
            //         , brand
            //         , model
            //         , year
            //         , color
            //     FROM    rules
            //     WHERE   user_id = $[userId]
            //     ORDER BY year, brand, model`, { userId } );
            // return res.json( rules );
        } catch ( err ) {
            // tslint:disable-next-line:no-console
            console.error(err);
            res.json( { error: err.message || err } );
        }
    } );

    app.get( `/api/rules/all`, async ( req: any, res ) => {
        try {
            // const userId = req.userContext.userinfo.sub;
            // const total = await db.one( `
            // SELECT  count(*) AS total
            // FROM    rules
            // WHERE   user_id = $[userId]`, { userId }, ( data: { total: number } ) => {
            //     return {
            //         total: +data.total
            //     };
            // } );
            // return res.json( total );
        } catch ( err ) {
            // tslint:disable-next-line:no-console
            console.error(err);
            res.json( { error: err.message || err } );
        }
    } );

    app.get( `/api/rules/find/:search`, async ( req: any, res ) => {
        try {
            // const userId = req.userContext.userinfo.sub;
            // const rules = await db.any( `
            //     SELECT
            //         id
            //         , brand
            //         , model
            //         , year
            //         , color
            //     FROM    rules
            //     WHERE   user_id = $[userId]
            //     AND   ( brand ILIKE $[search] OR model ILIKE $[search] )`,
            //     { userId, search: `%${ req.params.search }%` } );
            return res.json( { text: "search" } );
        } catch ( err ) {
            // tslint:disable-next-line:no-console
            console.error(err);
            res.json( { error: err.message || err } );
        }
    } );

    app.post( `/api/rules/add`, async ( req: any, res ) => {
        try {
            // const userId = req.userContext.userinfo.sub;
            // const id = await db.one( `
            //     INSERT INTO rules( user_id, brand, model, year, color )
            //     VALUES( $[userId], $[brand], $[model], $[year], $[color] )
            //     RETURNING id;`,
            //     { userId, ...req.body  } );
            return res.json( { text: "add" } );
        } catch ( err ) {
            // tslint:disable-next-line:no-console
            console.error(err);
            res.json( { error: err.message || err } );
        }
    } );

    app.post( `/api/rules/update`, async ( req: any, res ) => {
        try {
            // const userId = req.userContext.userinfo.sub;
            // const id = await db.one( `
            //     UPDATE rules
            //     SET brand = $[brand]
            //         , model = $[model]
            //         , year = $[year]
            //         , color = $[color]
            //     WHERE
            //         id = $[id]
            //         AND user_id = $[userId]
            //     RETURNING
            //         id;`,
            //     { userId, ...req.body  } );
            return res.json( { text: "update" } );
        } catch ( err ) {
            // tslint:disable-next-line:no-console
            console.error(err);
            res.json( { error: err.message || err } );
        }
    } );

    app.delete( `/api/rules/remove/:id`, async ( req: any, res ) => {
        try {
            // const userId = req.userContext.userinfo.sub;
            // const id = await db.result( `
            //     DELETE
            //     FROM    rules
            //     WHERE   user_id = $[userId]
            //     AND     id = $[id]`,
            //     { userId, id: req.params.id  }, ( r ) => r.rowCount );
            // return res.json( { id } );
        } catch ( err ) {
            // tslint:disable-next-line:no-console
            console.error(err);
            res.json( { error: err.message || err } );
        }
    } );
};