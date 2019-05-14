const express = require('express');
const app = express();
const port = 8888;

const fs = require('fs');

async function callBlockChain() {
    
}

app.get('/', (req, res) => {
    fs.readFile('ERC20.dapp', function(err, data) {

        let contract = '';
        data = cleanDom(data);

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
});

function getFunction(html, name) {
    //'<function name="totalSupply" signature="totalSupply()"/>';
}

function getNetworkTag(html) {
    const pattern = /<network>/gmi;
    html = removeEndNetwork(html);
    return html;
}

function removeNetworkTag(html) {
    html = removeBeginNetwork(html);
    html = removeEndNetwork(html);
    return html;
}

function removeBeginNetwork(html) {
    const pattern = /<network>/gmi;
    return removeTag(html, pattern);
}

function removeEndNetwork(html) {
    const pattern = /<network>/gmi;
    return removeTag(html, pattern);
}

function removeContractTag(html) {
    const pattern = /<contract>0[xX][0-9a-fA-F]+<\/contract>/gmi;
    return removeTag(html, pattern);
}

function removeTag(html, pattern) {
    return html.toString().replace(pattern, '');
}

function parseContract(html) {
    //const pattern = '/<contract>0[xX][0-9a-fA-F]+<\/contract>'
    const pattern = /<contract>0[xX][0-9a-fA-F]+<\/contract>/gmi;
    var myarray = html.match(pattern);
    return "";
}

function cleanDom(html) {
    html = removeBeginNetwork(html);
    return html;
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`));