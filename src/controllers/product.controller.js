const db = require("../config/database");

const {Parser} = require('json2csv');
const json2csvParser = new Parser();


// /**
//  * Comments/Reviews: Obtains all reviews/comments of a specific location (obtained through using vid)
//  * @param {url} req: request URL data from user selected venue/location
//  * @param {*} res: all comments of the corresponding location (vid)
//  */
exports.getRecord = async (req, res) => {
    let locationId = req.params.id;
    let response = await db.query('SELECT * FROM "tblRecord" ' + 'WHERE hid = ' + locationId + 'ORDER BY created_at DESC;');
    res.status(200).send(response.rows);
};

// /**
//  * Insert Comment/Review: Inserts user insert data of review into tblReview in the database
//  * @param {form} req - form body that contains user selected information
//  * @param {status} res - confirmation that comment has been added into the review table
//  */
exports.addRecord = async(req, res) => {
    let {contributor, content, lat, lng} = req.body;
    // let currTime = new Date().toISOString();
    console.log('INSERT INTO "tblRecord"(contributor, content, lat, lng) VALUES ($1, $2, $3, $4)',
        [contributor, content, lat, lng]);
    let {recordRows} = await db.query(
        'INSERT INTO "tblRecord"(contributor, content, lat, lng) VALUES ($1, $2, $3, $4)',
        [contributor, content, lat, lng]
    )

    res.status(200).send({
        message: "comment added into record table!",
        body: {
            record: {contributor, content, lat, lng}
        }
    })
};