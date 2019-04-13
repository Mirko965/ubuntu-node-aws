const express = require('express')
const app = express()

/*app.get('/',(req,res) => {
  res.send('Hello from ubuntu-node-aws')
})*/
app.use(express.static('public'))

app.listen(3000,() => {
  console.log('server listen on port 3000')
})
