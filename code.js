/*THE NAGATE ARRAY OF NUMBERS 
 Given an array of numbers, negate all elements contained within.
 -Negating a positive value -+n will return -n, because all +'s
  are removed
-Negating a negative value --n will return n, because firdt - turns the second
minus into  a+
Expected result:
nagate ([1,2, 3,4 ]) -> [-1, -2, -3 -4]
nagate([]) ->[]
nagate([-1,2, -3, 4]) -> [1, -2, 3, 4]
*/

const negate=(arr)=>{
    arr_negated=[]
    arr.forEach(element => {
        arr_negated.push(element*-1)
    });
    return arr_negated
}

var arr = [1,2, 3,4 ]
console.log(negate(arr))