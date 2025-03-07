const express = require('express')
const path = require("path");
const app = express()

const port = process.env.PORT || 3000;
app.set('view engine', 'ejs');

// #############################################################################
// Logs all request paths and method
app.use(function (req, res, next) {
  res.set('x-timestamp', Date.now())
  res.set('x-powered-by', 'cyclic.sh')
  console.log(`[${new Date().toISOString()}] ${req.ip} ${req.method} ${req.path}`);
  next();
});

// #############################################################################
// This configures static hosting for files in /public that have the extensions
// listed in the array.
var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html','css','js','ico','jpg','jpeg','png','svg'],
  index: ['index.html'],
  maxAge: '1m',
  redirect: false
}
app.use('/public', express.static(path.join(__dirname, 'public')));

// #############################################################################
// Catch all handler for all other request.
// app.use('*', (req,res) => {
//   res.json({
//       at: new Date().toISOString(),
//       method: req.method,
//       hostname: req.hostname,
//       ip: req.ip,
//       query: req.query,
//       headers: req.headers,
//       cookies: req.cookies,
//       params: req.params
//     })
//     .end()
// })

app.get('/test', (req,res) => {
  res.render('home.ejs', { jobCategories: 'aJobCategories', assetLink: '/public' });
})

app.get('/', (req,res) => {
  res.render('home.ejs', { jobCategories: 'aJobCategories', assetLink: '/public' });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
