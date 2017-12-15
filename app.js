var chalk = require('chalk');
var exphbs  = require('express-handlebars');
var expressServer = require('express');
var openBrowser = require('./tools/openBrowser');

var isDev = process.env.NODE_ENV === 'development';
var app = expressServer();

app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    layoutsDir: './views/layouts',
    partialsDir: './views'
}));
app.set('view engine', 'handlebars');

var title = 'Words To Song - Jacob Kim Johnson\'s Porfolio';

app.get('/', function (req, res) {
    res.render('home', { title: title });
});

app.get('/sl-process', function (req, res) {
    res.render('sl-process', { title: title + ' | Speak Louder Process' });
});

app.get('/werdzahn-process', function (req, res) {
    res.render('werdzahn-process', { title: title + ' | Werdzahn Process' });
});

app.get('/wts-process', function (req, res) {
    res.render('wts-process', { title: title + ' | Words to Song Process' });
});

app.use(expressServer.static('public'));

var defaultPort = 8081;

var port = process.env.PORT || defaultPort;
app.listen(port, function() {
    console.log(chalk.blue('server is listening on port ' + port));

    if (isDev) {
        var browserSync = require('browser-sync');
        var bsPort = port + 1;
        browserSync({
            files: ['public/**/*.{html,js,css}', 'views/**/*.handlebars'],
            online: false,
            open: false,
            port: bsPort,
            proxy: 'localhost:' + port,
            ui: false
        });
        openBrowser(bsPort);
    }
});