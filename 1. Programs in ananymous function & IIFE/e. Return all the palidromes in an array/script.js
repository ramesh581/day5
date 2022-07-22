let array = ["rotator","hello","then","deed","peep"];

let result = array.filter(function (value) {

    if(value == value.split("").reverse().join("")) {
    return value;
    }
});

console.log(result);

(function (arr) {

    let result = array.filter(function (value) {

    if(value == value.split("").reverse().join("")) 
    return value;
})
console.log(result)}(array));

