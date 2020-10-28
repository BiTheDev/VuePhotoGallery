const xp = require("express");
const bp = require("body-parser");
const router = require("./server/routes.js");
const path = require("path");
const app = xp();
app.use(xp.static(__dirname + '/client/public/'));
app.use(bp.json());
app.use(bp.urlencoded({extended: true}));
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    // res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
router(app);
app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));