// Create a function, findAverageDogAge, that takes in a array of pet objects with age properties and returns the average age of a dog.

    const pets = [
    {
        name: 'Sparky',
        type: 'Fish',
        age: 4
    },
    {
        name: 'Mr. Pig',
        type: 'Cat',
        age: 4
    },
    {
        name: 'Bubba',
        type: 'Dog',
        age: 5
    },
    {
        name: 'Pickles',
        type: 'Dog',
        age: 10
    }

];

// findAverageDogAge(pets) // returns 7.5
function findAverageDogAge() {
    let total = 0
    let dogCount = 0
    pets.forEach(function(pet){
        if (pet.type === "dog") {
            total += pet.age
            dogCount++;
        }
    })
    return total / dogCount
}
    console.log(findAverageDogAge(pets),7.5)
