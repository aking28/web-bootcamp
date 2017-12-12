let api = require('marvel-api')
let MongoClient = require('mongodb').MongoClient

class Marvel {
  constructor() {
    this.marvel = api.createClient({
   publicKey: '22e6228e29ad372f558b4d6c2bd1fab9',
   privateKey: '80873a49b6da7d22bfe5e5d7b8aef2929d5f4859'
    })
    this.url = 'mongodb://localhost:27017/Marvel'
  }

  getData(callback) {
    let obj = {}
    let arr = []

    this.marvel.characters.findAll().then((heroes) => {
      heroes['data'].forEach((hero,index) => {
        obj = {
          name: hero.name,
          description: hero.description,
          image: `${hero.thumbnail.path}.${hero.thumbnail.extension}`
        }

        hero.urls.forEach((urlItem) => { 
          if(urlItem.type === 'detail') {
            obj.link = urlItem.url
          }
        })

        arr.push(obj)
      })
      callback(arr)

    })
    .fail(console.error)
    .done

    return arr

  }

  insertDocuments(docs) {
    MongoClient.connect(this.url, (err,db) => {
      if(!err) {
        let collection = db.collection('testCollection')
        collection.insertMany(docs, (err,result) => {
          console.log(result)
        })
        db.close()
      }
      else {
        console.log(err)
       }
 
    }) 
 }

}

module.export = Marvel
