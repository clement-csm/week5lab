let express = require('express');
let app = express();

// setup the view engine
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

var db = [];

let bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended: false}));

var filePath = __dirname + '/views/';
app.use(express.static('img'));
app.use(express.static('css'));

app.get('/', function(req, res){
    res.render('index');
});

app.get('/newTask', function(req, res){
    res.render('newtask');
});

app.get('/listTasks', function(req, res){
    res.render('listtasks', {tasks: db});
});

app.post('/addTaskInfo', function(req, res){
    db.push(req.body);
    res.render('listtasks', {tasks: db});
});

app.listen(8080);