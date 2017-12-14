let express = require('express')
let app = express()
let assert = require('assert')
let MongoClient = require('mongodb').MongoClient

app.use('/', express.static('app'))

app.get('/api/heroes', (request, response) => {
  response.json(
   // [
     // {
       // title: 'Thor',
       // image: '/images/thor-thumb.png',
       // description: 'Norse God of thunder and lightening. 
       // link: 'http://marvel.com/universe/Hulk_(Bruce_Banner)#axzz502Le2Ees',
       // linkText: 'More info on Thor'
     // }, 
   // ]  

  MongoClient.connect('mongodb://localhost:27017/Marvel', (connectError, db) => {
    assert.equal(null, connectError)

    var collection = db.collectio('testCollection')

    let data = collection.find() 
    data.toArray((error,result) => {
      console.log(result)
      response.json(result)
      db.close()
    })
  })
})
// )

app.set('port', process.env.PORT || process.env.VCAP_APP_PORT || 3000)




let server = app.listen(app.get('port'), function() {
  console.log(`Express is running on port ${app.get('port')}`)
})
