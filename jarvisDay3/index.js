
let program = require('commander')
let Marvel  = require('./marvel')

program
  .command('avengers')
  .action(() =>  {
    console.log('avengers')
   let marvel = Marvel()
   marvel.getAvengers() 
})

program
    .command('thor')
    .action(() => {
      conslole.log('thor')
     let marvel = Marvel()
     marvel.getThor()
})

program.parse(prcess.argv)

if(!program.args.length) {
  program.help()
}

module.export = Marvel


 
