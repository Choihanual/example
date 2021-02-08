var express = require('express');
var router = express.Router();
const db = require('../db/db').promise();


// router.get('/', function(req ,res) {
//   fs.readFile('./static/index.html', function(err, data) {
//     if(err) {
//       res.send('에러')
//     } else {
//       res.writeHead(200, {'Content-Type':'text/html'})
//       res.write(data)
//       res.end()
//     }
//   })
// })
/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    let name = req.query.name
        .catch((err) => console.log(err));


    console.log(name);

    let result1 = await db.query('SELECT student_id FROM studentid WHERE student_name=?', [name])
        .catch((err) => console.log(err));
    console.log(result1[0][0].student_id);

    // console.log(result1[0])
    // console.log("hi")
    res.send(result1[0][0].student_id)
        .catch((err) => console.log(err));
  } catch(err) {
    console.log("err: " + err);
  }


});

// router.post('/', async function(req,res) {
//   name = req.body.name;
//   let result1 = await db.query('SELECT student_id FROM studentid WHERE student_name=?',[name])
//       .catch((err)=>console.log(err));
//
//   res.send(result1[0][0].student_id);
//   res.render('index', { title: result1[0][0].student_id });
//
// });



module.exports = router;
