const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
 
server.use(router)
server.listen(process.env.PORT || 3002, () => {
  console.log('JSON Server is running')
})