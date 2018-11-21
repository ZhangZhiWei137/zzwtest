var mathmodule_add = require("./math").math_add;
var mathmodule_substract= require("./math").math_substract;
var mathmodule_name = require("./math").math_name;


(function startup(){

    try {
        console.log('Hello world main log');

        console.log(mathmodule_add(2,3.3));
        console.log(mathmodule_substract(2,3.3));
        console.log(mathmodule_name);
      } catch {
        console.log("error !!!!!");
      }
})();
console.log("typeof(require)=" + typeof(require));
console.log("typeof(exports)=" + typeof(exports));
console.log("typeof(module.exports)=" + typeof(module.exports));
console.log("typeof(module)=" + typeof(module));
console.log("module.exports == exports" + exports==module.exports);
