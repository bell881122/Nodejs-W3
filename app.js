var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./connections');

var indexRouter = require('./routes/index');
var postsRouter = require('./routes/posts');
var postRouter = require('./routes/post');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/posts', postsRouter);
app.use('/post', postRouter);

app.use(function (req, res, next) {
    res.status(404).json({
        status: 'error',
        message: "無此路由資訊",
    });
});

module.exports = app;