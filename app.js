const express = require('express');
const app = express();
const port = 8080;

const fs = require('fs');

app.get('/', (req, res) => {

    fs.readFile('ERC20.dapp', function(err, data) {



        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
});

function parseContract(html) {
    console.log("in myfunc");

    return "";
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`));