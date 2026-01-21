const express = require("express");
const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
    res.json({
        message: "App is working fine now.... Let's start the work"
    })
});

const server = app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
})


module.exports = { server, app }