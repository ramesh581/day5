let array = [1,2,3,4,5,6,7,8,9,10,11,12];

let result = array.filter(function (value) {

    for (let i = 2; i < value; i++) {
        if (value % i == 0) {
        return false;
        }
    }
    return value>1;
});

console.log(result);

(function (arr) {

    let result = array.filter(function (value) {

    for (let i = 2; i < value; i++) {
        if (value % i == 0) {
        return false;
        }
    }
    return value>1;
})
console.log(result)}(array));

