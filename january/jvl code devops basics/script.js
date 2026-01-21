const express = require("express");
const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
    res.json({
        message: "App working sucessfully"
    })
});

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
})