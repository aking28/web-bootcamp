let program = require('commander'); 
let Marvel = require('./marvel')

program
  .command('avengers')
  .action(() => {
    console.log('avengers')
    let marvel = Marvel()
    marvel.getAvengers()
}) 
program.parse(process.argv)


program
  .command('thor')
  .acton(() => {
    console.log('thor')
    let marvel = Marvel()
    marvel.getAvengers()
})

program.parse(process.argv)

if(!program.args.length) {
  program.help()
}


