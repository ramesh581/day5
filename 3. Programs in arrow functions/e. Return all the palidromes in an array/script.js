let array = ["rotator","hello","then","deed","peep"];

let result = array.filter( (value)=> {

    if(value == value.split("").reverse().join("")) {
    return value;
    }
});

console.log(result);

