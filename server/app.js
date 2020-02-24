import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import getModels from './models';

import indexRouter from './routes/index';
import usersRouter from './routes/users';

var app = express();

getModels().then((models) => {
  if (!models) {
    console.log('Could not connect to database');
    return;
  }
  // Sync Database
  models.sequelize.sync().then(() => {
    console.log('Nice! Database looks fine');
    // uncomment after placing your favicon in /public
    //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
      extended: false
    }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, "../public")));
    app.use(morgan('dev'));
    app.use('/api', indexRouter);
  }).catch((err) => {
    console.log(err, 'Something went wrong with the Database Update!');
  });
});

export default app;
