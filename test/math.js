var add=function(v1,v2){

    return v1+v2;
}

var substract=function(v1,v2){

    return v1-v2;
}

console.log("math.js add");

exports.math_add = add;
exports.math_substract = substract;
exports.math_name = "math";
module.exports.math_name2 = "math2";
console.warn("==================");
console.log(module.exports);
console.warn("==================");