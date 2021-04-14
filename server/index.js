const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('你好')
})


// app.all("*", function (req, res, next) {
//   //设置允许跨域的域名，*代表允许任意域名跨域
//   res.header("Access-Control-Allow-Origin", "*");
//   //允许的header类型
//   res.header("Access-Control-Allow-Headers", "Content-Type");
//   //跨域允许的请求方式
//   res.header("Access-Control-Allow-Methods", "*");
//   // if (req.method.toLowerCase() == 'options')
//   //   res.send(200);  //让options尝试请求快速结束
//   // else
//     next();
// });

// 导入路由文件
require('./router/index')(app);

// 404页面
app.use(function (req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
})
// 出现错误处理
app.use(function (req, res, next) {
  res.status = (err.status || 500);
  res.send(err.message)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})