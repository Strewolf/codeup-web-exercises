/**while(true){
    let userNum = prompt("ENTER AN ODD NUMBER BETWEEN 1 AND 50");
    userNum= parseFloat(userNum);
    if(userNum % 2==1 && userNum <= 50 && userNum >=1){
    for(let i=1;1<=50;i+=2){
        if(i === userNum){
            continue;

        }else{
            console.log(`here is an odd number: ${i}`)
        }
        break;
    }}
}
 */