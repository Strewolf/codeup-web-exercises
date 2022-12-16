
// Create a function, returnLongestPetName, that takes in a array of pet objects and returns a string of the longest name for a pet.

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
        name: 'Beans',
        type: 'Dog',
        age: 3
    },
    {
        name: 'Mr. Salmon',
        type: 'Fish',
        age: 1
    }
];

returnLongestPetName(pets) // returns 'Mr. Salmon'

function returnLongestPetName(pets) {
    let longestName = '';
    let longestNameLength = 0;

    pets.forEach(pet => {
        if (pet.name.length > longestNameLength) {
            longestName = pet.name;
            longestNameLength = pet.name.length;
        }
    });

    return longestName;
}

const longestName=returnLongestPetName(pets);
console.log(longestName)