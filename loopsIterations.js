// level {2}
function myFun(num){
    let n1 = 1, n2 = 1, nextTerm;
    let b=[]
    for (let i = 1; i <= num; i++) {
       b.push(n1)
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    console.log(b)
    let sum = b.reduce((c,d)=>{
    return c+d
    })
    console.log(sum)
    }
    myFun(5)
