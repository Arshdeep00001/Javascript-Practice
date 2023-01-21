// var counter=0
// var add = ()=> {
    
//     counter += 1
// }
// add()
// add()
// add()
// add()
// console.log(counter)

// var myFunc = () =>{
//     a=7
//     return a*a
// }
// console.log(myFunc())

function wonderfulFunction(){
    let count=1
    function counter(){
        count++
        console.log(count)
    }
    
    setInterval(counter, 1000)
    
}
count=5
wonderfulFunction()