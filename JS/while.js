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
// This is how you get a random number between 50 and 100
let allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
let soldCones = Math.floor(Math.random() * 5) + 1;
do {
    if (allCones <= soldCones) {
        console.log(`${allCones} cones sold...`)
        soldCones -= allCones
    } else {
        console.log(`cannot sell to you ${allCones} cones, I have only ${soldCones}...`)
        console.log(`${soldCones} cones sold...`)
        soldCones -= allCones

    }
    if (soldCones === 0) {
        console.log(`yay! you have sold all the cones`)
        break;
    }
}while (i>5)
