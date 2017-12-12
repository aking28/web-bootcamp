let api = require('marvel-api')

let marvel = api.createClient({
 publicKey:'22e6228e29ad372f558b4d6c2bd1fab9',
 privateKey:'80873a49b6da7d22bfe5e5d7b8aef2929d5f4859'
  })

class Marvel {
	constructor(){
}
getAvengers() {
marvel.characters.findAll(50)
  .then(data) => {
    console.log(JSON.stringify(data, null, 2))
    })
  .fail(console.error)
  .done();
  
 getThor() {
   marvel.characters.findByName('thor')
   .then((data) => {
   console.log(JSON.stringify(data, null, 2))
  })
  .fail(console.error)
  .done();
 }
}

module.export =  Marvel
