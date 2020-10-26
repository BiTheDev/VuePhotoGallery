const xp = require("express");
const bp = require("body-parser");
const router = require("./server/routes.js");
const path = require("path");
const app = xp();
app.use(xp.static(__dirname + '/client/public/'));
app.use(bp.json());
app.use(bp.urlencoded({extended: true}));
router(app);
app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));