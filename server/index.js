const mysql   = require('mysql');
const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
var bodyParser = require('body-parser');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'tdy',
  password : '666666',
  database : 'enn'
});

connection.connect();
// 创建 application/x-www-form-urlencoded 编码解析
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const host = process.env.HOST || '127.0.0.1'
// const port = process.env.PORT || 3000
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3000

app.set('port', port)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')


app.post('/login', function (req, res) {

  res.writeHead(200, {'Content-Type':'text/plain;charset=utf-8'})
  var sql = `select * from user where name= "${req.body.name}" and password=${req.body.password}`;
  connection.query(sql, function (err, result, fields) {
    if(err){
      console.log('[SELECT ERROR] - ',err.message);
      return;
    }
    // 输出 JSON 格式
    var response_success = {
      "name":req.body.name,
      "password":req.body.password,
      "success":true,
      "message":''
    };
    var response_fail = {
      "success":false,
      "message":'用户名或密码不匹配！'
    };
    if (result.length === 0) {
      res.end(JSON.stringify(response_fail));
    } else {
      res.end(JSON.stringify(response_success));
    }
  });
})

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
