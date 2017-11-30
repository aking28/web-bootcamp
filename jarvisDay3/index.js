let program = require('commander')
let api = require('marvel-api')

let marvel = api.createClient({
 publicKey:'22e6228e29ad372f558b4d6c2bd1fab9',
 privateKey:'80873a49b6da7d22bfe5e5d7b8aef2929d5f4859'
  })
program
  .command('avengers')
  .action(() =>  {
    console.log('avengers')
    marvel.creators.findAll()
  .then(console.log)
  .fail(console.error)
  .done();
})

program.parse(process.argv)

if(!program.args.length) { 
	program.help()
} 
