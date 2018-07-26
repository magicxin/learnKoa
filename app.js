const Koa = require('koa')
const app = new Koa()
const path = require('path')
const mongoose = require('mongoose')
const port = process.env.port || 8081

mongoose.connect("mongodb://localhost:27017/magic", {useNewUrlParser:true}, function(err){
　　if(err){
　　　　console.log('Connection Error:' + err)

　　}else{
　　　　console.log('Connection success!') }
})

app.use(async ctx => {
  ctx.body = 'Hello World'
});

app.listen(port)
console.info('server started on port: ', port)
