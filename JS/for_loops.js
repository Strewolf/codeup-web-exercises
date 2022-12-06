


function showMultiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        let result= i * number
        console.log (`${number} * ${i} = ${result}`)
    }
}
 showMultiplicationTable(7)


 let count=0
 for (let i = 0; i < 10; i++){
    let max = 200
     let min = 20
     for (let j=0; j<=Math.floor(Math.random()*(max - min));j++) count++;
          if(count % 2 == 0){
         console.log(`${count}  "is even"`)
     } else{
         console.log(`${count} "is odd"`)
     }
 }

 function makePyramid(){
     let row = 10
     let output = ''
     for(let i = 1; i<row;i++){
         for (let j = 1; j<=i;j++){
             output +=i;
         }
         console.log(output);output=''
     }
 }

for(let i=100; i >= 0 ; i -=5){
    console.log(i)
}






