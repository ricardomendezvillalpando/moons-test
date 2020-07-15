var app = require('express')();
var http = require('http').createServer(app);
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cors = require('cors');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

app.post('/message', (req, res) => {
  console.log('Got message:', req.body.message);
  req.body.message["date"]= new Date();
  res.json(req.body.message);
});


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// SOCKET IO
const options = {secure: false};
const io = require('socket.io')(http);

io.on('connection', socket => { 
  console.log('Connected user');  

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('userSendMessage', (msg) => {    
    io.emit('updateConversation', msg);
  });

  socket.on('updateName', (objName) => {    
    io.emit('updateConversationName', objName);
  });

  socket.on('userTyping', (user) => {   
    console.log('userTyping') 
    io.emit('userTyping', user);
  });

});

module.exports = app;
