var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);








// async function login(clientAddress) {
//   let result1 = await db.query(`SELECT student_id FROM studentid WHERE student_name=?`, [clientAddress])
//       .catch((err)=>console.log(err));
//   if (result1[0].length == 0) {
//     let result2 = await db.query('INSERT INTO users(address) VALUES(?) ', [clientAddress])
//         .catch((err)=>console.log(err));
//
//     return result2[0].insertId;
//   } else {
//     if( result1[0][0].day_attendance == 0)//
//     {
//       let weekly = result1[0][0].weekly_attendance;
//       if(weekly < 7)
//         console.log("error weekly < 7", weekly);
//       weekly++;
//
//       let monthly = result1[0][0].monthly_attendance;//이번달이 몇인지 하루하루 초기화 될때 보상을 받는다.
//       if(monthly < 31)
//         console.log("error monthly < 31", monthly);
//       monthly++;
//
//       let total = result1[0][0].total_attendance; total++;
//
//       await db.query( `update  users set login_date = NOW(), day_attendance = 1, weekly_attendance = ?, monthly_attendance = ?, total_attendance = ? where id=?`,
//           [weekly_attendance, monthly_attendance, total_attendance, result1[0][0].id]);//하루에 처음접속했을때
//     }
//     else
//       await db.query( `update  users set login_date = NOW() where id=?`, [result1[0][0].id]);//하루에 처음이 아닐때
//
//     return result1[0][0].id;
//   }
// }

app.all('/*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, content-type");
  next();
});

module.exports = app;
