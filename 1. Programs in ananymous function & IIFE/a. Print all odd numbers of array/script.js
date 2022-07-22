let array = [1,2,3,4,5,6,7,8,9,10];

let arr =  function (x) {

    let odd = array.filter(function (x) { return    x % 2 !=0; });

    for (let i = 0; i < odd.length; i++) {
        console.log(odd[i]);
    }
    
};

    arr(array);

    (function(x) {

        let odd = array.filter(function (x) { return    x % 2 !=0; });
    
        for (let i = 0; i < odd.length; i++) {
            console.log(odd[i]);
        }
        
    }(array));