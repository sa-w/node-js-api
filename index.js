const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

var routes = require('./api/routes/routes');
app.use(routes, function(req, res, next){
    next();
});

app.listen(port,() => {
    console.log(`App listening at ${port}!`);
});
