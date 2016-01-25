var util = require('util')
var chalk = require('chalk')
var pick = [chalk.green, chalk.magenta, chalk.blue]
var idx = 0
function l(title, obj) {
   var i = idx++ % pick.length
   if (typeof title !== 'undefined') {
      console.log(pick[i].bold.underline(`${title}`))
   }
   if (typeof obj !== 'undefined') {
      if (typeof obj === 'boolean' || typeof obj === 'object') {
         console.log(pick[i](util.inspect(obj,{showHidden:true,depth:null})))
      } else {
         // util.inspect will not interpret \n in strings
         // so just use console.log directly
         console.log(pick[i](obj))
      }
   }

   // For printing properties of an object -- not usually needed b/c util.inspect does same thing
   // However, you could use just for printing select properties and not the entire object
   /*
   const props = Array.prototype.slice.call(arguments, 2)

   if (props.length) {
      var str = ''
      props.forEach(prop => {
         str += `[${prop}: ${obj[prop]}]`
      })
      console.log(chalk.gray(str))
   }
   */
}
l.i = function(str) {
   console.info(chalk.blue(str))
}
l.e = function(str) {
   console.error(chalk.red(str))
}
l.w = function(str) {
   console.warn(chalk.yellow(str))
}

module.exports = l