module.exports = function (app) {
  app.get('/test', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.send('这里是test页面')
  })
}