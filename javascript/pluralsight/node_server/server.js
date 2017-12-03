var http = require('http');
var formidable = require('formidable');
var util = require('util');

var server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type');

    if (req.method.toLocaleLowerCase() === 'post') {
        processForm(req, res);
        return;
    }

    if (req.method.toLocaleLowerCase() === 'get') {
        var data = {
            data: {
                languages: [
                    'English',
                    'Spanish',
                    'Japa',
                    'Portuguese',
                    'German',
                    'Other'
                ]
            }
        }

        var responseData = JSON.stringify(data);
        res.end(responseData);
        console.log('get', responseData);
        return;
    }
    res.end();
});

function processForm(req, res) {
    var form = new formidable.IncomingForm();

    form.parse(req, (err, fields) => {
        res.writeHead(200, {
            'content-type': 'text/plain'
        });

        var data = JSON.stringify({
            fields: fields
        })

        res.end(data);

        console.log('posted fields: \n');
        console.log(data);
    });
}

var port = 3100;
server.listen(port);
console.log('Server listening on port' + port);

