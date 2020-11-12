const app = require('./server.js');

const port = process.env.PORT || 5000;




app.listen(port, function () {
    console.log('listening on port ' + port);
});


