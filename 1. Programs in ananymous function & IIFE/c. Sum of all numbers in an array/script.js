let array = [15,36,59,64,62,94];

let result = function(arr) {

    let sum =0;

    for(let i = 0; i < arr.length; i++){
        
        sum+=arr[i];

    }
    console.log(sum);
};

result(array);

(function(arr) {

    let sum =0;

    for(let i = 0; i < arr.length; i++){
        
        sum+=arr[i];

    }
    console.log(sum);
}(array));