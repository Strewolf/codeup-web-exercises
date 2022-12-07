/**let numMultiply = 2;
let counter = 0;
while(counter < 16) {
    console.log(numMultiply);
    numMultiply *= 2;
    counter++;
}
for(let i = 0, num = 2; i < 16;i++){
    console.log(num);
    num *= 2;
}
 */
let allCones = Math.floor(Math.random() * 50) + 50;
console.log("Today you have to sell: " + allCones + " ice cream cones");
let i = allCones;

while (i > 0) {
    let r =Math.floor(Math.random() * 5) + 1;
    console.log(r + " cones sold...");
    i -= r;
    console.log(i + " cones left");
    if (i < 0) {
        console.log("cannot sell you that")
    } else if (i === 0) {
        console.log("Out of cones!");
    }
}
