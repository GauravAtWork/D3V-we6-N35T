// Question 1 -

function isArray(e) {
    return Array.isArray(e);
  }
  // console.log(isArray("w3resource"));
  // console.log(isArray([1, 2, 4, 0]));

  // Question 2

function arrayClone(arr) {
   return arr.slice(0);
  }
  // console.log(arrayClone([1, 2, 4, 0]));
  // console.log(arrayClone([1, 2, [4, 0]]));

  // Question 3
  function first(arr, n = 1) {
    if (arr < 0) {
      return [];
    }
    return arr.slice(0, n);
  }
  
  // console.log(first([7, 9, 0, -2]));
  // console.log(first([], 3));
  // console.log(first([7, 9, 0, -2], 3));
  // console.log(first([7, 9, 0, -2], 6));
  // console.log(first([7, 9, 0, -2], -3));

  // Question 4
  
  myColor = ["Red", "Green", "White", "Black"];
  // console.log(myColor.join());
  // console.log(myColor.join());
  // console.log(myColor.join("+"));

  // Question 5

 var arr=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
 var mf = 1;
 var m = 0;
 var item;
 for (var i=0; i<arr.length; i++)
{
    for (var j=i; j<arr.length; j++)
        {
            if (arr[i] == arr[j])
             m++;
            if (mf<m)
            {
                mf=m; 
                item = arr[i];
            }
    }
    m=0;
}
console.log(item+" ( " +mf +" times ) ") ;