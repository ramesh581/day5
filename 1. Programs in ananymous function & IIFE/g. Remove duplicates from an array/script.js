

let array = [1,6,3,8,6,4,2,1,9,6,4,5,3];



let new_array = array.filter((c, index) => {
    return array.indexOf(c) === index;
});

console.log(new_array);

(function (arr){
let new_array = arr.filter((c, index) => {
    return arr.indexOf(c) === index;
});
console.log(new_array)}(array));