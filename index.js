const express = require("express");
const app = express();
const file = require("fs");
app.use(express.static('src/culminancia'))

app.get("/a", (req, res) => {
    file.readFile('src/culminancia/index.html', (err, data) => {
        if (err) throw err;
        res.write(data);
        res.end();
    })
    

});

app.listen(3250, () => console.log("rodando"));